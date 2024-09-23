import React from 'react';
var CounterContext = React.createContext()
export const CounterProvider = CounterContext.Provider;
export  const  CounterConsumer = CounterContext.Consumer;
export  default CounterContext;