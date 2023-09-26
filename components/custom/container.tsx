import React, { HTMLAttributes, forwardRef } from "react"

const Container = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={className}
    {...props}
  />
))

Container.displayName = "Container"

export default Container
