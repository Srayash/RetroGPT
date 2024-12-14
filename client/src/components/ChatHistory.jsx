import { useRecoilValue } from "recoil"
import { conversationAtom } from "../store/atoms/conversation"

export default function ChatHistory(){
    const conversation = useRecoilValue(conversationAtom);

    return(
        <>
            <div className="min-w-[600px] bg-slate-950 p-2 border-2 border-r-white border-b-white border-l-[#848484] border-t-[#848484]">
                <div className="text-2xl font-jersey chat-container text-[#4dbf30]">
                    {conversation.map((msg, index) => (
                    <div key={index} className={`message ${msg.role}`}>
                        <strong>{msg.role === 'user' ? 'You ' : 'GPT '}:</strong>
                        <span>{" "+msg.content}</span>
                    </div>
                    ))}
                </div>
            </div>
        </>
    )
}