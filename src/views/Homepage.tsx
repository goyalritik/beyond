import AboutTeam from "./Homepage/AboutTeam";
import BgImage from "./Homepage/BgImage";
import Candidates from "./Homepage/Candidates";
import Career from "./Homepage/Career";
import Footer from "./Homepage/Footer";
import LatestNews from "./Homepage/LatestNews";
import WhyChooseUs from "./Homepage/WhyChooseUs";

function Homepage() {
  return (
    <>
      <BgImage />
      <WhyChooseUs />
      <AboutTeam />
      <LatestNews />
      <Candidates />
      <Career />
      <Footer />
    </>
  );
}

export default Homepage;
