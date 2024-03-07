import React, { createContext, useState, useEffect } from 'react';
import {loadRegionData} from "../services/loadRegionData";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export const RegionContext = createContext();

export const RegionProvider = (props) => {
    const [regions, setRegions] = useState(null);

    useEffect(() => {
        async function loadData() {
            const data = await loadRegionData();
            console.log("Testando context");
            console.log(data);
            setRegions(data);
        }

        loadData();
    }, []);

    if (!regions) {
        return (
            <Box sx={{
                display: 'flex',
                width: 100,
                height: 100,
            }}>
                <CircularProgress />
            </Box>
        );
    }

    return (
        <RegionContext.Provider value={{ regions }}>
            {props.children}
        </RegionContext.Provider>
    );
};
