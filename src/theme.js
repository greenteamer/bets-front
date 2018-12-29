import { css } from "reakit";
import defaultTheme from "reakit-theme-default";
import { prop, palette as p, switchProp, withProp } from 'styled-tools';
import { COLORS } from './constants';

export const colors = COLORS;

export default {
  ...defaultTheme,

  palette: {
    ...defaultTheme.palette,

    slate: colors.slate,
    lightGreyBlue: colors.lightGreyBlue,
    iceBlue: colors.iceBlue,
    shamrockGreen: colors.shamrockGreen,

    primary: [colors.slate, colors.lightGreyBlue, colors.iceBlue],
    secondary: [colors.shamrockGreen],

  },

  Button: css`
    ${defaultTheme.Button};
    transition: box-shadow 0.3s;
    height: ${withProp(["small", "big"], (small, big) => small ? '3rem' : big ? '5rem' : '4rem')};
    ${switchProp(
      "palette",
      {
        transparent: css`
          background-color: transparent;
          color: ${colors.black};
        `,
        primary: css`
          background-color: ${colors.slate};
        `,
        secondary: css`
          background-color: ${colors.shamrockGreen};
        `,
      },
    )};
    ${switchProp(
      "display",
      {
        block: css`
          display: block;
        `,
        "inline-block": css`
          display: inline-block;
        `,
      },
    )};
  `,

}