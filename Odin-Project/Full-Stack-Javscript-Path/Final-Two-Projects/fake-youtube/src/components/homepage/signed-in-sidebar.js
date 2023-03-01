import "../../styles/homepage.css"
import Category from "./sidebar-comps/category"
import {sidebar_images} from "../utils/import-image-objects"
import default_profile from "../assets/default-profile-picture.svg"
import { GeneralNavSection } from "./sidebar-comps/general-nav-section"
import { AboutCategory } from "./sidebar-comps/miscallenous-section"
import { ExploreCategories} from "./sidebar-comps/explore-categories-section" 
import { ProfileRelatedLinks } from "./sidebar-comps/profile-related-links-section"
const temporararily_hold_7_items = new Array(7).fill(true);  


function SideBar () {
    return (
        <div className="sidebar">
            <div className="general-nav-links">
                <GeneralNavSection/>
            </div>
            <div className="sidebar-profile-related-links category-border">
                <ProfileRelatedLinks/>
            </div>
            <div className="subscriptions category-border" >
                <h3 className="sidebar-subtitle">Subscriptions</h3>
                {/* Replace this with user's subscriptions */}
                { temporararily_hold_7_items.map( (item) => {
                    return ( <Category 
                        icon={default_profile}
                        text="Cool Channel"
                    />)  
                })}
                <Category 
                    icon={sidebar_images.arrow_over_icon}
                    text="All Subscriptions"
                /> 
            </div>
            <div className="display-categories category-border">
                <ExploreCategories />
            </div>
            <div className="miscallenous-sidebar category-border">
                <AboutCategory/>
            </div>
        </div>
    )
}

export default SideBar