import axios from "axios";
import { loadUserRequest, loadUserSuccess, loadUserFail } from "./userSlice";
import { URL } from "../url";
export const loadUser = () => async (dispatch) => {
  try {
    dispatch(loadUserRequest());
    const { data } = await axios.get(`${URL}/api/auth/refetch`, {
      withCredentials: true,
    });
    dispatch(loadUserSuccess(data));
    console.log(data);
  } catch (error) {
    dispatch(loadUserFail(error.message));
  }
};
