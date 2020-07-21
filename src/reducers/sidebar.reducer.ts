// import { SideBarActionTypes } from '../actions/types';
// import { ToggleActionDetails, ToggleAction } from '../actions';
import { SideBarActionTypes } from '../components/Sidebar/actions/types';
import {
  ToggleActionDetails,
  ToggleAction,
} from '../components/Sidebar/actions';

const initalState: ToggleActionDetails = {
  isOpen: false,
};

export const sideBarReduer = (
  state: ToggleActionDetails = initalState,
  action: ToggleAction
) => {
  switch (action.type) {
    case SideBarActionTypes.TOGGLE_SIDEBAR:
      return {
        ...state,
        isOpen: action.payload,
      };
    default:
      return state;
  }
};
