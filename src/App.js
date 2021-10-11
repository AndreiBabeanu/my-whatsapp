import "./App.css";
import Header from "./components/sidebar-frame/header/Header";
import Searchbar from "./components/sidebar-frame/searchbar/Searchbar";
import Contacts from "./components/sidebar-frame/contacts/Contacts";

function App() {
  return (
    <div className="App">
      <Header />
      <Searchbar />
      <Contacts />
    </div>
  );
}

export default App;
