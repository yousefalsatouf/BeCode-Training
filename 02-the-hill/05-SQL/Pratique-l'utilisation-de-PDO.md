# Pratique et utilisation de PDO

### Etablir une connexion en PDO

La première chose à faire pour utiliser PDO est bien sûr d'établir une connexion à une base de données :
```
try {
    $strConnection = 'mysql:host=localhost;dbname=ma_base'; //Ligne 1
    $arrExtraParam= array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8");
    $pdo = new PDO($connStr, 'Utilisateur', 'Mot de passe', $arrExtraParam); // Instancie la connexion
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION); //Ligne 4
}
catch(PDOException $e) {
    $msg = 'ERREUR PDO dans ' . $e->getFile() . ' L.' . $e->getLine() . ' : ' . $e->getMessage();
    die($msg);
}
```
Il existe trois modes d'erreurs :

1. **PDO::ERRMODE_SILENT** - ne rapporte pas d'erreur (mais assignera les codes d'erreurs) ;
2. **PDO::ERRMODE_WARNING** - émet un warning ;
3. **PDO::ERRMODE_EXCEPTION** - lance une exception.

### Sans les requêtes préparées
On peut utiliser les méthodes query() et exec().
Dans la pratique :
1. vous utiliserez **query()** pour des requêtes de sélection **(SELECT)**
2. et **exec()** pour des requêtes d'insertion **(INSERT)**, de modification **(UPDATE)** ou de suppression **(DELETE)**.

**Exemple - Effectuer une query et un fetch**.
- *Version PDO*
```
$query = 'SELECT * FROM foo WHERE bar=1;';
$arr = $pdo->query($query)->fetch(); // Sur une même ligne ...
```

- *Version MySQL*
```
$query = 'SELECT * FROM foo WHERE bar=1;';
$result = mysql_query($query);
$arr = mysql_fetch_assoc($result);
```
**Exemple - Effectuer une query et un fetchAll :**
- *Version PDO*
```
$query = 'SELECT * FROM foo WHERE bar<10;';
$stmt = $pdo->query($query);
$arrAll = $stmt->fetchAll(); //... ou sur 2 lignes
```
- *Version MySQL*
```
$query = 'SELECT * FROM foo WHERE bar<10;';
$result = mysql_query($query);
$arrAll = array();
while($arr = mysql_fetch_assoc($result))
      $arrAll[] = $arr;
```
**Exemple - Effectuer un exec :**
- *Version PDO*
```
$query = 'DELETE FROM foo WHERE bar<10;';
$rowCount = $pdo->exec($query);
```

- *Version MySQL*
```
$query = 'DELETE FROM foo WHERE bar<10;';
mysql_query($query);
$rowCount = mysql_affected_rows();
```

### Avec les requêtes préparées
Nous allons maintenant voir comment effectuer des requêtes préparées avec PDO, comparativement à mysqli_ et mysql_.

**Exemple - Effectuer un prepare et un fetchAll:**
- *Version PDO*
```
// Préparer la requête
$query = 'SELECT *'
	. ' FROM foo'
	. ' WHERE id=?'
		. ' AND cat=?'
	. ' LIMIT ?;';
$prep = $pdo->prepare($query);

// Associer des valeurs aux place holders
$prep->bindValue(1, 120, PDO::PARAM_INT);
$prep->bindValue(2, 'bar', PDO::PARAM_STR);
$prep->bindValue(3, 10, PDO::PARAM_INT);

// Compiler et exécuter la requête
$prep->execute();

// Récupérer toutes les données retournées
$arrAll = $prep->fetchAll();

// Clore la requête préparée
$prep->closeCursor();
$prep = NULL;
```
- *Version MySQL*
```
// Préparer la requête
$query = 'PREPARE stmt_name'
	. ' FROM "SELECT *'
		. ' FROM foo'
		. ' WHERE id=?'
			. ' AND cat=?'
		. ' LIMIT ?";';
mysql_query($query);

// Associer des valeurs aux place holders
$query = 'SET @paramId = 120;';
mysql_query($query);
$query = 'SET @paramCat = "bar";';
mysql_query($query);
$query = 'SET @paramLimit = 10;';
mysql_query($query);

// Compiler et exécuter la requête
$query = 'EXECUTE stmt_name'
	. ' USING @paramId,'
		. ' @paramCat,'
		. ' @paramLimit;'
$result = mysql_query($query);

// Récupérer toutes les données retournées
$arrAll = array();
while($arr = mysql_fetch_assoc($result))
     $arrAll[] = $arr;

// Clore la requête préparée
$query = 'DEALLOCATE PREPARE stmt_name;';
mysql_query($query);
```
### Réutiliser une requête préparée pour gagner en performance
L'avantage initial des requêtes préparées est la réutilisation du moule de la requête.
En effet, le SGBD a déjà effectué une partie du traitement sur la requête.
Il est donc possible de ré-exécuter la requête avec de nouvelles valeurs, sans pour autant devoir reprendre le traitement du départ ; le découpage et l'interprétation ont déjà été fait !

**Réutiliser une requête préparée**
```
$query = 'INSERT INTO foo (nom, prix) VALUES (?, ?);';
$prep = $pdo->prepare($query);

$prep->bindValue(1, 'item 1', PDO::PARAM_STR);
$prep->bindValue(2, 12.99, PDO::PARAM_FLOAT);
$prep->execute();

$prep->bindValue(1, 'item 2', PDO::PARAM_STR);
$prep->bindValue(2, 7.99, PDO::PARAM_FLOAT);
$prep->execute();

$prep->bindValue(1, 'item 3', PDO::PARAM_STR);
$prep->bindValue(2, 17.94, PDO::PARAM_FLOAT);
$prep->execute();

$prep = NULL;
```

## ATTENTION
Lors de l'utilisation des requêtes préparées, vous ne pouvez associer que des valeurs et non des commandes SQL.
