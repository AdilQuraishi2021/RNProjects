// src/theme.js
// Centralized design tokens for colors, fonts, and sizes.

export const Colors = {
  primary:   "#0A657E",   // Brand teal
  secondary: "#1F2D3D",   // Deep charcoal for text
  accent:    "#FFB703",   // Highlight / CTA
  background:"#F7F7F7",   // App background
  surface:   "#FFFFFF",   // Cards, modals, etc.
  border:    "#E0E0E0",   // Hairline borders
  textDark:  "#333333",
  textLight: "#888888",
  success:   "#2E7D32",
  error:     "#D32F2F",
};

export const FontSizes = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 22,
  xxl: 28,
};

export const Fonts = {
  regular: "System",               // Works on iOS, Android, Web
  medium:  "System",
  bold:    "System",
  // 👉 If you want custom fonts (e.g., Google Fonts):
  // regular: "Roboto-Regular",
  // medium:  "Roboto-Medium",
  // bold:    "Roboto-Bold",
};

// Convenience style snippets
export const Typography = {
  heading: {
    fontFamily: Fonts.bold,
    fontSize: FontSizes.xl,
    color: Colors.secondary,
  },
  subheading: {
    fontFamily: Fonts.medium,
    fontSize: FontSizes.lg,
    color: Colors.secondary,
  },
  body: {
    fontFamily: Fonts.regular,
    fontSize: FontSizes.md,
    color: Colors.textDark,
  },
  caption: {
    fontFamily: Fonts.regular,
    fontSize: FontSizes.sm,
    color: Colors.textLight,
  },
};
