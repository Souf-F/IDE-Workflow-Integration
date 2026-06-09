# IDE Workflow Integration — Task 0 : Set the Scene

> **Projet :** IDE Workflow Integration  
> **Auteur :** Souf  
> **Date :** Juin 2026  
> **Objectif de la tâche :** Comprendre ce qu'est un IDE, comment l'IA peut aider un débutant, et les différences entre VS Code + add-on et Cursor.

---

## 🤖 Outil utilisé comme "Browser AI Helper"

**Claude (Anthropic)** — utilisé directement dans le navigateur comme assistant de warm-up et tuteur de backup pour tout le projet.

---

## ❓ Question 1 — C'est quoi un IDE et comment l'IA peut aider un débutant ?

**Question posée :**
> "Imagine I have never coded. Can you explain in very simple words what an 'IDE' (code editor) is and how a free AI assistant inside it can help a beginner read, write, and fix code?"

**Réponse :**

Un **IDE** (Integrated Development Environment), ou éditeur de code, c'est un logiciel où tu écris ton code. Pense à Microsoft Word, mais pour le code. Au lieu d'écrire du texte, tu écris des instructions que l'ordinateur peut exécuter.

**VS Code** est l'un des IDE les plus populaires au monde — gratuit, léger, et utilisé par des millions de développeurs professionnels et débutants.

### Comment l'IA aide un débutant à l'intérieur d'un IDE ?

| Fonction IA | Ce que ça fait concrètement |
|---|---|
| **Complétion inline** | Elle devine la suite de ton code en temps réel (comme la correction automatique sur téléphone, mais pour le code) |
| **Explication de code** | Tu sélectionnes un bout de code que tu comprends pas, tu demandes "explique-moi ça", elle répond en français |
| **Correction de bugs** | Quand ton code plante, tu lui montres l'erreur et elle te dit quoi corriger |
| **Génération de code** | Tu décris ce que tu veux faire en langage naturel, elle écrit le code pour toi |
| **Mode agent** | Elle prend plusieurs étapes toute seule : elle lit, écrit, modifie plusieurs fichiers sans que tu aies à tout faire manuellement |

---

## ❓ Question 2 — VS Code + add-on vs Cursor : quelles différences ?

**Question posée :**
> "What are the main differences between using VS Code with an AI add-on (like Continue.dev or Codeium) and using Cursor, the AI-first code editor? Which one would be easier for a complete beginner to try first?"

**Réponse :**

### Tableau comparatif

| Critère | VS Code + Add-on | Cursor |
|---|---|---|
| **Concept** | Éditeur classique + plugin IA ajouté | Éditeur conçu dès le départ avec l'IA intégrée |
| **Installation** | 2 étapes : installer VS Code, puis ajouter un plugin (Continue.dev, Codeium...) | 1 seul téléchargement, tout est prêt |
| **Intégration IA** | Dépend du plugin choisi, qualité variable | IA très bien intégrée nativement |
| **Mode agent** | Disponible avec Cline (plugin dédié) | Intégré directement dans l'éditeur |
| **Personnalisation** | Très flexible, beaucoup de plugins disponibles | Moins de plugins, mais expérience plus fluide |
| **Pour débutant** | Un peu plus de configuration requise | Plus simple à démarrer, tout-en-un |
| **Coût** | Gratuit (VS Code + plugins gratuits) | Gratuit (Hobby plan) |

### Recommandation pour un débutant

**Cursor** est souvent plus immédiat pour un débutant — un seul téléchargement, l'IA est déjà là, pas besoin de configurer des plugins. **VS Code + plugin** donne plus de contrôle et de flexibilité, mais demande un peu plus de setup initial.

Dans ce projet, les deux seront testés pour comparer les expériences.

---

## 📋 Les 3 modes d'interaction avec l'IA dans un IDE

Le projet introduit **3 façons différentes** de travailler avec l'IA :

1. **Complétion inline (grey text)** — Suggestions discrètes en gris qui apparaissent pendant que tu tapes. Tu acceptes avec `Tab` ou tu ignores.
2. **Chat latéral** — Un panneau de discussion à côté de ton code, comme un tuteur privé. Tu poses des questions, elle répond.
3. **Mode agent** — L'IA prend plusieurs étapes toute seule : elle peut lire, écrire et modifier plusieurs fichiers sans intervention manuelle à chaque étape.

---

## ✅ Self-Validation — Tâche 0

- [x] J'ai ouvert un AI assistant dans le navigateur (Claude)
- [x] J'ai posé la première question sur ce qu'est un IDE
- [x] J'ai posé la question sur les différences VS Code + add-on vs Cursor
- [x] Je comprends que je vais tester au moins 2 outils différents dans ce projet

---

## 🔗 Ressources du projet

| Outil | Description | Lien |
|---|---|---|
| VS Code | Éditeur de code gratuit | https://code.visualstudio.com |
| Cursor | Éditeur IA-first gratuit (Hobby plan) | https://www.cursor.com |
| Continue.dev | Add-on IA gratuit pour VS Code | https://continue.dev |
| Cline | Add-on agent IA pour VS Code | https://github.com/cline/cline |
| Codeium | Add-on IA gratuit, sans clé API | https://codeium.com |
| Google AI Studio | Clé API gratuite | https://aistudio.google.com |
| Claude | AI browser helper | https://claude.ai |

---

*Document généré lors de la Task 0 du projet "IDE Workflow Integration" — Holberton School France*
