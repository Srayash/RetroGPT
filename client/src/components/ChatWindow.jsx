import Input from "./Input";
import TabBar from "./TabBar";
import Brain from "../assets/Brain.png"
import ChatHistory from "./ChatHistory";

export default function ChatWindow(){
    return <>
      <div className="w-full mt-5 bg-[#b5b8b5] p-2 border-4 border-t-white border-l-white border-r-[#808080] border-b-[#808080]">
        <TabBar title={"Message RetroGPT"} />
        <div className="flex gap-2">
          <ChatHistory />
          <div>
            <img className="w-[386px] min-w-[386px] border-2 border-b-white border-r-white border-l-[#808080] border-t-[#808080]" src={Brain} />
            <Input placeholder={">_Type your message"} />
          </div>
        </div>
      </div>
    </>
}

