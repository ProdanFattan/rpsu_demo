import type { NextPage } from 'next';


export type AboutDropdownType = {
  	className?: string;
}



const AboutDropdown:NextPage<AboutDropdownType> = ({ className="" }) => {
  	return (
    		<div className={`w-[229px] relative shadow-[0px_4px_20px_rgba(0,_0,_0,_0.25)] rounded-xl bg-white flex flex-col items-start justify-start py-4 px-5 box-border gap-[9px] max-w-full max-h-full overflow-auto text-center text-base text-darkslateblue font-body-headigs ${className}`}>
      			<div className="self-stretch rounded-xl flex flex-row items-center justify-center py-4 px-5">
        				<div className="flex-1 relative font-semibold">IQAC</div>
      			</div>
      			<div className="self-stretch rounded-xl flex flex-row items-center justify-center py-4 px-5">
        				<div className="flex-1 relative font-semibold">History</div>
      			</div>
      			<div className="self-stretch rounded-xl flex flex-row items-center justify-center py-4 px-5">
        				<div className="flex-1 relative font-semibold">Our Founder</div>
      			</div>
      			<div className="self-stretch rounded-xl flex flex-row items-center justify-center py-4 px-5">
        				<div className="flex-1 relative font-semibold">Managing Director</div>
      			</div>
      			<div className="self-stretch rounded-xl flex flex-row items-center justify-center py-4 px-5">
        				<div className="flex-1 relative font-semibold">Vice Chancellor</div>
      			</div>
      			<div className="self-stretch rounded-xl flex flex-row items-center justify-center py-4 px-5">
        				<div className="flex-1 relative font-semibold">Vision</div>
      			</div>
      			<div className="self-stretch rounded-xl flex flex-row items-center justify-center py-4 px-5">
        				<div className="flex-1 relative font-semibold">Why Study At RPSU</div>
      			</div>
      			<div className="self-stretch rounded-xl flex flex-row items-center justify-center py-4 px-5">
        				<div className="flex-1 relative font-semibold">Administration</div>
      			</div>
      			<div className="self-stretch rounded-xl flex flex-row items-center justify-center py-4 px-5">
        				<div className="flex-1 relative font-semibold">Contact</div>
      			</div>
    		</div>);
};

export default AboutDropdown;
