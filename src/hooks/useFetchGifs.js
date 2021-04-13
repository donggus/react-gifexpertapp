import { useEffect, useState } from "react"
import { getGifs } from '../components/helpers/getGifs'


export const useFetchGifs = ( category ) => {
    
    const [objeto, setObjeto] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {
        
        getGifs( category )
            .then( imgs => {

                setTimeout( () => {
                    
                    setObjeto({
                        data: imgs,
                        loading: false
                    });

                }, 1000 );
            })

    }, [category])


    return objeto; // {data: [], loading: true};


}
