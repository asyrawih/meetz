'use client'
import { HTMLAttributes, createRef, forwardRef, useEffect, useRef } from "react"
import { TeamIcon } from "../icon/team"
import { Container } from "@/components/custom/container"
import { cachedDataVersionTag } from "v8"

export const Hero = () => {
  return (
    <Container>
      <div className="flex flex-col-reverse md:flex-row">
        <div className="flex flex-col justify-center">
          <div className="text-red-400 text-5xl mb-2">
            Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.
          </div>
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.
        </div>
        <div className="md:flex" style={{ animation: "float 6s infinite" }}>
          <TeamIcon width="450" height="520" />
        </div>
      </div>
    </Container>
  )
}
