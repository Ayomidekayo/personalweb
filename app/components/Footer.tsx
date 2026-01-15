'use client';
import React, { useEffect, useState } from 'react';

const Footer = () => {

  return (
    <>
   <footer className="bg-slate-900 text-slate-400 text-center py-6 text-sm">
        © {new Date().getFullYear()} Kayode Ayomide Damilare · All Rights Reserved
      </footer>

     
    </>
  );
};

export default Footer;
