# QuizConnect

## Description
QuizConnect est une application interactive permettant aux utilisateurs de participer à des quiz en solo, entre amis ou en ligue. Son innovation majeure réside dans l'intégration de la vidéo, offrant une expérience plus immersive et sociale.

## Fonctionnalités Principales
- **Quiz Solo** : Partie rapide en solo
- **Quiz en Groupe** : Envoi d'un lien ou d'un code pour inviter des amis
- **Mode Ligue** : Création ou participation à des compétitions sur plusieurs jours
- **Mode Création** : Personnalisation de quiz
- **Enregistrement Vidéo** : Capture des réactions pendant le quiz
- **Partage Social** : Partage des scores sur les réseaux sociaux
- **Chat en Direct** : Communication dans les parties en groupe

## Architecture
- **Frontend Mobile** : Expo (React Native) - iOS & Android
- **Backend API** : NestJS avec base de données PostgreSQL
- **Admin Web** : Next.js pour la gestion des quiz et utilisateurs
- **Authentification** : Firebase Auth
- **Vidéo** : Expo Camera + AWS S3 pour le stockage
- **Paiement** : Stripe pour options premium
- **Monorepo** : Turborepo pour gérer tous les projets

## Structure du Projet
```
quizconnect/
├── apps/
│   ├── mobile/      # Application Expo (React Native)
│   ├── api/         # API NestJS
│   └── admin/       # Interface d'administration Next.js
├── packages/
│   ├── shared/      # Types et utilitaires partagés
│   ├── ui/          # Composants UI partagés
│   └── config/      # Configuration partagée
└── docs/           # Documentation
```

## Installation

### Prérequis
- Node.js 18+
- React Native CLI
- Android Studio / Xcode
- PostgreSQL

### Backend
```bash
cd backend
pnpm install
pnpm run start:dev
```

### Mobile
```bash
cd mobile
pnpm install
npx expo start
```

## Roadmap
- **Phase 1 (MVP)** : Application mobile avec mode solo et multijoueur
- **Phase 2** : Mode Ligue et tournois, Back-office complet
- **Phase 3** : Options premium et fonctionnalités avancées
