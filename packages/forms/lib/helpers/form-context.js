import { createContext } from "react";
var formDataContext = createContext();
var formHandlerContext = createContext();
var FormDataConsumer = formDataContext.Consumer;
var FormDataProvider = formDataContext.Provider;
var FormHandlerConsumer = formHandlerContext.Consumer;
var FormHandlerProvider = formHandlerContext.Provider;
export { formDataContext, formHandlerContext };
export { FormDataConsumer, FormDataProvider, FormHandlerConsumer, FormHandlerProvider };