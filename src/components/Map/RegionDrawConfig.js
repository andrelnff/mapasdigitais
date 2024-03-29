import React, { useContext, useEffect, useState } from 'react';
import { OverlayView } from "@react-google-maps/api";
import './RegionDrawConfig.css'
import trashSvg from "../../assets/svg/trash.svg"
import {RegionContext} from "../../context/RegionContext";


function RegionDrawConfig(props){
    const [myPosi, setMyPosi] = useState()
    const [currentPosi, setCurrentPosi] = useState()

    const { regions } = useContext(RegionContext);

    useEffect(() => {
        if(props.controlArrayConfig[0] === true ){
            DrawCurrentPosi()
        }
    },[props.controlArrayConfig], currentPosi)


    function DrawCurrentPosi(){
        if(navigator.geolocation){
            navigator.geolocation.watchPosition(function(position) {
                setMyPosi({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                })
                setCurrentPosi(position)
            })
        }
    }

    function DrawAreaDisposal(){
        const disposalArray = []

        if(regions[props.region].Disposal === null){
            console.log('não há dados')
        }else{
            const Disposal = regions[props.region].Disposal

            Disposal.features.forEach(item => {
                const point = item.geometry.coordinates

                disposalArray.push({lat:point[1], lng:point[0]})
            })
        }

        return disposalArray.map((path, index) => {
            return(

                <OverlayView position={path} key={index} mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}>

                    <div
                        style={{'--MainColor': '#8CDC04'}}
                        className='marker-disposal'
                    >
                        <img src={trashSvg} alt="disposal icon" className="disposal-icon"/>

                    </div>

                </OverlayView>

            )
        })
    }

    return(<>

        <div>
            {props.controlArrayConfig[0] ? (<>
                <div key={'MyPosition'}>
                    <OverlayView position={myPosi} mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}>

                        <div
                            style={{'--MainColor': '#06D6CC'}}
                            className='marker-posi'
                        >
                        </div>

                    </OverlayView>
                </div>
            </>): ('')}
        </div>

        <div>
            {props.controlArrayConfig[1] ? (<>
                <div key={'areaDisposal'}>{DrawAreaDisposal()}</div>
            </>): ('')}
        </div>


    </>)
}

export default RegionDrawConfig
