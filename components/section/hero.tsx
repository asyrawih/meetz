"use client";
import { TeamIcon } from "../icon/team";
import { Container } from "@/components/custom/container";
import { Button } from "../ui/button";
import Icon from "@mdi/react";
import { mdiVideoOutline } from "@mdi/js";
import { mdiKeyboardOutline } from "@mdi/js";
import { Input } from "../ui/input";
import { TypeAnimation } from "react-type-animation";

export const Hero = () => {
  return (
    <Container>
      <div className="flex">
        <div className="flex-row items-center me-10 my-10">
          <h1 className="text-7xl text-gray-800 font-semibold dark:text-white">
            Engaging and collaborative web conferencing
          </h1>
          <h4 className="text-3xl my-5 text-gray-600 dark:text-current">
            {" "}
            simplified online meeting software{" "}
            <TypeAnimation
              // preRenderFirstString={true}
              sequence={[
                "with enterprise grade security perfect for a work wherever world",
              ]}
              speed={50}
              // repeat={Infinity}
            />
          </h4>
          <div className="row">
            <div className="flex">
              <Button size="lg">
                <Icon
                  path={mdiVideoOutline}
                  size={1}
                  // color="#000 dark:#fff"
                  className="me-2"
                />
                Start Meet
              </Button>
              <div className="relative ms-3">
                <Input
                  type="text"
                  className="border border-gray-300 rounded-md py-5 pl-11 "
                  placeholder="Meet Code"
                />
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <Icon path={mdiKeyboardOutline} size={1} className="me-2" />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div
          className="hidden md:flex"
          style={{ animation: "float 6s ease-in-out infinite" }}
        >
          <TeamIcon width="450" height="520" />
        </div>
      </div>
    </Container>
  );
};
