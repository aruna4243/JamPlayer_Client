import axios from "axios";
import { message } from "antd";

export const login = async (username, password, redirect, config) => {
  try {
    const response = await axios.post(config?.baseUrl + `/auth/login`, {
      user_name: username,
      password: password,
    });

    const data = response.data;

    if (data?.status) {
      message.success(data.message);
      localStorage.setItem("token", data.token);
      localStorage.setItem("userName", data.userName);
      localStorage.setItem("userId", data.userId);
      localStorage.setItem("userRole", data.roleName);

      setTimeout(() => {
        redirect(config?.redirectPath || "/dashboard");
      }, 500);
    } else {
      message.error(data.message);
    }
  } catch (error) {
    message.error(error?.message);
    console.error(error?.message);
  }
};
