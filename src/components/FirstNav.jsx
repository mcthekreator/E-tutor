import logo from "../assets/LOGO.svg";
import bell from "../assets/bell.svg";
import heart from "../assets/heart.svg";
import shoppingcart from "../assets/ShoppingCartSimple.svg";
import PrimaryBtn from "./PrimaryBtn";
import SecondaryBtn from "./SecondaryBtn";
export default function FirstNav() {
  return (
    <div className="flex justify-between bg-Gray-white text-Gray-400 px-12 py-5">
      <div className="flex gap-20 w-8/12">
        <img src={logo} alt="logo" />

        <div className="flex gap-4  w-6/12 ">
          <select
            name=""
            id=""
            className="border border-Gray-100 w-5/12 text-sm font-normal text-Gray-700"
          >
            <option value="">Browse</option>
          </select>
          <input
            type="text"
            className="text-Gray-500 px-3 border border-Gray-100 w-9/12 placeholder:font-light placeholder:text-sm placeholder:pr-3"
            placeholder="What do you want to learn..."
          />
        </div>
      </div>
      <div>
        <ul className="flex items-center gap-4">
          <li>
            <img src={bell} alt="" />
          </li>
          <li>
            <img src={heart} alt="" />
          </li>
          <li>
            {" "}
            <img src={shoppingcart} alt="" />
          </li>
          <SecondaryBtn text="Create Account" />
          <PrimaryBtn text="Sign In" />
        </ul>
      </div>
    </div>
  );
}
