import React, { useState, useEffect } from 'react';

const Filters = ({ allPlayers, setFilteredPlayers }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [position, setPosition] = useState('all');

    useEffect(() => {
        let filtered = allPlayers;

        if (searchTerm) {
            filtered = filtered.filter(player => 
                player.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        if (position !== 'all') {
            filtered = filtered.filter(player => player.position === position);
        }

        setFilteredPlayers(filtered);
    }, [searchTerm, position, allPlayers, setFilteredPlayers]);


    return (
        <div className="bg-white p-4 rounded-lg shadow-md mb-8 flex flex-col md:flex-row gap-4 justify-center items-center">
            <input 
                type="text"
                placeholder="Buscar por nome..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="border border-gray-300 rounded-lg p-2 w-full md:w-1/3"
            />
            <select 
                value={position}
                onChange={(e) => setPosition(e.target.value)} 
                className="border border-gray-300 rounded-lg p-2 w-full md:w-auto"
            >
                <option value="all">Todas as Posições</option>
                <option value="Atacante">Atacante</option>
                <option value="Meio-Campo">Meio-Campo</option>
                <option value="Defensora">Defensora</option>
            </select>
        </div>
    );
};

export default Filters;
