/**
 * @file
 * Contains default theme settings.
 */

export const mainDark = '#383636';
export const secondaryDark = '#808080';
export const thirdDark = '#3F4047';
export const white = '#ffffff';
export const black = '#000000';
export const dt = 2560;
export const ltL = 1440;
export const lt = 1024;
export const tb = 992;
export const md = 768;
export const sm = 576;
export const xs = 480;
export const xxs = 360;

const defaultTheme = {
  colors: {
    dark: {
      main: mainDark,
      secondary: secondaryDark,
      third: thirdDark,
    },
    white,
    black,
  },
  shadow: {
    boxShadow: '0px 0px 3px 1px #a2a2a2',
  },
  border: {
    main: `1px solid ${mainDark}`,
    third: `1px solid ${secondaryDark}`,
    dashedMain: `1px dashed ${mainDark}`,
    dashedThird: `1px dashed ${secondaryDark}`,
    radius: {
      main: '10px',
      secondary: '5px'
    },
  },
  device: {
    mobileXS: `(max-width: ${xxs}px)`,
    mobileS: `(max-width: ${xs}px)`,
    mobileM: `(max-width: ${sm}px)`,
    mobileL: `(max-width: ${md}px)`,
    tablet: `(max-width: ${tb}px)`,
    laptop: `(max-width: ${lt}px)`,
    laptopL: `(max-width: ${ltL}px)`,
    desktop: `(max-width: ${dt}px)`,
  },
};

export default defaultTheme;


