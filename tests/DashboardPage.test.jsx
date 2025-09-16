import { render, screen, fireEvent } from '@testing-library/react';
import DashboardPage from '../src/app/pages/DashboardPage';
import { mockApiData } from '../src/app/data/mockApiData';

describe('DashboardPage', () => {
  test('renders player of the week', () => {
    render(<DashboardPage onLogout={() => {}} />);
    expect(screen.getByText(/Jogadora da Semana/i)).toBeInTheDocument();
    expect(screen.getByText(mockApiData.players.find(p => p.isPlayerOfTheWeek).name)).toBeInTheDocument();
  });

  test('filters players by name', () => {
    render(<DashboardPage onLogout={() => {}} />);
    const input = screen.getByPlaceholderText(/Buscar por nome/i);
    fireEvent.change(input, { target: { value: 'Júlia' } });
    expect(screen.getByText(/Júlia Artilheira/i)).toBeInTheDocument();
  });

  test('adds and removes players from comparison list', () => {
    render(<DashboardPage onLogout={() => {}} />);
    const playerCardButtons = screen.getAllByText(/Comparar/i);
    fireEvent.click(playerCardButtons[0]);
    expect(screen.getByText(/Jogadoras para Comparar/i)).toBeInTheDocument();
    fireEvent.click(playerCardButtons[0]);
    expect(screen.queryByText(/Jogadoras para Comparar/i)).not.toBeInTheDocument();
  });
});
