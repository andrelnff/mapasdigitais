import React, {useMemo, useEffect, useState, useCallback}  from "react";
import { GoogleMap} from "@react-google-maps/api";
import { MapStyle } from "./MapStyle";
import InitialRegions from './InitialRegions'
import RegionsDraw from './RegionsDraw'
import RegionDrawConfig from "./RegionDrawConfig";
import ThemesDrawer from "./ThemesDrawer";


function Maps(props){
    const options = useMemo(() => ({
        disableDefaultUI: true,
        clickableIcons: false,
        styles: MapStyle,
        gestureHandling: 'greedy'
    }), [])


    const [map, setMap] = useState(null);

    const onLoad = useCallback((map) => setMap(map),[])


    useEffect(() => {
        if(map){
            const bounds = new window.google.maps.LatLngBounds();
            props.view.forEach(marker => {
                bounds.extend(marker)
            })
            
            map.fitBounds(bounds)


        }
    }, [map, props.view, props.polygonsInit ])

    return(
        <GoogleMap 

            mapContainerClassName='map-container'
            options={options}
            onLoad = {onLoad}
            onBoundsChanged={{}}
        >

            {props.polygonsInit !== undefined ? (<>{
                props.polygonsInit.polygonPath.map((item, index) => {return(
                    <InitialRegions
                        key={index.toString()}
                        arrayPath={item}
                        onClick={() => {props.polyInitOnClick(index)}}
                        center={props.polygonsInit.regionsMarkers[index]}
                        label={props.polygonsInit.regionsLabel[index]}  
                    />)
                })
            }</>) : (<></>)}

            {props.regionDetails !== undefined ? (<>

            </>):(<></>)} 
        
            {   //streets
                props.region !== undefined ? (<>
            <RegionsDraw 
                region={props.region}
                controlArrayStreets={props.controlArrayStreets}
            />

            <RegionDrawConfig
                region={props.region}
                controlArrayConfig={props.controlArrayConfig}

            />

            {   //themes and search
                props.fullData.length > 0 ?            
                props.fullData.map((element, index) => {
                    return <ThemesDrawer element={element} key={element.id} />
                })
            :(<></>)}
    

            </>):(<></>)}
            
        </GoogleMap>
    )
}

export default Maps