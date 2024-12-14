import type { NextPage } from 'next';
import Image from "next/image";



const Footer:NextPage = () => {
  	return (
    		<div className="w-full relative h-[550px] text-left text-sm text-gainsboro font-raleway bg-blue-700">
      			{/* <Image className="absolute top-[0px] left-[-126px] w-[1699px] h-[550px]" width={1699} height={550} alt="" src="Rectangle 12.svg" /> */}
      			<div className="absolute top-[486px] left-[454.84px] w-[546.2px] flex flex-row items-center justify-center p-2.5 box-border text-center text-white">
        				<div className="relative font-light">Copyright © RPSU 2014-2023. Designed By Software Development Team, RPSU</div>
      			</div>
      			{/* <Image className="absolute top-[477.5px] left-[0px] w-[1440px] h-0" width={1440} alt="" src="Line 1.svg" /> */}
      			<div className="absolute top-[215px] left-[923px] w-[356px] h-[45px]">
        				<div className="absolute top-[0px] left-[0px] flex flex-row items-end justify-start gap-5">
          					<Image className="w-11 relative h-11" width={44} height={44} alt="" src="/social-icons.png" />
          					<Image className="w-[42px] relative h-[42px]" width={42} height={42} alt="" src="/social-cons2.png" />
          					<Image className="w-[41px] relative h-[42px]" width={41} height={42} alt="" src="/social-icons3.png" />
          					<Image className="w-[41px] relative h-[43px]" width={41} height={43} alt="" src="/social-icons4.png" />
          					<Image className="w-[43px] relative h-[45px]" width={43} height={45} alt="" src="/social-icons5.png" />
          					<Image className="w-[45px] relative h-11" width={45} height={44} alt="" src="/social-icons6.png" />
        				</div>
      			</div>
      			<div className="absolute top-[61px] left-[395px] flex flex-col items-start justify-start text-5xl">
        				<div className="w-[204px] flex flex-row items-center justify-center py-4 px-5 box-border">
          					<b className="flex-1 relative">Reach out</b>
        				</div>
      			</div>
      			<div className="absolute top-[59px] left-[81px] w-[260.2px] flex flex-col items-start justify-start gap-4 text-5xl">
        				<div className="self-stretch flex flex-row items-center justify-center py-4 px-5">
          					<b className="flex-1 relative">Useful Links</b>
        				</div>
        				<div className="self-stretch flex flex-col items-start justify-start text-xl font-open-sans">
          					<div className="self-stretch flex flex-row items-center justify-center py-4 px-5">
            						<div className="flex-1 relative font-semibold">{`Result Verification `}</div>
          					</div>
          					<div className="self-stretch flex flex-row items-center justify-center py-4 px-5">
            						<div className="flex-1 relative font-semibold">E-Library</div>
          					</div>
          					<div className="self-stretch flex flex-row items-center justify-center py-4 px-5">
            						<div className="flex-1 relative font-semibold">Career at RPSU</div>
          					</div>
          					<div className="self-stretch flex flex-row items-center justify-center py-4 px-5">
            						<div className="flex-1 relative font-semibold">UGC Bangladesh</div>
          					</div>
          					<div className="w-[293px] flex flex-row items-center justify-center py-4 px-5 box-border">
            						<div className="flex-1 relative font-semibold">Kumudini Sister Concerns</div>
          					</div>
        				</div>
      			</div>
      			{/* <Image className="absolute top-[322px] left-[1063px] w-[66.5px] h-[67px]" width={67} height={67} alt="" src="top button.svg" /> */}
      			<div className="absolute top-[147px] left-[410px] w-[355px] h-[165px] text-xl font-open-sans">
        				<Image className="absolute top-[8px] left-[1px] w-5 h-[27px]" width={20} height={27} alt="" src="/Icon.png" />
        				<Image className="absolute top-[82px] left-[0px] rounded-sm w-[23px] h-[17px]" width={23} height={17} alt="" src="/Icon3.png" />
        				<Image className="absolute top-[138px] left-[1px] rounded-sm w-5 h-5" width={20} height={20} alt="" src="/Icon2.png" />
        				<div className="absolute top-[75px] left-[22.21px] w-[266.2px] h-8 flex flex-row items-center justify-center py-4 px-5 box-border">
          					<div className="flex-1 relative font-semibold">info@rpsu.edu.bd</div>
        				</div>
        				<div className="absolute top-[131px] left-[22.21px] w-[287px] h-[34px] flex flex-row items-center justify-center py-4 px-5 box-border">
          					<div className="flex-1 relative font-semibold">(+88) 02-7635000</div>
        				</div>
        				<div className="absolute top-[0px] left-[21px] w-[334px] h-[55px] flex flex-row items-center justify-center py-4 px-5 box-border">
          					<div className="flex-1 relative font-semibold">
            						<p className="m-0">25, Sultan Giasuddin Road.</p>
            						<p className="m-0">Shitalakhya, Naryanganj-1400</p>
          					</div>
        				</div>
      			</div>
      			<div className="absolute top-[89px] left-[863px] w-[477px] h-14 text-darkslategray font-open-sans">
        				<div className="absolute top-[0px] left-[0px] rounded-[10px] bg-white w-[477px] h-14" />
        				<div className="absolute top-[18px] left-[38px] inline-block w-[362px]">Search</div>
        				<div className="absolute top-[0px] left-[392px] w-[64.8px] h-14 flex flex-col items-center justify-center p-2.5 box-border">
          					<Image className="w-[17px] relative h-4" width={17} height={16} alt="" src="/search-icon.png" />
        				</div>
      			</div>
    		</div>);
};

export default Footer;
