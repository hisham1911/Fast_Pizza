import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="container relative mx-auto flex flex-wrap items-center justify-between bg-white px-5 shadow-md">
      <Link className="text-main flex h-14 w-full items-center justify-center text-xl font-bold md:h-20 md:w-auto">
        Elzero
      </Link>
      <ul className="flex w-full md:mb-0 mb-2 justify-center md:w-auto">
        <li>
          <Link className="headerLink">
            Article
          </Link>
        </li>
        <li>
          <Link className="headerLink">
            Gallery
          </Link>
        </li>
        <li>
          <Link className="headerLink">
            Features
          </Link>
        </li>
        <li>
          <Link className="headerLink">
            Other Links
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
