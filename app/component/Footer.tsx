import { Flex } from "@radix-ui/themes";
import React from "react";

const Footer = () => {
  return (
    <Flex className="w-full py-12 px-72 bg-orange" justify="between">
      <div className="text-white font-extrabold text-xl">Ginger</div>
      <div className="text-white">Ginger © 2024</div>
    </Flex>
  );
};

export default Footer;
