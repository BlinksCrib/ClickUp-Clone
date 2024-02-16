import React from "react";
import { Star } from "./Icons";
import tick from "../assets/tick.svg";
import free from "../assets/free.svg";

interface Get {
  icon: any;
  name: string;
}

const PerfectFits: React.FC<{
  fits: any;
  heading: string;
  desc: string;
  clientImg: any;
  small: string;
  span: string;
  clientCompany: any;
  toGet: Get[];
}> = ({
  fits,
  heading,
  desc,
  clientImg,
  small,
  span,
  clientCompany,
  toGet,
}) => {
   return (
    <section>
      <div className="flex justify-center items-center w-full bg-[#ffffff] border border-[#ceceea] rounded-md py-10">
        <div className="flex justify-between items-start w-[95%]">
          <div className="w-[60%]">
            <h1 className="font-bold text-2xl tetx-[#24223e] mb-3">
              {heading}
            </h1>
            <p className="text-lg font-medium">{desc}</p>
            <div className="mt-">
              {fits?.map((fit: any, i: any) => (
                <div className="flex justify-start items-center  mb-4" key={i}>
                  <img src={tick} alt="" />
                  <p className="ml-3 text-[#24223e]">{fit}</p>
                </div>
              ))}
            </div>
            <div className="flex justify-start items-center mt-14 w-full">
              <div className="w-[15%]">
                <img
                  src={clientImg}
                  alt="client headshots"
                  className="w-[80%]"
                />
              </div>
              <div className="w-[85%] flex flex-col ">
                <div className="flex justify-start items-center w-full">
                  <Star />
                  <small className="ml-6">{clientCompany}</small>
                </div>
                <div className="w-full">
                  <p className="text-lg mt-4">
                    "<span className="font-bold">{small}</span>{" "}
                    <span>{span}</span>"
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[35%]">
            <div className="bg-[#ffffff] border border-[#ceceea] rounded-md ">
              {toGet?.map((get, i) => (
                <div
                  className="flex justify-start items-center py-6 px-4 border-b border-[#ceceea] last:border-none"
                  key={i}
                >
                  <small>
                    <get.icon />
                  </small>
                  <p className="ml-4 font-medium">{get.name}</p>
                </div>
              ))}
            </div>
            <div className="relative">
              <img
                src={free}
                alt="free tag"
                className="absolute right-[5%] top-[-50%]"
              />
              <button className="font-bold perfectfit-btn text-center w-full text-[#ffffff] mt-10 rounded-md py-4 flex justify-center items-center">
                Use this Solution{" "}
                <i className="fa-solid fa-arrow-right ml-3 text-xl"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerfectFits;
