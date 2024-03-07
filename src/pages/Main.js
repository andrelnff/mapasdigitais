import React, {useContext, useEffect, useState} from "react";
import Maps from '../components/Map/Maps'
import RegionSelect from "../components/Selectors/RegionSelect";
import RegionSelectedHeader from "../components/headers/RegionSelectedHeader";
import LoadingOverlay from "../components/LoadingOverlay"
import useRegionsInitVectors from "../hooks/useRegionsInitVectors";
import useRegionsGetFitBounds from "../components/Map/useRegionsGetFitBounds";
import {RegionContext} from "../context/RegionContext";

function Main(){

    const { regions } = useContext(RegionContext);
    const [regionSelected, setRegionSelected] = useState(null);
    const [fitBounds, setFitBounds] = useState()
    const regionsInitVectors = useRegionsInitVectors()
    const regionsGetFitBounds = useRegionsGetFitBounds();

    const [controlArrayStreets, setControlArrayStreets] = useState([true,true,true,true,false,false])
    const [controlArrayConfig, setControlArrayConfig] = useState([false,false])
    const [subClassesArray, setSubClassesArray] = useState([])
    const [inLoadScreen, setInLoadScreen] = useState(false)
    const [regionId, setRegionId] = useState()
    const [fullData, setFullData] = useState([])

    useEffect(() => {
        if (regionsGetFitBounds) {
            if(regionSelected === null){
                setFitBounds(regionsGetFitBounds.allRegionsBounds)
            }else{
                setFitBounds(regionsGetFitBounds.regionBounds[regionSelected])
            }
        }
    }, [subClassesArray, regionId, regionSelected, regionsGetFitBounds]);

    function handleSetRegion(index){
        setRegionSelected(index)
        setRegionId(regions[index].id)
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
export default Main;
