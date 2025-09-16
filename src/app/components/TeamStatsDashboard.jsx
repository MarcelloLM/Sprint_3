import React from 'react';

const TeamStatsDashboard = ({ stats, teamName, season }) => {
    const StatCard = ({ label, value, colorClass }) => (
        <div className={`p-4 rounded-lg text-center ${colorClass}`}>
            <p className="text-3xl font-bold">{value}</p>
            <p className="text-sm font-semibold opacity-90">{label}</p>
        </div>
    );

    return (
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 text-center mb-4"> Desempenho do {teamName} - Temporada {season} </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                <StatCard label="Jogos" value={stats.gamesPlayed} colorClass="bg-blue-100 text-blue-800" />
                <StatCard label="Vitórias" value={stats.wins} colorClass="bg-green-100 text-green-800" />
                <StatCard label="Empates" value={stats.draws} colorClass="bg-yellow-100 text-yellow-800" />
                <StatCard label="Derrotas" value={stats.losses} colorClass="bg-red-100 text-red-800" />
                <StatCard label="Gols Pró" value={stats.goalsFor} colorClass="bg-indigo-100 text-indigo-800" />
                <StatCard label="Gols Contra" value={stats.goalsAgainst} colorClass="bg-orange-100 text-orange-800" />
            </div>
        </div>
    );
};

export default TeamStatsDashboard;


