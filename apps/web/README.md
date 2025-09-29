# 🌐 QuizConnect Website

## Description
Site vitrine et landing page pour QuizConnect développé avec Next.js.

## Fonctionnalités
- **Landing page** - Présentation de l'app
- **Fonctionnalités** - Détail des features
- **Téléchargement** - Liens App Store / Play Store
- **Blog** - Actualités, tutoriels, conseils
- **Support** - FAQ, contact, documentation
- **SEO** - Optimisation pour les moteurs de recherche
- **Analytics** - Tracking des conversions

## Stack Technique
- **Framework** : Next.js 15
- **Langage** : TypeScript
- **UI** : Tailwind CSS + shadcn/ui
- **Animations** : Framer Motion
- **CMS** : Sanity / Contentful (optionnel)
- **SEO** : Next-SEO
- **Analytics** : Google Analytics + PostHog
- **Tests** : Vitest + Testing Library + Playwright

## Scripts
```bash
# Développement
pnpm dev              # Démarrer en mode dev
pnpm build            # Build production
pnpm start            # Démarrer en production
pnpm export           # Export statique

# Tests
pnpm test             # Tests unitaires
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
├── content/         # Contenu statique
├── styles/          # Styles globaux
└── public/          # Assets statiques
```

## Pages Principales
- `/` - Landing page
- `/features` - Fonctionnalités détaillées
- `/download` - Téléchargement app
- `/blog` - Blog et actualités
- `/support` - Support et FAQ
- `/privacy` - Politique de confidentialité
- `/terms` - Conditions d'utilisation

## SEO & Performance
- **SSG** - Static Site Generation
- **Image Optimization** - Next.js Image
- **Font Optimization** - Next.js Font
- **Core Web Vitals** - Optimisation performance
- **Sitemap** - Génération automatique
- **Robots.txt** - Configuration SEO

## Analytics & Tracking
- **Google Analytics** - Trafic et conversions
- **PostHog** - Analytics comportementales
- **Hotjar** - Heatmaps et enregistrements
- **Conversion Tracking** - Téléchargements app

## Déploiement
- **Production** : Vercel / Netlify
- **CDN** : Cloudflare
- **Monitoring** : Sentry + PostHog
- **CI/CD** : GitHub Actions
