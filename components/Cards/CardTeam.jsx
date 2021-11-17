import Image from "next/image";


export default function CardTeam({name,key,description,profesion,img }) {
  return (
    <div key={key} className="p-10 bg-blue-extralight mr-4 rounded-xl">
      <div className="flex justify-between mb-14">
        <span className="text-2xl font-bold"> {name} </span>
        <span className=" flex items-center"><Image src="/img/twitter.png" width="23px" height="19px" /></span>
      </div>
      <div className="flex">
      <div className="w-3/5 pl-6 border-l-4 border-red-dark">
      <p className="text-xl font-light mb-2 "> {description} </p>
      <span className="text-2xl font-bold"> {profesion} </span>
      </div>
      <span className="w-2/5 flex justify-end"><Image src={img} width="170px" height="100px" className="rounded-136" /></span>
      </div>
    </div>
  );
}
