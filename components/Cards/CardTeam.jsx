
export default function CardTeam({name,puesto,profesion,img,accion }) {
  return (
    <div className="p-3 md:p-10 bg-blue-extralight col-span-1 rounded-xl" >
      <div className="flex justify-between">
        <span className="md:text-2xl text-xl font-bold"> {puesto} </span>
      </div>
      <div className="flex items-center">
      <div className="w-3/5 pl-6 border-l-4 border-0 border-solid border-red-dark">
      <span className="text-base md:text-xl font-bold"> {name} </span>
      <p className="text-base md:text-xl font-light mb-2 "> {profesion} </p>
      <h4 className="font-bold text-md md:text-lg"> {accion} </h4>
      </div>
      <span className="w-2/5 flex justify-end"><img src={img} /></span>
      </div>
    </div>
  );
}
