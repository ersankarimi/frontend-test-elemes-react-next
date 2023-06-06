import { Footer } from "./footer";
import { Navbar } from "./navbar";

export const RootLayout = ({ children }) => {
  return (
    <div className="mx-auto flex min-h-screen flex-col font-rubik xl:max-w-[1200px]">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};
