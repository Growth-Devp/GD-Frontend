import React from 'react';
import ButtonLoading from 'components/ButtonLoading';
import { render, screen, cleanup } from '@testing-library/react';

afterEach(cleanup);
it('Renderizar Boton', () => {
  render(<ButtonLoading text='prueba' loading={false} disabled={false} />);
  expect(screen.getByTestId('button-loading')).toBeInTheDocument();
});

it('Mostrar texto Prueba cuando no se cargue', () => {
  render(<ButtonLoading text='prueba' loading={false} disabled={false} />);
  expect(screen.getByTestId('button-loading')).toHaveTextContent('prueba');
});

it('No mostrar texto Prueba al cargar', () => {
  render(<ButtonLoading text='prueba' loading={true} disabled={false} />);
  expect(screen.getByTestId('button-loading')).not.toHaveTextContent('prueba');
});

it('Mostrar componente de cargar', () => {
  render(<ButtonLoading text='prueba' loading={true} disabled={false} />);
  expect(screen.getByTestId('loading-in-button')).toBeInTheDocument();
});

it('Esta deshabilitado cuando pasa el prop', () => {
  render(<ButtonLoading text='prueba' loading={true} disabled={true} />);
  expect(screen.getByTestId('button-loading')).toHaveAttribute('disabled');
});

it('Esta habilitado cuando la propiedad disable se pasa como falsa', () => {
  render(<ButtonLoading text='prueba' loading={true} disabled={false} />);
  expect(screen.getByTestId('button-loading')).not.toHaveAttribute('disabled');
});

it('Carga el svg html cuando al carga está activado', () => {
  render(<ButtonLoading text='prueba' loading={true} disabled={false} />);
  expect(screen.getByTestId('button-loading')).toMatchSnapshot();
});
