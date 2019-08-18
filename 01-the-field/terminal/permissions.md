# Permissions

Type of challenge: *learning*  
Duration: *30 min*  
Team challenge: *solo*  


## Learning objectives

At the end of this challenge you should be able to:

* execute a command as *root*
* check the permissions of a file
* change the permissions of a file
* change the owner of a file
* change the group of a file


## Requirements

This briefing assumes that you know how to:

* create and read files in the terminal
* list a directory contents


## The mission

Discover four new tools to manage permissions and execute commands with
administrative rights `sudo`, `chmod`, `chown` and `chgrp`. Open your *terminal*
and *read their manuals* to understand them, then follow the instructions below.

To read the terminal's manual execute `man [command you're looking for]` in your terminal. This command will open the terminal's manual to the correct page.

A shortest way is `whatis [command you're looking for]`. It displays a little definition of the command. 

#### Instructions :
* in a directory, create a text file `permissions`
* write something funny inside
* check the owner and group of the file (use `ls`)
* change its owner to *root*
* change its group to *root*
* check that file's permission (use `ls`)
* give all rights to owner and group, but none to others
* try to print the file on screen
* print the file with root privileges

### Resources

* [file permissions](https://www.guru99.com/file-permissions.html)


## Congrats

Permissions and ownership can be tough to grasp but they allow for multiple
people to work on the same system with all their data secured.

![image](https://media.giphy.com/media/xTk9ZE94CfWTe2fzMI/giphy.gif)
