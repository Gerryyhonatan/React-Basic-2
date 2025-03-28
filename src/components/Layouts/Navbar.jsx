import { useContext, useEffect, useState } from "react";
import { useLogin } from "../../hooks/useLogin";
import Button from "../Elements/Button";
import { useSelector } from "react-redux";
import { DarkMode } from "../../context/DarkMode";
import { useTotalPrice } from "../../context/TotalPriceContext";

const Navbar = () => {
  const username = useLogin();
  const {isDarkMode, setIsDarkMode} = useContext(DarkMode)
  const [totalCart, setTotalCart] = useState(0);
  const cart = useSelector((state) => state.cart.data);
  const {total} = useTotalPrice()
  

  useEffect(() => {
    const sum = cart.reduce((acc, item) => {
      return acc + item.quantity;
    }, 0);
    setTotalCart(sum);
  }, [cart]);
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };
  return (
    <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
      {username}
      <Button color="bg-red-600 ml-5" onClick={handleLogout}>
        Logout
      </Button>
      
      <div className="flex items-center bg-gray-800 p-2 rounded-md ml-5 mr-5">
        Item : {totalCart} | Price : ${total}
      </div>

      <Button
        color="bg-black "
        onClick={() => setIsDarkMode(!isDarkMode)}
      >
        {isDarkMode ? "Light" : "Dark"}
      </Button>
    </div>
  );
};

export default Navbar;
