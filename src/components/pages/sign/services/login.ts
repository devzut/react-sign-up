import axios from "axios";

export interface UserLoginData {
  password: string;
  email: string;
}

export async function userLogin(data: UserLoginData) {
  try {
    const response = await axios.post(
      "http://localhost:9000/user/login",
      data
    );
    return response.data;
  } catch (err: unknown) {
    throw new Error(
      `Error occurred when trying to save your profile changes!(${err})`
    );
  }
}