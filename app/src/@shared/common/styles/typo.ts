export type TypoStyle = 'H1' | 'H2' | 'H3' | 'B1' | 'B2' | 'Caption';

export const fontFamily = {
  primary: 'CookieRunOTF',
  default: 'LINE Seed Sans KR',
};

export const typo: Record<
  TypoStyle,
  {
    fontFamily: string;
    fontSize: number;
  }
> = {
  H1: {fontFamily: fontFamily.primary, fontSize: 28},
  H2: {fontFamily: fontFamily.primary, fontSize: 24},
  H3: {fontFamily: fontFamily.default, fontSize: 20},
  B1: {fontFamily: fontFamily.default, fontSize: 16},
  B2: {fontFamily: fontFamily.default, fontSize: 14},
  Caption: {fontFamily: fontFamily.default, fontSize: 12},
};
