# Projet : réaliser un CRUD - côté FRONT
## Prérequis
* ### Back
	* Cloner [mon repo](https://github.com/rudylps/CRUD_back)
	* Java
	* Maven
	* SGBDR MySQL
	* data.sql récupération des données
	* schema.sql pour créer la base de données et des tables
	* Modifier le fichier *src/main/resources/application.properties* en changeant les champs  
	``spring.datasource.username=``  
	``spring.datasource.password=``
* ### Front
	* Cloner [mon repo](https://github.com/rudylps/CRUD_front)
	* NodeJS
## Lancement
* Sous *Eclipse*, importer le projet back  
``Import...``  
``Existing Maven Projects`` 
Clic droit sur le fichier *src/main/java/co.simplon.Application.java*  
``Run As``  
``Spring Boot App``  
* Sous *Visual Studio Code*, importer le projet front  
``Ouvrir le dossier`` 
Dans le terminal, inscrire  
``npm install``  
``npm install @angular/cli @lastest``  
``ng serve``
* Sous un navigateur web de votre choix, inscrire l'adresse  
[localhost://4200](http://localhost:4200/)
