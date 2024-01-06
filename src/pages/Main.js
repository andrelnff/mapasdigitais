import React,{useEffect, useState} from "react";
import {useLoadScript} from '@react-google-maps/api'
import Maps from '../components/Map/Maps'
import RegionsInitVectors from "../components/Map/RegionsInitVectors";
import RegionSelect from "../components/selectors/RegionSelect";
import RegionSelectedHeader from "../components/headers/RegionSelectedHeader"
import RegionsGetFitBounds from "../components/Map/RegionsGetFitBounds";
import LoadingOverlay from "../components/LoadingOverlay"
import Regions from "../data/Regions";

const regionsInitVectors = RegionsInitVectors()

let regionsGetFitBounds = RegionsGetFitBounds()

function Main(){
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyBeGjaoNVJmeeWpYinPd89xSyyMvy1eWP0",
    });
    const [regionSelected, setRegionSelected] = useState(null);
    const [fitBounds, setFitBounds] = useState()

    //headersSelectedRegion

    const [controlArrayStreets, setControlArrayStreets] = useState([true,true,true,true,false,false])
    const [controlArrayConfig, setControlArrayConfig] = useState([false,false])
    const [subClassesArray, setSubClassesArray] = useState([])
    const [inLoadScreen, setInLoadScreen] = useState(false)
    const [regionId, setRegionId] = useState()
    const [fullData, setFullData] = useState([])

    //headersSelectedRegion

    function handleSetRegion(index){
        setRegionSelected(index)
        setRegionId(Regions[index].id)
        setInLoadScreen(true)
        setTimeout(function(){
            setInLoadScreen(false)
        },1000)
    }

    useEffect(() => {
        if(regionSelected === null){
            setFitBounds(regionsGetFitBounds.allRegionsBounds)
        }else{
            setFitBounds(regionsGetFitBounds.regionBounds[regionSelected])
        }

    }, [subClassesArray, regionId, regionSelected, setFitBounds])


    const backButton = () => {
        setRegionSelected(null)
        setSubClassesArray([])
        setControlArrayConfig([false,false])
        setControlArrayStreets([true,true,true,true,false,false])
    }


    if(!isLoaded){
        return <div>Loading...</div>
    }else{// a página Main começa aqui
        //Items da tela inicial
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