# 🎨 Design System QuizConnect

## 🎯 Vision Design

**Philosophie** : Créer une expérience de jeu immersive et engageante, inspirée de Duolingo, avec des formes abstraites artistiques et une palette de couleurs vibrantes.

## 🎨 Palette de Couleurs

### Couleurs Principales
```css
/* Couleurs de base */
--primary-blue: #4A90E2;      /* Bleu principal */
--primary-orange: #FF6B35;    /* Orange énergique */
--primary-green: #7ED321;     /* Vert succès */
--primary-purple: #9013FE;    /* Violet créatif */

/* Couleurs secondaires */
--secondary-yellow: #F5A623;  /* Jaune optimiste */
--secondary-pink: #FF69B4;    /* Rose fun */
--secondary-teal: #50E3C2;    /* Turquoise moderne */
--secondary-coral: #FF7F7F;   /* Corail chaleureux */

/* Couleurs neutres */
--neutral-white: #FFFFFF;     /* Blanc pur */
--neutral-cream: #FFF8F0;     /* Crème doux */
--neutral-gray-100: #F8F9FA;  /* Gris très clair */
--neutral-gray-200: #E9ECEF;  /* Gris clair */
--neutral-gray-300: #DEE2E6;  /* Gris moyen */
--neutral-gray-600: #6C757D;  /* Gris foncé */
--neutral-gray-900: #212529;  /* Gris très foncé */
```

### Couleurs par Contexte
```css
/* Succès & Positif */
--success: var(--primary-green);
--success-light: #B8E994;
--success-dark: #5CB85C;

/* Erreur & Négatif */
--error: #E74C3C;
--error-light: #FADBD8;
--error-dark: #C0392B;

/* Attention & Avertissement */
--warning: var(--secondary-yellow);
--warning-light: #FCF3CF;
--warning-dark: #F39C12;

/* Information */
--info: var(--primary-blue);
--info-light: #D6EAF8;
--info-dark: #2980B9;
```

## 🎭 Formes Abstraites

### Formes d'Arrière-plan
```css
/* Formes organiques */
.abstract-shape-1 {
  background: linear-gradient(135deg, var(--secondary-pink), var(--secondary-coral));
  border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  opacity: 0.1;
}

.abstract-shape-2 {
  background: linear-gradient(45deg, var(--primary-blue), var(--secondary-teal));
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  opacity: 0.08;
}

.abstract-shape-3 {
  background: linear-gradient(225deg, var(--primary-orange), var(--secondary-yellow));
  border-radius: 50% 20% 80% 50% / 20% 80% 20% 80%;
  opacity: 0.12;
}
```

### Animations de Formes
```css
@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
}

@keyframes pulse {
  0%, 100% { transform: scale(1); opacity: 0.1; }
  50% { transform: scale(1.1); opacity: 0.15; }
}

.abstract-shape {
  animation: float 6s ease-in-out infinite;
}

.abstract-shape-pulse {
  animation: pulse 4s ease-in-out infinite;
}
```

## 📝 Typographie

### Hiérarchie des Polices
```css
/* Titres principaux */
.heading-1 {
  font-family: 'Inter-Bold', sans-serif;
  font-size: 32px;
  font-weight: 700;
  line-height: 1.2;
  color: var(--neutral-gray-900);
}

.heading-2 {
  font-family: 'Inter-Bold', sans-serif;
  font-size: 24px;
  font-weight: 600;
  line-height: 1.3;
  color: var(--neutral-gray-900);
}

.heading-3 {
  font-family: 'Inter-SemiBold', sans-serif;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.4;
  color: var(--neutral-gray-900);
}

/* Corps de texte */
.body-large {
  font-family: 'Inter-Medium', sans-serif;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.5;
  color: var(--neutral-gray-600);
}

.body-medium {
  font-family: 'Inter-Regular', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  color: var(--neutral-gray-600);
}

.body-small {
  font-family: 'Inter-Regular', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
  color: var(--neutral-gray-600);
}

/* Boutons et actions */
.button-text {
  font-family: 'Inter-SemiBold', sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.2;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.caption {
  font-family: 'Inter-Medium', sans-serif;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.3;
  color: var(--neutral-gray-600);
}
```

## 🎮 Composants de Base

### Boutons
```css
/* Bouton principal */
.btn-primary {
  background: linear-gradient(135deg, var(--primary-blue), var(--primary-purple));
  color: var(--neutral-white);
  border-radius: 16px;
  padding: 16px 24px;
  font-family: 'Inter-SemiBold', sans-serif;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  box-shadow: 0 4px 12px rgba(74, 144, 226, 0.3);
  transition: all 0.3s ease;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(74, 144, 226, 0.4);
}

/* Bouton secondaire */
.btn-secondary {
  background: var(--neutral-white);
  color: var(--primary-blue);
  border: 2px solid var(--primary-blue);
  border-radius: 16px;
  padding: 14px 24px;
  font-family: 'Inter-SemiBold', sans-serif;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
}

/* Bouton de thème */
.btn-theme {
  background: linear-gradient(135deg, var(--secondary-coral), var(--secondary-pink));
  color: var(--neutral-white);
  border-radius: 20px;
  padding: 20px 24px;
  font-family: 'Inter-Bold', sans-serif;
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  box-shadow: 0 6px 16px rgba(255, 127, 127, 0.3);
  transition: all 0.3s ease;
}
```

### Cartes
```css
.card {
  background: var(--neutral-white);
  border-radius: 20px;
  padding: 24px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  border: 1px solid var(--neutral-gray-200);
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
}

.card-theme {
  background: linear-gradient(135deg, var(--secondary-yellow), var(--primary-orange));
  color: var(--neutral-white);
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0 6px 20px rgba(245, 166, 35, 0.3);
}
```

### Inputs
```css
.input {
  background: var(--neutral-white);
  border: 2px solid var(--neutral-gray-200);
  border-radius: 12px;
  padding: 16px 20px;
  font-family: 'Inter-Regular', sans-serif;
  font-size: 16px;
  color: var(--neutral-gray-900);
  transition: all 0.3s ease;
}

.input:focus {
  border-color: var(--primary-blue);
  box-shadow: 0 0 0 3px rgba(74, 144, 226, 0.1);
  outline: none;
}

.input::placeholder {
  color: var(--neutral-gray-600);
  font-family: 'Inter-Regular', sans-serif;
}
```

## 🎭 Animations & Transitions

### Animations de Base
```css
/* Transition douce */
.transition-smooth {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Animation de bounce */
@keyframes bounce {
  0%, 20%, 53%, 80%, 100% { transform: translate3d(0,0,0); }
  40%, 43% { transform: translate3d(0, -8px, 0); }
  70% { transform: translate3d(0, -4px, 0); }
  90% { transform: translate3d(0, -2px, 0); }
}

.bounce {
  animation: bounce 1s ease-in-out;
}

/* Animation de pulse */
@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
}

.pulse {
  animation: pulse 2s ease-in-out infinite;
}
```

### Animations de Page
```css
/* Entrée de page */
@keyframes slideInUp {
  from {
    transform: translateY(30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.slide-in-up {
  animation: slideInUp 0.6s ease-out;
}

/* Sortie de page */
@keyframes slideOutDown {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(30px);
    opacity: 0;
  }
}

.slide-out-down {
  animation: slideOutDown 0.4s ease-in;
}
```

## 🎨 Icônes & Illustrations

### Style des Icônes
- **Style** : Ligne fine, arrondie, moderne
- **Poids** : 2px pour les icônes principales
- **Couleurs** : Couleurs de la palette principale
- **Taille** : 24px (standard), 32px (grande), 16px (petite)

### Illustrations
- **Style** : Formes géométriques simples
- **Couleurs** : Dégradés de la palette
- **Animation** : Mouvements subtils et fluides
- **Usage** : Arrière-plans, éléments décoratifs

## 📱 Responsive Design

### Breakpoints
```css
/* Mobile */
@media (max-width: 480px) {
  .container { padding: 16px; }
  .heading-1 { font-size: 28px; }
  .btn-primary { padding: 14px 20px; }
}

/* Tablet */
@media (min-width: 481px) and (max-width: 768px) {
  .container { padding: 24px; }
  .heading-1 { font-size: 30px; }
}

/* Desktop */
@media (min-width: 769px) {
  .container { padding: 32px; }
  .heading-1 { font-size: 32px; }
}
```

## 🎯 Guidelines d'Usage

### Do's ✅
- Utiliser les couleurs de la palette définie
- Maintenir la cohérence des espacements (8px grid)
- Appliquer les animations de manière cohérente
- Utiliser les formes abstraites avec parcimonie
- Respecter la hiérarchie typographique

### Don'ts ❌
- Ne pas mélanger les styles de boutons
- Éviter les couleurs non définies dans la palette
- Ne pas surcharger avec trop d'animations
- Éviter les contrastes insuffisants
- Ne pas ignorer l'accessibilité

---

**🎨 Objectif** : Créer une identité visuelle forte et cohérente qui reflète l'aspect ludique et social de QuizConnect, tout en maintenant une excellente expérience utilisateur.
