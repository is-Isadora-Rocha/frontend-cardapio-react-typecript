import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios"
import { FoodData } from '../interface/FoodData';

const API_URL = 'https://64e0c12a50713530432ca468.mockapi.io/foods';

const fetchData = async (): AxiosPromise<FoodData[]> => {
    const response = await axios.get(API_URL);
    console.log(response);
    return response;
}

export function useFoodData(){
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ['food-data'],
        retry: 2
    })

    return {
        ...query,
        data: query.data?.data
    }
}