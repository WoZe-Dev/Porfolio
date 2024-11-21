"use client";

import { Footer } from "flowbite-react";
import { div } from "framer-motion/client";
import React from 'react';


const AppFooter: React.FC = () => {
  return (

    <div className="dark:bg-neutral-800">
    <Footer container className=" bg-neutral-200 footer1 dark:bg-neutral-801 py-4">
      
      <div className="w-full flex flex-col md:flex-row justify-between items-center px-6">
        <Footer.Copyright
          href="#"
          by="Your Company™"
          year={new Date().getFullYear()}
        />
        
        <Footer.LinkGroup className="flex space-x-4 mt-2 md:mt-0">
          <Footer.Link href="#">About</Footer.Link>
          <Footer.Link href="#">Privacy Policy</Footer.Link>
          <Footer.Link href="#">Licensing</Footer.Link>
          <Footer.Link href="#">Contact</Footer.Link>
        </Footer.LinkGroup>
        </div>
      
      
    </Footer>
    </div>
    
  );
};

export default AppFooter;
