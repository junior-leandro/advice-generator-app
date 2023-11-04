'use client'

import { useEffect, useState } from "react";


const AdviceSlip = () => {

    const[data, setData] = useState({
        id: "",
        advice: ""
    });

    useEffect(()=>{
        fetch('https://api.adviceslip.com/advice')
        .then(response => response.json())
        .then(data => console.log(data))
    },[])

    return(
        <span className="text-white ">Texto aqui </span>
    )
}

export default AdviceSlip;