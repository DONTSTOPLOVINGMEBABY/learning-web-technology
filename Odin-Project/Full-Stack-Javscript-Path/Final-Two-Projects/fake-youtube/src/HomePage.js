
import SideBar from './components/homepage/sidebar';
import MiniSideBar from './components/homepage/mini-sidebar';
import DisplayVideos from './components/homepage/display-videos';
import "./styles/homepage.css"

function HomePage() {
  return (
    <div className="HomePage">
      <SideBar />
      <MiniSideBar />
      <DisplayVideos /> 
    </div>
  );
}

export default HomePage;
