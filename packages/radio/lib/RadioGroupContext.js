import { createContext } from 'react';
var context = createContext({});
export default context;
var Cosumer = context.Cosumer,
    Provider = context.Provider;
export { Cosumer, Provider };