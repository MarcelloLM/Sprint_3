import React, { useEffect, useState, useMemo } from 'react';
import { fetchPlayers, fetchTeamStats } from '../utils/api';
import Modal from '../components/Modal';
import PlayerDetailView from '../components/PlayerDetailView';
import ComparisonView from '../components/ComparisonView';
import PlayerCard from '../components/PlayerCard';
import Filters from '../components/Filters';
import TeamStatsDashboard from '../components/TeamStatsDashboard';
import Rankings from '../components/Rankings';
import PlayerOfTheWeek from '../components/PlayerOfTheWeek';

const DashboardPage = ({ onLogout }) => {
  const [players, setPlayers] = useState([]);
  const [teamStats, setTeamStats] = useState(null);
  const [filteredPlayers, setFilteredPlayers] = useState([]);
  const [comparisonList, setComparisonList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null); 
  const [playerInView, setPlayerInView] = useState(null); 

  useEffect(() => {
    async function loadData() {
      try {
        const playersData = await fetchPlayers();
        setPlayers(playersData);
        setFilteredPlayers(playersData);

        const teamStatsData = await fetchTeamStats();
        setTeamStats(teamStatsData);
      } catch (error) {
        console.error('Erro ao carregar dados:', error);
      }
    }
    loadData();
  }, []);

  const playerOfTheWeek = useMemo(() => players.find(p => p.isPlayerOfTheWeek), [players]);

  const handleAddToComparison = (player) => {
    if (comparisonList.find(p => p.id === player.id)) {
        setComparisonList(comparisonList.filter(p => p.id !== player.id));
    } else if (comparisonList.length < 2) {
      setComparisonList([...comparisonList, player]);
    }
  };

  const handleStartComparison = () => {
      if (comparisonList.length === 2) {
          setModalContent('comparison');
          setIsModalOpen(true);
      }
  };

  const handleViewDetails = (player) => {
      setPlayerInView(player);
      setModalContent('details');
      setIsModalOpen(true);
  };

  const closeModal = () => {
      setIsModalOpen(false);
      setModalContent(null);
      setPlayerInView(null);
  }

  return (
    <div>
        <header className="bg-white shadow-md mb-8" role="banner">
            <div className="container mx-auto p-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold text-purple-700">Ela Joga Stats</h1>
                <button onClick={onLogout} className="bg-purple-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors" aria-label="Sair da aplicação">
                    Sair
                </button>
            </div>
        </header>

        <main className="container mx-auto p-4 md:p-8 pt-0" role="main">
          <PlayerOfTheWeek player={playerOfTheWeek} />
          <TeamStatsDashboard stats={teamStats || { gamesPlayed: 0, wins: 0, draws: 0, losses: 0, goalsFor: 0, goalsAgainst: 0 }} teamName={teamStats?.teamName || ''} season={teamStats?.season || ''} />
          <Rankings players={players} />

          <h2 className="text-3xl font-bold text-center mb-8">Análise de Jogadoras</h2>
          <Filters allPlayers={players} setFilteredPlayers={setFilteredPlayers} />

          {comparisonList.length > 0 && (
            <div className="sticky top-4 z-10 bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-lg mb-6 text-center transition-all duration-300 animate-fade-in">
                <h3 className="font-bold mb-2">Jogadoras para Comparar:</h3>
                <div className="flex justify-center items-center space-x-4 mb-4">
                    {comparisonList.map(p => <span key={p.id} className="font-semibold bg-purple-100 text-purple-800 py-1 px-3 rounded-full">{p.name}</span>)}
                    {comparisonList.length < 2 && <span className="text-gray-400">Selecione mais uma...</span>}
                </div>
                {comparisonList.length === 2 && (
                    <button onClick={handleStartComparison} className="bg-purple-600 text-white font-bold py-2 px-6 rounded-lg shadow-md hover:bg-purple-700 transition-transform transform hover:scale-105">
                        Analisar Comparação
                    </button>
                )}
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {filteredPlayers.map(player => (
              <PlayerCard 
                key={player.id} 
                player={player} 
                onAddToComparison={handleAddToComparison}
                onViewDetails={handleViewDetails}
                isSelected={!!comparisonList.find(p => p.id === player.id)}
              />
            ))}
          </div>

          <Modal isOpen={isModalOpen} onClose={closeModal}>
            {modalContent === 'details' && <PlayerDetailView player={playerInView} />}
            {modalContent === 'comparison' && <ComparisonView players={comparisonList} />}
          </Modal>
        </main>
    </div>
  );
};

export default DashboardPage;
