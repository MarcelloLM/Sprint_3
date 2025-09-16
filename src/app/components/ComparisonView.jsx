import React, { useState } from 'react';

const ComparisonView = ({ players }) => {
  const [copySuccess, setCopySuccess] = useState('');
  if (players.length !== 2) return null;
  const [player1, player2] = players;

  const handleShare = () => {
    const textToCopy = `Quem foi melhor na temporada? 🤔\n\n${player1.name} vs ${player2.name}\n\n⚽ Gols: ${player1.goals} x ${player2.goals}\n🎯 Assist.: ${player1.assists} x ${player2.assists}\n\nAnálise feita no #ElaJogaStats!`;
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

  const StatBar = ({ label, value1, value2 }) => {
    const total = value1 + value2;
    const percentage1 = total > 0 ? (value1 / total) * 100 : 50;
    return (
        <div className="mb-4">
            <div className="flex justify-between items-center mb-1 text-sm font-semibold">
                <span className="text-gray-700">{value1}</span>
                <span className="text-gray-500">{label}</span>
                <span className="text-gray-700">{value2}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4 flex overflow-hidden">
                <div style={{ width: `${percentage1}%` }} className="bg-purple-500 transition-all duration-500"></div>
                <div style={{ width: `${100 - percentage1}%` }} className="bg-pink-500 transition-all duration-500"></div>
            </div>
        </div>
    );
  };

  return (
    <div>
      <h2 className="text-3xl font-bold text-center mb-6">Análise Comparativa</h2>
      <div className="grid grid-cols-2 gap-4 items-center text-center mb-6">
        <div>
            <img src={player1.imageUrl} alt={player1.name} className="w-24 h-24 rounded-full mx-auto border-4 border-purple-500" />
            <h3 className="text-xl font-bold mt-2">{player1.name}</h3>
        </div>
        <div>
            <img src={player2.imageUrl} alt={player2.name} className="w-24 h-24 rounded-full mx-auto border-4 border-pink-500" />
            <h3 className="text-xl font-bold mt-2">{player2.name}</h3>
        </div>
      </div>
      <StatBar label="Gols" value1={player1.goals} value2={player2.goals} />
      <StatBar label="Assistências" value1={player1.assists} value2={player2.assists} />
      <div className="mt-6 text-center">
        <button onClick={handleShare} className="bg-gray-800 text-white font-bold py-2 px-6 rounded-lg hover:bg-gray-900 transition-colors">
            {copySuccess || 'Compartilhar Comparativo'}
        </button>
      </div>
    </div>
  );
};

export default ComparisonView;
