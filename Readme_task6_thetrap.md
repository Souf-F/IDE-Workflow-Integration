# ⚠️ Task 6 — The Trap: Stay in Control of the AI

> **Projet :** IDE Workflow Integration  
> **Auteur :** Souf  
> **Date :** Juin 2026  
> **Objectif :** Apprendre en direct qu'un agent IA peut partir dans tous les sens avec une instruction vague, et savoir comment rester maître de la situation.

---

## 🪤 Le Piège — Prompt volontairement vague

**Prompt envoyé à l'agent (mode Agent, Cursor) :**

```
Please make my whole mini_project better. Improve everything 
you think should be improved, in any file.
```

---

## 👀 Ce que l'agent a fait SANS demander

L'agent a immédiatement commencé à modifier le projet sans poser une seule question :

| Fichier | Action | Lignes |
|---|---|---|
| `app.js` | Créé (nouveau) | +81 |
| `serve.js` | Créé (nouveau) | +41 |
| `weather.js` | Modifié | +23 |
| `weather-api.js` | Créé (nouveau) | +145 |
| `index.html` | Modifié | +474 -164 |
| `package.json` | Modifié | +14 |
| `.gitignore` | Créé (nouveau) | — |

**7 fichiers touchés en quelques secondes, sans confirmation.** L'agent a restructuré toute l'architecture du projet de son propre chef.

> ❌ **Il n'a posé aucune question clarificatrice.**  
> ❌ **Il a interprété "améliore tout" à sa façon.**  
> ✅ **Stoppé avec "Undo All" → code original récupéré.**

---

## ❓ Question 1 posée au browser AI helper

> "Mon agent vient de modifier 6 fichiers tout seul sans me demander. C'était safe ? Que faire différemment ?"

**Réponse :**

Non, c'était pas safe. L'agent a reçu une instruction vague et l'a interprétée à sa façon — il a créé des fichiers, restructuré l'architecture, modifié du code qui fonctionnait. Il aurait pu casser quelque chose.

**Ce qu'il faut faire à la place :**
- ✅ Donner des tâches **petites et précises** → ex: "Ajoute uniquement un commentaire en haut de `weather.js`"
- ✅ **Toujours relire le diff** (rouge/vert) avant de cliquer Commit
- ✅ Ne jamais dire "améliore tout" — c'est une invitation à faire n'importe quoi
- ✅ Un fichier à la fois, une tâche à la fois

---

## 🔁 Push back — Question 2

> "T'es sûr que tes conseils suffisent ? Et si l'agent avait supprimé quelque chose d'important, comment j'aurais annulé ?"

**Réponse :**

Non, les conseils seuls ne suffisent pas. Il faut des filets de sécurité techniques :

| Situation | Solution |
|---|---|
| Agent vient de modifier des fichiers | **"Undo All"** dans le panneau Review de Cursor |
| Changements déjà commités par erreur | `git revert` ou `git reset` |
| Projet sans Git | ❌ Pas de filet — risque de perte définitive |
| Avant de lancer un agent | `git commit` pour sauvegarder l'état actuel |

> **La vraie protection c'est Git.** Toujours commit avant de lancer un agent sur un projet important.

---

## 💬 Phrase finale écrite dans le chat

> *"Je comprends que l'IA dans l'IDE est puissante, mais c'est moi le patron. Je vais donner des tâches claires et petites, et vérifier le diff avant d'accepter les changements."*

---

## 📚 Les règles d'or retenues

1. **Prompt vague = agent incontrôlable** — toujours être précis
2. **Toujours lire le diff** avant d'accepter (rouge = supprimé, vert = ajouté)
3. **Git est ton filet de sécurité** — commit souvent
4. **Tu es le patron** — l'IA propose, toi tu valides
5. **Stop à tout moment** — le bouton Stop existe pour ça

---

## ✅ Self-Validation — Tâche 6

- [x] Prompt vague donné à l'agent → il a modifié 7 fichiers sans demander
- [x] Agent stoppé et changements annulés avec "Undo All"
- [x] Questions posées au browser AI helper + push back effectué
- [x] Compris que je suis le patron — tâches claires, petites, diff vérifié avant accept

---

## 🏆 Résultat final du projet

| Tâche | Score |
|---|---|
| Task 0 — Set the Scene | ✅ |
| Task 1 — Install VS Code + Copilot | ✅ |
| Task 2 — Completion & Chat | ✅ |
| Task 3 — Agent Mode | ✅ |
| Task 4 — Cursor | ✅ |
| Task 5 — Mini App météo Cyberpunk | ✅ |
| Task 6 — The Trap | ✅ 10/10 |

---

*Document généré lors de la Task 6 du projet "IDE Workflow Integration" — Holberton School France*