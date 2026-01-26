---
title: " Cours Design pattern"
subtitle: ""
tags: ["Cours"]
category: "cours"
published: true
---








## 🎯 Introduction

Les **Design Patterns** (patrons de conception) sont des solutions types à des problèmes récurrents de conception logicielle.  
Ils permettent d’améliorer la maintenabilité, la flexibilité et la réutilisabilité du code.

---

## Pourquoi utiliser des Design Patterns ?

- ✅ Standardiser la manière de résoudre certains problèmes
- ✅ Faciliter la communication entre développeurs
- ✅ Accélérer la prise de décision en phase de conception
- ✅ Améliorer la qualité du code

---

## 🧩 Classification des Design Patterns

Les design patterns sont classés en **trois grandes familles** :

---

### 1. 🏗️ Patrons de Création

#### 🔸 Singleton

> Garantit qu’une classe ne possède qu’une seule instance accessible globalement.

```javascript
class Singleton {
  constructor() {
    if (Singleton.instance) {
      return Singleton.instance;
    }
    Singleton.instance = this;
  }
}
```

**📝 Exercice** : Crée une classe `DatabaseConnection` en Singleton en JavaScript.

---

#### 🔸 Factory Method

> Délègue la création d’objet aux sous-classes.

```javascript
class Animal {
  makeSound() {}
}

class Dog extends Animal {
  makeSound() {
    return "Woof!";
  }
}

function animalFactory(type) {
  if (type === "dog") return new Dog();
}
```

**📝 Exercice** : Implémente une `ShapeFactory` qui crée des cercles, carrés ou triangles.

---

#### 🔸 Builder

> Permet de construire un objet complexe étape par étape.

```javascript
class BurgerBuilder {
  constructor() {
    this.burger = {};
  }
  addSteak() {
    this.burger.steak = true;
    return this;
  }
  addSalad() {
    this.burger.salad = true;
    return this;
  }
  build() {
    return this.burger;
  }
}
```

**📝 Exercice** : Crée un `PizzaBuilder` personnalisable.

---

### 2. 🧱 Patrons Structurels

#### 🔸 Adapter

> Adapte une interface pour qu’elle soit compatible avec une autre.

```javascript
class OldPrinter {
  print() {
    console.log("Impression...");
  }
}

class PrinterAdapter {
  constructor(oldPrinter) {
    this.oldPrinter = oldPrinter;
  }
  newPrint() {
    this.oldPrinter.print();
  }
}
```

**📝 Exercice** : Crée un adaptateur pour rendre une ancienne API compatible avec une interface moderne.

---

#### 🔸 Decorator

> Ajoute dynamiquement des fonctionnalités à un objet.

```javascript
function baseCoffee() {
  return 2;
}

function withMilk(coffee) {
  return () => coffee() + 0.5;
}
```

**📝 Exercice** : Développe une fonction de base `pizza()` et des décorateurs `fromage`, `champignons`, etc.

---

#### 🔸 Facade

> Fournit une interface simplifiée à un système complexe.

```javascript
class Engine {
  start() {
    console.log("Engine starts");
  }
}

class CarFacade {
  constructor() {
    this.engine = new Engine();
  }
  startCar() {
    this.engine.start();
  }
}
```

**📝 Exercice** : Crée une façade pour simplifier l’usage d’un système audio complexe.

---

### 3. 🔁 Patrons Comportementaux

#### 🔸 Observer

> Permet à un objet de notifier automatiquement d’autres objets de ses changements d’état.

```javascript
class Subject {
  constructor() {
    this.observers = [];
  }
  subscribe(observer) {
    this.observers.push(observer);
  }
  notify(data) {
    this.observers.forEach(obs => obs.update(data));
  }
}
```

**📝 Exercice** : Implémente un système d’abonnement à des notifications météo.

---

#### 🔸 Strategy

> Définit une famille d’algorithmes interchangeables.

```javascript
class PaymentContext {
  setStrategy(strategy) {
    this.strategy = strategy;
  }
  pay(amount) {
    this.strategy.pay(amount);
  }
}
```

**📝 Exercice** : Crée un contexte de tri avec stratégies `bubbleSort`, `quickSort`, etc.

---

#### 🔸 Command

> Transforme une action en objet. Permet de gérer des opérations planifiées, annulables, etc.

```javascript
class Light {
  turnOn() {
    console.log("Light on");
  }
}

class TurnOnCommand {
  constructor(light) {
    this.light = light;
  }
  execute() {
    this.light.turnOn();
  }
}
```

**📝 Exercice** : Implémente un gestionnaire de commandes pour un lecteur MP3 (play, pause, stop).

---

## 📚 Conseils pour bien utiliser les Design Patterns

- ✅ Comprendre le problème avant d'appliquer un pattern
- 🛑 Ne pas forcer un pattern inutilement
- ⚙️ Combiner plusieurs patterns si besoin (ex : Factory + Singleton)
- 🧠 Préférer la simplicité quand c’est possible

---

## 📘 Ressources utiles

- [Refactoring Guru](https://refactoring.guru)
- [Design Patterns in JavaScript – freeCodeCamp](https://www.youtube.com/watch?v=tv-_1er1mWI)
- Livre : *Design Patterns: Elements of Reusable Object-Oriented Software* (Gang of Four)








