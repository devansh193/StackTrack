import { Sidebar } from "@/app/(platform)/(dashboard)/_components/Sidebar";

const OrganizationLayout = ({
    children
  }: {
    children: React.ReactNode;
  }) => {
    return (
      <main className="pt-20 md:pt-24 max-w-6xl 2xl:max-w-screen-xl mx-2">
        <div className="flex gap-x-7">
            <div className="w-64 shrink-0 hidden md:block">
                <Sidebar/>
            </div>
            {children}
            </div> 
      </main>
    );
  };
  
  export default OrganizationLayout;