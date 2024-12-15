export default function ResponseLog({key, msg}){
    return (
        <div className="font-comingSoon text-lg">
        <strong className="text-[#4dbf30]">RetroGPT</strong>
        <span className="text-white">{" " + msg}</span>
        </div>
    )
}