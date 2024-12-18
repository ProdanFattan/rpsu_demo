import type { NextPage } from 'next';
import Image from "next/image";


export type STUDENTLIFEType = {
  	className?: string;
	  onClose?: () => void;
	  onOutsideClick ?:() => void;
}



const STUDENTLIFE:NextPage<STUDENTLIFEType> = ({ className="", onClose, onOutsideClick  }) => {
  	return (
    		<div className={`w-72 relative h-[445px] max-w-full max-h-full overflow-auto text-center text-base text-slateblue font-body-headigs ${className}`}>
      			<div className="absolute top-[27px] left-[27px] shadow-[0px_4px_20px_rgba(0,_0,_0,_0.25)] rounded-xl bg-white w-[234px] h-[391px] flex flex-col items-start justify-start py-4 px-5 box-border">
        				<div className="self-stretch rounded-xl flex flex-row items-center justify-center py-4 px-5">
          					<div className="flex-1 relative font-semibold">Events @ RPSU</div>
        				</div>
        				<div className="self-stretch rounded-xl flex flex-row items-center justify-center py-4 px-5">
          					<div className="flex-1 relative font-semibold">Campus Gallery</div>
        				</div>
        				<div className="self-stretch rounded-xl flex flex-row items-center justify-center py-4 px-5">
          					<div className="flex-1 relative font-semibold">Virtual Tour</div>
        				</div>
        				<div className="self-stretch rounded-xl flex flex-row items-center justify-center py-4 px-5">
          					<div className="flex-1 relative font-semibold">Accomodation</div>
        				</div>
        				<div className="self-stretch rounded-xl flex flex-row items-center justify-center py-4 px-5">
          					<div className="flex-1 relative font-semibold">Live off Campus</div>
        				</div>
        				<div className="self-stretch rounded-xl flex flex-row items-center justify-center py-4 px-5">
          					<div className="flex-1 relative font-semibold">Culture of Support</div>
        				</div>
        				<div className="self-stretch flex flex-row items-center justify-center py-4 px-5">
          					<div className="flex-1 relative font-medium">RPSU Policies</div>
        				</div>
      			</div>
    		</div>);
};

export default STUDENTLIFE;
