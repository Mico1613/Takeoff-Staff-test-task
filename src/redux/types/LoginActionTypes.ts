import { LoginConstants } from "../LoginConstants";

interface IOpenRegistrationWindow {
    type: LoginConstants.OPEN_REGISTRATION_WINDOW
}
interface ICloseRegistrationWindow {
    type: LoginConstants.CLOSE_REGISTRATION_WINDOW
}

export type LoginActionTypes = IOpenRegistrationWindow | ICloseRegistrationWindow