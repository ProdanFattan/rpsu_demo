import type { NextPage } from 'next';
import Image from "next/image";


export type AdmissionsType = {
  	className?: string;
	onClose?: () => void;
}



const Admissions:NextPage<AdmissionsType> = ({ className="", onClose }) => {
  	return (
		<div className={`w-[229px] relative shadow-[0px_4px_20px_rgba(0,_0,_0,_0.25)] rounded-xl bg-white flex flex-col items-start justify-start py-4 px-5 box-border gap-[9px] max-w-full max-h-full overflow-auto text-center text-base text-darkslateblue font-body-headigs ${className}`}>
		<div className="self-stretch rounded-xl flex flex-row items-center justify-center py-4 px-5">
			  <div className="flex-1 relative font-semibold">Academics Overview</div>
		</div>
		<div className="self-stretch rounded-xl flex flex-row items-center justify-center py-4 px-5">
			  <div className="flex-1 relative font-semibold">Admission Requirements</div>
		</div>
		<div className="self-stretch rounded-xl flex flex-row items-center justify-center py-4 px-5">
			  <div className="flex-1 relative font-semibold">{`Tuition & Others Fees`}</div>
		</div>
		<div className="self-stretch rounded-xl flex flex-row items-center justify-center py-4 px-5">
			  <div className="flex-1 relative font-semibold">Alumni</div>
		</div>
		<div className="self-stretch rounded-xl flex flex-row items-center justify-center py-4 px-5">
			  <div className="flex-1 relative font-semibold">Special Waiver / Scholarship</div>
		</div>
		<div className="self-stretch rounded-xl flex flex-row items-center justify-center py-4 px-5">
			  <div className="flex-1 relative font-semibold">International Admission</div>
		</div>


  </div>);

};

export default Admissions;

