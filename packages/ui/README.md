# 🎨 QuizConnect UI Package

## Description
Package de composants UI partagés pour toutes les applications QuizConnect avec un design system cohérent style "jeu".

## Fonctionnalités
- **Design System** - Composants cohérents et réutilisables
- **Style "Jeu"** - Design inspiré de Duolingo
- **Formes abstraites** - Éléments artistiques d'arrière-plan
- **Animations** - Transitions fluides et engageantes
- **Thèmes** - Support dark/light mode
- **Responsive** - Adaptation mobile/desktop
- **Accessibilité** - Support WCAG 2.1

## Stack Technique
- **Framework** : React + TypeScript
- **Styling** : Tailwind CSS + CSS Modules
- **Animations** : Framer Motion
- **Icons** : Lucide React
- **Tests** : Vitest + Testing Library

## Scripts
```bash
# Développement
pnpm dev              # Storybook en mode dev
pnpm build            # Build production
pnpm storybook        # Démarrer Storybook
pnpm clean            # Nettoyer dist

# Tests
pnpm test             # Tests unitaires
pnpm test:watch       # Tests en mode watch
pnpm type-check       # Vérification TypeScript
```

## Structure
```
src/
├── components/       # Composants UI
│   ├── Button/      # Boutons
│   ├── Card/        # Cartes
│   ├── Input/       # Champs de saisie
│   ├── Modal/       # Modales
│   ├── Badge/       # Badges
│   ├── Progress/    # Barres de progression
│   └── index.ts     # Export principal
├── design-system/   # Design system
│   ├── colors.ts    # Palette de couleurs
│   ├── typography.ts # Typographie
│   ├── spacing.ts   # Espacements
│   └── themes.ts    # Thèmes
├── animations/      # Animations
│   ├── transitions.ts # Transitions
│   ├── keyframes.ts # Keyframes
│   └── index.ts     # Export principal
└── utils/          # Utilitaires
    ├── cn.ts       # Class names utility
    ├── variants.ts # Variants utility
    └── index.ts    # Export principal
```

## Composants Principaux
- **Button** - Boutons avec variants (primary, secondary, theme)
- **Card** - Cartes avec animations
- **Input** - Champs de saisie stylisés
- **Modal** - Modales avec animations
- **Badge** - Badges de statut
- **Progress** - Barres de progression animées
- **AbstractShape** - Formes abstraites d'arrière-plan

## Design System
- **Couleurs** - Palette vibrante et engageante
- **Typographie** - Hiérarchie claire et lisible
- **Espacements** - Système 8px grid
- **Animations** - Transitions fluides
- **Formes** - Éléments organiques et abstraits

## Utilisation
```typescript
import { Button, Card, AbstractShape } from '@quizconnect/ui';

// Composants
<Button variant="primary" size="lg">
  Jouer
</Button>

<Card className="quiz-card">
  <h3>Quiz Culture G</h3>
</Card>

<AbstractShape variant="floating" />
```

## Storybook
- Documentation interactive des composants
- Tests visuels
- Exemples d'utilisation
- Contrôles pour props

## Tests
- Tests unitaires pour tous les composants
- Tests de régression visuels
- Tests d'accessibilité
- Coverage > 95%
