import { useFetchGifs } from '../hooks/useFetchGifs';
import { ElementoGif } from './ElementoGif';

export const GifGrid = ({ category }) => {
    const { gifs, isLoading } = useFetchGifs(category);

    return (
        <>
            <h3>{ category }</h3>

            {
                // if simplificado, isLoading es true => mostrará el h2
                isLoading && (<h2>Cargando...</h2>)
            }
            

            <div className='card-grid'>
                {
                    gifs.map(gif => (
                        <ElementoGif key={ gif.id } {...gif}/>
                    ))
                }
            </div>
        </>
    )
}
