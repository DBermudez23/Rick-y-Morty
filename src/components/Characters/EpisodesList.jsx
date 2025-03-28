import useFetchCharacters from "../../API/fetchCharacters";
import CardEpisode from "./CardEpisode";
import { useState } from "react";

function EpisodesList() {
    const { data, error, loading } = useFetchCharacters("episode" ); //Fetch

    const seasonOne = []; //Episodes season one
    const seasonTwo = []; //Episodes season two
    const seasonThree = []; //Episodes season three
    const seasonFour = []; //Episodes season fourth
    const seasonFive = [];
    if (!loading && !error){
        for (let i = 0; i < data.length; i++){

            const episodeCode = data[i].episode;
            //Using regular expressions to capture the season to which the episode belongs
            const seasonMatch = episodeCode.match(/S(\d+)/);
            if (seasonMatch){
                const seasonNumber = parseInt(seasonMatch[1], 10) // We convert the regular expression to an integer and add it to the corresponding seasonArray
                switch (seasonNumber) {
                    case 1:
                        seasonOne.push({
                            name: data[i].name,
                            episode: data[i].episode,
                            air_date: data[i].air_date,
                            url: data[i].url
                        });
                        break;
                    case 2:
                        seasonTwo.push({
                            name: data[i].name,
                            episode: data[i].episode,
                            air_date: data[i].air_date,
                            url: data[i].url
                        });
                        break;
                    case 3:
                        seasonThree.push({
                            name: data[i].name,
                            episode: data[i].episode,
                            air_date: data[i].air_date,
                            url: data[i].url
                        });
                        break;
                    case 4:
                        seasonFour.push({
                            name: data[i].name,
                            episode: data[i].episode,
                            air_date: data[i].air_date,
                            url: data[i].url
                        });
                        break;
                    case 5:
                        seasonFive.push({
                            name: data[i].name,
                            episode: data[i].episode,
                            air_date: data[i].air_date,
                            url: data[i].url
                        });
                        break;
                }
            }
        }
    }

    if (loading) return <div className="text-white text-center">Loading...</div>;
    if (error) return <div className="text-red-500 text-center">Error: {error}</div>;

    return (
        <div className="w-full max-w-5xl mx-auto mt-8">
            <h2 className="text-2xl font-bold text-white mb-4">List of Episodes</h2>
        
            {/* Season 1 */}
            {seasonOne.length > 0 && (
                <div className="mb-8">
                    <h3 className="text-xl font-semibold text-white mb-2">Season 1</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {seasonOne.map((episode) => (
                        <div key={episode.episode}>
                            <CardEpisode
                            name={episode.name}
                            air_date={episode.air_date}
                            url={episode.url}
                            />
                        </div>
                        ))}
                    </div>
                </div>
            )}
        
            {/* Season 2 */}
            {seasonTwo.length > 0 && (
                <div className="mb-8">
                    <h3 className="text-xl font-semibold text-white mb-2">Season 2</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {seasonTwo.map((episode) => (
                        <div key={episode.episode}>
                            <CardEpisode
                            name={episode.name}
                            air_date={episode.air_date}
                            url={episode.url}
                            />
                        </div>
                        ))}
                    </div>
                </div>
            )}
        
            {/* Season 3 */}
            {seasonThree.length > 0 && (
                <div className="mb-8">
                    <h3 className="text-xl font-semibold text-white mb-2">Season 3</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {seasonThree.map((episode) => (
                        <div key={episode.episode}>
                            <CardEpisode
                            name={episode.name}
                            air_date={episode.air_date}
                            url={episode.url}
                            />
                        </div>
                        ))}
                    </div>
                </div>
            )}
        
            {/* Season 4 */}
            {seasonFour.length > 0 && (
                <div className="mb-8">
                    <h3 className="text-xl font-semibold text-white mb-2">Season 4</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {seasonFour.map((episode) => (
                        <div key={episode.episode}>
                            <CardEpisode
                            name={episode.name}
                            air_date={episode.air_date}
                            url={episode.url}
                            />
                        </div>
                        ))}
                    </div>
                </div>
            )}
        
            {/* Season 5 */}
            {seasonFive.length > 0 && (
                <div className="mb-8">
                    <h3 className="text-xl font-semibold text-white mb-2">Season 5</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {seasonFive.map((episode) => (
                        <div key={episode.episode}>
                            <CardEpisode
                            name={episode.name}
                            air_date={episode.air_date}
                            url={episode.url}
                            />
                        </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
      );
}

export default EpisodesList;