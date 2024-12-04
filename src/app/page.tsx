import { NonDashBoardNavbar } from "@/components/layout";
import Landing from "@/app/(nondashboard)/landing/page";

export default function Home() {
  return (
    <div className="nondashboard-layout">
    <NonDashBoardNavbar />
    <main className="nondashboard-layout__main">
      <Landing />
    </main>
    {/* <Footer /> */}
  </div>
  );
}
