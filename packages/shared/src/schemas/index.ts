import { z } from 'zod';

// Schémas de validation pour QuizConnect

export const UserSchema = z.object({
  id: z.string().uuid(),
  email: z.string().email(),
  username: z.string().min(3).max(30),
  avatar: z.string().url().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
  isPremium: z.boolean().default(false),
});

export const CreateUserSchema = z.object({
  email: z.string().email(),
  username: z.string().min(3).max(30),
  password: z.string().min(8),
});

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});

export const QuestionSchema = z.object({
  id: z.string().uuid(),
  text: z.string().min(1).max(500),
  type: z.enum(['multiple-choice', 'true-false', 'text']),
  options: z.array(z.string()).optional(),
  correctAnswer: z.union([z.string(), z.number()]),
  explanation: z.string().optional(),
  imageUrl: z.string().url().optional(),
  videoUrl: z.string().url().optional(),
  timeLimit: z.number().positive().optional(),
});

export const QuizSchema = z.object({
  id: z.string().uuid(),
  title: z.string().min(1).max(100),
  description: z.string().max(500).optional(),
  theme: z.string().min(1).max(50),
  questions: z.array(QuestionSchema).min(1).max(50),
  createdBy: z.string().uuid(),
  isPublic: z.boolean().default(false),
  createdAt: z.date(),
  updatedAt: z.date(),
  difficulty: z.enum(['easy', 'medium', 'hard']),
  estimatedTime: z.number().positive(),
});

export const CreateQuizSchema = z.object({
  title: z.string().min(1).max(100),
  description: z.string().max(500).optional(),
  theme: z.string().min(1).max(50),
  questions: z.array(QuestionSchema.omit({ id: true })).min(1).max(50),
  isPublic: z.boolean().default(false),
  difficulty: z.enum(['easy', 'medium', 'hard']),
  estimatedTime: z.number().positive(),
});

export const GameSettingsSchema = z.object({
  allowVideoRecording: z.boolean().default(true),
  showCorrectAnswers: z.boolean().default(true),
  timePerQuestion: z.number().positive().optional(),
  allowSkip: z.boolean().default(false),
  shuffleQuestions: z.boolean().default(false),
  shuffleAnswers: z.boolean().default(false),
});

export const CreateGameSessionSchema = z.object({
  quizId: z.string().uuid(),
  settings: GameSettingsSchema,
  maxPlayers: z.number().min(2).max(10).default(4),
});

export const JoinGameSessionSchema = z.object({
  gameSessionId: z.string().uuid(),
  playerName: z.string().min(1).max(30),
});

export const PlayerAnswerSchema = z.object({
  questionId: z.string().uuid(),
  answer: z.union([z.string(), z.number()]),
  timeSpent: z.number().nonnegative(),
});

export const LeagueSettingsSchema = z.object({
  maxParticipants: z.number().min(2).max(100).default(20),
  gamesPerWeek: z.number().min(1).max(7).default(3),
  scoringSystem: z.enum(['points', 'rankings']).default('points'),
  allowLateJoin: z.boolean().default(true),
  isPrivate: z.boolean().default(false),
});

export const CreateLeagueSchema = z.object({
  name: z.string().min(1).max(100),
  description: z.string().max(500).optional(),
  settings: LeagueSettingsSchema,
  startDate: z.date(),
  endDate: z.date(),
});

export const JoinLeagueSchema = z.object({
  leagueId: z.string().uuid(),
  inviteCode: z.string().optional(),
});

export const VideoReactionSchema = z.object({
  gameSessionId: z.string().uuid(),
  questionId: z.string().uuid(),
  videoUrl: z.string().url(),
  duration: z.number().positive(),
});

// Schémas pour les filtres et pagination
export const PaginationSchema = z.object({
  page: z.number().min(1).default(1),
  limit: z.number().min(1).max(100).default(20),
});

export const QuizFiltersSchema = z.object({
  theme: z.string().optional(),
  difficulty: z.enum(['easy', 'medium', 'hard']).optional(),
  isPublic: z.boolean().optional(),
  createdBy: z.string().uuid().optional(),
  search: z.string().optional(),
});

export const GameFiltersSchema = z.object({
  status: z.enum(['waiting', 'in-progress', 'finished']).optional(),
  playerId: z.string().uuid().optional(),
  quizId: z.string().uuid().optional(),
});

// Schémas pour les réponses API
export const ApiResponseSchema = <T extends z.ZodTypeAny>(dataSchema: T) =>
  z.object({
    success: z.boolean(),
    data: dataSchema.optional(),
    error: z.string().optional(),
    message: z.string().optional(),
  });

export const PaginatedResponseSchema = <T extends z.ZodTypeAny>(dataSchema: T) =>
  z.object({
    data: z.array(dataSchema),
    pagination: z.object({
      page: z.number(),
      limit: z.number(),
      total: z.number(),
      totalPages: z.number(),
    }),
  });
