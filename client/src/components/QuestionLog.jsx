export default function QuestionLog({key, msg}){
    return (
        <>
            <div className="font-comingSoon text-lg">
            <strong className="text-red-600">User</strong>
            <span className="text-white">{" " + msg}</span>
            </div>
        </>
    )
}