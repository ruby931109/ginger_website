import { Flex } from "@radix-ui/themes";

const About = () => {
  return (
    <>
      <div id="about" className="text-center whitespace-nowrap text-4xl pt-24">
        About <strong className="text-orange">GINGER</strong>
      </div>
      <Flex gap="8" className="pt-24"></Flex>
    </>
  );
};

export default About;
