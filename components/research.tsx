import type { NextPage } from 'next';
import Image from "next/image";


export type ResearchType = {
  	className?: string;
}



const Research:NextPage<ResearchType> = ({ className="" }) => {
  	return (
    		<div className={`w-[281px] relative h-[438px] max-w-full max-h-full overflow-auto text-center text-base text-darkslateblue font-body-headigs ${className}`}>
      			<Image className="relative w-[281px] h-[339px]" width={281} height={339} alt="" src="Union.svg" />
      			<div className="absolute top-[27px] left-[27px] shadow-[0px_4px_20px_rgba(0,_0,_0,_0.25)] rounded-xl bg-white w-[227px] flex flex-col items-start justify-start py-4 px-5 box-border gap-[9px]">
        				<div className="self-stretch rounded-xl flex flex-row items-center justify-center py-4 px-5">
          					<div className="flex-1 relative font-semibold">RPSU Journal</div>
        				</div>
        				<div className="self-stretch rounded-xl flex flex-row items-center justify-center py-4 px-5">
          					<div className="flex-1 relative font-semibold">Funding</div>
        				</div>
        				<div className="self-stretch rounded-xl flex flex-row items-center justify-center py-4 px-5">
          					<div className="flex-1 relative font-semibold">Blind Review</div>
        				</div>
      			</div>
    		</div>);
};

export default Research;
