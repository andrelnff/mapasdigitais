import React,{useEffect, useState} from "react";
import {useLoadScript} from '@react-google-maps/api'
import Maps from '../components/Map/Maps'
import RegionsInitVectors from "../components/Map/RegionsInitVectors";
import RegionSelect from "../components/Selectors/RegionSelect";
import RegionSelectedHeader from "../components/headers/RegionSelectedHeader";
import RegionsGetFitBounds from "../components/Map/RegionsGetFitBounds";
import LoadingOverlay from "../components/LoadingOverlay"

function Main(){
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyBeGjaoNVJmeeWpYinPd89xSyyMvy1eWP0",
    });
    const [regionSelected, setRegionSelected] = useState(null);
    const [fitBounds, setFitBounds] = useState()
    const [regionsInitVectors, setRegionsInitVectors] = useState(null);
    const [regionsGetFitBounds, setRegionsGetFitBounds] = useState(null);

    const [controlArrayStreets, setControlArrayStreets] = useState([true,true,true,true,false,false])
    const [controlArrayConfig, setControlArrayConfig] = useState([false,false])
    const [subClassesArray, setSubClassesArray] = useState([])
    const [inLoadScreen, setInLoadScreen] = useState(false)
    const [regionId, setRegionId] = useState()
    const [fullData, setFullData] = useState([])

    useEffect(() => {
        RegionsInitVectors().then(data => {
            setRegionsInitVectors(data);
        });
    }, []);

    useEffect(() => {
        RegionsGetFitBounds().then(data => {
            setRegionsGetFitBounds(data);
            if(regionSelected === null){
                setFitBounds(data.allRegionsBounds)
            }else{
                console.log("entrou no else");
                console.log(data.regionBounds[regionSelected]);
                setFitBounds(data.regionBounds[regionSelected])
            }
        });
    }, [subClassesArray, regionId, regionSelected, setFitBounds]);

    function handleSetRegion(index){
        setRegionSelected(index)
        setRegionId(regionsInitVectors[index].id)
        setInLoadScreen(true)
        setTimeout(function(){
            setInLoadScreen(false)
        },1000)
    }

    const backButton = () => {
        setRegionSelected(null)
        setSubClassesArray([])
        setControlArrayConfig([false,false])
        setControlArrayStreets([true,true,true,true,false,false])
    }

    if(!isLoaded || !regionsInitVectors || !regionsGetFitBounds){
        return <div>Loading...</div>
    }else{
        return(<>


            <LoadingOverlay Loading={inLoadScreen}/>

            <RegionSelect
                labels={regionsInitVectors.regionsLabel}
                onChange={handleSetRegion}
                setRegion={regionSelected}
            />

            <RegionSelectedHeader
                labels={regionsInitVectors.regionsLabel}
                setRegion={regionSelected}

                controlArrayStreets={controlArrayStreets}
                setControlArrayStreets={setControlArrayStreets}
                controlArrayConfig={controlArrayConfig}
                setControlArrayConfig={setControlArrayConfig}

                setSubClassesArray={setSubClassesArray}
                regionId={regionId}
                fullData={fullData}
                setFullData={setFullData}
                subClassesArray={subClassesArray}
                backButton={backButton}

            />

            {regionSelected !== null ?
                (
                    <>
                        <Maps
                            view={fitBounds}
                            region={regionSelected}
                            controlArrayStreets={controlArrayStreets}
                            controlArrayConfig={controlArrayConfig}
                            fullData={fullData}

                        />
                    </>
                ):
                (
                    <>
                        <Maps
                            polygonsInit={regionsInitVectors}
                            polyInitOnClick={handleSetRegion}
                            view={fitBounds}
                        />
                    </>
                )}

        </>)
    }
}
export default Main
