import { ReactNode } from "react";
import { Header, Footer } from "./components";

export const Layout = ({ children }: { children: ReactNode }) => (
  <>
    <Header />
    <div>{children}</div>
    <Footer />
  </>
);
