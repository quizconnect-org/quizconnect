// Types de base pour QuizConnect

export interface User {
  id: string;
  email: string;
  username: string;
  avatar?: string;
  createdAt: Date;
  updatedAt: Date;
  isPremium: boolean;
  socialConnections?: SocialConnection[];
}

export interface SocialConnection {
  provider: 'google' | 'facebook' | 'apple';
  providerId: string;
  connectedAt: Date;
}

export interface Quiz {
  id: string;
  title: string;
  description?: string;
  theme: string;
  questions: Question[];
  createdBy: string;
  isPublic: boolean;
  createdAt: Date;
  updatedAt: Date;
  difficulty: 'easy' | 'medium' | 'hard';
  estimatedTime: number; // en minutes
}

export interface Question {
  id: string;
  text: string;
  type: 'multiple-choice' | 'true-false' | 'text';
  options?: string[];
  correctAnswer: string | number;
  explanation?: string;
  imageUrl?: string;
  videoUrl?: string;
  timeLimit?: number; // en secondes
}

export interface GameSession {
  id: string;
  quizId: string;
  players: Player[];
  currentQuestionIndex: number;
  status: 'waiting' | 'in-progress' | 'finished';
  startedAt?: Date;
  finishedAt?: Date;
  settings: GameSettings;
}

export interface Player {
  id: string;
  userId: string;
  username: string;
  avatar?: string;
  score: number;
  answers: PlayerAnswer[];
  isReady: boolean;
  joinedAt: Date;
}

export interface PlayerAnswer {
  questionId: string;
  answer: string | number;
  isCorrect: boolean;
  timeSpent: number; // en secondes
  answeredAt: Date;
}

export interface GameSettings {
  allowVideoRecording: boolean;
  showCorrectAnswers: boolean;
  timePerQuestion?: number;
  allowSkip: boolean;
  shuffleQuestions: boolean;
  shuffleAnswers: boolean;
}

export interface League {
  id: string;
  name: string;
  description?: string;
  createdBy: string;
  participants: LeagueParticipant[];
  games: LeagueGame[];
  settings: LeagueSettings;
  status: 'active' | 'finished' | 'paused';
  createdAt: Date;
  startDate: Date;
  endDate: Date;
}

export interface LeagueParticipant {
  userId: string;
  username: string;
  avatar?: string;
  joinedAt: Date;
  totalScore: number;
  gamesPlayed: number;
  rank: number;
}

export interface LeagueGame {
  id: string;
  quizId: string;
  scheduledAt: Date;
  status: 'scheduled' | 'in-progress' | 'finished';
  results: LeagueGameResult[];
}

export interface LeagueGameResult {
  userId: string;
  score: number;
  rank: number;
  answers: PlayerAnswer[];
}

export interface LeagueSettings {
  maxParticipants: number;
  gamesPerWeek: number;
  scoringSystem: 'points' | 'rankings';
  allowLateJoin: boolean;
  isPrivate: boolean;
}

export interface VideoReaction {
  id: string;
  gameSessionId: string;
  playerId: string;
  questionId: string;
  videoUrl: string;
  duration: number;
  createdAt: Date;
}

export interface GameResult {
  gameSessionId: string;
  players: PlayerResult[];
  quiz: Quiz;
  totalQuestions: number;
  averageScore: number;
  duration: number;
  createdAt: Date;
}

export interface PlayerResult {
  playerId: string;
  username: string;
  avatar?: string;
  score: number;
  correctAnswers: number;
  totalAnswers: number;
  rank: number;
  timeSpent: number;
  videoReactions: VideoReaction[];
}

// Types pour l'API
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// Types pour les paramètres de requête
export interface QuizFilters {
  theme?: string;
  difficulty?: string;
  isPublic?: boolean;
  createdBy?: string;
  search?: string;
}

export interface GameFilters {
  status?: string;
  playerId?: string;
  quizId?: string;
}

// Types pour les statistiques
export interface UserStats {
  totalGamesPlayed: number;
  totalScore: number;
  averageScore: number;
  bestScore: number;
  favoriteTheme: string;
  totalTimePlayed: number; // en minutes
  rank: number;
  achievements: Achievement[];
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlockedAt: Date;
  category: 'score' | 'participation' | 'social' | 'special';
}
