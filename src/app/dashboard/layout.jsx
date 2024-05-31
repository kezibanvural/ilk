import DashboardNavbar from "@/components/dashboard/common/navbar";
import "../../styles/index.scss";

export const metadata = {
    title: "LMXAI",
    description: "Learning Matrix AI Power in Education",
  };
  
  export default function DashboardLayout({ children }) {
    return (
      <section className="dashboard-section">
        <DashboardNavbar/>
        {children}
      </section>
    );
  }