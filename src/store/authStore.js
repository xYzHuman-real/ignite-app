import { create } from 'zustand';

export const useAuthStore = create((set) => ({
  isAppInitialized: false,
  isOnboardingComplete: false,
  userProfile: null,
  selectedExam: null,
  selectedTrack: null,

  initializeApp: () => set({ isAppInitialized: true }),
  completeOnboarding: (exam, track) =>
    set({
      isOnboardingComplete: true,
      selectedExam: exam,
      selectedTrack: track,
    }),
  setUserProfile: (profile) => set({ userProfile: profile }),
  logout: () =>
    set({
      isAppInitialized: false,
      isOnboardingComplete: false,
      userProfile: null,
      selectedExam: null,
      selectedTrack: null,
    }),
}));
