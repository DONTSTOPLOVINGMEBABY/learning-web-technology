import VideoPlayer from "react-video-js-player"
import drone_footage from "./assets/video.mp4"
import drone_footage2 from "./assets/video.mp4"
import drone_footage3 from "./assets/video.mp4"
import drone_footage4 from "./assets/video.mp4"
import drone_footage5 from "./assets/video.mp4"
import drone_footage6 from "./assets/video.mp4"
import photo from "./assets/img.jpg" ; 
import "../../styles/video.css"
import { useState, useRef } from "react";

function PlayVideo () {

  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handleMouseOver = (e) => {
    setIsPlaying(true);
    e.target.play() ; 
  };

  const handleMouseOut = (e) => {
    setIsPlaying(false);
    e.target.pause() ; 
  };



    return <div>
        <div className="parent">
            <div className="video-thumbnail">
            <video
        ref={videoRef}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        width="320"
        height="240"
            >
            <source src={drone_footage} type="video/mp4" />
            </video>  
            </div>
            <div className="video-thumbnail">
            <video
        ref={videoRef}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        width="320"
        height="240"
            >
            <source src={drone_footage2} type="video/mp4" />
            </video>  
            </div>
            <div className="video-thumbnail">
            <video
        ref={videoRef}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        width="320"
        height="240"
            >
            <source src={drone_footage3} type="video/mp4" />
            </video>  
            </div>
            <div className="video-thumbnail">
            <video
        ref={videoRef}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        width="320"
        height="240"
            >
            <source src={drone_footage4} type="video/mp4" />
            </video>  
            </div>
            <div className="video-thumbnail">
            <video
        ref={videoRef}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        width="320"
        height="240"
            >
            <source src={drone_footage5} type="video/mp4" />
            </video>  
            </div>
            <div className="video-thumbnail">
            <video
        ref={videoRef}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        width="320"
        height="240"
            >
            <source src={drone_footage6} type="video/mp4" />
            </video>  
            </div>
        </div>
    </div>
}

export default PlayVideo