import { OrganizationList } from "@clerk/nextjs";

export default function CreateOrganizationPage (){
    return (
        <div className="flex items-center justify-center flex-col mt-20">
        <OrganizationList
            hidePersonal
            afterSelectOrganizationUrl="/organization/:id"
            afterCreateOrganizationUrl="/organization/:id"
            
        />
        </div>
    );
};