import Navbar from "./navbar/Navbar"

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar  />
      <div>
        {children}
      </div>
    </>
  )
}