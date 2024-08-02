import DashboardNavbar from "@/components/chat/common/navbar";
import "../../styles/index.scss";
import DashboardSidebar from "@/components/chat/common/sidebar";
import Spacer from "@/components/common/spacer/spacer";
import { getAllChatHistory } from "@/services/chat-history-service";
import { auth } from "@/auth";
import { parseJwt } from "@/helpers/auth";

export const metadata = {
    title: "LMXAI",
    description: "Learning Matrix AI Power in Education",
  };
  
  export default async function ChatLayout({ children }) {
    const session = await auth();
    const user_id = parseJwt(session?.accessToken)?.user_id;

    const allChatHistoryRes = await getAllChatHistory(user_id);
    const allChatHistoryData = await allChatHistoryRes.json();
    
    return (
      <section className="dashboardChat-section">
        <DashboardNavbar/>
        <Spacer height={10}/>
        <div className="d-flex dashboardChat-content">
          <DashboardSidebar 
          allChatHistoryData={allChatHistoryData} 
          />
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