import React, { useState, useEffect } from 'react';
import { serverCalls } from '../api';

export const useGetData = () => {
    const [skateData, setData] = useState<any>([]);

    const handleDataFetch = async () => {
        const result = await serverCalls.get();
        setData(result)
    }

    //useEffect hook in action
    useEffect( ()=> {
        handleDataFetch();
    }, [] )

    return { skateData, getData:handleDataFetch }
}