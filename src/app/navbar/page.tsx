'use client'

import {useState} from 'react';
            <NavbarMenuItem></NavbarMenuItem>
            import { Navbar, NavbarContent, NavbarItem,NavbarMenu,NavbarMenuToggle,
         Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button,
         NavbarMenuItem} from "@heroui/react";
import { FaChevronDown, FaTh, FaBell, FaUser ,FaUniversity } from 'react-icons/fa'; 
// import { ChevronDownIcon } from '@heroicons/react/solid';
import {useRouter} from 'next/navigation';


export const ChevronDownIcon = () => {
  return (
    <svg fill="none" height="14" viewBox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M17.9188 8.17969H11.6888H6.07877C5.11877 8.17969 4.63877 9.33969 5.31877 10.0197L10.4988 15.1997C11.3288 16.0297 12.6788 16.0297 13.5088 15.1997L15.4788 13.2297L18.6888 10.0197C19.3588 9.33969 18.8788 8.17969 17.9188 8.17969Z"
        fill="currentColor"
      />
    </svg>
  );
};



const NavBar = () => {  
  const router=useRouter();
  const [isHovered, setIsHovered] = useState(false);
  const[mobileLength,setMobileLength] = useState(false);

  const handleClick = () => {
    router.push('/practise');  
  };

  const list=["one","two","three","four","five"]

  return (
    <>
    <Navbar isBordered maxWidth="full" onMenuOpenChange={setMobileLength}>
      <NavbarContent>
        <NavbarMenuToggle className='sm:hidden'></NavbarMenuToggle>
        <div >
                <NavbarItem>
                    <FaUniversity size={50}  />
                </NavbarItem>
            </div>
        <NavbarMenu>
          {list.map((items)=>(
            <NavbarMenuItem key={items}>{items}</NavbarMenuItem>
          ))}
        </NavbarMenu>
        </NavbarContent>

        <NavbarContent className='hidden sm:flex gap 4'>
        <div className="flex justify-between w-full">
            <div >
                <NavbarItem>
                    <FaUniversity size={50}  />
                </NavbarItem>
            </div>
            <div className="flex items-center gap-5"> 
            <NavbarItem >Home</NavbarItem>
            <NavbarItem onClick={handleClick}  className="cursor-pointer">Tasks</NavbarItem>
            <NavbarItem>
                <Dropdown>
                <DropdownTrigger>
                    <Button>
                    Loans
                    <FaChevronDown />
                    </Button>
                </DropdownTrigger>
                <DropdownMenu>
                    <DropdownItem key="one">one</DropdownItem>
                    <DropdownItem key="two">two</DropdownItem>
                    <DropdownItem key="three">three</DropdownItem>
                    <DropdownItem key="four">four</DropdownItem>
                </DropdownMenu>
                </Dropdown>
            </NavbarItem>
            <NavbarItem>
                <Dropdown>
                <DropdownTrigger>
                    <Button variant="bordered">
                    Open Menu
                    <ChevronDownIcon />
                    </Button>
                </DropdownTrigger>
                <DropdownMenu >
                    <DropdownItem key="one">one</DropdownItem>
                    <DropdownItem key="two">two</DropdownItem>
                    <DropdownItem key="three">three</DropdownItem>
                    <DropdownItem key="four">four</DropdownItem>
                </DropdownMenu>
                </Dropdown>
            </NavbarItem>
            <NavbarItem
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <Dropdown isOpen={isHovered}>
                <DropdownTrigger>
                  <Button>
                    Collections
                    <ChevronDownIcon />
                  </Button>
                </DropdownTrigger>
                <DropdownMenu
                  // className={` ${isHovered ? 'block' : 'hidden'}`}
                >
                  <DropdownItem key="one">one</DropdownItem>
                  <DropdownItem key="two">two</DropdownItem>
                  <DropdownItem key="three">three</DropdownItem>
                  <DropdownItem key="four">four</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </NavbarItem>
            </div>

            <div className="flex items-center gap-5"> 
            <NavbarItem>
                <FaTh />
            </NavbarItem>
            <NavbarItem>
                <FaBell />
            </NavbarItem>
            <NavbarItem>
                <FaUser />
            </NavbarItem>
            </div>
        </div>
      </NavbarContent>
    </Navbar>
    </>
    
  );
};

export default NavBar;
