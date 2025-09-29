# Design Documentation - QuizConnect

## Structure des Dossiers
- `wireframes/` - Wireframes et esquisses des écrans
- `mockups/` - Maquettes haute fidélité
- `assets/` - Icônes, images, et ressources graphiques

## Wireframes Reçus

### Écrans Principaux Identifiés

#### Écran 1 - Accueil Principal
- **Fonctionnalités** : Sélection des modes de jeu
- **Éléments** :
  - Boutons circulaires : "Jouer Solo", "Jouer Grouper", "Mode Ligue"
  - Thèmes populaires (4 thèmes en grille 2x2)
  - Zone publicité
  - Icônes : Profil, Historique

#### Écran 2 - Mode Ligue
- **Fonctionnalités** : Gestion des équipes et création de quiz
- **Éléments** :
  - "CREER TEAM" / "REJOINDRE TEAM"
  - "CREE TON QUIZZ" (création de quiz)
  - Thèmes populaires (3 thèmes)
  - Navigation vers accueil

#### Écran 3 - Création de Quiz Ligue
- **Fonctionnalités** : Création de quiz pour ligue
- **Éléments** :
  - "CREER UN QUIZ LIGUE"
  - Bouton "GO!"
  - Champ "Titre"
  - Question Q1 avec réponses R1, R2, R3, R4
  - Boutons "IMAGE QUIZ" / "VIDEO QUIZ"

#### Écran 4 - Gestion des Ligues
- **Fonctionnalités** : Rejoindre/créer des ligues
- **Éléments** :
  - Section "TEAM" avec numérotation
  - Boutons "REJOINDRE LIGUE" / "CREER/MODIF LIGUE"
  - "LIGUES POP" (4 ligues populaires)
  - "CLASSEMENT" (4 positions)

#### Écran 5 - Configuration de Quiz
- **Fonctionnalités** : Paramètres de création de quiz
- **Éléments** :
  - Champ "Nom"
  - Durée : 10s/20s/30s
  - Nombre de joueurs : Solo/Team/2
  - Type de questions : QCM/Qouverte
  - Récurrence : Quotidien/Hebdo
  - Section "INVITER"
  - Bouton "CREER"

#### Écran 6 - Interface de Quiz
- **Fonctionnalités** : Jeu en cours
- **Éléments** :
  - Timer en haut à droite
  - Zone "Question?"
  - Réponses A, B, C, D (grille 2x2)
  - Bouton "PASSER"
  - Zone "SELFIE/VIDEO" avec icône caméra

#### Écran 7 - Résultats de Quiz
- **Fonctionnalités** : Affichage des scores
- **Éléments** :
  - Cercle avec points et X
  - Bouton "SHARE"
  - "VOIR REPONSES"
  - Liste des réponses (1:, 2:, 3:)
  - Détail des points (-Xpts)

#### Écran 8 - Archives et Replay
- **Fonctionnalités** : Historique des parties
- **Éléments** :
  - "VIDEOS REPLAY" (3 vidéos avec icônes play)
  - "PARTIE JOUEES!" (grille de parties passées)

#### Écran 9 - Paramètres
- **Fonctionnalités** : Configuration de l'app
- **Éléments** :
  - Avatar avec accès compte
  - Notifications ON/OFF
  - Son, Thème, Gestion équipe, Langue
  - Bouton "HELP"

#### Écran 10 - Profil Utilisateur
- **Fonctionnalités** : Dashboard personnel
- **Éléments** :
  - Avatar et pseudo
  - "Badges et Récompenses"
  - "Abonnement"
  - "TEAM"
  - "CLASSEMENT" (189, 190, 191)
  - "THEME FAVORIS"
  - "Nb de Quiz fait"
  - Bouton "LOGOUT"

## Notes de Design

### Patterns Identifiés
- **Navigation** : Icône maison pour retour accueil
- **Boutons** : Formes circulaires pour actions principales
- **Layout** : Grilles pour les listes (thèmes, ligues, parties)
- **Vidéo** : Zone dédiée pour selfie/vidéo dans le quiz
- **Scores** : Affichage en cercles avec points

### Éléments Clés
- **Mode Ligue** : Fonctionnalité centrale avec création d'équipes
- **Création de Quiz** : Interface dédiée avec options avancées
- **Vidéo** : Intégration native dans l'expérience de jeu
- **Social** : Partage, équipes, classements
- **Archives** : Replay vidéo et historique des parties

## Prochaines Étapes
1. Créer des maquettes haute fidélité basées sur ces wireframes
2. Définir la palette de couleurs et typographie
3. Créer un système de composants réutilisables
4. Prototyper les interactions et animations
