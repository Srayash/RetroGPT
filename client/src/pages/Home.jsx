/* eslint-disable no-unused-vars */
import ChatWindow from "../components/ChatWindow";
import ErrorModal from "../components/Error";
import RetroGpt from "../assets/Header.png";
import AlienBanner from "../assets/alienBanner.gif"
import { useRecoilValue } from "recoil";
import { errorStateAtom } from "../store/atoms/errorState";
import { useEffect } from "react";
import { viruStateAtom } from "../store/atoms/virusState";

export default function Home(){
    const errorState = useRecoilValue(errorStateAtom);
    const virusState = useRecoilValue(viruStateAtom);


    return <>
        <div className="flex p-5 flex-col items-center h-screen w-screen">
             <div className="flex gap-2">
                <img className = "h-[100px]" src={AlienBanner} />
                <img src={RetroGpt} />
                <img className = "h-[100px]" src={AlienBanner} />
            </div> 
            <ChatWindow />
            {(errorState || virusState) && <ErrorModal title={errorState? "Error":"Can't Close Window"} description={errorState?"Error 404: feature not found!!!":`I am an ALIEN VIRUS! You Can't Close RetroGPT Human >_<`} />}
        </div>
    </>
}
