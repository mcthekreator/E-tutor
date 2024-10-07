import PrimaryBtn from "./PrimaryBtn";
import headerImage from "../assets/headerImage.png";

export default function Header() {
  return (
    <header className=" border-Gray-50 bg-Gray-50 flex w-full h-4/6 ">
      <div className=" w-1/2 pl-80 pt-40">
        <h1 className="text-6xl font-semibold text-Gray-900">Learn with expert <br /> anytime anywhere</h1>
        <p className="my-10 text-xl text-Gray-700">
          Our mision is to help people to find the best course <br /> online and learn
          with expert anytime, anywhere.
        </p>
        <PrimaryBtn text="Create Account" />
      </div>
      <div className="w-1/2">
        <img src={headerImage} alt="" className="w-full h-full"/>
      </div>
    </header>
  );
}
