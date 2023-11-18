import React from "react";
import { PolygonF, PolylineF, } from "@react-google-maps/api";

export default function AsphaltDraw(props){

    const fullArrayPathPolygons = []

    const optionsPolygons = {
        fillColor: "#ffad29",
        fillOpacity: .5,
        strokeColor: "#ffad29",
        strokeOpacity: .5,
        strokeWeight: 1,
        clickable: false,
        draggable: false,
        editable: false,
        geodesic: false,
        zIndex: -100
    }

    if(props.street === null){
        console.log('sem dados')
    }else{
        props.street.features.map((feature, index) => {
            // console.log(feature.geometry)

            if(feature.geometry.type === 'Polygon'){

                feature.geometry.coordinates.map(coords => {

                    const arrayPath = []

                    coords.map(path => arrayPath.push({lat: path[1], lng:path[0]}))

                    fullArrayPathPolygons.push(arrayPath)

                })
            }
        })

    }
    


    return fullArrayPathPolygons.map((path, index) => {return(<PolygonF path={path} options={optionsPolygons} key={index} />)})
    
}