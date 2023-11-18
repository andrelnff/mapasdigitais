import React from 'react'
import './RegionSelected.css'
import Regions from '../../data/Regions';
import FindIndex from '../hooks/FindIndex';

function RegionsHeader(props){
    const region = FindIndex(props.id)

    return(
        <>
            <div className='region-header-title'>{region.nome}</div>
        </>
    );
}

export default RegionsHeader