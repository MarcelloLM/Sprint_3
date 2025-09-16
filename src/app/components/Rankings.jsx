import React, { useMemo } from 'react';

const Rankings = ({ players }) => {
    const topGoalscorers = useMemo(() => [...players].sort((a, b) => b.goals - a.goals).slice(0, 3), [players]);
    const topAssists = useMemo(() => [...players].sort((a, b) => b.assists - a.assists).slice(0, 3), [players]);
    const medals = ['🥇', '🥈', '🥉'];

    const RankingList = ({ title, data, statKey }) => (
        <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-center mb-4">{title}</h3>
            <ul className="space-y-3">
                {data.map((player, index) => (
                    <li key={player.id} className="flex items-center justify-between p-2 rounded-lg bg-gray-50">
                        <div className="flex items-center">
                            <span className="text-2xl mr-3">{medals[index]}</span>
                            <div>
                                <p className="font-semibold">{player.name}</p>
                                <p className="text-sm text-gray-500">{player.position}</p>
                            </div>
                        </div>
                        <p className="font-bold text-lg text-purple-600">{player[statKey]}</p>
                    </li>
                ))}
            </ul>
        </div>
    );

    return (
        <div className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <RankingList title="Top 3 Artilheiras" data={topGoalscorers} statKey="goals" />
                <RankingList title="Top 3 em Assistências" data={topAssists} statKey="assists" />
            </div>
        </div>
    );
};

export default Rankings;
