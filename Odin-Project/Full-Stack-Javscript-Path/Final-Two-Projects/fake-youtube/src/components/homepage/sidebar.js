import "../../styles/homepage.css"
import Category from "./sidebar-comps/category"
import sidebar_images from "../utils/sidebar-images"
import default_profile from "../assets/default-profile-picture.svg" 

const temporararily_hold_7_items = new Array(7).fill(true);  


function SideBar () {
    return (
        <div className="sidebar">
            <div className="general-nav-links">
                <Category 
                icon={sidebar_images.home_icon}
                text="Home"
                />
                <Category
                icon={sidebar_images.subscriptions_icon} 
                text="Subscriptions"
                />
            </div>
            <div className="sidebar-profile-related-links category-border">
                <Category 
                icon={sidebar_images.history_icon}
                text="History"
                />
                <Category 
                icon={sidebar_images.your_videos_icon}
                text="Your Videos"
                />
                <Category 
                icon={sidebar_images.clock_icon}
                text="Watch Later"
                />
                <Category 
                icon={sidebar_images.likes_icon}
                text="Liked Videos"
                />
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
                <h3 className="sidebar-subtitle">Explore</h3>
                <Category 
                icon={sidebar_images.user_upload_icons}
                text="User Uploads"
                />
                <Category 
                icon={sidebar_images.music_icon}
                text="Music"
                /> 
                <Category 
                icon={sidebar_images.memes_icon}
                text="Memes"
                />
                <Category 
                icon={sidebar_images.palm_tree_icon}
                text="Nature"
                />
                <Category 
                icon={sidebar_images.planes_icon}
                text="Planes"
                /> 
            </div>
        </div>
    )
}

export default SideBar