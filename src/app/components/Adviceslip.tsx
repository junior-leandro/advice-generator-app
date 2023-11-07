'use client'

import Image from "next/image";
import { useEffect, useState } from "react";

import DividerMobile from '../../assets/pattern-divider-mobile.svg';
import DividerDesktop from '../../assets/pattern-divider-desktop.svg';
import Dice from '../../assets/icon-dice.svg';

const AdviceSlip = () => {

    const [data, setData] = useState({
        id: "",
        advice: ""
    });

    const [buttonClick, setButtonClick] = useState(0);

    useEffect(() => {
        fetch('https://api.adviceslip.com/advice/71') // codigo 71 provisório para layout
            .then((response) => response.json())
            .then((data) =>
                setData({
                    id: data.slip.id,
                    advice: data.slip.advice,
                })
            ).catch((error) => console.error("Error ", error));
    }, [buttonClick]);
    

    const newAdvice = () => {
        setButtonClick(buttonClick + 1);

    }

    return (
        <div className="flex flex-col max-w-xl mx-3 justify-center items-center bg-darkGrayishBlue rounded-xl">
            <div className="text-xs text-neonGreen tracking-widest py-8">
                <span>ADIVICE #</span>
                {/*<span>{data.id}</span>*/}
                <span>117</span>
            </div>
            <span className="text-lightCyan font-bold text-2xl px-8 text-center max-w-[450px]">"{data.advice}"</span>
            <Image
                src={DividerMobile}
                alt="Citação"
                className="p-8 min-[375px]:hidden" />
            <Image
                src={DividerDesktop}
                alt="Citação"
                className="p-8 max-[374px]:hidden" />
            <button
                onClick={newAdvice}
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