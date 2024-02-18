const Unleash = () => {
  return (
    <section>
      <div className="lg:flex hidden justify-center items-center w-full">
        <div className="mt-[6rem] bg-center bg-cover w-[100%] h-[180vh] unleash-bg flex justify-center items-center">
          <div className="w-[55%] flex justify-center items-center flex-col">
            <h1 className="text-5xl font-extrabold text-[#ffffff]">
              Ready to unleash your team's full potential?
            </h1>
            <div className="flex justify-center items-center mt-10">
              <button className="font-extrabold text-lg bg-[#ffffff] py-4 px-6 rounded-md">YES, lets do this</button>
              <button className="font-extrabold text-lg bg-[rgba(255,255,255,0.1)] py-4 px-6 rounded-md text-[#ffffff] opacity-70 border border-[#ffffff] ml-6">Show me more</button>
            </div>
            <p className="text-[#aa79e8] mt-6 text-xl font-bold">Free forever. No credit card required.</p>
            <p className="text-[#aa79e8] text-xl font-bold">Join 2+ million teams today!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Unleash;
