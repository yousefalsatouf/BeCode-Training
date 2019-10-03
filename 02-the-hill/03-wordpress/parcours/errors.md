#### Erreurs rencontrées

#### 1
```
XAMPP: Starting Apache...fail.
XAMPP:  Another web server is already running.
```

à essayer : `sudo /etc/init.d/apache2 stop` puis relancer xampp

#### 2 
```
ERROR: "/opt/lampp/bin/mysql.server: 260: kill: No such process"
```

Solution: 
`sudo service mysql stop` puis relancer XAMPP
