import Link from "next/link";
import SignUp1 from "./dj/signup";

export default function Home() {
  return <SignUp1 />;
  return (
    <div className="w-[1440px] h-[2849px] relative overflow-hidden bg-white">
      <img
        src="/images/image-7.png"
        className="w-[1441px] h-[991.79px] absolute left-[-2px] top-[-1px] object-none"
      />
      <div className="w-[1440px] h-[784px] absolute left-[-1px] top-[-1px] bg-black/40"></div>
      <p className="w-[441px] absolute left-[137px] top-[499px] text-md text-left text-white">
        Seamlessly manage song requests, captivate fans like never before, and
        unlock new income streams.
      </p>
      <p className="w-[674px] absolute left-[137px] top-[340px] text-7xl font-medium text-left text-white">
        Earn More Doing What You Love
      </p>
      <div className="flex justify-start items-start absolute left-[1199px] top-[35px] gap-2.5 px-5 py-2 rounded bg-[#582dd1]">
        <Link
          href="/dj/signup"
          className="flex-grow-0 flex-shrink-0 text-xs font-semibold text-center text-white"
        >
          WEB APP
        </Link>
      </div>
      <div className="flex justify-start items-start absolute left-[137px] top-[581px] gap-5">
        <Link
          href="/dj/signup"
          className="flex-grow-0 flex-shrink-0 w-[157px] h-[46px] relative"
        >
          <div className="w-[157px] h-[46px] absolute left-[-0.5px] top-[-0.5px] rounded bg-[#582dd1]"></div>
          <div className="absolute left-[45.07px] top-[13px] text-xs font-semibold text-center uppercase text-white">
            Web app
          </div>
        </Link>
      </div>
      <div className="w-[1440px] h-[610px] absolute left-0 top-[1784px] overflow-hidden">
        <div className="w-[1440px] h-[610px] absolute left-[-0.5px] top-[-0.5px] bg-[#040405]"></div>
        <div className="w-[618px] h-[610px] absolute left-0 top-0">
          <img
            src="/images/image.png"
            className="w-[618px] h-[610px] absolute left-[-0.5px] top-[-0.5px] object-cover"
          />
        </div>
        <div className="flex flex-col justify-start items-start absolute left-[728px] top-[140px] gap-11">
          <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
            <p className="flex-grow-0 flex-shrink-0 w-[352px] text-[32px] text-left text-[#582dd1]">
              Unlock Your DJ Potential with TipTop
            </p>
            <p className="flex-grow-0 flex-shrink-0 w-[460px] text-base text-left text-white">
              Seamlessly manage song requests, captivate fans like never before,
              and unlock new income streams. Say goodbye to the hassle of manual
              song selection and embrace a streamlined experience that keeps the
              party going. Gain deeper fan engagement, amplify your reach, and
              enjoy the thrill of earning more while doing what you love. Take
              your DJ gigs to new heights with TipTop and experience the
              ultimate evolution in DJing.
            </p>
          </div>
        </div>
      </div>
      <div className="w-[1440px] h-[1000px] absolute left-0 top-[784px] overflow-hidden bg-[#040405]">
        <p className="absolute left-[611px] top-[106px] text-4xl text-center text-[#582dd1]">
          Our Services
        </p>
        <p className="w-[713px] absolute left-[364px] top-[169px] text-lg text-center text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam, dapibus
          mattis vel feugiat erat tortor eleifend.
        </p>
        <img
          src="/images/image-13.png"
          className="w-[241px] h-[505px] absolute left-[477px] top-[277px] object-cover"
        />
        <img
          src="/images/image-15.png"
          className="w-[241px] h-[505px] absolute left-[1075px] top-[277px] object-cover"
        />
        <img
          src="/images/image-12.png"
          className="w-[241px] h-[505px] absolute left-[179px] top-[277px] object-cover"
        />
        <img
          src="/images/image-14.png"
          className="w-60 h-[503px] absolute left-[775px] top-[279px] object-cover"
        />
        <p className="w-[157px] absolute left-[180px] top-[822px] text-[21px] text-left uppercase text-white">
          Manage requests
        </p>
        <p className="w-[157px] absolute left-[478px] top-[822px] text-[21px] text-left uppercase text-white">
          Select Your Set
        </p>
        <p className="w-[157px] absolute left-[776px] top-[822px] text-[21px] text-left uppercase text-white">
          Earn more money
        </p>
        <p className="w-[157px] absolute left-[1077px] top-[822px] text-[21px] text-left uppercase text-white">
          cash out your money
        </p>
      </div>
      <div className="w-[1440px] h-[403px] absolute left-0 top-[2394px] overflow-hidden bg-[#040405]">
        <p className="absolute left-[624px] top-[100px] text-4xl font-bold text-center text-[#582dd1]">
          Newsletter
        </p>
        <p className="w-[410px] absolute left-[515px] top-[163px] text-lg text-center text-white">
          Get our free, 5 min weekly newsletter. Used by Dj’s to earn more
          money.
        </p>
        <div className="flex justify-start items-start absolute left-[477px] top-[241px] gap-[11px]">
          <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[343px] relative overflow-hidden gap-2.5 px-[15px] py-3 rounded bg-white border border-[#ccc]">
            <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#ccc]">
              Your email
            </p>
          </div>
          <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5 px-6 py-[13px] rounded bg-[#582dd1]">
            <p className="flex-grow-0 flex-shrink-0 text-xs font-semibold text-center uppercase text-white">
              Subscribe
            </p>
          </div>
        </div>
      </div>
      <img
        src="/images/image-10.png"
        className="w-[190px] h-[470px] absolute left-[1022px] top-[182px] object-cover"
      />
      <img
        src="/images/image-11.png"
        className="w-[127px] h-[49px] absolute left-[134px] top-[22px] object-cover"
      />
      <div className="w-[1440px] h-[52px]">
        <div className="w-[1440px] h-[52px]">
          <div className="w-[1440px] h-[52px] absolute left-[-0.5px] top-[2796.5px] bg-[#f6f6f8]"></div>
          <svg
            width="1"
            height="18"
            viewBox="0 0 1 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-[761.5px] top-[2814.5px]"
            preserveAspectRatio="none"
          >
            <line
              x1="0.5"
              y1="-2.18557e-8"
              x2="0.500001"
              y2="18"
              stroke="#BEBEBE"
            ></line>
          </svg>
          <p className="absolute left-[541px] top-[2811px] text-md text-left text-[#898989]">
            Copyright © 2023 TipTop
          </p>
          <Link
            href="/"
            className="absolute left-[791px] top-[2811px] text-md text-left text-[#898989]"
          >
            Privacy Policy
          </Link>
          <Link
            href="/"
            className="absolute left-[929px] top-[2811px] text-md text-left text-[#898989]"
          >
            Terms and Conditions
          </Link>
        </div>
      </div>
    </div>
  );
}
