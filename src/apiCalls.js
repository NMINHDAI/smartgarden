import axios from "axios";

export const loginCall = async (userCredential, dispatch) => {
  dispatch({ type: "LOGIN_START" });
  try {
    const res = await axios.post("https://cors-proxy420.herokuapp.com/https://danganhapi.herokuapp.com/api/auth/login", userCredential);
    dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
  } catch (err) {
    dispatch({ type: "LOGIN_FAILURE", payload: err });
  }
};

export const logout = async (dispatch) => {
  localStorage.removeItem("user");
  try {
    dispatch({ type: "LOGOUT" });  
  } catch (error) {
    
  }
  
  
};
