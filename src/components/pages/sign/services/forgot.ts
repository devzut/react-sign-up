import axios from "axios";

export interface ForgotPasswordData {
    email: string;
}

export async function forgotPassword(data: ForgotPasswordData) {
  try {
    const response = await axios.post(
      "http://localhost:9000/user/forgot",
      data
    );
    return response.data;
  } catch (err: unknown) {
    throw new Error(
      `Error occurred when trying to save your profile changes!(${err})`
    );
  }
}