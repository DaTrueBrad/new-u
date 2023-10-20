import { Provider, useSelector } from "react-redux";
import store from "./store/store";
import NavContainer from "./NavContainer";

export default function App() {
  // const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Provider store={store}>
      <NavContainer />
    </Provider>
  );
}
