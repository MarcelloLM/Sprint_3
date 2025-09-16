import React, { useState } from 'react';

const PlayerDetailView = ({ player }) => {
    const [copySuccess, setCopySuccess] = useState('');

    if (!player) return null;

    const handleShare = () => {
        const textToCopy = `Confira as estatísticas de ${player.name} no #ElaJogaStats! 🚀\n\nTemporada 2024:\n⚽ Gols: ${player.goals}\n🎯 Assistências: ${player.assists}\n\nVeja mais em nosso site!`;

        const textArea = document.createElement("textarea");
        textArea.value = textToCopy;
        document.body.appendChild(textArea);
        textArea.select();
        try {
            document.execCommand('copy');
            setCopySuccess('Copiado!');
            setTimeout(() => setCopySuccess(''), 2000);
        } catch (err) {
            setCopySuccess('Falhou!');
        }
        document.body.removeChild(textArea);
    };

    const SimpleStatBar = ({ label, value, color, maxValue }) => {
        const widthPercentage = maxValue > 0 ? (value / maxValue) * 100 : 0;
        return (
            <div className="w-full mb-2">
                <div className="flex justify-between text-sm text-gray-600">
                    <span>{label}</span>
                    <span className="font-bold">{value}</span>
                </div>
                <div className="bg-gray-200 rounded-full h-2.5">
                    <div className={`${color} h-2.5 rounded-full`} style={{ width: `${widthPercentage}%` }}></div>
                </div>
            </div>
        );
    };

    const maxGoals = Math.max(...player.statsHistory.map(s => s.goals), 0);
    const maxAssists = Math.max(...player.statsHistory.map(s => s.assists), 0);

    return (
        <div>
            <div className="flex flex-col items-center text-center mb-6">
                <img className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-purple-300" src={player.imageUrl} alt={`Foto de ${player.name}`} />
                <h2 className="text-4xl font-extrabold text-purple-700">{player.name}</h2>
                <p className="text-gray-600 text-lg mb-4">#{player.number} | {player.position}</p>
                <p className="text-gray-700 text-justify max-w-md">{player.bio}</p>
            </div>

            <div className="mt-6 border-t pt-6">
                <h3 className="text-xl font-bold text-center mb-4">Evolução na Carreira</h3>
                <div className="space-y-4">
                    {player.statsHistory.map(seasonStats => (
                        <div key={seasonStats.season} className="bg-gray-50 p-4 rounded-lg">
                            <p className="font-bold text-lg text-gray-800 mb-2">{seasonStats.season}</p>
                            <SimpleStatBar label="Gols" value={seasonStats.goals} color="bg-purple-500" maxValue={maxGoals} />
                            <SimpleStatBar label="Assistências" value={seasonStats.assists} color="bg-green-500" maxValue={maxAssists} />
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-6 text-center">
                <button onClick={handleShare} className="bg-gray-800 text-white font-bold py-2 px-6 rounded-lg hover:bg-gray-900 transition-colors">
                    {copySuccess || 'Compartilhar Análise'}
                </button>
            </div>
        </div>
    );
};

export default PlayerDetailView;
