import { z } from 'zod';

// ISO date string validator - reusable for any date validation
export const isoDateString = z
  .string()
  .refine(
    (value) => !isNaN(Date.parse(value)),
    'Must be a valid ISO date string'
  );

// Match ID parameter schema - validates URL params
export const matchIdParamSchema = z.object({
  id: z.coerce
    .number()
    .int('Match ID must be an integer')
    .positive('Match ID must be a positive number'),
});

// Match status constants
export const MATCH_STATUS = {
  SCHEDULED: 'scheduled',
  LIVE: 'live',
  FINISHED: 'finished',
};

// Listed matches query schema - validates optional limit parameter
export const listedMatchesQuerySchema = z.object({
  limit: z.coerce
    .number()
    .int('Limit must be an integer')
    .positive('Limit must be a positive number')
    .max(100, 'Limit cannot exceed 100')
    .optional(),
});

// Create match schema - validates match creation data
export const createMatchSchema = z
  .object({
    sport: z
      .string()
      .min(1, 'Sport cannot be empty')
      .trim(),
    homeTeam: z
      .string()
      .min(1, 'Home team cannot be empty')
      .trim(),
    awayTeam: z
      .string()
      .min(1, 'Away team cannot be empty')
      .trim(),
    startTime: z
      .string()
      .refine(
        (value) => !isNaN(Date.parse(value)),
        'Start time must be a valid ISO date string'
      ),
    endTime: z
      .string()
      .refine(
        (value) => !isNaN(Date.parse(value)),
        'End time must be a valid ISO date string'
      ),
    homeScore: z.coerce
      .number()
      .int('Home score must be an integer')
      .nonnegative('Home score cannot be negative')
      .optional(),
    awayScore: z.coerce
      .number()
      .int('Away score must be an integer')
      .nonnegative('Away score cannot be negative')
      .optional(),
  })
  .superRefine((data, ctx) => {
    const startTime = new Date(data.startTime);
    const endTime = new Date(data.endTime);

    if (endTime <= startTime) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'End time must be chronologically after start time',
        path: ['endTime'],
      });
    }
  });

// Update score schema - validates score updates
export const updateScoreSchema = z.object({
  homeScore: z.coerce
    .number()
    .int('Home score must be an integer')
    .nonnegative('Home score cannot be negative'),
  awayScore: z.coerce
    .number()
    .int('Away score must be an integer')
    .nonnegative('Away score cannot be negative'),
});
