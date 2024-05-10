import Navbar from "@/components/Navbar";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode}) => {
  return (
    <main className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
      <Navbar />
      <div>
        {children}
      </div>
    </main>
  )
}

export default Layout;