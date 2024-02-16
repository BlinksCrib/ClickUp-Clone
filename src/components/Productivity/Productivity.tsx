import productivity from "../../assets/users-love-us.png"

const Productivity = () => {
  return (
    <div>
        <div className="w-full lg:flex hidden justify-center items-center mt-[6rem]">
            <div className="w-[90%] flex justify-center items-center flex-col">
                <div className="flex justify-center items-center mb-10">
                    <h4 className="font-bold">95% of users increased their productivity after switching to ClickUp.</h4>
                    <button className="ml-4 bg-[#ffffff] px-5 py-1 border border-[#ceceea] rounded-md font-bold">Join them</button>
                </div>
                <img src={productivity} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Productivity