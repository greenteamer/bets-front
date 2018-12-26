import { css } from "reakit";
import defaultTheme from "reakit-theme-default";
import { prop, palette as p } from 'styled-tools';


export default {
  ...defaultTheme,

  palette: {
    ...defaultTheme.palette,

    slate: '#455266',
    lightGreyBlue: '#aeb8c7',
    iceBlue: '#eef1f4',
    shamrockGreen: '#00cf4f',

    primary: [p('slate'), p('lightGreyBlue'), p('iceBlue')],
    secondary: [p('shamrockGreen')],
  },

  white: 'white',

  Button: css`
    ${defaultTheme.Button};
    background-color: ${props => props.secondary ? p('shamrockGreen') : p('slate')};
  `,

}