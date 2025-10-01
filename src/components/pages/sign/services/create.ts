import axios from "axios";

export interface CreateUserData {
    fullName: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export async function createUser(data: CreateUserData) {
  try {
    const response = await axios.post(
      "http://localhost:9000/user/create",
      data
    );
    return response.data;
  } catch (err: unknown) {
    throw new Error(
      `Error occurred when trying to save your profile changes!(${err})`
    );
  }
}