import { allTodos } from "./todoslice";
import axios from "axios";

export const fetchTodos = (page, limit) => async (dispatch) => {
  try {
    // const response = await axios.get(
    //   `http://localhost:5000/todos?page=${page}&limit=${limit}`
    // );
    const response = await axios.get(
      `https://todo-list-api-five.vercel.app/todos?page=${page}&limit=${limit}`
    );
    dispatch(allTodos(response.data));
  } catch (error) {
    console.error(error);
  }
};
