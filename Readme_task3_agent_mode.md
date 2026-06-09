# 🤖 Task 3 — Let the AI Run a Small Errand (Agent Mode)

> **Projet :** IDE Workflow Integration  
> **Auteur :** Souf  
> **Date :** Juin 2026  
> **Objectif :** Laisser l'IA effectuer une tâche multi-étapes en autonomie, et apprendre à rester en contrôle.

---

## ⚙️ Configuration du mode Agent

**Add-on utilisé :** GitHub Copilot (via compte étudiant Holberton)  
**Mode activé :** Agent — accessible via le menu déroulant "Auto" → "Agent" dans le panneau Copilot Chat

### Comment activer le mode Agent dans Copilot
1. Ouvrir Copilot Chat
2. Cliquer sur le bouton **"Auto"** en bas du chat
3. Sélectionner **"Agent"** dans le menu déroulant
4. La zone de texte affiche "Describe what to build" → le mode agent est actif

---

## 📋 Prompt envoyé à l'agent

```
Please create a new folder called mini-agent-demo. Inside it, add:
1. A short README.md describing a dice-rolling function
2. A dice.js file that exports a function roll(sides)
3. A dice.test.js file that calls roll(6) five times and prints the results

Explain what you did after each step.
```

---

## 🔍 Ce que l'agent a fait (étape par étape)

| Étape | Action de l'agent | Confirmation requise |
|---|---|---|
| 1 | Créé un todo list de 5 étapes (plan) | ❌ Non |
| 2 | Créé le dossier `mini-agent-demo/` | ❌ Non |
| 3 | Créé `README.md`, `dice.js`, `dice.test.js` | ❌ Non |
| 4 | Demandé permission pour exécuter `node mini-agent-demo/dice.test.js` | ✅ **Oui → "Allow" cliqué** |
| 5 | Exécuté le test et affiché les résultats | ✅ Après approbation |

> **Moment clé :** L'agent a demandé confirmation avant d'exécuter une commande bash. C'est le comportement attendu en mode agent — il agit en autonomie mais demande permission pour les actions potentiellement risquées.

---

## 📁 Fichiers créés par l'agent

### `mini-agent-demo/README.md`
```markdown
# Mini Agent Demo
A simple dice-rolling utility. Use roll(sides) to get a random number between 1 and sides.
```

### `mini-agent-demo/dice.js`
```javascript
function roll(sides) {
  return Math.floor(Math.random() * sides) + 1;
}
module.exports = { roll };
```

### `mini-agent-demo/dice.test.js`
```javascript
const { roll } = require('./dice');
for (let i = 0; i < 5; i++) {
  console.log(`roll(6) -> ${roll(6)}`);
}
```

---

## 🎲 Résultats du test exécuté par l'agent

```
roll(6) -> 6
roll(6) -> 1
roll(6) -> 4
roll(6) -> 5
roll(6) -> 4
```

Todos complétés : **5/5** ✅

---

## 💡 Ce qu'on apprend sur le mode Agent

| Caractéristique | Observation |
|---|---|
| **Autonomie** | L'agent planifie et exécute plusieurs étapes sans intervention manuelle |
| **Transparence** | Il explique ce qu'il fait après chaque étape |
| **Contrôle** | Il demande confirmation avant les actions risquées (commandes bash) |
| **Résultat** | 3 fichiers créés + test exécuté en une seule instruction |

### Différence avec le Chat classique
- **Chat** → Tu poses une question, il répond, tu appliques toi-même
- **Agent** → Tu donnes un objectif, il planifie, crée les fichiers, exécute, et te rapporte

---

## ✅ Self-Validation — Tâche 3

- [x] Mode Agent activé dans Copilot Chat (menu Auto → Agent)
- [x] Prompt donné à l'agent pour créer `mini-agent-demo/`
- [x] L'agent a créé les 3 fichiers : `README.md`, `dice.js`, `dice.test.js`
- [x] L'agent a demandé confirmation avant d'exécuter la commande bash → approuvée
- [x] Les 5 résultats de `roll(6)` ont été affichés dans le terminal

---

*Document généré lors de la Task 3 du projet "IDE Workflow Integration" — Holberton School France*