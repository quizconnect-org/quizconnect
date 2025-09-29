# 🔧 QuizConnect API Backend

## Description
Backend API pour QuizConnect développé avec NestJS et TypeScript.

## Fonctionnalités
- **Authentification** - JWT, OAuth (Google, Apple)
- **Gestion des utilisateurs** - Profils, préférences, statistiques
- **Système de quiz** - CRUD, validation, scoring
- **Mode Ligue** - Compétitions, classements, équipes
- **Gestion vidéo** - Upload, stockage, streaming
- **Analytics** - Métriques utilisateur, performance
- **Notifications** - Push, email, in-app

## Stack Technique
- **Framework** : NestJS
- **Langage** : TypeScript
- **Base de données** : PostgreSQL
- **ORM** : Prisma
- **Authentification** : JWT + Passport
- **Upload** : AWS S3 / Cloudinary
- **Cache** : Redis
- **Queue** : Bull (Redis)
- **Tests** : Jest + Supertest
- **Documentation** : Swagger/OpenAPI

## Scripts
```bash
# Développement
pnpm start:dev        # Démarrer en mode dev
pnpm start:debug      # Démarrer en mode debug
pnpm start:prod       # Démarrer en production

# Base de données
pnpm db:generate      # Générer Prisma client
pnpm db:push          # Pousser le schéma
pnpm db:migrate       # Exécuter migrations
pnpm db:seed          # Peupler la DB

# Tests
pnpm test             # Tests unitaires
pnpm test:e2e         # Tests end-to-end
pnpm test:cov         # Tests avec coverage

# Qualité
pnpm lint             # Linter
pnpm format           # Formatter
pnpm build            # Build production
```

## Structure
```
src/
├── auth/             # Module authentification
├── users/            # Module utilisateurs
├── quiz/             # Module quiz
├── league/           # Module ligues
├── video/            # Module vidéo
├── analytics/        # Module analytics
├── notifications/    # Module notifications
├── common/           # Utilitaires communs
├── config/           # Configuration
└── database/         # Configuration DB
```

## API Endpoints
- `POST /auth/login` - Connexion
- `POST /auth/register` - Inscription
- `GET /quiz` - Liste des quiz
- `POST /quiz` - Créer un quiz
- `GET /league` - Liste des ligues
- `POST /league` - Créer une ligue
- `POST /video/upload` - Upload vidéo
- `GET /analytics` - Métriques

## Déploiement
- **Production** : Docker + Kubernetes
- **Staging** : Vercel / Railway
- **Monitoring** : Sentry + DataDog
- **CI/CD** : GitHub Actions