import { useState } from 'react';
import './App.css';
import Konyv from './Konyv';
import Kosar from './Kosar';
import KosarModel from './model/kosarModel';



const konyvTomb = [
  {
    id:1,
    cim: "Malevil",
    szerzo: "Robert Merle",
    ar: 2111
  },
  {
    id:2,
    cim: "Védett férfiak",
    szerzo: "Robert Merle",
    ar: 1111
  },
  {
    id:3,
    cim: "Állati elmék",
    szerzo: "Robert Merle",
    ar: 3111
  },
]

function App() {
  const [db,setDb] = useState(0); 
  const [ossz,setOssz] = useState(0);
  const [kosar,setKos] = useState([]);
  const kosarModel = new KosarModel(kosar);

  function kosarKezeles(adat) {

    kosarModel.setKosar(adat);

    setKos(kosarModel.getKosar());
    setOssz(kosarModel.getOssz());
    setDb(kosarModel.getDb());
    
  }
  function addDb(adat){
    kosarModel.inc(adat);
    setKos(kosarModel.getKosar());
  }


  return (
    <div className="App">
      <header className="App-header">
        <h1>Könyváruház</h1>
      </header>
      <section>
        <p>A könyvek darabszáma: {db}</p>
        <p>Az összára a termékeknek: {ossz}</p>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Szerző</th>
              <th>Cím</th>
              <th>Ár</th>
              <th>Db.</th>
            </tr>
          </thead>
          <tbody>                                     
        {
          kosarModel.getKosar().map((kosar,index)=>{
            return (<Kosar addDb={addDb} kosar={kosar} key={index} />)
          })
        }
          </tbody>
        </table>
      </section>
      <article>
        {
          konyvTomb.map((konyv, index) => {
            return (<Konyv konyvObj={konyv} key={index}  kosarKezelesFv={kosarKezeles} />)
          }
          )
        }


      </article>
      <footer>
        <p>saját név</p>
      </footer>
    </div>
  );
}

export default App;
