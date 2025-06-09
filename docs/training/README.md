# 📘 Base Q/R Agile4Enterprise

Bienvenue dans la base ouverte de Questions/Réponses du cadre **Agile4Enterprise**.

Cette base vise à :
- Structurer la montée en compétence des acteurs de la transformation agile,
- Alimenter des formations, certifications, simulateurs et assistants GPT,

---

## 🧠 Structure d’une Q/R

Chaque question est décrite en YAML avec les champs suivants :
**Exemple de Q/R structurée**

```yaml
- id: 1
  question: Pourquoi activer l’agilité tactique ?
  tags:
    persona: manager
    intention: applying
    niveau: tactique
  answer: >
    L’agilité tactique est un cycle adaptatif qui permet de synchroniser...
  qcm:
    options:
      - text: Pour livrer plus vite
        correct: false
        error: Confusion entre delivery et pilotage stratégique.
      - text: Pour ajuster la stratégie en continu
        correct: true
        error: null

# 🎭 Personas (`tags.persona`)

| Tag               | Description                                                                      |
|------------------|----------------------------------------------------------------------------------|
| **dirigeant**     | COMEX, CEO, direction générale                                                   |
| **manager**       | Managers d’équipe, top management, directeurs de BU                             |
| **coach_organisation** | Coachs agile d'entreprise, coach agile d'organisation, coach agile à l'échelle, transformation globale  |
| **coach_equipe**  | Coach agile, Agile Master, transformation opérationnelle terrain |

---

# 🎯 Intentions (`tags.intention`)

| Tag          | Intention visée                                                                 |Public cible |
|--------------|-------------------------------------------------------------------------------|--------|
| **learning** | Comprendre les concepts fondamentaux du cadre.             |Apprenant  |
| **applying** | Mettre en œuvre concrètement dans son contexte.               |Praticien   |
| **coaching** | Diagnostiquer, accompagner, challenger un système, transformer.                 |Coach  |
| **training** | Transmettre, former, structurer la pédagogie.                  |Formateur    |

---

# 🧱 Niveaux (`tags.niveau`) : niveaux d'agilité et niveaux de décisions

| Tag             | Agilité et décisions au niveau de                                                                |
|------------------|----------------------------------------------------------------------------------|
| **portfolio**     | Portefeuille d'activités stratégiques de l'entreprise |
| **stratégique**   | Une unité stratégique (unité d'affaires, département, ...) |
| **tactique**      | Une unité tactique (chaîne de valeur, un produit, un service, un pôle...) |
| **opérationnel**  | Une unité opérationnelle (équipe, groupe de travail, ...) |

---

# 🧪 QCM intégrés (`qcm`)

Chaque question peut inclure un mini quiz pour :

- Stimuler l'apprentissage actif  
- Préparer des certifications  
- Alimenter un GPT d'entraînement

Chaque option a :

- Un `text`  
- Un booléen `correct`  
- Un champ `error` (*obligatoire si `correct: false`, `null` sinon*)

---

# 🛠 Contribuer

Voir le fichier (CONTRIBUTING)[CONTRIBUTING.md].

---

# 📄 Licence

Cette base est publiée sous **Creative Commons BY-SA 4.0**.  
Elle peut être :

- Réutilisée librement  
- Adaptée à d'autres contextes  
- Partagée sous la même licence  

Merci de créditer **Agile4Enterprise** si vous utilisez ou modifiez le contenu.

---

# 🙌 Merci

Merci de contribuer à faire vivre un cadre ouvert, exigeant et évolutif.

Pour toute question :  
📫 Ouvrez une *issue* ou contactez l’équipe **Agile4Enterprise**.
