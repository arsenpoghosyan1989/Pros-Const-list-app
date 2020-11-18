/**
 * @file
 * Contains default theme settings.
 */

export const mainDark = '#383636';
export const secondaryDark = '#808080';
export const thirdDark = '#3F4047';
export const forthDark = '#686868';
export const strokeMain = '#F2F2F2';
export const strokeSecondary = '#F8F8FB';
export const strokeThird = '#dadada33';
export const white = '#ffffff';
export const whiteLight = '#ffffffcc';
export const black = '#000000';
export const red = '#EA4224';
export const green = '#4CB944';
export const bgBlack = '#2B303F';
export const dt = 2560;
export const ltL = 1440;
export const lt = 1024;
export const tb = 992;
export const md = 768;
export const sm = 576;
export const xs = 480;
export const xxs = 360;

export const screenMainWidth = 460;

const defaultTheme = {
  colors: {
    dark: {
      main: mainDark,
      secondary: secondaryDark,
      third: thirdDark,
      forth: forthDark,
      bgBlack
    },
    stroke: strokeMain,
    strokeDarker: strokeSecondary,
    strokeLight: strokeThird,
    black,
    white,
    whiteLight,
    red,
    green,
    transparent: 'transparent',
  },
  gradient: {
    blue: 'linear-gradient(180deg, #4B91C0 0%, #1668A4 100%)',
    lightBlue: 'linear-gradient(180deg, #2F82C1 0%, #509FD3 100%)',
    grey: 'linear-gradient(90deg, #BDBDBD 0%, #CDCDCD 102.19%)',
  },
  shadow: {
    boxShadow: '4px 4px 10px rgba(0, 0, 0, 0.15)',
    boxShadowInset: 'inset 4px 4px 10px rgba(0, 0, 0, 0.15)',
    boxDarkerShadow: '4px 4px 10px rgba(0, 0, 0, 0.25)',
    boxDarkestShadow: '4px 4px 10px rgba(0, 0, 0, 0.40)',
  },
  border: {
    main: `1px solid ${mainDark}`,
    secondary: `1px solid ${strokeMain}`,
    third: `1px solid ${secondaryDark}`,
    fourth: `1px solid ${strokeSecondary}`,
    error: `1px solid ${red}`,
    success: `1px solid ${green}`,
    dashedMain: `1px dashed ${mainDark}`,
    dashedSecondary: `1px dashed ${strokeMain}`,
    dashedThird: `1px dashed ${secondaryDark}`,
    dashedError: `1px dashed ${red}`,
    radius: {
      main: '10px',
      secondary: '5px'
    },
  },
  width: {
    components: {
      button: {
        main: 150,
        secondary: 159
      }
    },
    screen: {
      main: screenMainWidth,
      secondary: 400,
    }
  },
  height: {
    components: {
      main: 50,
      secondary: 44
    },
    screen: {
      main: 400
    }
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


