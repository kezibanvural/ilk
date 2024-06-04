import DashboardNavbar from "@/components/dashboard/common/navbar";
import "../../styles/index.scss";
import DashboardSidebar from "@/components/dashboard/common/sidebar";
import Spacer from "@/components/common/spacer/spacer";

export const metadata = {
    title: "LMXAI",
    description: "Learning Matrix AI Power in Education",
  };
  
  export default function DashboardLayout({ children }) {
    return (
      <section className="dashboard-section">
        <DashboardNavbar/>
        <Spacer height={10}/>
        <div className="d-flex dashboard-content">
          <DashboardSidebar/>
          <div>
            <Spacer height={25}/>
            {children}
          </div>
        </div>
      </section>
    );
  }