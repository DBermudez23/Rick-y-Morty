import useFetchCharacters from "../../API/fetchCharacters";
import CardEpisode from "./CardEpisode";
import { useState } from "react";

function EpisodesList() {
    const { data, error, loading } = useFetchCharacters("episode" );
    console.log(data);


    if (loading) return <div className="text-white text-center">Loading...</div>;
    if (error) return <div className="text-red-500 text-center">Error: {error}</div>;

    return (
        <div className="w-full max-w-5xl mx-auto mt-8">
            <h2 className="text-2xl font-bold text-white mb-4">List of Episodes</h2>
            <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
                {data.map((episode) => (
                    <div key={episode.id} className="flex-shrink-0 w-64">
                        <CardEpisode
                            name={episode.name}
                            air_date={episode.air_date}
                            url={episode.url}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default EpisodesList;