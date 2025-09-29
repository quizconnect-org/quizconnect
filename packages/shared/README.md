# 📦 QuizConnect Shared Package

## Description
Package partagé contenant les types, schémas et utilitaires communs à toutes les applications QuizConnect.

## Contenu
- **Types TypeScript** - Interfaces et types partagés
- **Schémas Zod** - Validation de données
- **Utilitaires** - Fonctions communes
- **Constantes** - Valeurs partagées
- **Enums** - Énumérations communes

## Stack Technique
- **Langage** : TypeScript
- **Validation** : Zod
- **Build** : TypeScript Compiler
- **Tests** : Vitest

## Scripts
```bash
# Développement
pnpm dev              # Build en mode watch
pnpm build            # Build production
pnpm clean            # Nettoyer dist

# Tests
pnpm test             # Tests unitaires
pnpm type-check       # Vérification TypeScript
```

## Structure
```
src/
├── types/            # Types TypeScript
│   ├── user.ts      # Types utilisateur
│   ├── quiz.ts      # Types quiz
│   ├── league.ts    # Types ligue
│   └── index.ts     # Export principal
├── schemas/          # Schémas Zod
│   ├── user.ts      # Validation utilisateur
│   ├── quiz.ts      # Validation quiz
│   ├── league.ts    # Validation ligue
│   └── index.ts     # Export principal
├── utils/           # Utilitaires
│   ├── validation.ts # Helpers validation
│   ├── formatting.ts # Formatage données
│   └── index.ts     # Export principal
└── constants/       # Constantes
    ├── api.ts       # URLs API
    ├── config.ts    # Configuration
    └── index.ts     # Export principal
```

## Types Principaux
- `User` - Utilisateur
- `Quiz` - Quiz et questions
- `League` - Ligue et compétitions
- `GameSession` - Session de jeu
- `VideoReaction` - Réaction vidéo
- `ApiResponse` - Réponses API

## Schémas de Validation
- `CreateUserSchema` - Validation création utilisateur
- `CreateQuizSchema` - Validation création quiz
- `CreateLeagueSchema` - Validation création ligue
- `GameSettingsSchema` - Validation paramètres jeu

## Utilisation
```typescript
import { User, Quiz, CreateUserSchema } from '@quizconnect/shared';

// Types
const user: User = { ... };

// Validation
const result = CreateUserSchema.parse(userData);
```

## Tests
- Tests unitaires pour tous les types
- Tests de validation des schémas
- Tests des utilitaires
- Coverage > 90%
