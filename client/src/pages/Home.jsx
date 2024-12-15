/* eslint-disable no-unused-vars */
import ChatWindow from "../components/ChatWindow";
import ErrorModal from "../components/Error";
import RetroGpt from "../assets/Header.png";
import Marquee from "../assets/marquee.gif";
import Counter from "../assets/counter.gif";
import AlienBanner from "../assets/alienBanner.gif"
import { useRecoilValue } from "recoil";
import { errorStateAtom } from "../store/atoms/errorState";
import { useEffect } from "react";
import { viruStateAtom } from "../store/atoms/virusState";

export default function Home(){
    const errorState = useRecoilValue(errorStateAtom);
    const virusState = useRecoilValue(viruStateAtom);


    return <>
        <div className="flex p-5 flex-col items-center">
             <div className="flex gap-2">
                <img className = "h-[60px] md:h-[100px]" src={AlienBanner} />
                <img className="md:w-auto w-[250px]" src={RetroGpt} />
                <img className = "h-[60px] md:h-[100px]" src={AlienBanner} />
            </div> 
            <ChatWindow />
            {(errorState || virusState) && <ErrorModal title={errorState? "Error":"Can't Close Window"} description={errorState?"Error 404: feature not found!!!":`I am an ALIEN VIRUS! You Can't Close RetroGPT Human >_<`} />}
            <div className="mt-2">
                <img className="h-[30px]" src={Counter}/>
            </div>
            <div className="mt-2 marquee">
                <img className="h-[40px]"src={Marquee}/>
            </div>
            <footer className="text-red-600 font-jersey text-center text-3xl">
                © 2024 RetroGPT | All Rights Reserved
            </footer>
        </div>
    </>
}
