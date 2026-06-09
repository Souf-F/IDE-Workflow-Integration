# 🖥️ Task 4 — Try a Second AI-IDE: Cursor

> **Projet :** IDE Workflow Integration  
> **Auteur :** Souf  
> **Date :** Juin 2026  
> **Objectif :** Tester Cursor (éditeur IA-first) et le comparer à VS Code + GitHub Copilot.

---

## ⚙️ Installation de Cursor

- **Source :** https://cursor.com
- **Plan :** Free (Hobby Plan) — aucune CB requise
- **Modèle IA intégré :** Composer 2.5 (Agent)
- **Connexion :** Compte Cursor créé et connecté

---

## 📄 Fichier testé : `Snippet.js`

Le même fichier `checkUser` utilisé en Task 2 a été recréé dans Cursor pour comparer le comportement de l'IA.

### Code original collé dans Cursor

```javascript
// snippet.js - a small function that needs cleanup
function checkUser(u) {
  if (u.age > 18) {
    if (u.subscribed == true) {
      if (u.country != "FR") {
        return true;
      } else {
        return false;
      }
    }
  }
  return false;
}
```

---

## 💬 Chat Cursor — Prompt envoyé

```
Please rewrite checkUser so that it is easier for a beginner to read, 
without changing what it does. Explain your changes in plain English.
```

**Raccourci utilisé :** `Cmd+L` pour ouvrir le chat

---

## 🔄 Résultat — Code réécrit par Cursor

```javascript
// snippet.js - a small function that needs cleanup
function checkUser(user) {
  if (user.age <= 18) {
    return false;
  }

  if (user.subscribed != true) {
    return false;
  }

  if (user.country == "FR") {
    return false;
  }

  return true;
}
```

### Explication de Cursor (What changed and why)

1. **Renamed `u` to `user`** — Single-letter names are fine once you're used to them, but `user` makes it obvious what the argument represents.
2. **Replaced nested `if` blocks with early returns** — The original had three `if` statements inside each other. Now each rule is checked on its own: if a rule fails, the function stops and returns `false` right away. If none fail, it returns `true` at the end.
3. **Wrote each check as a "failure" condition** — Instead of "if good, then if good, then if good, return true", each step asks "did this person fail this rule?" That matches how you'd explain it in words: "Too young? No. Not subscribed? No. From France? No. Then they pass."
4. **Kept the same comparisons** — `!= true` and `== "FR"` are still loose equality, same as before.

---

## 🆚 Comparaison VS Code + Copilot vs Cursor

| Critère | VS Code + GitHub Copilot | Cursor |
|---|---|---|
| **Installation** | 2 étapes (VS Code + extension) | 1 seul téléchargement |
| **Ouverture du chat** | `Ctrl+Alt+I` | `Cmd+L` |
| **Application des changements** | Copier-coller manuel depuis le chat | Modifie le fichier directement avec diff rouge/vert |
| **Review des changements** | Pas de diff visuel intégré | Vue diff côte à côte, bouton Commit/Accept |
| **Modèle utilisé** | GitHub Copilot (OpenAI) | Composer 2.5 |
| **Approche de réécriture** | Variables nommées (`isAdult`, `isSubscribed`...) | Early returns (chaque condition échoue vite) |
| **Expérience débutant** | Bien, mais copier-coller requis | Plus fluide, les modifs s'appliquent directement |

---

## 💡 Différence clé observée

> **Cursor modifie le fichier directement** — tu vois les changements en rouge (supprimé) et vert (ajouté) côte à côte, et tu valides en un clic. Avec VS Code + Copilot, tu dois copier-coller la réponse du chat dans ton fichier manuellement.

---

## 🏆 Préférence personnelle

**Cursor** — parce que les modifications s'appliquent directement dans le fichier sans avoir à copier-coller. La vue diff (rouge/vert) permet de voir exactement ce qui change avant d'accepter. C'est plus rapide et plus intuitif pour travailler.

---

## ✅ Self-Validation — Tâche 4

- [x] Cursor téléchargé et installé depuis https://cursor.com
- [x] Compte Cursor créé (Free/Hobby plan)
- [x] `Snippet.js` recréé dans Cursor
- [x] Chat Cursor utilisé avec `Cmd+L` pour réécrire `checkUser`
- [x] Cursor comparé à VS Code + Copilot
- [x] Préférence personnelle identifiée : **Cursor**

---

*Document généré lors de la Task 4 du projet "IDE Workflow Integration" — Holberton School France*