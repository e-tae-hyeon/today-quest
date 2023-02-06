export type TypoStyle = 'H1' | 'H2' | 'H3' | 'B1' | 'B2' | 'Caption';

export const fontFamily = {
  primary: 'CookieRunOTF',
  default: 'LINE Seed Sans KR',
};

export const fontSize: Record<TypoStyle, number> = {
  H1: 28,
  H2: 24,
  H3: 20,
  B1: 16,
  B2: 14,
  Caption: 12,
};

export const typo: Record<
  TypoStyle,
  {
    fontFamily: string;
    fontSize: number;
  }
> = {
  H1: {fontFamily: fontFamily.primary, fontSize: fontSize.H1},
  H2: {fontFamily: fontFamily.primary, fontSize: fontSize.H2},
  H3: {fontFamily: fontFamily.default, fontSize: fontSize.H3},
  B1: {fontFamily: fontFamily.default, fontSize: fontSize.B1},
  B2: {fontFamily: fontFamily.default, fontSize: fontSize.B2},
  Caption: {fontFamily: fontFamily.default, fontSize: fontSize.Caption},
};
