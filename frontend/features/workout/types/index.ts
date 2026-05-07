import type { Exercise } from '@/features/exercise/types';
import type { ID, ISODateString } from '@/types';

export interface WorkoutSet {
  id: ID;
  reps?: number;
  weight?: number; // kg
  duration?: number; // seconds
  distance?: number; // meters
  restTime?: number; // seconds
  completed: boolean;
}

export interface WorkoutExercise {
  id: ID;
  exercise: Exercise;
  sets: WorkoutSet[];
  notes?: string;
}

export type WorkoutStatus = 'planned' | 'in_progress' | 'completed' | 'skipped';

export interface Workout {
  id: ID;
  name: string;
  status: WorkoutStatus;
  exercises: WorkoutExercise[];
  startedAt?: ISODateString;
  completedAt?: ISODateString;
  durationSeconds?: number;
  notes?: string;
  createdAt: ISODateString;
}
