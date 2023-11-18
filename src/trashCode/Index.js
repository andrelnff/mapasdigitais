import React, {useCallback, useMemo, useState, useRef, useEffect} from "react";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import {MapStyle} from "./MapStyle";
import InitialRegions from "./InitialRegions";
import Regions from "../../data/Regions"
import ButtonRedo from "../buttons/ButtonRedo";
import RegionsSelector from "../selectors/RegionsSelector";
import RegionsHeader from "../headers/RegionSelected";
import RegionDraw from "./RegionDraw";

export default function Index() {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: 'AIzaSyBeGjaoNVJmeeWpYinPd89xSyyMvy1eWP0'
    });

    if (!isLoaded) return <div>Loading..</div>
    return <Map />;
}



function Map(){
    const [regionSelected, setRegionSelected] = useState(null); // id da região selecionada no momento
    const [center, setCenter] = useState({lat: -1.394782568744898,lng: -48.41606140136719})
    const centerD = {lat: -1.394782568744898,lng: -48.41606140136719}
    const [zoom, setZoom] = useState(12.8)
    const zoomD = 12.8
    const options = useMemo(() => ({
        disableDefaultUI: true,
        clickableIcons: false,
        styles: MapStyle,
        minZoom: 7,
        maxZoom:18
    }), [])

    
    const mapRef = useRef(null)

    const fitBounds = () =>{
        const bounds = new window.google.maps.LatLngBounds()
        console.log('olá')
        mapRef.current.fitBounds(bounds)
    }

    


   
    function defaultState(){
        setCenter(12.8)
        setRegionSelected(null)
        setCenter({lat: -1.394782568744898,lng: -48.41606140136719})
        
    }



    function handleSetRegion(id) {
        console.log("selecionei a região com o id " + id)
        setRegionSelected(id)
    }

    // console.log(Regions[0].data[0].properties.title)

    

    return (
        <>  
            
            <GoogleMap 
                zoom={zoom}
                center={center}
                mapContainerClassName="map-container"
                options={options}
                // onLoad={map => {
                //     const bounds = new window.google.maps.LatLngBounds(center)
                //     map.fitBounds(bounds)
                //     map.setZoom(map.getZoom() - 2)

                // }}

                
            >

            {regionSelected !== null ? 
                (<>
                    
                    <RegionDraw id={regionSelected} center={setCenter}/>
                    <ButtonRedo onClick={() => defaultState()}/>
                    <RegionsHeader id={regionSelected}/>

                </>)
                    : (<>
                {Regions.map((item) => {
                return(<InitialRegions 
                    key={item.id}
                    paths={item}
                    label={item.nome}
                    onClick={() => handleSetRegion(item.id)}
                />)})}
                    <RegionsSelector 
                        regioes={Regions}
                        onChange={setRegionSelected}
                        
                        />

                </>)}
            </GoogleMap>
        </>
    )
}