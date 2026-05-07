import type { ID } from '@/types';

export type MuscleGroup =
  | 'chest'
  | 'back'
  | 'shoulders'
  | 'biceps'
  | 'triceps'
  | 'legs'
  | 'glutes'
  | 'core'
  | 'cardio';

export type ExerciseCategory = 'strength' | 'cardio' | 'flexibility' | 'balance';

export interface Exercise {
  id: ID;
  name: string;
  category: ExerciseCategory;
  muscleGroups: MuscleGroup[];
  description?: string;
  imageUrl?: string;
}
