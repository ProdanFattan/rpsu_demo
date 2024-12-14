import type { NextPage } from "next";

const SchoolsSlider: NextPage = () => {
  return (
    <div className="w-full relative bg-black h-[446px]">
    <div className="w-full relative h-[398px] text-left text-13xl text-white font-raleway">
      <div className="absolute top-[0px] left-[818px] w-[292px] h-[398px]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-31xl bg-brown" />
        <b className="absolute h-[27.89%] w-9/12 top-[8.04%] left-[12.67%] inline-block">
          Kumudini School of Public Health
        </b>
        <div className="absolute h-[50.25%] w-9/12 top-[42.96%] left-[12.67%] text-mini inline-block font-open-sans">
          <span>
            The Kumudini School of Public Health is a premier institution
            dedicated to cultivating tomorrow's leaders. With a focus global
            perspectives, and practical skills, we prepare students to thrive in
            dynamic environments.
          </span>
        </div>
      </div>
    </div>
    </div>
  );
};

export default SchoolsSlider;
