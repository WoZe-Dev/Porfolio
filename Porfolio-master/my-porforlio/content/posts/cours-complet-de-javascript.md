---
title: "Cours Complet de JavaScript"
subtitle: "JavaScript"
tags: ["#JavaScript"]
category: "JavaScript"
published: true
---






> _Un guide du débutant à avancé pour maîtriser JavaScript, le langage de script du web._


## Sommaire
<a name="sommaire"></a>

1. Introduction à JavaScript
2. Variables et Types de Données
3. Opérateurs
4. Structures de Contrôle
5. Fonctions
6. Objets et Tableaux
7. Portée et Closures
8. DOM Document Object Model
9. Événements
10. ES6+ et Syntaxe Moderne
11. Asynchrone : Callbacks, Promises, Async/Await
12. Modules JavaScript
13. Bonnes Pratiques
14. Ressources et Exercices

## 1. Introduction à JavaScript
<a name="1-introduction-a-javascript"></a>

JavaScript est un langage de programmation **interprété** côté client utilisé pour rendre les pages web interactives. Il s’exécute dans le navigateur.

```html
<script>
  console.log("Bonjour JavaScript !");
</script>
```

## 2. Variables et Types de Données
<a name="2-variables-et-types-de-donnees"></a>

```js
let nom = "Alice"; // chaîne de caractères
const age = 25; // nombre
var actif = true; // booléen
```

### Types principaux
<a name="types-principaux"></a>

- `String`
- `Number`
- `Boolean`
- `Null`
- `Undefined`
- `Object`
- `Array`

## 3. Opérateurs
<a name="3-operateurs"></a>

### Arithmétiques
<a name="arithmetiques"></a>

```js
let total = 10 + 5; // 15
```

### Logiques
<a name="logiques"></a>

```js
true && false // false
```

### Comparaison
<a name="comparaison"></a>

```js
5 === '5' // false
5 == '5'  // true
```

## 4. Structures de Contrôle
<a name="4-structures-de-controle"></a>

### Conditions
<a name="conditions"></a>

```js
if (age > 18) {
  console.log("Majeur");
} else {
  console.log("Mineur");
}
```

### Boucles
<a name="boucles"></a>

```js
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

## 5. Fonctions
<a name="5-fonctions"></a>

```js
function saluer(nom) {
  return "Bonjour " + nom;
}
```

Fonctions fléchées :

```js
const saluer = (nom) => "Bonjour " + nom;
```

## 6. Objets et Tableaux
<a name="6-objets-et-tableaux"></a>

### Objet
<a name="objet"></a>

```js
let personne = {
  nom: "Alice",
  age: 25
};
```

### Tableau
<a name="tableau"></a>

```js
let fruits = ["pomme", "banane"];
```

## 7. Portée et Closures
<a name="7-portee-et-closures"></a>

```js
function exterieur() {
  let message = "Hello";
  return function interieur() {
    console.log(message);
  };
}
```

## 8. DOM (Document Object Model)
<a name="8-dom-document-object-model"></a>

```js
document.getElementById("titre").textContent = "Nouveau titre";
```

## 9. Événements
<a name="9-evenements"></a>

```js
document.querySelector("button").addEventListener("click", () => {
  alert("Bouton cliqué !");
});
```

## 10. ES6+ et Syntaxe Moderne
<a name="10-es6-et-syntaxe-moderne"></a>

- `let`, `const`
- Fonctions fléchées
- Template strings `` `Bonjour ${nom}` ``
- Destructuration
- Spread/rest operators

## 11. Asynchrone: Callbacks, Promises, Async/Await
<a name="11-asynchrone-callbacks-promises-asyncawait"></a>

```js
// Promesse
fetch("https://api.exemple.com")
  .then(res => res.json())
  .then(data => console.log(data));

// Async/await
async function charger() {
  let res = await fetch("https://api.exemple.com");
  let data = await res.json();
  console.log(data);
}
```

## 12. Modules JavaScript
<a name="12-modules-javascript"></a>

```js
// fichier util.js
export function addition(a, b) {
  return a + b;
}

// fichier main.js
import { addition } from "./util.js";
```

## 13. Bonnes Pratiques
<a name="13-bonnes-pratiques"></a>

- Utiliser `const` et `let` (éviter `var`)
- Garder un code clair et commenté
- Respecter les conventions de nommage
- Modulariser son code
- Utiliser un linter (ex. ESLint)

## 14. Ressources et Exercices
<a name="14-ressources-et-exercices"></a>

### Ressources
<a name="ressources"></a>

- [Mozilla MDN JavaScript](https://developer.mozilla.org/fr/docs/Web/JavaScript)
- [JavaScript.info](https://javascript.info/)
- [FreeCodeCamp](https://www.freecodecamp.org/)

### Exercices
<a name="exercices"></a>

1. Écrire une fonction qui inverse une chaîne.
2. Créer un compteur cliquable en HTML + JS.
3. Manipuler un tableau pour extraire les valeurs paires.












