
import Regions from '../../data/Regions'

function  RegionsInitVectors(){
    const regionsInitPath = []
    Regions.forEach(item => {
        const arrayPath = []
        item.limites.features[0].geometry.coordinates[0].map(path => arrayPath.push({lat: path[1], lng:path[0]}))
        regionsInitPath.push(arrayPath) 
    })

    const regionsInitMarkerPosi = []
    Regions.forEach(item => regionsInitMarkerPosi.push({lat: item.centro[1], lng:item.centro[0]}))

    const regionsInitMarkerLabel = []
    Regions.forEach(item => {
        regionsInitMarkerLabel.push(item.nome)
    })

    return {
        polygonPath: regionsInitPath,
        regionsMarkers: regionsInitMarkerPosi,
        regionsLabel: regionsInitMarkerLabel,  
    }
}

export default RegionsInitVectors