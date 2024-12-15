import { useRecoilValue } from "recoil"
import { conversationAtom } from "../store/atoms/conversation"
import QuestionLog from "./questionLog";
import ResponseLog from "./responseLog";

export default function ChatHistory(){
    const conversation = useRecoilValue(conversationAtom);

    return(
        <>
            <div className="w-full bg-slate-950 p-2 border-2 border-r-white border-b-white border-l-[#848484] border-t-[#848484]">
                <div 
                    className={`h-[499px] flex flex-col gap-2 overflow-y-scroll chat-container text-[#4dbf30]`}
                >
                    {conversation.map((msg, index) => (
                        msg.role === 'user' ?
                        <QuestionLog key={index} msg={msg.content} /> : <ResponseLog key={index} msg={msg.content} />
                    ))}
                </div>
            </div>
        </>
    )
}