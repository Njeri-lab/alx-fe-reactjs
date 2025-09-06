import axios from "axios";

const url = "https://api.github.com/users/{username}";
export async function fetchUserData(username) {
  try {
    const response = await axios.get(`${url}/${username}`);
    return response.data;
  } catch (error) {
    if (error.response && error.respose.status === 404) {
      throw new Error("Looks like we cant find the user");
    }
    throw new Error("Failed to fetch user data");
  }
}
