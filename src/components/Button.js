import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useThemeStore } from '../store/themeStore';
import { THEME, SPACING, BORDER_RADIUS, FONT_SIZES, SHADOWS } from '../constants/theme';

export const Button = ({
  label,
  onPress,
  variant = 'primary',
  size = 'md',
  disabled = false,
  style,
}) => {
  const isDarkMode = useThemeStore((state) => state.isDarkMode);
  const theme = isDarkMode ? THEME.dark : THEME.light;

  const variants = {
    primary: {
      bg: theme.primary,
      text: '#fff',
    },
    secondary: {
      bg: theme.secondary,
      text: '#fff',
    },
    outline: {
      bg: 'transparent',
      text: theme.primary,
      border: theme.primary,
    },
  };

  const sizes = {
    sm: { padding: SPACING.sm, fontSize: FONT_SIZES.sm },
    md: { padding: SPACING.md, fontSize: FONT_SIZES.md },
    lg: { padding: SPACING.lg, fontSize: FONT_SIZES.lg },
  };

  const variant_style = variants[variant];
  const size_style = sizes[size];

  return (
    <View
      style={[
        styles.button,
        {
          backgroundColor: disabled ? theme.textTertiary : variant_style.bg,
          paddingVertical: size_style.padding,
          borderColor: variant_style.border,
          borderWidth: variant_style.border ? 1 : 0,
          opacity: disabled ? 0.5 : 1,
        },
        style,
      ]}
    >
      <Text
        style={[
          styles.text,
          {
            color: variant_style.text,
            fontSize: size_style.fontSize,
          },
        ]}
        onPress={!disabled ? onPress : null}
      >
        {label}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: BORDER_RADIUS.md,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: SPACING.xl,
    ...SHADOWS.md,
  },
  text: {
    fontWeight: '600',
  },
});
