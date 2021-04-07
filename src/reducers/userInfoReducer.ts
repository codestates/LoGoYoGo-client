import { ACTIONS, ActionsType } from "../actions/index";
import { initialState, stateType } from "./initialState";

const userInfoReducer = (
  state: stateType = initialState,
  action: ActionsType
) => {
  switch (action.type) {
    case ACTIONS.SET_USERINFO: {
      return Object.assign({}, state, {
        userinFo: {
          username: action.payload,
          email: action.payload,
        },
      });
    }
    default:
      return state;
  }
};

export default userInfoReducer;
