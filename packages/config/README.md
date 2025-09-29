# ⚙️ QuizConnect Config Package

## Description
Package de configuration partagée pour toutes les applications QuizConnect.

## Contenu
- **Configuration ESLint** - Règles de linting partagées
- **Configuration Prettier** - Formatage de code
- **Configuration TypeScript** - Config TS partagée
- **Configuration Jest** - Tests unitaires
- **Configuration Playwright** - Tests E2E
- **Configuration Tailwind** - Styles partagés
- **Environnements** - Variables d'environnement

## Stack Technique
- **Linting** : ESLint + Prettier
- **Tests** : Jest + Playwright
- **Styling** : Tailwind CSS
- **Build** : TypeScript

## Scripts
```bash
# Linting
pnpm lint             # Linter avec config partagée
pnpm lint:fix         # Fix automatique
pnpm format           # Formatter avec Prettier

# Tests
pnpm test             # Tests avec config Jest
pnpm test:e2e         # Tests E2E avec Playwright
```

## Structure
```
src/
├── eslint/           # Configuration ESLint
│   ├── base.js      # Règles de base
│   ├── react.js     # Règles React
│   ├── typescript.js # Règles TypeScript
│   └── index.js     # Export principal
├── prettier/         # Configuration Prettier
│   └── index.js     # Config Prettier
├── typescript/       # Configuration TypeScript
│   ├── base.json    # Config de base
│   ├── react.json   # Config React
│   └── node.json    # Config Node.js
├── jest/            # Configuration Jest
│   ├── base.js      # Config de base
│   ├── react.js     # Config React
│   └── node.js      # Config Node.js
├── playwright/      # Configuration Playwright
│   └── config.ts    # Config E2E
├── tailwind/        # Configuration Tailwind
│   ├── base.js      # Config de base
│   ├── colors.js    # Couleurs partagées
│   └── themes.js    # Thèmes
└── env/             # Variables d'environnement
    ├── development.ts # Dev
    ├── staging.ts    # Staging
    └── production.ts # Production
```

## Configurations Principales

### ESLint
- Règles TypeScript strictes
- Règles React/React Native
- Règles d'accessibilité
- Règles de performance

### Prettier
- Formatage cohérent
- Support TypeScript/JSX
- Configuration équipe

### TypeScript
- Configuration stricte
- Path mapping
- Types partagés

### Jest
- Configuration React Native
- Mocks partagés
- Setup global

### Playwright
- Configuration multi-navigateurs
- Tests E2E automatisés
- Screenshots et vidéos

## Utilisation
```typescript
// Dans package.json
{
  "eslintConfig": {
    "extends": ["@quizconnect/config/eslint"]
  },
  "prettier": "@quizconnect/config/prettier",
  "jest": {
    "preset": "@quizconnect/config/jest"
  }
}
```

## Environnements
- **Development** - Variables de dev
- **Staging** - Variables de test
- **Production** - Variables de prod

## Sécurité
- Validation des variables d'environnement
- Secrets management
- Audit de configuration
