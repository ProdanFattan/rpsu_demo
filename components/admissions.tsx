import type { NextPage } from 'next';
import Image from "next/image";


export type AdmissionsType = {
  	className?: string;
}



const Admissions:NextPage<AdmissionsType> = ({ className="" }) => {
  	return (
    		<div className={`w-[352px] relative [filter:drop-shadow(0px_4px_30px_rgba(0,_0,_0,_0.25))] flex flex-col items-start justify-start py-[15px] px-[21px] box-border gap-2.5 max-w-full max-h-full overflow-auto text-center text-base text-darkslateblue font-body-headigs ${className}`}>
      			<Image className="w-[305px] relative h-[407px] z-[0]" width={305} height={407} alt="" src="Union.svg" />
      			<div className="w-64 !m-[0] absolute top-[43px] left-[46px] flex flex-col items-start justify-start z-[1]">
        				<div className="self-stretch h-[42px] flex flex-row items-center justify-start py-4 px-5 box-border">
          					<div className="flex-1 relative font-medium">Academics Overview</div>
        				</div>
        				<div className="self-stretch flex flex-row items-center justify-start py-4 px-5">
          					<div className="flex-1 relative font-medium">Admission Requirements</div>
        				</div>
        				<div className="self-stretch flex flex-row items-center justify-center py-4 px-5">
          					<div className="flex-1 relative font-medium">Academic Calendar</div>
        				</div>
        				<div className="self-stretch flex flex-row items-center justify-center py-4 px-5">
          					<div className="flex-1 relative font-medium">{`Tuition & Others Fees`}</div>
        				</div>
        				<div className="self-stretch flex flex-row items-center justify-center py-4 px-5">
          					<div className="flex-1 relative font-medium">Alumni</div>
        				</div>
        				<div className="self-stretch flex flex-row items-center justify-center py-4 px-5">
          					<div className="flex-1 relative font-medium">Special Waiver / Scholarship</div>
        				</div>
        				<div className="self-stretch flex flex-row items-center justify-center py-4 px-5">
          					<div className="flex-1 relative font-medium">International Admission</div>
        				</div>
      			</div>
    		</div>);
};

export default Admissions;
