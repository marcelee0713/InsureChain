import DescriptionBox from "../components/landing_page/description_box";
import { PROJECT_DESC } from "../constants/project.desc";

const LandingPage = () => {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center gap-10">
      <div className="flex flex-col gap-2 animate-animfadeAbove">
        <h1 className="text-black font-bold text-5xl font-openSans text-center">
          InsureChain
        </h1>
        <h1 className="text-black font-normal text-xl font-openSans text-center px-52">
          {PROJECT_DESC.DESC}
        </h1>
      </div>

      <h1 className="text-black font-normal text-xl font-openSans text-center animate-animfadeAbove">
        In <strong className="font-openSans">InsureChain</strong>, you can
      </h1>

      <div className="flex w-full justify-evenly items-center ">
        <DescriptionBox
          imageUrl="/images/invest.svg"
          imageAlt="Challenge Image"
          name="Challenges"
          desc={PROJECT_DESC.CHALLENGES_DESC}
        />

        <DescriptionBox
          imageUrl="images/receipt.svg"
          imageAlt="Insurance Image"
          name="Have an Insurance"
          desc={PROJECT_DESC.EARN_DESC}
        />
      </div>
    </div>
  );
};

export default LandingPage;
