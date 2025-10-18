import { Facebook, Instagram } from "lucide-react";
import React from "react";

export const Footer = () => {
  return (
    <div className="flex gap-2 mt-6 pt-10 pb-8 items-center justify-center bg-black">
      <div>
        <Instagram color="white" />
      </div>
      <div>
        <Facebook color="white" />
      </div>
    </div>
  );
};
