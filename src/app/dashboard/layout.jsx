import DashboardNavbar from "@/components/dashboard/common/navbar";
import "../../styles/index.scss";
import DashboardSidebar from "@/components/dashboard/common/sidebar";

export const metadata = {
    title: "LMXAI",
    description: "Learning Matrix AI Power in Education",
  };
  
  export default function DashboardLayout({ children }) {
    return (
      <section className="dashboard-section">
        <DashboardNavbar/>
        <div className="d-flex" style={{height:"85%"}}>
          <DashboardSidebar/>
          <div className="container">
            {children}
          </div>
        </div>
      </section>
    );
  }