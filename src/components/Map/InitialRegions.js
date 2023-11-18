import React from "react";
import { PolygonF, MarkerF } from "@react-google-maps/api";

export default function InitialRegions(props){

    const options = ({
        fillColor: "#0468BF",
        fillOpacity: 0.4,
        strokeColor: "#0455BF",
        strokeOpacity: 1,
        strokeWeight: 2,
        clickable: true,
        draggable: false,
        editable: false,
        geodesic: false,
        zIndex: 1
    })

    return(
        <>
        <PolygonF
            options={options}
            path={props.arrayPath}
            onClick={() => props.onClick()}
        />
        <MarkerF
            position={props.center}
            clickable={false}
            label={{
                className: "map-marker",
                text: props.label,
                fontSize: '20px',
                fontWeight:'medium'
            }}
            icon={{
                
                path: "M17.659,9.597h-1.224c-0.199-3.235-2.797-5.833-6.032-6.033V2.341c0-0.222-0.182-0.403-0.403-0.403S9.597,2.119,9.597,2.341v1.223c-3.235,0.2-5.833,2.798-6.033,6.033H2.341c-0.222,0-0.403,0.182-0.403,0.403s0.182,0.403,0.403,0.403h1.223c0.2,3.235,2.798,5.833,6.033,6.032v1.224c0,0.222,0.182,0.403,0.403,0.403s0.403-0.182,0.403-0.403v-1.224c3.235-0.199,5.833-2.797,6.032-6.032h1.224c0.222,0,0.403-0.182,0.403-0.403S17.881,9.597,17.659,9.597 M14.435,10.403h1.193c-0.198,2.791-2.434,5.026-5.225,5.225v-1.193c0-0.222-0.182-0.403-0.403-0.403s-0.403,0.182-0.403,0.403v1.193c-2.792-0.198-5.027-2.434-5.224-5.225h1.193c0.222,0,0.403-0.182,0.403-0.403S5.787,9.597,5.565,9.597H4.373C4.57,6.805,6.805,4.57,9.597,4.373v1.193c0,0.222,0.182,0.403,0.403,0.403s0.403-0.182,0.403-0.403V4.373c2.791,0.197,5.026,2.433,5.225,5.224h-1.193c-0.222,0-0.403,0.182-0.403,0.403S14.213,10.403,14.435,10.403",
                scale:0,
            }}
        />
        </>
    )
}
