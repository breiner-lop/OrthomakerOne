import Image from "next/image";
import Link from "next/link";
import GetStarted from "../components/Buttons/GetStarted";
import ImaHeader from "../img/protesis.png";
import ConfigIcon from "../img/configIcon.png";
import BoxIcon from "../img/boxIcon.png";
import FeetIcon from "../img/feetIcon.png";
import FeetOne from "../img/feet90.png";
import FeetTwo from "../img/feetrecto.png";
import FeetThree from "../img/prote.png";
import BackOrthoOne from "../img/orthooneback.png";
import DogOne from "../img/dogOne.png"
import DogTwo from "../img/dogTwo.png"
import DogThree from "../img/dogThree.png"


export default function index() {
  return (
    <div className="text-purple-dark">
     <div className="bg-gradient-to-b from-blue-light to-white -mx-24 px-24" style={{background:`url(${BackOrthoOne})`}}>
        {/***  Header ***/}
      <div className="flex justify-center">
        <Image
          src={ImaHeader}
          width="774px"
          height="565px"
          alt="protesisimage"
        />
      </div>
      {/***  OrthoMaker ***/}
      <div className="mb-20">
        <h2 className="text-9xl text-center">OrthoMaker</h2>
        <div className="flex mt-16">
          <div className="w-1/2 pr-32 flex items-center">
            <div>
              <h2 className="font-semibold text-5xl mb-4">How do we do it</h2>
              <p>
                We know how stressful it is to leave your pets at home alone.
                We’re a team of experienced animal caregivers, well connected to
                local veterinarians. Trust to us to love them like our own, and
                to keep them safe and happy till you’re home.
              </p>
            </div>
          </div>
          <div className="w-1/2">
            <div className="shadow p-6 rounded-lg flex items-center my-2">
              <div className="w-1/5">
                <Image src={ConfigIcon} width="75px" height="75px" />
              </div>
              <div className="">
                <h4 className="font-semibold">Automatic Integration</h4>
                <p className="w-4/6">
                  Easy installation and plugins for most popular platforms
                </p>
              </div>
            </div>
            <div className="shadow p-6 rounded-lg flex items-center my-2">
              <div className="w-1/5">
                <Image src={BoxIcon} width="75px" height="75px" />
              </div>
              <div className="">
                <h4 className="font-semibold">Automatic Integration</h4>
                <p className="w-4/6">
                  Easy installation and plugins for most popular platforms
                </p>
              </div>
            </div>
            <div className="shadow p-6 rounded-lg flex items-center my-2"style={{background:`url("/orthooneback.png")`}}>
              <div className="w-1/5">
                <Image src={FeetIcon} width="75px" height="75px" />
              </div>
              <div className="">
                <h4 className="font-semibold">Automatic Integration</h4>
                <p className="w-4/6">
                  Easy installation and plugins for most popular platforms
                </p>
              </div>
            </div>
          </div>
        </div>
        <ul className="flex">
          <li className="rounded-full w-14 h-14 border-2 mx-2 flex items-center justify-center border-red-dark">
            <Image src={FeetOne} width="32px" height="28px" />
          </li>+
          <li className="rounded-full w-14 h-14 border-2 mx-2 flex items-center justify-center border-red-dark">
              <Image src={FeetTwo} width="12px" height="38px" />
          </li>
          <li className="rounded-full w-14 h-14 border-2 mx-2 flex items-center justify-center border-red-dark">
              <Image src={FeetThree} width="20px" height="35px" />
          </li>
        </ul>
      </div>
     </div>
      {/***  OrthoMaker ONE ***/}
      <div>
        <div className="flex justify-between">
          <h2 className="text-5xl font-bold">OrthoMaker ONE</h2>
          <GetStarted />
        </div>
        <div className="-mx-24 my-14">
        <Image  layout="responsive" src={BackOrthoOne} alt="orthomaker one" />
        </div>
        <div className="flex">
            <ul className="w-1/2 text-5xl font-extralight">
                <li className="my-8"><Link href="/">Tecnologia</Link></li>
                <li className="my-8"><Link href="/">Process</Link></li>
                <li className="my-8"><Link href="/">specs</Link></li>
                <li className="my-8"><Link href="/">Pricing</Link></li>
                <li className="my-8"><Link href="/">Frequent questions</Link></li>
            </ul>
            <div className="w-1/2"></div>
        </div>
      </div>
    </div>
  );
}
