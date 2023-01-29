export type TypoStyle = 'H1' | 'H2' | 'H3' | 'H4' | 'B1' | 'B2' | 'Caption';

const typo: Record<
  TypoStyle,
  {
    fontFamily: string;
    fontSize: number;
  }
> = {
  H1: {fontFamily: 'font-primary', fontSize: 28},
  H2: {fontFamily: 'font-primary', fontSize: 24},
  H3: {fontFamily: 'font-primary', fontSize: 20},
  H4: {fontFamily: 'font-default', fontSize: 18},
  B1: {fontFamily: 'font-default', fontSize: 16},
  B2: {fontFamily: 'font-default', fontSize: 14},
  Caption: {fontFamily: 'font-default', fontSize: 12},
};

export default typo;
