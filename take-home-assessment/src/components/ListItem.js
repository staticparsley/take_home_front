import React, { useState, useEffect } from "react";
import axios from 'axios'
import VideoInfo from './Video';

const Items = () => {
    const [data, setData] = useState({});
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'http://localhost:3000/api/listVideos'
            );
            setData(result.data);
        };
        fetchData();
    }, []);
    return (
        <div>
            {Object.entries(data).map((data) => {
                return <VideoInfo data={data[1]} />
            })}
        </div>
    );
};
export default Items;

