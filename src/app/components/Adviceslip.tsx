'use client'

import { useEffect, useState } from "react";


const AdviceSlip = () => {

    const [data, setData] = useState({
        id: "",
        advice: ""
    });

    useEffect(() => {
        fetch('https://api.adviceslip.com/advice')
            .then((response) => response.json())
            .then((data) =>
                setData({
                    id: data.slip.id,
                    advice: data.slip.advice,
                })
            ).catch((error) => console.error("Error ", error));
    }, []);

    return (
        <div className="flex flex-col justify-center items-center">
            <h2 className="text-white"> Adivice: {data.id} </h2>
            <span className="text-white ">{data.advice}</span>
        </div>
    )
}

export default AdviceSlip;