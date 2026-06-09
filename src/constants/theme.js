export const COLORS = {
  // Primary Colors
  purple: '#7C3AED',
  blue: '#3B82F6',
  orange: '#FB923C',

  // Accent Shades
  purpleLight: '#A78BFA',
  purpleDark: '#5B21B6',
  blueLight: '#60A5FA',
  blueDark: '#1E40AF',
  orangeLight: '#FDBA74',
  orangeDark: '#EA580C',

  // Neutral Colors - Light Mode
  white: '#FFFFFF',
  gray50: '#F9FAFB',
  gray100: '#F3F4F6',
  gray200: '#E5E7EB',
  gray300: '#D1D5DB',
  gray400: '#9CA3AF',
  gray500: '#6B7280',
  gray600: '#4B5563',
  gray700: '#374151',
  gray800: '#1F2937',
  gray900: '#111827',

  // Neutral Colors - Dark Mode
  darkBg: '#0F172A',
  darkSurface: '#1E293B',
  darkSurfaceLight: '#334155',
  darkText: '#F1F5F9',
  darkTextSecondary: '#CBD5E1',

  // Status Colors
  success: '#10B981',
  warning: '#F59E0B',
  error: '#EF4444',
  info: '#06B6D4',

  // Gradients (for use with LinearGradient)
  gradientPurple: ['#7C3AED', '#A78BFA'],
  gradientBlue: ['#3B82F6', '#60A5FA'],
  gradientOrange: ['#FB923C', '#FDBA74'],
  gradientMixed: ['#7C3AED', '#3B82F6', '#FB923C'],
};

export const THEME = {
  light: {
    bg: COLORS.white,
    bgSecondary: COLORS.gray50,
    bgTertiary: COLORS.gray100,
    text: COLORS.gray900,
    textSecondary: COLORS.gray600,
    textTertiary: COLORS.gray500,
    border: COLORS.gray200,
    card: COLORS.white,
    shadow: COLORS.gray900,
    primary: COLORS.purple,
    secondary: COLORS.blue,
    accent: COLORS.orange,
  },
  dark: {
    bg: COLORS.darkBg,
    bgSecondary: COLORS.darkSurface,
    bgTertiary: COLORS.darkSurfaceLight,
    text: COLORS.darkText,
    textSecondary: COLORS.darkTextSecondary,
    textTertiary: COLORS.gray400,
    border: COLORS.darkSurfaceLight,
    card: COLORS.darkSurface,
    shadow: COLORS.gray900,
    primary: COLORS.purple,
    secondary: COLORS.blue,
    accent: COLORS.orange,
  },
};

export const SPACING = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  xxl: 32,
};

export const BORDER_RADIUS = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  round: 999,
};

export const FONT_SIZES = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 20,
  xxl: 24,
  xxxl: 32,
};

export const SHADOWS = {
  sm: {
    shadowColor: COLORS.gray900,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  md: {
    shadowColor: COLORS.gray900,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
  },
  lg: {
    shadowColor: COLORS.gray900,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 16,
    elevation: 8,
  },
};

export const ANIMATION_DURATION = {
  fast: 200,
  base: 300,
  slow: 500,
};
