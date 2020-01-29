import React from 'react';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App() {
  

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input name="github_username" id="github_username" required />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required />
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required />
            </div>

            <button type="submit">Salvar</button>
          </div>
        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/19158164?s=460" />
              <div className="user-info">
                <strong>Autímio Meira Brito Filho</strong>
                <span>ReactJS, NodeJS, R, Java</span>
              </div>
            </header>
            <p>Bachelor of Computer Science from the Pontifical Catholic University of Goiás.</p>
            <a href="https://github.com/autimio">Acessar peprfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/19158164?s=460" />
              <div className="user-info">
                <strong>Autímio Meira Brito Filho</strong>
                <span>ReactJS, NodeJS, R, Java</span>
              </div>
            </header>
            <p>Bachelor of Computer Science from the Pontifical Catholic University of Goiás.</p>
            <a href="https://github.com/autimio">Acessar peprfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/19158164?s=460" />
              <div className="user-info">
                <strong>Autímio Meira Brito Filho</strong>
                <span>ReactJS, NodeJS, R, Java</span>
              </div>
            </header>
            <p>Bachelor of Computer Science from the Pontifical Catholic University of Goiás.</p>
            <a href="https://github.com/autimio">Acessar peprfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/19158164?s=460" />
              <div className="user-info">
                <strong>Autímio Meira Brito Filho</strong>
                <span>ReactJS, NodeJS, R, Java</span>
              </div>
            </header>
            <p>Bachelor of Computer Science from the Pontifical Catholic University of Goiás.</p>
            <a href="https://github.com/autimio">Acessar peprfil no Github</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
