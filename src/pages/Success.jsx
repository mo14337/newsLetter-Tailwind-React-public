import { fromJSON } from "postcss";
import { states } from "../context/myContext";
import iconSuccess from "../assets/icon-success.svg"
import { useNavigate } from "react-router-dom";


function Success() {
    const { email, setEmail } = states();
    const navigate = useNavigate();

    return (
        <div className=" flex items-center justify-center w-full h-screen bg-white lg:bg-slate-800">
            <div className=" bg-white flex flex-col justify-between gap-7 w-full h-screen lg:w-[420px] lg:h-fit py-5 px-6 lg:py-7 lg:px-12 rounded-2xl  ">
            <div className=" flex flex-col gap-5 mt-36 lg:mt-0">
                <img className="w-14" src={iconSuccess} alt="success"></img>
                <h1 className=" text-5xl font-bold">Thanks for subscribing!</h1>
                <p className=" text-lg text-slate-700">A confirmation email has been sent to open <span className=" font-semibold">{email}</span>.Please open it and click the button inside to confirm your subscription.</p>
            </div>
                <button  onClick={()=> {setEmail("");navigate("/")}} className=" bg-slate-700 mb-4 lg:mb-0 h-14 lg:h-[50px] rounded-xl pb-1 text-white font-semibold">Dissmiss Messager</button>
            </div>

        </div>
    )

}

export default Success;