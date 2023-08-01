import { useState } from "react";
import background from "../../assets/background.png";
import Header from "../../components/Header";
import ItemList from "../../components/ItemList";
import "./styles.css";

function App() {
  const [username, setUsername] = useState("");
  const [currentUser, setCurentUser] = useState(null);
  const [repos, setRepos] = useState(null);

  const handleGetData = async () => {
    const userData = await fetch(`https://api.github.com/users/${username}`);
    const newUser = await userData.json();
    if (newUser.name) {
      const { avatar_url, name, login, html_url, bio } = newUser;
      setCurentUser({ avatar_url, name, login, html_url, bio });

      const reposData = await fetch(
        `https://api.github.com/users/${username}/repos`
      );
      const userRepos = await reposData.json();

      if (userRepos.length) {
        setRepos(userRepos);
      }
    }
  };

  return (
    <div className="App">
      <Header />
      <div className="conteudo">
        <img src={background} className="background" alt="background" />
        <div className="info">
          <div>
            <input
              name="usuario"
              placeholder="@username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            ></input>
            <button onClick={handleGetData}>Buscar</button>
          </div>
          {currentUser?.name ? (
            <>
              <div className="perfil">
                <img
                  src={currentUser.avatar_url}
                  className="profile"
                  alt="profile"
                ></img>
                <div>
                  <h3>{currentUser.name}</h3>
                  <span>
                    <a
                      href={currentUser.html_url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      @{currentUser.login}
                    </a>
                  </span>
                  <p>{currentUser.bio}</p>
                </div>
              </div>
              <hr />
            </>
          ) : null}
          {repos?.length ? (
            <div>
              <h4 className="repositorio">Repositórios</h4>
              {repos.map((repo) => (
                <ItemList
                  title={repo.name}
                  link_url={repo.html_url}
                  description={repo.description}
                />
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default App;
