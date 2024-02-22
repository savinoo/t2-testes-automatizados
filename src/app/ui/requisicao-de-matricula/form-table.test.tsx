import { test, expect, vi } from 'vitest';
import { render, fireEvent } from "@testing-library/react";
import { FormTable } from './form-table';


const disciplinasMock = [
    {
      id: 6,
      name: 'Matemática',
      teacher: 'João da Silva',
      email: 'gggg@gmail.com',
      periodo: 4,
    },
    {
      id: 5,
      name: 'Física',
      teacher: 'Maria da Silva',
      email: 'gsfgfed@gmail.com',
      periodo: 4,
    },
    {
      id: 3,
      name: 'Química',
      teacher: 'José Santos',
      email: 'josantos@gmail.com',
      periodo: 3,
    },
    {
      id: 4,
      name: 'Biologia',
      teacher: 'Ana Oliveira',
      email: 'anaoliveira@gmail.com',
      periodo: 3,
    },
  ];

  
test('FormTable displays correct number of rows with discipline data', () => {
    
  
    const { container } = render(<FormTable disciplinas={disciplinasMock}/>);
    const rows = container.querySelectorAll('tbody tr');
    expect(rows.length).toBe(disciplinasMock.length);
  });
  
  
  test('Clicking "Salvar" button triggers submit action', async () => {
    const { getByText } = render(<FormTable disciplinas={disciplinasMock}/>);
    const salvarButton = getByText('Salvar');
    const mockSubmit = vi.fn();
    const form = salvarButton.closest('form');
    form?.addEventListener('submit', mockSubmit);
    fireEvent.click(salvarButton);
    expect(mockSubmit).toHaveBeenCalledTimes(1);
  });