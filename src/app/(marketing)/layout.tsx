import { Footer } from "@/app/(marketing)/_components/Footer";
import { Navbar } from "@/app/(marketing)/_components/Navbar";

const MarketingLayout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="h-full bg-zinc-100">
    <Navbar />
    <main className="pt-40 pb-20 bg-zinc-100">
      {children}
    </main>
    <Footer />
  </div>

  );
};

export default MarketingLayout;