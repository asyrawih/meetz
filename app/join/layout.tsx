import Navbar from "@/components/custom/navbar";

export default function RoomLayout({ children, }: { children: React.ReactNode }) {
  return (
    <section>
      <Navbar />
      {children}
    </section>
  )
}
