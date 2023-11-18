import React, {useEffect, useCallback, useMemo} from 'react';
import { GoogleMap } from '@react-google-maps/api';
import { MapStyle } from "./MapStyle";

function Maps(props){
    const options = useMemo(() => ({ //Opções para o mapa
        disableDefaultUI: true,
        clickableIcons: false,
        styles: MapStyle,
        zoom: 5,
    }), [])

    const [map, setMap] = useState(null); //recipiente do mapa e reponsável 
                                          // por atualizar o mapa na tela.

    const onLoad = useCallback((map) => setMap(map),[]) //atribuidor do mapa 
                                                        //ao recipiente.  
    useEffect(() => {
        if(map){         
            //Acesso ao objeto mapa por meio do map,
            //modifica e atualiza o mapa por meio da constante map.
        }
    }, [map])

    return(
        <GoogleMap
            mapContainerClassName='map-container' //classe hmtl do mapa
            options={options} //definir opções 
            center={{lat:/*sua latitude*/ , lng:/*sua longitude*/}}
            onLoad={onLoad}//função execultada ao carregar o mapa
        >
            {
                //Markers, Polygons, Polylines e Orvelays
            }
        </GoogleMap>
    )
}
export default Maps