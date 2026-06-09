import { create } from 'zustand';

export const useLearningStore = create((set) => ({
  quizzes: [],
  revisionPlans: [],
  progressData: {},
  ignitePoints: 0,
  currentStreak: 0,

  addQuiz: (quiz) =>
    set((state) => ({
      quizzes: [...state.quizzes, quiz],
    })),
  setRevisionPlan: (plan) =>
    set((state) => ({
      revisionPlans: [...state.revisionPlans, plan],
    })),
  updateProgress: (topicId, progress) =>
    set((state) => ({
      progressData: {
        ...state.progressData,
        [topicId]: progress,
      },
    })),
  addIgnitePoints: (points) =>
    set((state) => ({
      ignitePoints: state.ignitePoints + points,
    })),
  updateStreak: (streak) => set({ currentStreak: streak }),
}));
