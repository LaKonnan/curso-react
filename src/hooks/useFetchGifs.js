import { useEffect, useState } from "react";
import { obtenerGifsAPI } from "../helpers/obtenerGifs";

export const useFetchGifs = (category) => {
        
    const [gifs, setGifs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const obtenerGifs = async() => {
        const nuevos_gifs = await obtenerGifsAPI(category);
        setGifs(nuevos_gifs);
        setIsLoading(false);
    }

    useEffect(() => {
       obtenerGifs();
    },[])


    return {
        gifs,
        isLoading
    }
    
}