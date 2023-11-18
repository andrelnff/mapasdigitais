import React from "react";
import { PolylineF , PolygonF} from "@react-google-maps/api";
import FindIndex from "../hooks/FindIndex";
import AsphaltDraw from "./AsphaltDraw";

export default function RegionDraw(props) {
    
    const region = FindIndex(props.id) // retorna com a regiao selecionada

    function DrawStreets(region){
        return(<>
            <AsphaltDraw street={region.Asphalt}/>
        </>)
    }

    function DrawLimits(region){
        const arrayPath = []
        const arrayLimits = region.limites.features[0].geometry.coordinates[0]

        arrayLimits.map(path => arrayPath.push({lat: path[1], lng: path[0]}))

        const options = ({
            fillColor:"#fff",
            fillOpacity: 0.1,
            strokeColor: "#000",
            strokeOpacity: 1,
            strokeWeight: 0.5,
            clickable: false,
            draggable: false,
            editable: false,
            geodesic: false,
            zIndex: 1
        })

        return (<PolygonF path={arrayPath} options={options}/>)
    }


    return (<>
                <DrawLimits {...region}/>
                <DrawStreets {...region}/>    
            </> )
 
}

