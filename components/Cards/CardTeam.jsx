
export default function CardTeam({name,key,puesto,profesion,img,accion }) {
  return (
    <div key={key} className="p-10 bg-blue-extralight col-span-1 rounded-xl" >
      <div className="flex justify-between mb-14">
        <span className="text-2xl font-bold"> {puesto} </span>
      </div>
      <div className="flex items-center">
      <div className="w-3/5 pl-6 border-l-4 border-red-dark">
      <span className="text-xl font-bold"> {name} </span>
      <p className="text-xl font-light mb-2 "> {profesion} </p>
      <h4 className="font-bold text-lg"> {accion} </h4>
      </div>
      <span className="w-2/5 flex justify-end"><img src={img} width="170px" height="100px" className="rounded-136" /></span>
      </div>
    </div>
  );
}
