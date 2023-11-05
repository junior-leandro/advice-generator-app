'use client'

import Image from "next/image";
import { useEffect, useState } from "react";

import Divider from '../../assets/pattern-divider-desktop.svg';
import Dice from '../../assets/icon-dice.svg';

const AdviceSlip = () => {

    const [data, setData] = useState({
        id: "",
        advice: ""
    });

    useEffect(() => {
        fetch('https://api.adviceslip.com/advice/71') // id 71 provisório para criação do layout 
            .then((response) => response.json())
            .then((data) =>
                setData({
                    id: data.slip.id,
                    advice: data.slip.advice,
                })
            ).catch((error) => console.error("Error ", error));
    }, []);

    return (
        <div className="flex flex-col max-w-xl mx-3 justify-center items-center bg-darkGrayishBlue rounded-xl">
            <div className="text-xs text-neonGreen tracking-widest py-8">
                <span>ADIVICE #</span>
                <span>{data.id}</span>
            </div>
            <span className="text-lightCyan font-bold text-2xl px-8 text-center">"{data.advice}"</span>
            <Image
            src={Divider}
            alt="Citação" 
            className="p-8"/>
            <button 
            className=" bg-neonGreen p-4 rounded-full -mb-7 hover:shadow-3xl">
            <Image
            src={Dice}
            alt="Dado para nova busca"
            />
            </button>
        </div>
    )
}

export default AdviceSlip;