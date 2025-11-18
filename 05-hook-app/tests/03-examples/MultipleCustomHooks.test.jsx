import { fireEvent, render, screen } from '@testing-library/react';
import MultipleCustomHooks from '../../src/03-examples/MultipleCustomHooks';
import { useCounter } from '../../src/hooks/useCounter';
import { useFetch } from '../../src/hooks/useFetch';
import '@testing-library/jest-dom';

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

describe('Pruebas en <MultipleCustomHooks />', () => {

    const mockIncrement = jest.fn();

    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement
    });

    beforeEach(() => {
    jest.clearAllMocks();
    useCounter.mockReturnValue({
      counter: 1,
      increment: mockIncrement,
      decrement: jest.fn(),
    });
  });

  test('debe de mostrar el componente por defecto', () => {
    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      hasError: null,
    });

    render(<MultipleCustomHooks />);

    expect(screen.getByText('Información de Pokémon')).toBeTruthy();
    expect(screen.getByText('Cargando')).toBeTruthy();

    const nextButton = screen.getByRole('button', { name: 'Siguiente' });
    expect(nextButton).toBeDisabled();
  });

  test('debe de mostrar un Pokémon', () => {
    useFetch.mockReturnValue({
      data: {
        id: 25,
        name: 'pikachu',
        sprites: {
          front_default: 'url1',
          front_shiny: 'url2',
          back_default: 'url3',
          back_shiny: 'url4',
        },
      },
      isLoading: false,
      hasError: null,
    });

    render(<MultipleCustomHooks />);

    expect(screen.getByText('Información de Pokémon')).toBeTruthy();
    expect(screen.getByText('pikachu')).toBeTruthy();

    const nextButton = screen.getByRole('button', { name: 'Siguiente' });
    expect(nextButton).toBeEnabled();
  });

  test('debe de llamar la función de incrementar', () => {
    useFetch.mockReturnValue({
      data: {
        id: 25,
        name: 'pikachu',
        sprites: {
          front_default: 'url1',
          front_shiny: 'url2',
          back_default: 'url3',
          back_shiny: 'url4',
        },
      },
      isLoading: false,
      hasError: null,
    });

    render(<MultipleCustomHooks />);
    const nextButton = screen.getByRole('button', { name: 'Siguiente' });
    fireEvent.click(nextButton);

    expect(mockIncrement).toHaveBeenCalled();
  });
});