"use client";
import { Button, Flex, TextField } from "@radix-ui/themes";
import React, { useState } from "react";

const HeroSection = () => {
  return (
    <Flex direction="column">
      <Flex direction="column" align="center" gap="4">
        <Flex className="font-extrabold text-6xl">
          <div className="text-orange">G</div>
          <div>inger</div>
        </Flex>
        <div className="text-xl">
          <strong>AI-enabled</strong> app for <strong>older</strong> adults.
        </div>
      </Flex>
      <Flex className="mt-24" direction="column" align="center" gap="4">
        <div className="text-orange font-extrabold text">Waitlist Signup</div>
        <div className="text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <Flex className="mt-8" gap="3">
          <TextField.Root size="3" className="w-56">
            <TextField.Input placeholder="Enter Your Email" />
          </TextField.Root>
          <Button size="3">Notify Me</Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default HeroSection;
