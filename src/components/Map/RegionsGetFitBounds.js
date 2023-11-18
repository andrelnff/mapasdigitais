
import Regions from "../../data/Regions"

 export default function RegionsGetFitBounds(){
    const allRegionsBounds = []
    let markerTopLeft = [0,-90]
    let markerBotRight = [-179, 90]

    const regionBounds = []

    Regions.forEach( item => {
        let markerTLR = [0,-90]
        let markerBRR = [-179,90]
        let element = item.limites.features[0].geometry.coordinates
        element.forEach(coords => {

            coords.forEach((path) => {
                if(path[0] < markerTopLeft[0]){ markerTopLeft[0] = path[0]};
                if(path[1] > markerTopLeft[1]){ markerTopLeft[1] = path[1]};

                if(path[0] < markerTLR[0] ){ markerTLR[0] = path[0]};
                if(path[1] > markerTLR[1] ){ markerTLR[1] = path[1]};

                if(path[0] > markerBotRight[0]){ markerBotRight[0] = path[0]};
                if(path[1] < markerBotRight[1]){ markerBotRight[1] = path[1]};

                if(path[0] > markerBRR[0]){ markerBRR[0] = path[0]};
                if(path[1] < markerBRR[1]){ markerBRR[1] = path[1]};
            })
            
        })
        regionBounds.push([{lat:markerTLR[1], lng:markerTLR[0]},{lat:markerBRR[1], lng:markerBRR[0]}]) 
    })

    allRegionsBounds.push({lat: markerTopLeft[1], lng:markerTopLeft[0]},{lat:markerBotRight[1], lng:markerBotRight[0]})
    return {allRegionsBounds, regionBounds}
 }