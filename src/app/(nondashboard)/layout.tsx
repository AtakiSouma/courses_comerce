import NonDashboardNavbar from "@/components/layout/NonDashBoardNavbar";
// import Footer from "@/components/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="nondashboard-layout">
      <NonDashboardNavbar />
      <main className="nondashboard-layout__main">{children}</main>
      {/* <Footer /> */}
    </div>
  );
}
