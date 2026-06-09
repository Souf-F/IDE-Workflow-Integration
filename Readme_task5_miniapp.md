# ⚡ Task 5 — Generate a Tiny App with the Tool of Your Choice

> **Projet :** IDE Workflow Integration  
> **Auteur :** Souf  
> **Date :** Juin 2026  
> **Objectif :** Générer une mini app fonctionnelle from scratch avec l'IA dans l'éditeur de son choix.  
> **Éditeur choisi :** Cursor (préféré depuis la Task 4)

---

## 🎯 App choisie : Script météo Node.js + Interface Cyberpunk

**Idée de base :** Script Node.js qui affiche la météo actuelle via une API publique gratuite  
**Bonus généré :** Interface visuelle HTML style Cyberpunk avec fetch direct depuis le navigateur

---

## 🛠️ Stack technique

| Élément | Choix |
|---|---|
| **Runtime** | Node.js v26.3.0 (installé via Homebrew) |
| **API** | Open-Meteo (gratuite, sans clé API) |
| **Ville** | Toulouse (lat: 43.6047, lon: 1.4442) |
| **Fichiers créés** | `weather.js`, `package.json`, `index.html` |

---

## 📁 Fichiers du projet `mini_project_agentic/`

### `weather.js` — Script Node.js terminal
Fetche la météo depuis Open-Meteo et affiche :
- Température (°C)
- Vitesse du vent (km/h)
- Condition météo (texte)
- **Probabilité de pluie (%)** — ajoutée en bonus via un second prompt agent

### `package.json` — Config Node.js
Généré automatiquement par l'agent avec les métadonnées du projet.

### `index.html` — Interface visuelle Cyberpunk
Page web standalone avec CSS et JS intégrés, style Cyberpunk :
- Fond noir avec grid overlay et radial glows
- Palette néon : cyan, pink, yellow
- Glowing text via `text-shadow` et `box-shadow`
- Google Fonts : Orbitron (headings) + Share Tech Mono (body)
- Barre de progression animée pour la probabilité de pluie
- Loading state `// SYNCING DATA...`

---

## 🤖 Mix des 3 modes IA utilisés

| Mode | Utilisation dans ce projet |
|---|---|
| **Agent** | Génération initiale des 2 fichiers (`weather.js` + `package.json`) en une seule instruction |
| **Agent** | Ajout de la probabilité de pluie sur `weather.js` |
| **Agent** | Génération de `index.html` style Cyberpunk |
| **Chat** | Debug de l'erreur `Cannot find module` |
| **Completion** | Suggestions inline pendant les modifications mineures |

---

## 🖥️ Résultat terminal

```bash
$ node weather.js
Current weather in Toulouse
Temperature: 16.2°C
Windspeed: 10.5 km/h
Condition: Overcast
Rain probability: 0%
```

---

## 🌆 Interface Cyberpunk

Ouverte dans le navigateur avec :
```bash
open index.html
```

**Design :**
- Fond noir avec grille cyberpunk
- Titre "Toulouse" en neon yellow (font Orbitron)
- Données météo en cyan et pink néon
- Bordures avec glow pulsant
- Barre de progression animée pour la pluie
- Fetch direct depuis l'API Open-Meteo dans le navigateur

---

## ⚙️ Installation Node.js (étapes réalisées)

```bash
# Installation de Homebrew
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Ajout au PATH
echo >> /Users/soufianefilali/.zprofile
echo 'eval "$(/opt/homebrew/bin/brew shellenv zsh)"' >> /Users/soufianefilali/.zprofile
eval "$(/opt/homebrew/bin/brew shellenv zsh)"

# Installation de Node
brew install node

# Lancement du script
cd ~/Desktop/mini_project_agentic
node weather.js
```

---

## ✅ Self-Validation — Tâche 5

- [x] App choisie : script Node.js météo (Open-Meteo API)
- [x] Mini projet généré dans Cursor avec l'agent
- [x] `weather.js` tourne sans erreur et affiche la météo réelle
- [x] Probabilité de pluie ajoutée via un second prompt agent
- [x] Interface Cyberpunk générée (`index.html`) et ouverte dans le navigateur
- [x] Mix completion + chat + agent utilisé pendant le build

---

*Document généré lors de la Task 5 du projet "IDE Workflow Integration" — Holberton School France*