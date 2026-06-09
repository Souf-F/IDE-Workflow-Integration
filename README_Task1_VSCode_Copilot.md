# IDE Workflow Integration — Task 1 : Install VS Code + a Free AI Add-on

> **Projet :** IDE Workflow Integration  
> **Auteur :** Souf  
> **Date :** Juin 2026  
> **Objectif de la tâche :** Installer VS Code et un add-on IA gratuit, vérifier que l'IA répond.

---

## 🛠️ Ce qui a été installé

### Éditeur de code
- **VS Code** — téléchargé et installé depuis https://code.visualstudio.com

### Add-on IA choisi
- **GitHub Copilot** — l'add-on IA le plus utilisé au monde dans VS Code
- Accès obtenu gratuitement via le **GitHub Student Developer Pack** (Holberton School France)

---

## 🔑 Pourquoi GitHub Copilot et pas Codeium/Continue ?

| Critère | GitHub Copilot | Codeium | Continue.dev |
|---|---|---|---|
| **Accès étudiant** | ✅ Gratuit via GitHub Student Pack | ✅ Gratuit | ✅ Gratuit |
| **Clé API requise** | ❌ Non (connexion GitHub) | ❌ Non | ✅ Oui |
| **Qualité du modèle** | ⭐⭐⭐⭐⭐ (OpenAI Codex) | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| **Intégration VS Code** | Native, très fluide | Bonne | Bonne |

> **Choix retenu : GitHub Copilot** — accès déjà activé via Holberton School, modèle de haute qualité, zéro configuration supplémentaire.

---

## ⚙️ Étapes réalisées

### 1. Vérification de l'accès Copilot
- Compte GitHub connecté à Holberton School
- Accès GitHub Copilot vérifié sur : https://github.com/settings/copilot
- Statut : **Actif** ✅

### 2. Installation de l'extension dans VS Code
- Ouverture du panneau Extensions (`Ctrl+Shift+X`)
- Recherche : **"GitHub Copilot"**
- Clic sur **Install**
- Connexion au compte GitHub depuis VS Code → autorisée

### 3. Vérification du fonctionnement
- Ouverture d'un fichier dans VS Code
- Début de frappe → apparition des **suggestions grises** (complétion inline)
- `Tab` pour accepter une suggestion → fonctionne ✅

---

## 💡 Les 3 modes d'interaction découverts

1. **Complétion inline** — Suggestions en gris clair qui apparaissent pendant la frappe. `Tab` pour accepter, `Échap` pour ignorer.
2. **Chat latéral (Copilot Chat)** — Panneau de discussion à côté du code pour poser des questions, demander des explications, générer du code.
3. **Mode agent** — Sera exploré dans les tâches suivantes.

---

## ⚠️ Bonne pratique de sécurité

> Ne jamais coller une clé API directement dans le code. La configurer uniquement dans les paramètres de l'extension, jamais dans un fichier partagé ou poussé sur GitHub.

*(Non applicable ici car GitHub Copilot utilise une authentification GitHub, pas une clé API.)*

---

## ✅ Self-Validation — Tâche 1

- [x] VS Code installé sur l'ordinateur
- [x] Add-on IA installé : **GitHub Copilot**
- [x] Add-on connecté à un modèle fonctionnel (via compte étudiant Holberton)
- [x] Suggestions grises (complétion inline) vues dans VS Code

---

*Document généré lors de la Task 1 du projet "IDE Workflow Integration" — Holberton School France*
