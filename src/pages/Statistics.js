import React, {useState} from "react";
import RegionChart from "../components/Selectors/RegionChart";
import {StatisticData} from "../data/StatisticData";
import ChartsTable from "../components/Tables/ChartsTable";

function Statistics(){
    const [controlChart , setControlChart] = useState([true, true, true, true, true, true, true])
    
    return(
        <div className="Page">
            <RegionChart
                data={StatisticData}
                controlChart={controlChart}
                setControlChart={setControlChart}

            />

            <ChartsTable controlChart={controlChart} data={StatisticData}/>
        </div>
    )
}
export default Statistics