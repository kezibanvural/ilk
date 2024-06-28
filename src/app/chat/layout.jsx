import DashboardNavbar from "@/components/chat/common/navbar";
import "../../styles/index.scss";
import DashboardSidebar from "@/components/chat/common/sidebar";
import Spacer from "@/components/common/spacer/spacer";

export const metadata = {
    title: "LMXAI",
    description: "Learning Matrix AI Power in Education",
  };
  
  export default function DashboardLayout({ children }) {
    return (
      <section className="dashboardChat-section">
        <DashboardNavbar/>
        <Spacer height={10}/>
        <div className="d-flex dashboardChat-content">
          <DashboardSidebar/>
          <div className="w-100">
            <Spacer height={25}/>
            <div className="container">
            {children}
            </div>
          </div>
        </div>
      </section>
    );
  }