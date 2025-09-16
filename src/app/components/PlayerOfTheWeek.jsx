import React from 'react';

const PlayerOfTheWeek = ({ player }) => {
    if (!player) return null;

    return (
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl shadow-2xl p-8 mb-8 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
                <img className="w-32 h-32 rounded-full object-cover border-4 border-purple-300" src={player.imageUrl} alt={player.name} />
            </div>
            <div>
                <h2 className="text-sm font-bold uppercase tracking-widest">Jogadora da Semana</h2>
                <h3 className="text-4xl font-bold mt-1">{player.name}</h3>
                <p className="mt-2 text-purple-200 text-lg">"{player.highlightStat}"</p>
            </div>
        </div>
    );
};

export default PlayerOfTheWeek;
