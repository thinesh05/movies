import axios from "axios";

const API_KEY = "2688e08aec9770d3747b81323cd097a0";
const API_BASE_URL = "https://api.themoviedb.org/3";

const client = axios.create({
    baseURL: API_BASE_URL,
    params: {api_key: API_KEY}
});

export const searchMovies = async(query: string) => {
    try{
        const response = await client.get("/search/movie", {
            params: {query},
        })
        console.log(response)
        if(response.data && response.data.results) {
            return response.data.results;
        } else {
            console.error("Couldn't find the movie");
        }
    } catch(error) {
        console.error(error);
        return[];
    }
}