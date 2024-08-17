import axios, { AxiosResponse } from "axios";
import { z } from "zod";

const schema = z.object({
  userId: z.number(),
  id: z.number(),
  title: z.number(),
  body: z.string(),
});
interface Post {
  userId: number;
  id: number;
  title: string;
  body: number;
}

const fetchData = async ()=> {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    const data: typeof schema = await response.json();
    // return data;
    // const response: AxiosResponse<Post> = await axios
    //   .get("https://jsonplaceholder.typicode.com/posts/1")
    //   .then((res) => res.data);
    console.log(data);
    return data;
  } catch (error: any) {
    console.error(error);
  }
};

fetchData();
