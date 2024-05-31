import MainSection from "@/components/main/sign-up";
import "@/styles/index.scss";

export const metadata = {
  title: "LMXAI",
  description: "Learning Matrix AI Power in Education",
};

export default function MainLayout({ children }) {
  return (
    <main className="vh-100">
      <MainSection>
        {children}
      </MainSection>
    </main>
  );
}