import { ROLES } from '../constants';
import { map } from 'lodash';


export const getAccessByRoles = (me, rolesList) => {
  console.log('>>>  getAccessByRoles utils: ', { me, rolesList });
  if (!me) return false;
  if (rolesList && !rolesList.includes(me.role)) return false;
  return true;
}