import { logout } from "../Store/Slices/userSlice";

export const handleLogout = (dispatch) => {
    dispatch(logout());
};