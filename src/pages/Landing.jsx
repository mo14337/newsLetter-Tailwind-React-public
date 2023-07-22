import sideImage from "../assets/illustration-sign-up-desktop.svg"
import tickIcon from "../assets/icon-list.svg"
import { useState } from "react";
import { states } from "../context/myContext";
import { useNavigate } from "react-router-dom";
import mobileImage from "../assets/illustration-sign-up-mobile.svg"


function Landing() {
    const {email,setEmail}=states();
    const [emailError,setEmailError]=useState(false)
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const navigate = useNavigate();
    function handleInput(e){
        setEmail(e.target.value)
        setEmailError(false)
    }

    function handleSubmit(e){
        e.preventDefault();
        if (validRegex.test(email)) {
        
            navigate("/success")
        }
        else{
            setEmailError(true)
        }

    }

    return (
        <section className=" flex justify-center items-center  w-full h-screen bg-white lg:bg-slate-800">
            <div className=" flex flex-col-reverse lg:flex-row lg:rounded-[20px] lg:w-fit lg:h-fit justify-center items-center w-full h-screen bg-white lg:bg-white lg:p-6 ">
                <div className=" flex flex-col gap-7 p-[85px]  w-[540px] lg:py-5 lg:pr-[70px] lg:pl-16 ">
                    <h1 className=" font-bold text-5xl">Stay Updated!</h1>
                    <p className=" text-lg">Join 60,000+ managers receiving monthly daily upadtes on:</p>

                    <div className=" flex flex-col gap-2">
                        <div className=" flex">
                            <img src={tickIcon} alt={tickIcon} />
                            <p className=" ml-4">Product discovery and building what matters</p>
                        </div>
                        <div className=" flex">
                            <img src={tickIcon} alt={tickIcon} />
                            <p className="ml-4">Measuring to ensure upadtes are success</p>
                        </div>
                        <div className=" flex">
                            <img src={tickIcon} alt={tickIcon} />
                            <p className="ml-4">And much more</p>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit} className=" flex flex-col gap-2">
                    <div className=" flex justify-between">
                        <p className="  font-bold">Email address</p>
                        {emailError && <p className=" text-red-600 font-bold">Valid Email Required</p>}
                    </div>
                        <input className=" border border-gray-400 rounded-lg h-[56px] pb-1 pl-3" value={email} onChange={(e)=>handleInput(e)} placeholder="email@company.com"></input>
                        <button className=" bg-slate-500 h-[56px] mt-2 font-bold text-sm rounded-xl ">Suscribe to monthly newsletter</button>
                    </form>




                </div>

                <div className=" w-full lg:w-fit">
                    <img  className="hidden lg:block lg:w-fit" src={sideImage} alt="sideImage" />
                    <img className=" block lg:hidden w-full" src={mobileImage} alr="mobileImage"/>

                </div>
            </div>

        </section>
    )

}

export default Landing;





// <section className=" flex justify-center items-center  w-full h-screen bg-slate-800">
// <div className=" flex rounded-[20px]  bg-white p-6 ">
//     <div className=" flex flex-col gap-7  w-[540px] py-5 pr-[70px] pl-16 justify-center">
//         <h1 className=" font-bold text-5xl">Stay Updated!</h1>
//         <p className=" text-lg">Join 60,000+ managers receiving monthly daily upadtes on:</p>

//         <div className=" flex flex-col gap-2">
//             <div className=" flex">
//                 <img src={tickIcon} alt={tickIcon} />
//                 <p className=" ml-4">Product discovery and building what matters</p>
//             </div>
//             <div className=" flex">
//                 <img src={tickIcon} alt={tickIcon} />
//                 <p className="ml-4">Measuring to ensure upadtes are success</p>
//             </div>
//             <div className=" flex">
//                 <img src={tickIcon} alt={tickIcon} />
//                 <p className="ml-4">And much more</p>
//             </div>
//         </div>
//         <form onSubmit={handleSubmit} className=" flex flex-col gap-2">
//         <div className=" flex justify-between">
//             <p className="  font-bold">Email address</p>
//             {emailError && <p className=" text-red-600 font-bold">Valid Email Required</p>}
//         </div>
//             <input className=" border border-gray-400 rounded-lg h-[56px] pb-1 pl-3" value={email} onChange={(e)=>handleInput(e)} placeholder="email@company.com"></input>
//             <button className=" bg-slate-500 h-[56px] mt-2 font-bold text-sm rounded-xl ">Suscribe to monthly newsletter</button>
//         </form>




//     </div>

//     <div>
//         <img src={sideImage} alt="sideImage" />

//     </div>
// </div>

// </section>