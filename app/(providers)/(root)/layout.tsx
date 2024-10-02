import LogInModal from "@/components/LogIn/LogInModal";
import { PropsWithChildren } from "react";
import Header from "./_components/Header";

function RootLayout({ children }: PropsWithChildren) {
  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <LogInModal />
      <Header />
      {children}
    </div>
  );
}

export default RootLayout;
