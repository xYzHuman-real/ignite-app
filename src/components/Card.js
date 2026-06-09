import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useThemeStore } from '../store/themeStore';
import { THEME, SPACING } from '../constants/theme';

export const Card = ({ children, style }) => {
  const isDarkMode = useThemeStore((state) => state.isDarkMode);
  const theme = isDarkMode ? THEME.dark : THEME.light;

  return (
    <View
      style={[
        styles.card,
        {
          backgroundColor: theme.card,
          borderColor: theme.border,
        },
        style,
      ]}
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    padding: SPACING.lg,
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
  },
});
