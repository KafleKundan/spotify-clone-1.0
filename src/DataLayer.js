import React, {createContext, useContext, useReducer} from 'react';

export const DataLayerContext = createContext();

export const DataLayer = ({initialState, reducer, children})=>(
    <DataLayerContext.Consumer.Provider value = {useReducer(reducer,initialState)}>
        {children}
    </DataLayerContext.Consumer.Provider>
);