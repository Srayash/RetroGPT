/* eslint-disable no-unused-vars */
import ChatWindow from "../components/ChatWindow";
import ErrorModal from "../components/Error";
import RetroGpt from "../assets/Header.png";
import AlienBanner from "../assets/alienBanner.gif"
import { useRecoilValue } from "recoil";
import { errorStateAtom } from "../store/atoms/errorState";
import { useEffect } from "react";

export default function Home(){
    const errorState = useRecoilValue(errorStateAtom);

    return <>
        <div className="flex py-5 flex-col items-center h-screen w-screen">
             <div className="flex gap-2">
                <img className = "h-[100px]" src={AlienBanner} />
                <img src={RetroGpt} />
                <img className = "h-[100px]" src={AlienBanner} />
            </div> 
            <ChatWindow />
            {errorState && <ErrorModal title={"Error"} description={"Error 404: feature not found!!!"} />}
        </div>
    </>
}
