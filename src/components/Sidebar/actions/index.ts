import { SideBarActionTypes } from './types';

export interface ToggleAction {
  type: SideBarActionTypes.TOGGLE_SIDEBAR;
  payload: boolean;
}

export type ToggleActionDetails = { isOpen: boolean };

export const toggleSidebar = (isOpen: boolean): ToggleAction => {
  return {
    type: SideBarActionTypes.TOGGLE_SIDEBAR,
    payload: isOpen,
  };
};
