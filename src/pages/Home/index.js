import background from "../../assets/background.png";
import Header from "../../components/Header";
import ItemList from "../../components/ItemList";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="conteudo">
        <img src={background} className="background" alt="background" />
        <div className="info">
          <div>
            <input name="usuario" placeholder="@username"></input>
            <button>Buscar</button>
          </div>
          <div className="perfil">
            <img
              src="https://avatars.githubusercontent.com/u/7001200?v=4"
              className="profile"
              alt="profile"
            ></img>
            <div>
              <h3>Marcelo</h3>
              <span>@minelli</span>
              <p>Descricao</p>
            </div>
          </div>
          <hr />
          <div>
            <h4 className="repositorio">Repositórios</h4>
            <ItemList title={"Item1"} description={"descricao 1"} />
            <ItemList title={"Item2"} description={"descricao 2"} />
            <ItemList title={"Item3"} description={"descricao 3"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
