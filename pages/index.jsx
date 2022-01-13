import { useState, useEffect } from "react";
import GetStarted from "../components/Buttons/GetStarted";
import ButtonOrthoOne from "../components/Buttons/ButtonOrthoOne";
import Technology from "../components/ViewsOrthoOne/Technology";
import Process from "../components/ViewsOrthoOne/Process";
import Specs from "../components/ViewsOrthoOne/Specs";
import Pricing from "../components/ViewsOrthoOne/Pricing";
import FrequentQuestions from "../components/ViewsOrthoOne/FrequentQuestions";
import CardCasos from "../components/Cards/CardCasos";
import CardCasosData from "../data/casosExitos.json";
import CardTeam from "../components/Cards/CardTeam";
import TeamData from "../data/cardTeam.json";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useCasosCtx } from "../contexts/casosExito/navInicio.context";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Index() {
  const [activeOrtho, setActiveOrtho] = useState(1);
  /*** manejador de navegacion de orthomaker one */
  const handleActiveOrtho = (id) => {
    setActiveOrtho(id);
  };
  /**** context casos nav */
  const { state, caso, setState, setCaso } = useCasosCtx();
  /**** manejador de navegacion casos de exito */
  const [activeCase, setActiveCase] = useState(false);
  const [slicer, setSlicer] = useState(0);
  const [slicert, setSlicert] = useState(1);
  const handleCasos = (nCaso) => {
    setState(true);
    setCaso(nCaso);
  };
  useEffect(() => {
    caso == 1
      ? (setSlicer(0), setSlicert(1))
      : caso == 2
      ? (setSlicer(1), setSlicert(2))
      : (setSlicer(2), setSlicert(3));
  }, [caso]);
  /*** responsive selider */
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div className="overflow-x-hidden scroll-smooth">
      <Navbar />
      <div className="text-purple-dark">
        <div className="bg-gradient-to-b from-blue-light to-white ">
          <div  style={{
                background: `url("/img/Interseccion.png")`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                width: "100%",
              }}>
            <div
              className="px-24 bg-opacity-0 mx-auto"
              style={{
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                maxWidth: "1500px"
              }}
            
            >
              {/***  Header ***/}
              <p className="text-blue-transparent text-3xl">
                Protesis ajustable para <br />
                Extremidades caninas
              </p>
              <div className="flex justify-center">
                <img
                  src="/img/protesis.png"

                  alt="protesisimage"
                />
              </div>
              {/***  OrthoMaker ***/}
              <div className="mb-2">
                <h2 className="text-9xl text-center">OrthoMaker</h2>
                <div className="flex mt-32">
                  <div className="w-1/2 pr-32 flex items-center">
                    <div>
                      <h2 className="font-semibold text-5xl mb-4">
                        Como lo <br /> hacemos
                      </h2>
                      <p>
                      En ORTHOMAKER ofrecemos segundas oportunidades, diseñamos y fabricamos diferentes tipos de dispositivos ortopédicos para tu mascota adaptándonos a las necesidades de cada uno de los casos. Aplicando nuevas tecnologías de producción en beneficio de los animales. Trabajamos para mejorar tu vida y la de tu amigo peludo, utilizamos materiales de alta calidad, respetuosos con el medio ambiente y a la vez cómodos para tu mascota. 
                      </p>
                    </div>
                  </div>
                  <div className="w-1/2">
                    <div
                      className="p-6 rounded-lg flex items-center my-2"
                      style={{
                        background: `url("/img/dogOne.png")`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                      }}
                    >
                      <div className="w-1/5">
                        <img
                          src="/img/configIcon.png"
                          width="75px"
                          height="75px"
                        />
                      </div>
                      <div className="ml-3">
                        <h4 className="font-semibold">Materiales De Alta Calidad</h4>
                        <p className="w-4/6">
                        Utilizamos materiales de alta calidad y amigables con el medio ambiente proveniente de fuentes renovables.
                        </p>
                      </div>
                    </div>
                    <div
                      className="p-6 rounded-lg flex items-center my-2"
                      style={{
                        background: `url("/img/dogTwo.png")`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                      }}
                    >
                      <div className="w-1/5">
                        <img
                          src="/img/boxIcon.png"
                          width="75px"
                          height="75px"
                        />
                      </div>
                      <div className="ml-3">
                        <h4 className="font-semibold">Diseños Personalizados</h4>
                        <p className="w-4/6 ">
                        Trabajamos para crear diseños personalizados que se adapten a las necesidades de cada canino y la de sus dueños 
                        </p>
                      </div>
                    </div>
                    <div
                      className="p-6 rounded-lg flex items-center my-2"
                      style={{
                        background: `url("/img/dogThree.png")`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                      }}
                    >
                      <div className="w-1/5">
                        <img
                          src="/img/feetIcon.png"
                          width="75px"
                          height="75px"
                        />
                      </div>
                      <div className="ml-3">
                        <h4 className="font-semibold">Procesos De Producción</h4>
                        <p className="w-4/5">
                        las nuevas tecnologías como la impresión 3D permiten disminuir los costos y tiempos de los procesos de fabricación de elementos ortopédicos
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <ul className="flex mt-32 mb-4">
                  <li className="rounded-full w-14 h-14 border-2 mr-2 flex items-center justify-center border-red-dark">
                    <img src="/img/feet90.png" width="32px" height="28px" />
                  </li>
                  <li className="rounded-full w-14 h-14 border-2 mx-2 flex items-center justify-center border-red-dark">
                    <img
                      src="/img/feetrecto.png"
                      width="12px"
                      height="38px"
                    />
                  </li>
                  <li className="rounded-full w-14 h-14 border-2 mx-2 flex items-center justify-center border-red-dark">
                    <img src="/img/prote.png" width="20px" height="35px" />
                  </li>
                </ul>
                <span>Protesis</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto px-24" style={{ maxWidth: "1500px" }}>
          {/***  OrthoMaker ONE ***/}
          <div className="mb-40">
            <div className="flex justify-between">
              <h2 className="text-5xl font-bold">OrthoMaker ONE</h2>
              <GetStarted />
            </div>
            <div className="-mx-24 my-14">
              <img
                className="w-full"
                src="/img/orthooneback.png"
                alt="orthomaker one"
              />
            </div>
            <div className="flex mt-32">
              <ul
                className="text-5xl w-2/5 border-l border-purple-light "
                style={{ height: "500px" }}
              >
                <li
                  style={{ marginLeft: "-1px" }}
                  className={
                    activeOrtho == 1
                      ? "text-purple-dark py-5 border-l-2 border-purple pl-10"
                      : "py-5 text-blue-transparent pl-10"
                  }
                >
                  <ButtonOrthoOne onClick={() => handleActiveOrtho(1)}>
                  Tecnología
                  </ButtonOrthoOne>
                </li>
                <li
                  style={{ marginLeft: "-1px" }}
                  className={
                    activeOrtho == 2
                      ? "text-purple-dark py-5 border-l-2 border-purple pl-10"
                      : "py-5 text-blue-transparent pl-10"
                  }
                >
                  <ButtonOrthoOne onClick={() => handleActiveOrtho(2)}>
                  Proceso
                  </ButtonOrthoOne>
                </li>
                <li
                  style={{ marginLeft: "-1px" }}
                  className={
                    activeOrtho == 3
                      ? "text-purple-dark py-5 border-l-2 border-purple pl-10"
                      : "py-5 text-blue-transparent pl-10"
                  }
                >
                  <ButtonOrthoOne onClick={() => handleActiveOrtho(3)}>
                  Especificaciones
                  </ButtonOrthoOne>
                </li>
                <li
                  style={{ marginLeft: "-1px" }}
                  className={
                    activeOrtho == 4
                      ? "text-purple-dark py-5 border-l-2 border-purple pl-10"
                      : "py-5 text-blue-transparent pl-10"
                  }
                >
                  <ButtonOrthoOne onClick={() => handleActiveOrtho(4)}>
                  Precios
                  </ButtonOrthoOne>
                </li>
                <li
                  style={{ marginLeft: "-1px" }}
                  className={
                    activeOrtho == 5
                      ? "text-purple-dark py-5 border-l-2 border-purple pl-10"
                      : "py-5 text-blue-transparent pl-10"
                  }
                >
                  <ButtonOrthoOne onClick={() => handleActiveOrtho(5)}>
                  Preguntas <br /> frecuentes
                  </ButtonOrthoOne>
                </li>
              </ul>
              <div className="w-3/5">
                {activeOrtho == 1 ? (
                  <Technology />
                ) : activeOrtho == 2 ? (
                  <Process />
                ) : activeOrtho == 3 ? (
                  <Specs />
                ) : activeOrtho == 4 ? (
                  <Pricing />
                ) : (
                  activeOrtho == 5 && <FrequentQuestions />
                )}
              </div>
            </div>
          </div>
          {/***  More Products 
          <div className="flex -mx-24 pb-20">
            <div className="w-1/2 bg-blue-light flex justify-center flex-col px-24 my-8">
              <h2 className="text-2xl mb-4">Productos</h2>
              <h4 className="text-5xl mb-8">Mas productos para ti</h4>
              <p className="w-4/5 text-2xl font-light mb-8">
                Tenemos toda una oferta de productos ortopédicos dedicados a tu
                mascota, productos a la medida de tus necesidades.
              </p>
              <Link href="/">
                <span className="underline flex items-center cursor-pointer">
                  <span className="mr-3">ver mas</span>
                  <img src="/img/row.png" width="18px" height="17px" />
                </span>
              </Link>
            </div>
            <div className="w-1/2 grid grid-cols-3 gap-2 -ml-10">
              {MoreProductData.map((mPD) => (
                <div
                  key={mPD.id}
                  className="col-span-1 h-52 rounded-lg shadow-2xl"
                  style={{
                    background: `url(${mPD.img})`,
                    backgroundSize: "cover",
                  }}
                />
              ))}
            </div>
          </div>***/}
          
          {/***  Casos de exito ***/}
          <div id="experiencia" className="mb-32">
            <h4 className="text-2xl font-light">Casos de exito</h4>
            <hr />
            <div className="flex -mr-24">
              <ul
                className={
                  activeCase || state ? "hidden" : "w-3/5 mt-14 text-5xl"
                }
                style={{
                  background: `url("/img/wavesexitos.png")`,
                  backgroundRepeat: "no-repeat",
                }}
              >
                <li className="my-4">
                  <button onClick={() => handleCasos(1)}>
                    <span className="flex items-center w-64 justify-between">
                      PININA
                      <img
                        src="/img/rowlonger.png"
                        width="60px"
                        height="50px"
                      />
                    </span>
                  </button>
                </li>
               {/*  <li className="my-4">
                  <button onClick={() => handleCasos(2)}>
                    <span className="flex items-center w-64 justify-between">
                      LUNA
                      <img
                        src="/img/rowlonger.png"
                        width="60px"
                        height="50px"
                      />
                    </span>
                  </button>
                </li> */}
                {/* <li className="my-4">
                  <button onClick={() => handleCasos(3)}>
                    <span className="flex items-center w-64 justify-between">
                      SIMON
                      <img
                        src="/img/rowlonger.png"
                        width="60px"
                        height="50px"
                      />
                    </span>
                  </button>
                </li> */}
              </ul>
              <div className={!state? "w-2/5 mt-14 transition-all ": "w-full mt-14 transition-all"}>
                <Carousel
                  responsive={responsive}
                  arrows={false}
                  draggable={state ? true : false}
                >
                  {CardCasosData.slice(0,1).map((casos) => (
                    <CardCasos
                      key={casos.id}
                      img={casos.img}
                      name={casos.name}
                      textTwo={casos.textTwo}
                      state={state}
                    />
                  ))}
                </Carousel>
              </div>
            </div>
          </div>
           {/***  NOSOTROS ***/}
           <div id="nosotros" className="bg-gradient-to-r from-blue-light to-white -mx-24 px-24 py-32 mb-14">
             <h4 className="font-bold text-5xl mb-10">¿QUIÉNES SOMOS?</h4>
             <p className="text-2xl font-light">Somos una empresa colombiana fundada por ingenieros con experiencia en el diseño y desarrollo de soluciones en 3d y fieles    creyentes en que los animales merecen segundas oportunidades.
              en OrthoMaker estamos comprometidos con el bienestar de los animales, contamos con un equipo de ingenieros y de la mano de especialistas en veterinaria, buscamos brindar soluciones ortopédicas confiables y seguras que estén a su alcance. haciendo uso de la mejor tecnología, la creatividad y nuestro conocimiento para satisfacer las necesidades de cada uno de nuestros pacientes.</p>
           </div>
          {/***  TEAM ***/}
          <div className="mb-14">
            <h4 className="text-2xl font-light mb-14">Equipo de trabajo</h4>
            <div className="grid grid-cols-2 gap-2">
              {TeamData.map((tData) => (
                <CardTeam
                  key={tData.id}
                  name={tData.name}
                  profesion={tData.profesion}
                  puesto={tData.puesto}
                  img={tData.img}
                  accion={tData.accion}
                />
              ))}
            </div>
          </div>
          {/***  CONTACTO ***/}
          <div id="contacto"
            className="bg-red-dark text-white mb-16 mt-40 flex"
            style={{ borderRadius: "50px" }}
          >
            <div className="w-3/5 py-10 px-20">
              <h4 className="text-2xl font-light mb-6 text-white-transparent">
                Contacto
              </h4>
              <h4 className="text-5xl">
                Tienes dudas, <br /> habla con nosotros
              </h4>
              <p className="text-2xl font-light my-2">
                En ORTHOMAKER diseñamos y fabricamos prótesis para mascotas
                adaptándonos a las necesidades de cada uno de vosotros.
                Fabricadas para durar con materiales respetuosos con el medio
                ambiente y a la vez cómodos para tu mascota.
              </p>
              <textarea
                  className=" text-purple-dark focus-visible:border-pink-100 shadow-xl p-4 mb-2 rounded-xl h-32 w-full bg-blue-light focus:outline-none"
                  placeholder="Escribe tu mensaje aquí"
                />
              <div className="flex justify-between">
              <div className="w-96 h-12 rounded-xl bg-blue-light flex shadow-xl">
                <input
                  className=" text-purple-dark focus-visible:border-pink-100 px-4 rounded-xl w-4/5 h-full bg-blue-light focus:outline-none"
                  type="mail"
                  placeholder="Mail"
                />
                <span className="w-1/5 flex justify-end items-center pr-4">
                  <span>
                    <img src="/img/mail.png" width="20px" height="18px" />
                  </span>
                </span>
              </div>
              <button type="submit" className="w-36 bg-purple-dark rounded-xl ml-2 hover:bg-opacity-90 shadow-lg hover:shadow transition duration-300">Enviar</button>
              </div>
            </div>
            <div className="w-2/5 flex items-end">
              <img src="/img/dog-contact.png" width="300px" height="300px" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}