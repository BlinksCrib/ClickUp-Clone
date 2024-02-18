import React from "react";
import { Link } from "react-router-dom";

interface LinksProps {
  handClose?: any;
}
const Links: React.FC<LinksProps> = ({ handClose }) => {
  const link = [
    { name: "Product" },
    { name: "Solutions" },
    { name: "Learn" },
    {
      name: "Pricing",
    },
    {
      name: "Enterprise",
    },
  ];

  return (
    <section>
      <div>
        <ul className="flex justify-center items-center space-x-6">
          {link?.map((item, i) => (
            <li className="cursor-pointer flex justify-center items-center hover:text-[rgb(123,104,238)] active:text-[rgb(123,104,238)] focus:text-[rgb(123,104,238)]focus:underline focus:underline-offset-2 focus:decoration-2 font-semibold" key={i} onClick={handClose}>
              <Link
                to="/"
                className=""
              >
                {item.name}
              </Link>{" "}
              <i
                className={`fa-solid fa-chevron-down ml-2 ${
                  !(i === 3 || i === 4) ? "block" : "hidden"
                }`}
              ></i>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Links;
