## ✅ Fichier `CONTRIBUTING.md`

# 🤝 Contribuer à la base Q/R Agile4Enterprise

Merci de vouloir contribuer ! Voici quelques règles simples pour garantir une base claire, durable et cohérente.

---

## 🧠 Principes clés

- Chaque Q/R doit **être située** : persona, intention, niveau, usage  
- Chaque mauvaise réponse en QCM doit **aider à apprendre**  iva le champ error
- Le cadre A4E n’est **pas une opinion**, mais un **référentiel outillé et ajustable**

---

## 📄 Contribuer à la base
2. Complète une ligne = une question
3. Respecte les formats : TRUE/FALSE, pas de cellules vides critiques
4. Ouvre une pull request avec ton fichier

## 🧾 Format attendu

1. Respect des colonnes du modèle :
   - `id`, `question`, `answer`, `persona`, `intention`, `niveau`
   - De 1 à 4 options de QCM : `option_X_text`, `option_X_correct`, `option_X_error`
2. Chaque question peut être associée à un quiz avec :

| Critère                         | Recommandation                                                         |
| ------------------------------- | ---------------------------------------------------------------------- |
| **Au moins 1 réponse correcte** | Pas d’ambiguïté : canonique, claire                                    |
| **2 erreurs crédibles**         | Des fausses bonnes réponses qui révèlent une incompréhension fréquente |
| **1 erreur absurde**            | Pour vérifier que le test n’est pas triché ou automatisé               |
| **Chaque erreur est expliquée** | Apprentissage renforcé par l’erreur ✔️                                 |

---

## 🔧 Générer le YAML

Si tu souhaites travailler à partir d'un fichier execl en local : 
- Préparer ou modifier questions.xlsx à partir du modèle
- Lancer le script `convert_excel_to_yaml.py`y dans le même dossier
- Il produit un fichier `questions.yml` à ajouter dans ta PR.

Le script produit questions.yml, directement utilisable

---

## ✅ Exemples de bonnes pratiques

- ❌ Mauvais : réponse floue, options sans feedback  
- ✅ Bon : réponse claire, options explicites, erreurs pédagogiques
- Exemple : 
    - text: Supprimer les budgets  
        correct: false  
        error: Mauvaise interprétation : l’agilité tactique ne supprime pas, elle rend adaptatif.
