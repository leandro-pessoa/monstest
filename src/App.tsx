// componentes
import GlobalStyles from "./components/GlobalStyles"
import AppRoutes from "./routes"
import { Provider } from "react-redux"

// store do redux, que contém os states globais
import { store } from "./features/store"

const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <AppRoutes />
    </Provider>
  )
}

export default App