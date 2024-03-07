import React, { createContext, useState, useEffect } from 'react';
import { useLoadScript } from '@react-google-maps/api';
import {loadRegionData} from "../services/loadRegionData";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export const RegionContext = createContext();

export const RegionProvider = (props) => {
    const [regions, setRegions] = useState(null);
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyBeGjaoNVJmeeWpYinPd89xSyyMvy1eWP0",
    });

    useEffect(() => {
        async function loadData() {
            const data = await loadRegionData();
            setRegions(data);
        }

        loadData();
    }, []);

    if (!isLoaded || !regions) {
        return (
            <Box sx={{
                display: 'flex',
                width: '100%',
                height: '100vh',
                justifyContent: 'center',
                alignItems: 'center',
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
