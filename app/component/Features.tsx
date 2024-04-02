import { Flex } from "@radix-ui/themes";
import { SlPicture } from "react-icons/sl";
import { IoSettingsOutline } from "react-icons/io5";
import { FaUserFriends } from "react-icons/fa";

const Features = () => {
  return (
    <>
      <div
        id="features"
        className="text-center whitespace-nowrap text-4xl pt-24"
      >
        Features in <strong className="text-orange">GINGER</strong>
      </div>
      <Flex gap="8" className="pt-24">
        <Flex gap="3" direction="column" align="center">
          <div className="bg-orange rounded-full p-6">
            <SlPicture size={50} color="#ffffff" />
          </div>
          <div className="text-xl text-center mt-4">
            Building <strong>Family</strong> Memory Album
          </div>
          <div className="text-center mt-4">
            With GINGER, you can effortlessly create a family memory album
            that's accessible anytime, anywhere, allowing you to cherish moments
            with your loved ones.
          </div>
        </Flex>
        <Flex gap="3" direction="column" align="center">
          <div className="bg-orange rounded-full p-6">
            <IoSettingsOutline size={50} color="#ffffff" />
          </div>
          <div className=" text-xl text-center mt-4">
            <strong>AI-enabled</strong> Content Creation
          </div>
          <div className="text-center mt-4">
            Whether it's showcasing your latest DIY project, sharing your outfit
            of the day, documenting your gardening endeavors, or preserving your
            secret cooking recipes, GINGER empowers you to access and curate
            captivating content tailored to your interests.
          </div>
        </Flex>
        <Flex gap="3" direction="column" align="center">
          <div className="bg-orange rounded-full p-6">
            <FaUserFriends size={50} color="#ffffff" />
          </div>
          <div className="text-xl text-center mt-4">
            <strong>Connections</strong> Through Hobbies
          </div>
          <div className="text-center mt-4">
            GINGER offers a platform where you can connect with others who share
            your interests, making it easy to share your passions and draw
            inspiration from fellow enthusiasts.
          </div>
        </Flex>
      </Flex>
    </>
  );
};

export default Features;
