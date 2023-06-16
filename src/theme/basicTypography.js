export const fontWeight = {
  BOLD: 900,
  MEDIUM: 700,
  REGULAR: 400,
  LIGHT: 300,
};

export const typography = () => ({
  fontFamily: '"Roboto", Helvetica, Arial,sans-serif',
  fontSize: 12,
  h1: {
    fontWeight: fontWeight.BOLD,
    fontSize: 40,
  },
  h2: {
    fontWeight: fontWeight.BOLD,
    fontSize: 32,
  },
  h3: {
    fontWeight: fontWeight.MEDIUM,
    fontSize: 24,
  },
  h4: {
    fontWeight: fontWeight.MEDIUM,
    fontSize: 20,
  },
  h5: {
    fontWeight: fontWeight.REGULAR,
    fontSize: 16,
  },
  h6: {
    fontWeight: fontWeight.REGULAR,
    fontSize: 14,
  },
});
