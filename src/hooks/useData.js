import useSWR from "swr";
import axios from "axios";

const API_URL = `https://swapi.dev/api`;

const buildURL = (endpoint) => `${API_URL}/${endpoint}`;
const fetcher = (url) => axios.get(url).then((res) => res.data);

const useData = (endpoint) => {
    const { data, error } = useSWR(buildURL(endpoint), fetcher);

    return {
        data,
        isLoading: !error && !data,
        hasErrors: error,
    };
};

export default useData;
