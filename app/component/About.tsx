import { Flex } from "@radix-ui/themes";

const About = () => {
  return (
    <div className="pb-8 pt-24">
      <Flex id="about" gap="8" direction="column" className="pt-24 px-24">
        <Flex gap="8" justify="center" align="center">
          <Flex direction="column" className="px-8" gap="8">
            <div className="whitespace-nowrap text-5xl ">
              About
              <strong className="text-orange text-7xl ml-3">GINGER</strong>
            </div>
            <Flex direction="column" gap="5">
              <div className=" text-md">
                Welcome to GINGER, where memories come alive, creativity knows
                no bounds, and connections are forged through shared passions.
              </div>
              <div>
                We built GINGER as a means to foster deeper connections within
                families, where heartfelt moments are shared beyond mere
                greetings and routine check-ins.
              </div>
              <div>
                At GINGER, we recognize the beauty of our parents&apos;
                gardening endeavors, creative DIY projects and cherished cooking
                recipes, deserving of wider recognition within a community that
                values such passions. GINGERis more than just a platform;
                it&apos;s a vibrant hub where hobbies unite and passions pave
                the way for meaningful connections.
              </div>
              <div>
                So join us, become part of our family, and let&apos;s craft
                unforgettable memories together.
              </div>
            </Flex>
          </Flex>
          <img src="\family.png" className="w-80" />
        </Flex>
      </Flex>
    </div>
  );
};

export default About;
