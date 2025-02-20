import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header id="header">
        <div className="navigation">
          <ul className="navigationList">
            <li><h1 className="logo"></h1></li>
            <li><a className="navigationLinks" href="">Notícias</a></li>
            <li><a className="navigationLinks" href="">Atletas</a></li>
            <li><a className="navigationLinks" href="">Modalidades</a></li>
            <li><a className="navigationLinks" href="">Campeonatos</a></li>
          </ul>
        </div>
      </header>

      <main className='main'>
        <div className="introSection">
          <h3>O que é Esgrima?</h3>
          <a>Ver mais</a>
        </div>

        <section id="news" className="news">

          <h2>Notícias</h2>

          <div className="newsGrid">
            <div className="bigNews">
              <img/>
              <h3></h3>
              <p></p>
            </div>

            <div className="smallNews">
              <div>
                <img/>
                <h3></h3>
                <p></p>
              </div>

              <div className="smallNews">
                <img/>
                <h3></h3>
                <p></p>
              </div>

              <div className="smallNews">
                <img/>
                <h3></h3>
                <p></p>
              </div>

            </div>

          </div>

        </section>

        <section id="athletes" className="athletes">
          <h2>Atletas</h2>
          
          <div className="athletesGrid">
            <div className="athletesInfo">
              <img/>
              <h3></h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam sit obcaecati voluptatem sed, voluptatum eius illum, pariatur porro dolorem fuga quasi quibusdam iure repellendus eum ratione, omnis ea id alias.</p>
            </div>

            <div className="athletesInfo">
              <img/>
              <h3></h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus facere voluptatum distinctio vero perspiciatis tempore quis perferendis ab voluptates, corporis iste temporibus minus atque necessitatibus quasi culpa, dolores dolore quae.</p>
            </div>

            <div className="athletesInfo">
              <img/>
              <h3></h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus facere voluptatum distinctio vero perspiciatis tempore quis perferendis ab voluptates, corporis iste temporibus minus atque necessitatibus quasi culpa, dolores dolore quae.</p>
            </div>

          </div>
        </section>

        <section id="rankings" className="rankings">
          <h2>Campeonatos</h2>

          <h3>Brasil</h3>
          <table className="table nationalTable">
              <tr>
                <th>Competição</th>
                <th>Data</th>
                <th>Local</th>
                <th>Categoria</th>
                <th>Gênero</th>
                <th>Arma</th>
              </tr>
              <tr>
                <td>Campeonato Regional</td>
                <td> 00/00/0000 - 00/00/0000</td>
                <td>São Paulo</td>
                <td>Sênior</td>
                <td>F</td>
                <td>2</td>
              </tr>
              <tr>
                <td>Campeonato Estadual</td>
                <td> 00/00/0000 - 00/00/0000</td>
                <td>Rio de Janeiro</td>
                <td>Júnior</td>
                <td>M</td>
                <td>Sabre</td>
              </tr>
              <tr>
                <td>Novos Talentos</td>
                <td> 00/00/0000 - 00/00/0000</td>
                <td>Recife</td>
                <td>Cadete</td>
                <td>Misto</td>
                <td>Foil</td>
              </tr>
              <tr>
                <td>Campeonato Nacional</td>
                <td> 00/00/0000 - 00/00/0000</td>
                <td>Brasília</td>
                <td>Veterano</td>
                <td>M</td>
                <td>Epee</td>
              </tr>

          </table>

          <h3>Mundo</h3>
          <table className="table worldWideTable">

              <tr>
                <th>Competição</th>
                <th>Data</th>
                <th>Local</th>
                <th>Categoria</th>
                <th>Gênero</th>
                <th>Arma</th>
              </tr>

              <tr>
                <td>Campeonato Regional</td>
                <td> 00/00/0000 - 00/00/0000</td>
                <td>Berlim</td>
                <td>Sênior</td>
                <td>F</td>
                <td>2</td>
              </tr>

              <tr>
                <td>Campeonato Estadual</td>
                <td> 00/00/0000 - 00/00/0000</td>
                <td>Paris</td>
                <td>Júnior</td>
                <td>M</td>
                <td>Sabre</td>
              </tr>

              <tr>
                <td>Novos Talentos</td>
                <td> 00/00/0000 - 00/00/0000</td>
                <td>Toledo</td>
                <td>Cadete</td>
                <td>Misto</td>
                <td>Foil</td>
              </tr>

              <tr>
                <td>Campeonato Nacional</td>
                <td> 00/00/0000 - 00/00/0000</td>
                <td>Londres</td>
                <td>Veterano</td>
                <td>M</td>
                <td>Epee</td>
              </tr>

          </table>

        </section>

        <div className='space'></div>
      </main>
    </div>
  );
}

export default App;
