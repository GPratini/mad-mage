import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './index.css';
import ImageMapper from 'react-img-mapper';
import { Salas1, Mapa1 } from './Andar1';
import { Salas2, Mapa2 } from './Andar2';

const Mapper = (props) => {
  /* const [msg, setMsg] = useState(null);
  const [moveMsg, setMoveMsg] = useState(null); */
  var [salaAtiva, setSalaAtiva] = useState(null);
  var [nomeSala, setNomeSala] = useState(null);
  var [andarAtivo, setAndarAtivo] = useState(1);
  var viewPortWidth = window.innerWidth;
  const [alturaTextArea, setAlturaTextArea] = useState(null);
  const [notas, setNotas] = useState("");
  const mapas = [Mapa1, Mapa2];
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
    setSalaAtiva(area.id);
    setNomeSala(area.name);
    setNotas(localStorage.getItem(area.id));
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
        <button className='elevador' id='botao1' onClick={() => clickedElevador(1)}>1º</button><button className='elevador' id='botao2' onClick={() => clickedElevador(2)}>2º</button>
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
        <h1>{nomeSala ? nomeSala : "Dungeon of the Mad Mage"}</h1>

        {andarAtivo === 1 && <Salas1 salaAtual={salaAtiva} />}
        {andarAtivo === 2 && <Salas2 salaAtual={salaAtiva} />}

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