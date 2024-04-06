'use client';

import { useState } from "react";
import NumberToBinary from "./number-to-binary";
import BinaryToNumber from "./binary-to-number";

const TabsConverter = () => {

  return (
    <div className="w-full space-y-6">
      <NumberToBinary />
      <BinaryToNumber />
    </div>
  );
};

export default TabsConverter;