import Exceptional from "../components/Exceptional/Exceptional";
import Footer from "../components/Footer/Footer";
import HomePage from "../components/HomePage/HomePage";
import LoveClickup from "../components/LoveClickup/LoveClickup";
import PerfectFit from "../components/PerfectFit/PerfectFit";
import Productivity from "../components/Productivity/Productivity";
import ProjectWeCan from "../components/ProjectWeCan/ProjectWeCan";
import SaveTime from "../components/SaveTime/SaveTime";
// import TeamTogether from "../components/TeamTogether/TeamTogether";
import Unleash from "../components/Unleash/Unleash";
import WorkedWith from "../components/WorkedWith/WorkedWith";

const Home = () => {
  return (
    <div>
      <HomePage />
      <ProjectWeCan />
      <SaveTime />
      <WorkedWith />
      {/* <TeamTogether /> */}
      <PerfectFit />
      <Unleash />
      <Productivity />
      <LoveClickup />
      <Exceptional />
      <Footer />
    </div>
  );
};

export default Home;
