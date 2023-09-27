'use client'
import { HTMLAttributes, createRef, forwardRef, useEffect, useRef } from "react"
import { TeamIcon } from "../icon/team"
import { Container } from "@/components/custom/container"

export const Hero = () => {
  return (
    <Container>
      <div className="flex flex-col-reverse md:flex-row">
        <div className="flex flex-col justify-center">
          <div className="text-red-400 text-5xl mb-2">
            Revolutionize Your Business with our Cutting-Edge Product at our Virtual Conference
          </div>
          <div>
            <p className="text-lg mb-4">
              Join us at our highly anticipated virtual conference as we unveil our groundbreaking product that will revolutionize your business. This immersive online event is designed to showcase the impressive capabilities and features of our game-changing product.
            </p>
            <p className="text-lg mb-4">
              During the conference, our expert presenters will provide a comprehensive overview of the product, highlight its unique selling points, and demonstrate how it can address the most critical challenges faced by businesses today. Attendees will have the opportunity to experience firsthand the power and efficiency of our product through live demos and interactive sessions.
            </p>
            <p className="text-lg mb-4">
              With its cutting-edge technology and innovative design, our product is set to transform the way businesses operate and thrive in a rapidly evolving market. Whether you're seeking to streamline operations, boost productivity, or enhance customer experiences, this conference is a must-attend for professionals in various industries.
            </p>
            <p className="text-lg mb-4">
              In addition to learning about the product, attendees will have the chance to interact with industry experts, network with like-minded professionals, and gain valuable insights into the future of business. The virtual nature of the conference enables you to participate from anywhere in the world, eliminating the need for travel expenses and ensuring accessibility for all.
            </p>
            <p className="text-lg">
              Don't miss this opportunity to be at the forefront of the next wave of business innovation. Register now for our product video conference and be among the first to witness the potential that our product holds for transforming your business success.
            </p>
          </div>
        </div>
        <div className="md:flex" style={{ animation: "float 6s infinite" }}>
          <TeamIcon width="450" height="520" />
        </div>
      </div>
    </Container>
  )
}
