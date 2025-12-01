import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './index.css';
import ImageMapper from 'react-img-mapper';
import { Salas1, Mapa1 } from './Andar1';
import { Salas2, Mapa2 } from './Andar2';
import { Salas3, Mapa3 } from './Andar3';
import { Salas4, Mapa4 } from './Andar4';
import { Salas5, Mapa5 } from './Andar5';
import { Salas6, Mapa6 } from './Andar6';
import { Salas7, Mapa7 } from './Andar7';
import { Salas8, Mapa8 } from './Andar8';
import { Salas9, Mapa9 } from './Andar9';
import { Salas10, Mapa10 } from './Andar10';
import { Salas11, Mapa11 } from './Andar11';
import { Salas12, Mapa12 } from './Andar12';
import { Salas13, Mapa13 } from './Andar13';
import { Salas14, Mapa14 } from './Andar14';
import { Salas15, Mapa15 } from './Andar15';
import { Salas16, Mapa16 } from './Andar16';
import { Salas17, Mapa17 } from './Andar17';
import { Salas18, Mapa18 } from './Andar18';
import { Salas19, Mapa19 } from './Andar19';
import { Salas20, Mapa20 } from './Andar20';
import { Salas21, Mapa21 } from './Andar21';
import { Salas22, Mapa22 } from './Andar22';
import { Salas23, Mapa23 } from './Andar23';
import { Salas24, Mapa24 } from './Andar24';
import { Salas25, Mapa25 } from './Andar25';

const Mapper = (props) => {
  /* const [msg, setMsg] = useState(null);
  const [moveMsg, setMoveMsg] = useState(null); */
  let [salaAtiva, setSalaAtiva] = useState(null);
  let [nomeSala, setNomeSala] = useState(null);
  let [andarAtivo, setAndarAtivo] = useState(1);
  let viewPortWidth = window.innerWidth;
  const [alturaTextArea, setAlturaTextArea] = useState(null);
  const [notas, setNotas] = useState("");
  const mapas = [Mapa1, Mapa2, Mapa3, Mapa4, Mapa5, Mapa6, Mapa7, Mapa8, Mapa9, Mapa10, Mapa11, Mapa12, Mapa13, Mapa14, Mapa15, Mapa16, Mapa17, Mapa18, Mapa19, Mapa20, Mapa21, Mapa22, Mapa23, Mapa24, Mapa25];
  document.title = mapas[andarAtivo - 1].name + ' | Dungeon of the Mad Mage';

  function TextAreaHandler(e) {
    setAlturaTextArea(e.target.scrollHeight);
    setNotas(e.target.value);
    localStorage.setItem(salaAtiva, e.target.value);
  }

  function clickedElevador(a) {
    setAndarAtivo(a);
    setSalaAtiva(null);
    setNomeSala(null);
  }

  /* const load = () => {
    setMsg("Interact with the image!");
  }; */

  const clickArea = (area) => {
    if (area.id === "upperSkullport") {
      clickedElevador(24);
    } else if (area.id === "skullIsland") {
      clickedElevador(25);
    } else {
      setSalaAtiva(area.id);
      setNomeSala(area.name);
      setNotas(localStorage.getItem(area.id));
    }
  };

  /* const moveOnArea = (area, evt) => {
    setMoveMsg("You moved on " + area.id + " " + area.name + "!");
  };

  const clickedOutside = (evt) => {
    const coords = { x: evt.nativeEvent.layerX, y: evt.nativeEvent.layerY };
    setMsg(`You clicked on the image at coords ${JSON.stringify(coords)}!`);
  };

  const moveOnImage = (evt) => {
    const coords = { x: evt.nativeEvent.layerX, y: evt.nativeEvent.layerY };
    setMoveMsg(`You moved on the image at coords ${JSON.stringify(coords)}!`);
  }; */
  
  return (
    <div>
      <div id="mapa">
        <button className='elevador' id='botaoSk' onClick={() => clickedElevador(23)}>💀</button>
        <button className='elevador' id='botao1' onClick={() => clickedElevador(1)}>1º</button>
        <button className='elevador' id='botao2' onClick={() => clickedElevador(2)}>2º</button>
        <button className='elevador' id='botao3' onClick={() => clickedElevador(3)}>3º</button>
        <button className='elevador' id='botao4' onClick={() => clickedElevador(4)}>4º</button>
        <button className='elevador' id='botao5' onClick={() => clickedElevador(5)}>5º</button>
        <button className='elevador' id='botao6' onClick={() => clickedElevador(6)}>6º</button>
        <button className='elevador' id='botao7' onClick={() => clickedElevador(7)}>7º</button>
        <button className='elevador' id='botao8' onClick={() => clickedElevador(8)}>8º</button>
        <button className='elevador' id='botao9' onClick={() => clickedElevador(9)}>9º</button>
        <button className='elevador' id='botao10' onClick={() => clickedElevador(10)}>10º</button>
        <button className='elevador' id='botao11' onClick={() => clickedElevador(11)}>11º</button>
        <button className='elevador' id='botao12' onClick={() => clickedElevador(12)}>12º</button>
        <button className='elevador' id='botao13' onClick={() => clickedElevador(13)}>13º</button>
        <button className='elevador' id='botao14' onClick={() => clickedElevador(14)}>14º</button>
        <button className='elevador' id='botao15' onClick={() => clickedElevador(15)}>15º</button>
        <button className='elevador' id='botao16' onClick={() => clickedElevador(16)}>16º</button>
        <button className='elevador' id='botao17' onClick={() => clickedElevador(17)}>17º</button>
        <button className='elevador' id='botao18' onClick={() => clickedElevador(18)}>18º</button>
        <button className='elevador' id='botao19' onClick={() => clickedElevador(19)}>19º</button>
        <button className='elevador' id='botao20' onClick={() => clickedElevador(20)}>20º</button>
        <button className='elevador' id='botao21' onClick={() => clickedElevador(21)}>21º</button>
        <button className='elevador' id='botao22' onClick={() => clickedElevador(22)}>22º</button>
        <ImageMapper
          src={mapas[andarAtivo - 1].src}
          map={{
            name: mapas[andarAtivo - 1].name,
            areas: mapas[andarAtivo - 1].areas
          }}
          /* onLoad={() => load()}
          onImageClick={(evt) => clickedOutside(evt)}
          onImageMouseMove={(evt) => moveOnImage(evt)}
          onMouseMove={(area, _, evt) => moveOnArea(area, evt)} */
          onClick={(area) => clickArea(area)}
          stayHighlighted={true}
          fillColor='rgba(0, 0, 255, 0.2)'
          responsive={true}
          parentWidth={(viewPortWidth / 100) * 48}
        />
      </div>
      <div id="info">
        <h1>{nomeSala ? nomeSala : mapas[andarAtivo - 1].name + " | Dungeon of the Mad Mage"}</h1>

        {andarAtivo === 1 && <Salas1 salaAtual={salaAtiva} />}
        {andarAtivo === 2 && <Salas2 salaAtual={salaAtiva} />}
        {andarAtivo === 3 && <Salas3 salaAtual={salaAtiva} />}
        {andarAtivo === 4 && <Salas4 salaAtual={salaAtiva} />}
        {andarAtivo === 5 && <Salas5 salaAtual={salaAtiva} />}
        {andarAtivo === 6 && <Salas6 salaAtual={salaAtiva} />}
        {andarAtivo === 7 && <Salas7 salaAtual={salaAtiva} />}
        {andarAtivo === 8 && <Salas8 salaAtual={salaAtiva} />}
        {andarAtivo === 9 && <Salas9 salaAtual={salaAtiva} />}
        {andarAtivo === 10 && <Salas10 salaAtual={salaAtiva} />}
        {andarAtivo === 11 && <Salas11 salaAtual={salaAtiva} />}
        {andarAtivo === 12 && <Salas12 salaAtual={salaAtiva} />}
        {andarAtivo === 13 && <Salas13 salaAtual={salaAtiva} />}
        {andarAtivo === 14 && <Salas14 salaAtual={salaAtiva} />}
        {andarAtivo === 15 && <Salas15 salaAtual={salaAtiva} />}
        {andarAtivo === 16 && <Salas16 salaAtual={salaAtiva} />}
        {andarAtivo === 17 && <Salas17 salaAtual={salaAtiva} />}
        {andarAtivo === 18 && <Salas18 salaAtual={salaAtiva} />}
        {andarAtivo === 19 && <Salas19 salaAtual={salaAtiva} />}
        {andarAtivo === 20 && <Salas20 salaAtual={salaAtiva} />}
        {andarAtivo === 21 && <Salas21 salaAtual={salaAtiva} />}
        {andarAtivo === 22 && <Salas22 salaAtual={salaAtiva} />}
        {andarAtivo === 23 && <Salas23 salaAtual={salaAtiva} />}
        {andarAtivo === 24 && <Salas24 salaAtual={salaAtiva} />}
        {andarAtivo === 25 && <Salas25 salaAtual={salaAtiva} />}

        {salaAtiva && <textarea style={{ height: alturaTextArea - 4 }} value={notas} onChange={e => TextAreaHandler(e)} />}
        {salaAtiva && <button onClick={() => localStorage.clear()}>Clear all notes</button>}
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Mapper />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();