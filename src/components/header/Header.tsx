import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BiCaretDown } from 'react-icons/bi';
import { HiOutlineSearch } from 'react-icons/hi';
import { SlLocationPin } from 'react-icons/sl';
import { useSelector } from 'react-redux';
import { StateProps } from '../../../type';
import cartIcon from '../../images/cartIcon.png';
import logo from '../../images/logo.png';

const Header = () => {
  const { productData, favoriteData } = useSelector(
    (state: StateProps) => state.next,
  );
  // console.log('productData', productData, 'favoriteData:', favoriteData);
  console.log('productData', productData.length);
  console.log('favoriteData', favoriteData.length);
  return (
    <div className="w-full h-20 bg-amazon_blue text-lightText sticky top-0 z-50">
      <div className="h-full w-full mx-auto inline-flex items-center justify-between gap-1 mdl:gap-3 px-4">
        {/* {logo} */}
        <Link
          href={'/'}
          className="px-2 border border-transparent hover:border-white cursor-pointer duration-300 flex items-center justify-center h-[70%]"
        >
          <Image className="w-28 object-cover mt-1" src={logo} alt="logo" />
        </Link>
        <div className="px-2 border border-transparent hover:border-white cursor-pointer duration-300  items-center justify-center h-[100%] hidden xl:inline-flex gap-1">
          <SlLocationPin />
          <div className="text-xs">
            <p>Deliver to</p>
            <p className="text-white font-bold uppercase">Austria</p>
          </div>
        </div>
        <div className="flex-1 h-10 hidden md:inline-flex items-center justify-between relative">
          <input
            className="w-full h-full rounded-md placeholder:text-sm text-base text-black border-[3px] border-transparent outline-none focus-visible:border-amazon_yellow"
            type="text"
            placeholder="Search Amazon"
          />
          <span className="w-12 h-full bg-amazon_yellow text-black text-2xl flex items-center justify-center absolute right-0 rounded-tr-md rounded-br-md">
            <HiOutlineSearch />
          </span>
        </div>
        <div className="text-xs text-gray-100 flex flex-col justify-center px-2 border border-transparent hover:border-white cursor-pointer duration-300 h-[70%]">
          <p>Hello, sign in</p>
          <p className="text-white font-bold">Account & Lists</p>
        </div>
        {/* signin */}
        <div className="text-xs text-gray-100 flex flex-col justify-center px-2 border border-transparent hover:border-white cursor-pointer duration-300 h-[70%] relative">
          <p>Marked</p>
          <p className="text-white font-bold">& Favorite</p>
          <span>5</span>
          {favoriteData.length > 0 && (
            <span className="absolute right-2 top-2 w-4 h-4 border-[1px] border-gray-400 flex items-center justify-center text-xs text-amazon-yellow">
              {/* {favoriteData.length} */}
            </span>
          )}
        </div>

        {/* favorite */}

        {/* cart */}
        <Link
          href={'/cart'}
          className="flex items-center px-2 border border-transparent hover:border-white cursor-pointer duration-300 h-[70%] relative"
        >
          <Image
            className="w-auto object-cover h-8"
            src={cartIcon}
            alt="cart"
          />
          <p className="text-xs text-white font-bold mt-3">Cart</p>
          <span className="absolute text-amazon_yellow text-xs top-2 left-[29px] font-semibold">
            {productData ? productData.length : 0}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
