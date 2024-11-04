import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { RiSearchLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { Select } from "antd";
import { IoBookmarkOutline } from "react-icons/io5";

const { Option } = Select;

const Header: React.FC = () => {
  return (
    <div>
      <div>
        <div className="flex justify-between">
          <ul className="flex items-center gap-10">
            <Link to="/">
              <li className="text-[#FC4308]">
                <span className="font-bold">MEGA</span>
                <span className="font-semibold">.news</span>
              </li>
            </Link>
            <li>
              <Select
                defaultValue="Categories"
                style={{ width: 120 }}
                bordered={false}
              >
                <Option value="Categories">Categories</Option>
                <Option value="Food">Food</Option>
                <Option value="Animal">Animal</Option>
                <Option value="Car">Car</Option>
              </Select>
            </li>
            <li>
              <Select
                defaultValue="Pages"
                style={{ width: 90 }}
                bordered={false}
              >
                <Option value="Pages">Pages</Option>
                <Option value="Food">Food</Option>
                <Option value="Animal">Animal</Option>
                <Option value="Car">Car</Option>
              </Select>
            </li>
            <Link to="/contact">
              <li>Contact Us</li>
            </Link>
            <Link to="/about">
              <li>About Us</li>
            </Link>
          </ul>
          <ul className="flex items-center gap-8">
            <li className="relative">
              <BsThreeDotsVertical
                style={{ fontSize: "20px" }}
                className="absolute top-3 left-4 cursor-pointer"
              />
              <input
                style={{ paddingLeft: "45px" }}
                type="text"
                placeholder="Search anything"
                className="bg-gray-100 py-2 w-[300px] rounded-lg outline-none"
              />
              <RiSearchLine
                style={{ fontSize: "20px" }}
                className="absolute top-3 right-5 cursor-pointer"
              />
            </li>
            <li className="flex items-center gap-2">
              <img
                className="rounded-lg w-[35px] h-[35px]"
                src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-55958-614810.jpg&fm=jpg"
                alt="User"
              />
              <div>
                <Select
                  defaultValue="Behzad"
                  style={{ width: 120 }}
                  bordered={false}
                >
                  <Option value="Behzad">Behzad</Option>
                  <Option value="Ali">Ali</Option>
                  <Option value="Sardor">Sardor</Option>
                  <Option value="Murod">Murod</Option>
                </Select>
              </div>
            </li>
            <li>
              <button className="bg-[#F5F5F5] p-3 rounded-lg">
                <IoBookmarkOutline className="text-[18px]" />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
