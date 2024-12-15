/* eslint-disable no-undef */
import { useState, useRef, useEffect } from "react";
import FileUpload from "../assets/FileUpload.png";
import { useSetRecoilState, useRecoilState } from "recoil";
import { errorStateAtom } from "../store/atoms/errorState";
import { conversationAtom } from "../store/atoms/conversation";

export default function Input({ placeholder }) {
  const [value, setValue] = useState("");
  const textareaRef = useRef(null);
  // // for Development uncomment this.
  // const backendUrl = 'http://localhost:2738'; 
  // for Production. (comment out for dev.)
  const backendUrl = 'https://retrogpt-backend.onrender.com';

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [value]);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const [conversation, setConversation] = useRecoilState(conversationAtom);

  const askQuestion = async () => {
    const response = await fetch(backendUrl + '/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ question: value })
    })
    const answer = await response.json();
    setConversation([...conversation,{role: 'user', content: value}, answer.choices[0].message]);
    setValue('');
  }

  const setErrorState = useSetRecoilState(errorStateAtom);

  const toggleHandler = () => {
    setErrorState(true);
  }

  return (
    <div className="">
      <div className="flex gap-1">
          <textarea
          ref={textareaRef}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          className="font-jersey text-xl w-full min-h-[50px] bg-white border-2 p-2 border-r-white border-b-white border-l-[#848484] border-t-[#848484] mt-2 outline-none resize-none overflow-hidden"
          />
          <button
            onClick={askQuestion}
            className="font-jersey text-xl mt-2 bg-[#4dbf30] text-black font-bold border-2 px-4 py-2 border-t-white border-l-white border-r-[#808080] border-b-[#808080] active:border-b-white active:border-r-white active:border-l-[#808080] active:border-t-[#808080] outline-none cursor-pointer"
          >
            Submit
          </button>
      </div>
      <div className="flex gap-1 pt-2">
        <button onClick={toggleHandler} className="bg-[#b5b8b5] border-2 border-t-white border-l-white border-r-[#808080] border-b-[#808080] active:border-b-white active:border-r-white active:border-l-[#808080] active:border-t-[#808080]">
          <img className="h-[40px] w-[40px]" src={FileUpload} />
        </button>
      </div>
    </div>
  );
}


