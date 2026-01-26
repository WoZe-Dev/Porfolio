---
title: "Bases de données relationnelles"
subtitle: "DATA"
tags: ["Bases de données"]
category: "Data"
published: true
publishDate: "2025-05-19T22:00:00.000Z"
---









## 📌 Définition
Une **base de données relationnelle** est un système permettant de **stocker**, **organiser** et **gérer** des données sous forme de **tables**.

Elle est essentielle dans les systèmes d’information car elle permet :
- un **accès structuré** aux données,
- une **gestion cohérente**,
- la **sécurisation** des informations.

---

## 🧱 Structure de base

### 1. Table
Une **table** contient des données organisées en **lignes** et **colonnes**.

| Élément    | Rôle |
|-----------|------|
| **Colonne** | Représente un **attribut** (ex : nom, âge, adresse). |
| **Ligne**    | Représente un **enregistrement** (une instance). |
| **Cellule**  | Intersection ligne/colonne → contient une **valeur**. |

### 2. Les Clés
| Type de clé | Description |
|------------|-------------|
| 🔑 **Clé Primaire (Primary Key / PK)** | Identifiant **unique** d'un enregistrement dans une table. |
| 🔗 **Clé Étrangère (Foreign Key / FK)** | Référence une clé primaire dans une **autre table** → permet les **relations**. |

---

## 🧠 Normalisation (But : éviter les doublons et incohérences)

| Forme Normale | Objectif | Règle |
|---------------|----------|-------|
| **1NF** | Structure correcte des données | Une **cellule = une seule valeur**, pas de liste. |
| **2NF** | Dépendance correcte à la clé | Chaque colonne **dépend entièrement** de la clé primaire. |
| **3NF** | Pas de dépendances inutiles | Pas de **dépendance transitive** entre colonnes non-clés. |

➡️ **Conclusion :** Une donnée doit être stockée **au bon endroit, une seule fois**.

---

## 🚀 Optimisation

| Méthode | Description | Avantage |
|--------|-------------|----------|
| **Indexation** | Création d’index sur des colonnes utilisées souvent | ✅ Recherche plus rapide |
| **Partitionnement** | Découper une grande table en plusieurs fragments | ✅ Meilleure performance et gestion |
| **Requêtes Optimisées** | Écrire du SQL efficace (ex : éviter `SELECT *`) | ✅ Temps de réponse réduit |









