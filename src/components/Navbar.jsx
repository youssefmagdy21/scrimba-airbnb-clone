import Logo from "../assets/airbnb-logo.png";

function Navbar() {
  return (
    <nav className="h-[70px] w-full flex bg-white py-5 px-9 shadow-lg">
      <img src={Logo} alt="airbnb logo" className=" max-w-[100px]" />
    </nav>
  );
}

export default Navbar;
