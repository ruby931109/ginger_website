"use client";
import { Button, Flex, TextField } from "@radix-ui/themes";
import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";

const HeroSection = () => {
  // Create a single supabase client for interacting with your database
  let URL = "https://eiotjduamqoxinpgyrtd.supabase.co";
  let key =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVpb3RqZHVhbXFveGlucGd5cnRkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ1NzQ3OTcsImV4cCI6MjAxMDE1MDc5N30.CWJWkJ5Amz4KIuhViwVuQCbMTyrPDCsvGaclJazuZ5k";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [valid, setValid] = useState(true);
  const checkEmail = () => {
    if (email.length == 0) {
      setError("Please enter your email.");
      setValid(false);
      return false;
    } else if (email.indexOf("@") == -1) {
      setError("Please enter a valid email.");
      setValid(false);
      return false;
    } else {
      setValid(true);
      return true;
    }
  };
  const submitForm = async () => {
    if (checkEmail()) {
      const supabase = createClient(URL, key);
      const { error } = await supabase
        .from("waitlist")
        .insert({ name: name, email: email });
      console.log("Added to waitlist successfully.");
      setName("");
      setEmail("");
    }
  };
  return (
    <Flex className="w-full" gap="3">
      <Flex direction="column" align="start">
        <Flex direction="column" gap="6">
          <Flex className="font-extrabold text-6xl">
            <div className="text-orange">G</div>
            <div>inger</div>
          </Flex>
          <div className="text-xl">
            <strong>AI-enabled</strong> content creation tool and community.
          </div>
        </Flex>
        <Flex className="mt-12" direction="column" gap="4">
          <div className="text-orange font-extrabold text">What's GINGER?</div>
          <div className="text-lg">
            <strong>GINGER</strong> offers a content creation tool and community
            for people in midlife and beyond to share their hobbies and connect
            more effectively with their family and peers.{" "}
            <strong>Sign up </strong>to receive news and updates!
          </div>
          <Flex direction="column" className="mt-2" gap="3">
            {/* <div className="text-lg">Available soon on</div> */}
            <div className="cursor-pointer">
              <img src="/apple.jpg" width={150} />
            </div>
          </Flex>
          <Flex className="mt-6 w-fit" gap="3" direction="column">
            <div className="text-orange font-extrabold text">
              Signup to Get Early Access
            </div>
            <TextField.Root size="3" className="w-72">
              <TextField.Input
                placeholder="Your Name"
                value={name}
                onChange={(event) => {
                  setName(event.target.value);
                }}
              />
            </TextField.Root>
            <TextField.Root size="3" className="w-72">
              <TextField.Input
                placeholder="Your Email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
            </TextField.Root>
            {valid ? (
              <></>
            ) : (
              <div className="text-sm text-red-600">{error}</div>
            )}
            <Button size="3" onClick={submitForm}>
              Count Me In!
            </Button>
          </Flex>
        </Flex>
      </Flex>
      <img className="hidden lg:flex w-2/4" src="/screenshots.png" />
    </Flex>
  );
};

export default HeroSection;
