/* eslint-disable react/prop-types */
import { useSetRecoilState } from "recoil";
import { errorStateAtom } from "../store/atoms/errorState";
import errorSound from "../assets/error.mp3";
import { useEffect } from "react";
const EXIT_URL = "https://64.media.tumblr.com/b22e49d8f52d0e90857458021399339d/63c60cacbd7469c6-f8/s540x810/672e574b011045df3ff463ddc3ddc98f88725fbd.png"

export default function ErrorModal({title, description}){

    const playErrorSound = () => {
        new Audio(errorSound).play();
    }

    useEffect(()=>{
        playErrorSound();
    }, [])

    const setErrorState = useSetRecoilState(errorStateAtom);

    const toggleHandler = () => {
        setErrorState(false)
    }

    return (
        <>
            <div 
                className={`absolute z-10 min-w-[400px] h-[200px] bg-amber-100 border-4 border-blue-700`}
                style={{ top: Math.random() * (window.innerHeight - 200), left: Math.random() * (window.innerWidth - 400) }}
            >
                <div className="flex justify-between py-1 text-2xl font-semibold bg-blue-700">
                    <h1 className="text-white">{title}</h1>
                    <button onClick={toggleHandler} className="bg-red-700 px-2 border border-white">X</button>
                </div>
                <div className="flex items-center text-xl">
                    <img src={EXIT_URL} className="h-[80px] w-[80px]"></img>
                    <p>{description}</p>
                </div>
                <div className="flex justify-center">
                    <span className="border border-black">
                    <button onClick={toggleHandler} className="px-8 py-2 b outline-none border-2 border-t-white border-l-white border-r-[#808080] border-b-[#808080] active:border-b-white active:border-r-white active:border-l-[#808080] active:border-t-[#808080]">Fix</button>
                    </span>
                </div>
            </div>
        </>    
    )
}