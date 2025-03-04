function Confirm({ message, onCancel, onAccept }) {
    return <div className="w-full h-full 0 fixed top-0 flex justify-center items-center">
        <div className="bg-second-color border-3 rounded-xl border-white w-[50 %] flex flex-col w-[60%] h-[40%] justify-center items-center gap-5">
            <p className="text-white">{message}</p>

            <button className="button w-40 border-3 border-white text-second-color hover:text-white" onClick={onCancel}>Cancel</button>
            <button className="button w-40 border-3 border-white text-second-color hover:text-white" onClick={onAccept}>Accept</button>
        </div >
    </div >
}

export default Confirm;