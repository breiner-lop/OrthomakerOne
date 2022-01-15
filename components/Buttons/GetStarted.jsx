import { useRouter } from "next/router";

export default function GetStarted() {
  // privatizador de vistas
  const Router = useRouter();
    const handleGetStarted=()=>{
        const token = localStorage.getItem("token");
        const user = JSON.parse(localStorage.getItem("user"));
        token&&user.id?Router.push("/empezar"): Router.push("/login") 
    }
    return (
        <button className="border border-red-dark rounded-3xl" onClick={()=>handleGetStarted()}><span className="font-semibold text-white w-40 h-10 filter drop-shadow-md rounded-3xl bg-red-dark hover:text-red-dark hover:bg-red-light transition duration-300 flex justify-center items-center cursor-pointer">Empezar</span></button>
    )
}
