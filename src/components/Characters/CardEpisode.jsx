function CardEpisode({ name, air_date, url }) {
    return (
        <a
            href={url}
            className="block p-4 rounded-lg bg-gray-900/50 hover:bg-gray-700/50 transition-colors duration-200 border border-gray-700/50 shadow-md h-full"
        >
            <h3 className="text-lg font-semibold text-cyan-400 line-clamp-1">{name}</h3>
            <p className="text-sm text-gray-300 line-clamp-1">Air date: {air_date}</p>
        </a>
    );
}

export default CardEpisode;