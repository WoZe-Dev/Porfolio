---
title: "Cours Algorithmique"
subtitle: "Algo"
tags: []
category: "Algorithmique"
published: true
---

## Introduction à l'Algorithmie

### 0.1 Qu'est-ce qu’un Algorithme ?

Un algorithme est un ensemble de règles logiques et chronologiques qu'on doit suivre pour résoudre un problème particulier. C'est comme une recette de cuisine précise qui, suivie étape par étape, aboutit toujours au même résultat.

**Caractéristiques essentielles d'un algorithme :**
- **Finitude** : il se termine après un nombre fini d'étapes  
- **Précision** : chaque étape est définie sans ambiguïté  
- **Entrée** : il peut recevoir des données en entrée  
- **Sortie** : il produit un résultat  
- **Efficacité** : il résout le problème en un temps raisonnable

### 0.2 L'Algorithmie dans la vie quotidienne

Nous utilisons des algorithmes tous les jours :
- Suivre un itinéraire sur GPS
- Préparer une recette de cuisine
- Lacer ses chaussures
- Trier des cartes à jouer
- Chercher un mot dans un dictionnaire

### 0.3 Le Langage de Description d'Algorithme (LDA)

Le LDA est un langage intermédiaire entre langage humain et langage de programmation.  
Il sert à :
- Se détacher d’un langage de programmation spécifique
- Se concentrer sur la logique
- Faciliter la communication
- Organiser ses idées avant de coder

### 0.4 Exemple concret : Préparation d'un gâteau

Un algorithme avec gestion des ingrédients manquants. (Code à insérer ici selon exercice.)

---

## 1. Les Structures de Données

Une structure de données permet d’organiser et stocker efficacement les données.

### Objectifs
- Efficacité des opérations (recherche, insertion, suppression)
- Stockage adapté à l’usage
- Optimisation mémoire et temps

### Structures principales
- **Pile (Stack)** : LIFO  
- **File (Queue)** : FIFO  
- **Liste chaînée**  
- **Tableau (Array)**  
- **Dictionnaire (HashMap)**  
- **Arbre binaire / de recherche**  
- **Tas (Heap)**  
- **Graphe**

---

## 2. La Pile (Stack)

**LIFO** – Le dernier élément ajouté est le premier retiré.  
**Analogie** : Pile d’assiettes.

### Opérations :
- `push` : ajouter
- `pop` : retirer
- `peek` ou `top` : lire le haut
- `isEmpty` : test de vide

### Applications :
- Annulation (`Ctrl+Z`)
- Historique de navigation
- Analyse syntaxique
- Pile d'appels

### Complexité :
- Toutes les opérations : **O(1)**

---

## 3. La File (Queue)

**FIFO** – Premier entré, premier sorti.  
**Analogie** : File d’attente.

### Opérations :
- `enqueue` : ajouter à la fin
- `dequeue` : retirer en tête
- `front` : lire la tête
- `isEmpty`

### Applications :
- Requêtes serveur
- File d’impression
- UI : gestion des événements
- Parcours BFS

### Complexité :
- **O(1)** si implémentée de façon circulaire

---

## 4. Les Listes Chaînées

### 4.1 Définition
Nœuds contenant :
- une valeur
- un ou plusieurs pointeurs

### 4.2 Types :
- Liste simplement chaînée
- Liste doublement chaînée
- Liste circulaire

### Avantages :
- Taille dynamique
- Insertion/suppression efficaces

### Inconvénients :
- Accès non direct
- Plus de mémoire utilisée
- Moins efficace en cache

### Complexité :
- Accès / Recherche : O(n)
- Insertion/Suppression début : O(1)
- Fin : O(n) ou O(1) si doublement chaînée
- Milieu : O(n)

---

## 5. Les Tableaux (Arrays)

### 5.1 Définition
Structure contiguë en mémoire.

### 5.2 Caractéristiques :
- Accès par index
- Taille fixe
- Stockage contigu

### Avantages :
- Accès direct O(1)
- Cache efficace
- Parcours rapide

### Inconvénients :
- Taille non dynamique
- Insertion/suppression coûteuse
- Réallocation

### Complexité :
- Accès : O(1)
- Recherche non triée : O(n)
- Insertion/Suppression début/milieu : O(n)
- Fin : O(1) amortie

---

## 6. Le Dictionnaire (HashMap)

### Définition
Associe des **clés** à des **valeurs** via une fonction de hachage.

### Fonctionnement
- Clé → hash → index
- Gestion des collisions : chaînage, adressage

### Avantages :
- Accès/Insertion/Suppression **O(1)** en moyenne

### Inconvénients :
- Collisions = ralentissement
- Plus de mémoire
- Pas d’ordre

### Complexité :
- Moyenne : O(1)
- Pire cas : O(n)

---

## 7. Structures Avancées

### Arbres Binaires
Chaque nœud a 0 à 2 enfants.

**Utilisation :**
- Recherche rapide
- Hiérarchies
- Compression

### Tas (Heap)
Arbre binaire partiellement ordonné.

- **Min Heap** : parents ≤ enfants
- **Max Heap** : parents ≥ enfants

**Utilisation :**
- Files de priorité
- Tri (heapsort)
- Algos : Dijkstra, Prim

### Graphes
Sommets + arêtes

**Types :**
- Orienté / non orienté
- Pondéré / non pondéré
- Cyclique / acyclique

**Applications :**
- Réseaux sociaux
- GPS
- Planification

---

## Exercices (liens Trinket.io)

- [Pile](https://trinket.io/python/0e09895d3e70?showInstructions=true)
- [File](https://trinket.io/python/743d37a6713c?showInstructions=true)
- [Parenthèses](https://trinket.io/python/b97a1943bc49?showInstructions=true)
- [Liste chaînée](https://trinket.io/python/520fe0ea6cc2?showInstructions=true)
- [Inversion tableau](https://trinket.io/python/dc3351fb8597?showInstructions=true)
- [Anagramme](https://trinket.io/python/542126a92a76?showInstructions=true)
- [Tableau](https://trinket.io/python/2d0d272f727a?showInstructions=true)
- [File de priorité](https://trinket.io/python/93945485dff2?showInstructions=true)
- [Liste doublement chaînée](https://trinket.io/python/70e2d93c3f4c?showInstructions=true)
- [Liste circulaire](https://trinket.io/python/7ac8bca62818?showInstructions=true)
- [Dictionnaires](https://trinket.io/python/50a624c9197b?showInstructions=true)

