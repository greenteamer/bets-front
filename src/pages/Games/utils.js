import { map } from 'lodash';


export const formatUS = val => {
  if (val < 2) {
    const del = val - 1;
    const rateUS = 1 / del * 100;
    const rateUSToFixed = Number((rateUS).toFixed(0));
    return `-${rateUSToFixed}`;
  }
  const rateUSToFixed = Number((val * 100 - 100).toFixed(0));
  return `+${rateUSToFixed}`;
}