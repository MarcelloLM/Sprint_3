import { render, screen, fireEvent } from '@testing-library/react';
import LoginPage from '../src/app/pages/LoginPage';

describe('LoginPage', () => {
  test('renders login form', () => {
    render(<LoginPage onLogin={() => {}} />);
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Senha/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Entrar/i })).toBeInTheDocument();
  });

  test('calls onLogin when form is submitted with valid inputs', () => {
    const onLoginMock = jest.fn();
    render(<LoginPage onLogin={onLoginMock} />);
    fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByLabelText(/Senha/i), { target: { value: 'password' } });
    fireEvent.click(screen.getByRole('button', { name: /Entrar/i }));
    expect(onLoginMock).toHaveBeenCalledTimes(1);
  });

  test('shows alert when fields are empty', () => {
    window.alert = jest.fn();
    render(<LoginPage onLogin={() => {}} />);
    fireEvent.click(screen.getByRole('button', { name: /Entrar/i }));
    expect(window.alert).toHaveBeenCalledWith('Por favor, preencha ambos os campos.');
  });
});
