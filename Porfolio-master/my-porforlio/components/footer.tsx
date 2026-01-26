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
          by="voxio"
          year={new Date().getFullYear()}
        />
        
        <Footer.LinkGroup className="flex space-x-4 mt-2 md:mt-0">
          <Footer.Link href="/">Home</Footer.Link>
          <Footer.Link href="/projects">Projects</Footer.Link>
          <Footer.Link href="/blog">Blog</Footer.Link>
          <Footer.Link href="/experience">Experience</Footer.Link>
        </Footer.LinkGroup>
        </div>
      
      
    </Footer>
    </div>
    
  );
};

export default AppFooter;
