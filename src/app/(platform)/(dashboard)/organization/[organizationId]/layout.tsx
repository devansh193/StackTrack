import { OrgControl } from "./_components/OrgControl";

const OrganizationidLayout = ({children}:{children:React.ReactNode})=>{
    return (
        <>
            <OrgControl/>
            {children}
        </>
    );
};

export default OrganizationidLayout;