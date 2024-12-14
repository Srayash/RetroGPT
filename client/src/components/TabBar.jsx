/* eslint-disable react/prop-types */
export default function TabBar({title}){
    return <>
        <div className="flex justify-between px-2 font-jersey text-black text-2xl bg-[#4dbf30] p-1">
          <h1>{title}</h1>
          <button className="bg-[#b5b8b5] px-2 border border-t-white border-l-white border-r-[#808080] border-b-[#808080]">X</button>
        </div>
    </>
}