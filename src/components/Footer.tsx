import React from 'react';
import Socials from './Socials';    

export default function Footer() {
  return (
    <footer id="footer" className="mt-40 flex justify-center">
        <div className="flex flex-col mb-3 items-center">
            <Socials/>
            <p className="text-white text-xs mt-2">Copyright © 2024 João Vitor</p>
        </div>

    </footer>
  );
}