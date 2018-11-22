import { createContext } from "react";

const formDataContext = createContext();
const formHandlerContext = createContext();

const FormDataConsumer = formDataContext.Consumer;
const FormDataProvider = formDataContext.Provider;

const FormHandlerConsumer = formHandlerContext.Consumer;
const FormHandlerProvider = formHandlerContext.Provider;

export { formDataContext, formHandlerContext };
export {
  FormDataConsumer,
  FormDataProvider,
  FormHandlerConsumer,
  FormHandlerProvider
};
