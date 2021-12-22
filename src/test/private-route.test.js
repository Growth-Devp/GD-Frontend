import React from 'react';
import PrivateRoute from 'components/PrivateRoute';
import { render, screen, cleanup } from '@testing-library/react';
import { UserContext } from 'context/userContext';

afterEach(cleanup);
it('Renderizar no autorizados si los roles no coinciden', () => {
  render(
    <UserContext.Provider value={{ userData: { rol: 'LIDER' } }}>
      <PrivateRoute roleList={['ADMINISTRADOR']}>
        <div>Este es el children</div>
      </PrivateRoute>
    </UserContext.Provider>
  );
  expect(screen.getByTestId('not-authorized')).toHaveTextContent(
    'No estás autorizado para ver este sitio.'
  );
});

it('Renderizar autorizados si los roles y estado coinciden', () => {
  render(
    <UserContext.Provider value={{ userData: { rol: 'ADMINISTRADOR', estado: 'ACTIVO' } }}>
      <PrivateRoute roleList={['ADMINISTRADOR']} status={['ACTIVO']}>
        <div data-testid='children'>Este es el children</div>
      </PrivateRoute>
    </UserContext.Provider>
  );
  expect(screen.getByTestId('children')).toBeInTheDocument();
});
