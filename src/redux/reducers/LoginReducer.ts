import { LoginConstants } from "../Constants";
import { LoginActionTypes } from "../types/LoginActionTypes";

interface ILogin {
  isRegistrationWindowOpen: boolean;
}
const initialState: ILogin = {
  isRegistrationWindowOpen: false,
};

export default (state = initialState, action: LoginActionTypes): ILogin => {
  switch (action.type) {
    case LoginConstants.OPEN_REGISTRATION_WINDOW:
      return { ...state, isRegistrationWindowOpen: true };
    case LoginConstants.CLOSE_REGISTRATION_WINDOW:
      return { ...state, isRegistrationWindowOpen: false };
    default:
      return state;
  }
};
