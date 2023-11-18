import React, {useState, useEffect} from "react";
import RegionChart from "../components/selectors/RegionChart";
import {StatisticData} from "../data/StatisticData";
import ChartsTable from "../components/tables/ChartsTable";

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