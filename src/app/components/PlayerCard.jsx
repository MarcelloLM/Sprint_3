import React from 'react';

const PlayerCard = ({ player, onAddToComparison, isSelected, onViewDetails }) => {
  const cardClasses = `bg-white rounded-xl shadow-md p-4 flex flex-col items-center text-center transition-all duration-300 transform hover:-translate-y-2 cursor-pointer ${isSelected ? 'ring-4 ring-purple-500' : 'ring-2 ring-transparent'}`;

  return (
    <div className={cardClasses} onClick={() => onViewDetails(player)}>
      <img className="w-20 h-20 rounded-full object-cover mb-3 border-4 border-gray-200" src={player.imageUrl} alt={`Foto de ${player.name}`} />
      <h3 className="text-lg font-bold text-gray-800">{player.name}</h3>
      <p className="text-purple-600 text-sm font-semibold mb-3">{player.position}</p>
      <button 
        onClick={(e) => { e.stopPropagation(); onAddToComparison(player); }}
        className="mt-auto bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded-lg hover:bg-purple-200 hover:text-purple-800 transition-colors text-sm w-full">
        {isSelected ? 'Selecionada' : 'Comparar'}
      </button>
    </div>
  );
};

export default PlayerCard;
