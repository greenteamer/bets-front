import React from 'react';
import { css } from 'reakit';
import Responsive from 'react-responsive';

export const sizes = {
  giant: 1170,
  desktop: 992,
  tablet: 768,
  mobile: 376,
}

export const media = {
  default: (...args) => css`
    @media (min-width: ${sizes.tablet}px) {
      ${css(...args)};
    }
  `,
  desktop: (...args) => css`
    @media (min-width: ${sizes.desktop}px) {
      ${css(...args)};
    }
  `,
  tablet: (...args) => css`
    @media (min-width: ${sizes.tablet}px) and (max-width: ${sizes.desktop - 1}) {
      ${css(...args)};
    }
  `,
  mobile: (...args) => css`
    @media (max-width: ${sizes.mobile - 1}px) {
      ${css(...args)};
    }
  `,
}

// export const Giant = props => <Responsive {...props} minWidth={sizes.desktop + 1} />;
export const Default = props => <Responsive {...props} minWidth={sizes.tablet} />;
export const Desktop = props => <Responsive {...props} minWidth={sizes.desktop} />;
export const Tablet = props => <Responsive {...props} minWidth={sizes.tablet} maxWidth={sizes.desktop - 1} />;
export const Mobile = props => <Responsive {...props} maxWidth={sizes.mobile - 1} />;