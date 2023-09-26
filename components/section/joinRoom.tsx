import { HTMLAttributes, forwardRef } from "react";

const JoinRoom = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => {
  return (
    <div className={className} ref={ref} {...props} />
  )
})
JoinRoom.displayName = "JoinRoom"

export {
  JoinRoom,
}
