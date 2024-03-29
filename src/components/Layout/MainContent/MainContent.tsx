import { ReactNode } from "react";

interface MainContentProps {
  children: ReactNode;
}

function MainContent({ children }: MainContentProps) {
  return (
    <>
      <main className={"p-3 " + (true ? "col-md-9" : "col-md-11")}>
        {children}
      </main>
    </>
  );
}

export default MainContent;
