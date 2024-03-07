import { useContext, useEffect, useState } from 'react';
import {RegionContext} from "../context/RegionContext";

function useRegionsInitVectors() {
    const { regions } = useContext(RegionContext);
    const [data, setData] = useState({
        polygonPath: [],
        regionsMarkers: [],
        regionsLabel: [],
    });

    useEffect(() => {
        const regionsInitPath = [];
        regions.forEach(item => {
            const arrayPath = [];
            item.limites.features[0].geometry.coordinates[0].map(path => arrayPath.push({lat: path[1], lng:path[0]}));
            regionsInitPath.push(arrayPath);
        });

        const regionsInitMarkerPosi = [];
        regions.forEach(item => regionsInitMarkerPosi.push({lat: item.centro[1], lng:item.centro[0]}));

        const regionsInitMarkerLabel = [];
        regions.forEach(item => {
            regionsInitMarkerLabel.push(item.nome);
        });

        setData({
            polygonPath: regionsInitPath,
            regionsMarkers: regionsInitMarkerPosi,
            regionsLabel: regionsInitMarkerLabel,
        });
    }, [regions]);

    return data;
}

export default useRegionsInitVectors;
