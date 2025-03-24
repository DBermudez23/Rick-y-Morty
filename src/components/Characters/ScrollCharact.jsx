import MainBackground from "./MainBackground";
import EpisodesList from "./EpisodesList";

function ScrollCharct (){
    return(
        <div className="flex flex-col items-center justify-center min-h-screen pt-30 bg-gradient-to-br from-gray-800  via-cyan-900 to-gray-800">
            < MainBackground />
            < EpisodesList />
        </div>
    )
}

export default ScrollCharct;