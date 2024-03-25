'use client';

import { useState } from "react";
import { BinaryToNumber, NumberToBinary } from "./binary-converter";

const TabsConverter = () => {
  const [isDefault, setIsDefault] = useState(true);

  return (
    <div className="w-full space-y-6">
      {
        isDefault ? (
          <NumberToBinary />
        ) : (
          <BinaryToNumber />
        )
      }
    </div>
  );
};

export default TabsConverter;