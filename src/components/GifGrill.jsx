import { useFetchGifs } from "../hooks/useFetchGifs";
import GifItem from "./GifItem";


export const GifGrill = ({category}) => {


    const { images, isLoading } = useFetchGifs( category );
    
    return (
        <div className="card-grid">
            <h3>{ category }</h3>
            
            {
                isLoading && (<h2>Cargando...</h2>) 
                
            }
            { images.map( (image ) =>
                    <GifItem key={ image.id } 
                     { ...image } />    
                 ) 
             } 

         </div>
        
    )
}


