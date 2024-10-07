export default function Navbar() {
    return (
      <div className="flex justify-between bg-Gray-900 text-Gray-400 px-12 ">
        <nav>
          <ul className="flex items-center gap-2 ">
            <li className="p-4 border-t-4 border-Gray-900 hover:border-Primary-500 hover:text-white transition duration-500 ease-in-out">
              <a href="#">Home</a>
            </li>
            <li className="p-4 border-t-4 border-Gray-900 hover:border-Primary-500 hover:text-white transition duration-500 ease-in-out">
              <a href="#">Courses</a>
            </li>
            <li className="p-4 border-t-4 border-Gray-900 hover:border-Primary-500 hover:text-white transition duration-500 ease-in-out">
              <a href="#">About</a>
              <a href="#">Contact</a>
            </li>
            <li className="p-4 border-t-4 border-Gray-900 hover:border-Primary-500 hover:text-white transition duration-500 ease-in-out">
              <a href="#">Become an Instructor</a>
            </li>
          </ul>
        </nav>
        <div>
          <ul className="flex items-center gap-10">
            <li className="p-4">
              <select className="bg-opacity-0 bg-Gray-900">
                <option value="">USD</option>
              </select>
            </li>
            <li>
              <select className="bg-Gray-900">
                <option value="">English</option>
              </select>
            </li>
          </ul>
        </div>
      </div>
    );
  }
  