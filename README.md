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
------
## Présentation
Ce projet permet d'afficher une liste de personnes (*read*), d'y ajouter des personnes (*create*), de les éditer (*update*) ou de les supprimer (*delete*).  
Ceci est une partie destinée à intégrer le projet commun PROJET FIL ROUGE pour simuler un logiciel de la police qui permet de lier des armes, véhicules, et personnes à des affaires judiciaires.
* ### Sous *Angular*
	* Gestion des __composants__  
	``add-personne``  
	``liste-personnes``  
	``personne-detail``  
	des __services__  
	``api.service.ts``  
	``personne-service.service.ts``  
	et du __module__  
	``app.module.ts``
