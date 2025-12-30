import SideNavigation from "@/app/_components/SideNavigation";
import SideNavToggler from "../_components/SideNavToggler";

export default function Layout({children}){
    
    return <div className={"grid  md:grid-cols-12 h-full"}>
        <div className="md:col-span-3 h-full">
            <SideNavToggler><SideNavigation/></SideNavToggler>
        </div>
        <div className="md:col-span-9">{children}</div>
    </div>;
} 