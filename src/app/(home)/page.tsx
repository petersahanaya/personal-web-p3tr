import Sidebar from "@component/sidebar";
import Loader from "@component/loader";
import Footer from "@component/footer";

import Content from "./content";
import Works from "../(work)/works";
import Contact from "../(contact)/contact";

const Personal = () => {
  return (
    <>
      <main id="home" className=" h-screen w-screen bg-[#979F9F]">
        <Loader />
        <Content />
        <Works />
        <Contact />
        <Footer />
        <Sidebar />
      </main>
    </>
  );
};

export default Personal;
