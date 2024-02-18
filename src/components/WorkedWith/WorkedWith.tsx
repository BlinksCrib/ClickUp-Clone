import {
  Booking,
  Fortinet,
  Ibm,
  Logitech,
  Netflix,
  Spotify,
  TMobile,
  Tibc,
} from "../../utils/Icons";

const WorkedWith = () => {
  return (
    <section>
      <div className="w-full flex justify-center items-center mt-[6rem] mb-[5rem]">
        <div className="lg:w-[90%] w-full flex justify-center items-center lg:flex-col flex-col-reverse">
          <div className="flex justify-center items-center mb-10 lg:w-full w-[90%] lg:flex-row flex-col">
            <h4 className="font-bold text-center">
              95% of users increased their productivity after switching to
              ClickUp.
            </h4>
            <button className="lg:ml-4 bg-[#ffffff] px-5 py-1 border border-[#ceceea] rounded-md font-bold mt-6">
              Join them
            </button>
          </div>
          <div className="flex justify-between items-center lg:w-full w-[100%] overflow-y-scroll slide-scroll lg:pb-0 pb-4 lg:mb-0 mb-4">
            <small className="mr-6 ml-6">
              <Fortinet />
            </small>
            <small className="mr-6">
              <Logitech />
            </small>
            <small className="mr-6">
              <Booking />
            </small>
            <small className="mr-6">
              <Ibm />
            </small>
            <small className="mr-6">
              <Tibc />
            </small>
            <small className="mr-6">
              <Spotify />
            </small>
            <small className="mr-6">
              <Netflix />
            </small>
            <small className="mr-6">
              <TMobile />
            </small>
          </div>
          {/* <img src={productivity} alt="" /> */}
        </div>
      </div>
    </section>
  );
};

export default WorkedWith;
