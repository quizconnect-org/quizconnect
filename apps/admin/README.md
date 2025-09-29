# 🎛️ QuizConnect Admin Backoffice

## Description
Interface d'administration web pour gérer QuizConnect développée avec Next.js.

## Fonctionnalités
- **Dashboard** - Vue d'ensemble des métriques
- **Gestion des utilisateurs** - Modération, support, analytics
- **Gestion des quiz** - Validation, modération, statistiques
- **Gestion des ligues** - Supervision, résolution de conflits
- **Modération vidéo** - Validation du contenu, signalements
- **Analytics avancées** - Rapports détaillés, KPIs
- **Configuration** - Paramètres système, maintenance
- **Support** - Tickets utilisateur, FAQ management

## Stack Technique
- **Framework** : Next.js 15
- **Langage** : TypeScript
- **UI** : Tailwind CSS + shadcn/ui
- **État** : Zustand
- **Graphiques** : Recharts / Chart.js
- **Tableaux** : TanStack Table
- **Formulaires** : React Hook Form + Zod
- **Tests** : Vitest + Testing Library + Playwright
- **Monitoring** : Sentry + PostHog

## Scripts
```bash
# Développement
pnpm dev              # Démarrer en mode dev
pnpm build            # Build production
pnpm start            # Démarrer en production

# Tests
pnpm test             # Tests unitaires
pnpm test:watch       # Tests en mode watch
pnpm test:e2e         # Tests end-to-end

# Qualité
pnpm lint             # Linter
pnpm type-check       # Vérification TypeScript
pnpm analyze          # Analyse du bundle
```

## Structure
```
src/
├── app/              # Pages Next.js App Router
├── components/       # Composants réutilisables
├── lib/             # Utilitaires et configuration
├── hooks/           # Hooks personnalisés
├── store/           # Gestion d'état
├── types/           # Types TypeScript
└── styles/          # Styles globaux
```

## Pages Principales
- `/dashboard` - Vue d'ensemble
- `/users` - Gestion utilisateurs
- `/quiz` - Gestion quiz
- `/league` - Gestion ligues
- `/moderation` - Modération contenu
- `/analytics` - Rapports et métriques
- `/settings` - Configuration système
- `/support` - Support utilisateur

## Sécurité
- **Authentification** - JWT + 2FA
- **Autorisation** - Rôles et permissions
- **Audit** - Logs des actions admin
- **Rate Limiting** - Protection contre les abus
- **CSP** - Content Security Policy

## Déploiement
- **Production** : Vercel / Netlify
- **Staging** : Preview deployments
- **Monitoring** : Sentry + PostHog
- **CI/CD** : GitHub Actions
