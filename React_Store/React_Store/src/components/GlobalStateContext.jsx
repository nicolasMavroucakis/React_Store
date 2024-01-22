// GlobalStateContext.jsx
import React, { createContext, useContext, useReducer } from 'react';

const initialState = {
  categoriaSelecionada: 'Todos',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_CATEGORIA_SELECIONADA':
      return { ...state, categoriaSelecionada: action.payload };
    
    default:
      return state;
  }
};

const GlobalStateContext = createContext();

export const GlobalStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalStateContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = () => {
  const context = useContext(GlobalStateContext);
  if (!context) {
    throw new Error('useGlobalState deve ser usado dentro de um GlobalStateProvider');
  }
  return context;
};
