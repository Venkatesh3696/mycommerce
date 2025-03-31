import React from "react";
import { NavLink } from "react-router-dom";
import { UserRound, ShoppingCart, Heart, Logs } from "lucide-react";

const categories = [
  {
    id: 1,
    name: "Bikes",
    path: "/",
  },
  {
    id: 2,
    name: "Bikes",
    path: "/",
  },
  {
    id: 3,
    name: "Bikes",
    path: "/",
  },
  {
    id: 4,
    name: "Bikes",
    path: "/",
  },
];

const Header = () => {
  return (
    <div className="shadow-md shadow-gray-500 p-4">
      <div className="md:mx-16 mx-3 flex  justify-between items-center gap-4">
        <Logs className="md:hidden" />
        <NavLink to={"/"}>
          <h1 className="text-2xl">Logo here</h1>
        </NavLink>
        <div className=" justify-between items-center gap-4 hidden md:flex ">
          {categories.map((category) => (
            <NavLink
              key={category.id}
              to={category.path}
              className="hover:text-blue-600"
            >
              {category.name}
            </NavLink>
          ))}
        </div>
        <div className="flex justify-center gap-6 items-center">
          <UserRound />
          <Heart />
          <ShoppingCart />
        </div>
      </div>
    </div>
  );
};

export default Header;
