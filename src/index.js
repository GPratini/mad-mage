import React, { lazy, Suspense, useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './index.css';
import MapSvg from './MapSvg';

const floorLoaders = [
  () => import('./Andar1'),
  () => import('./Andar2'),
  () => import('./Andar3'),
  () => import('./Andar4'),
  () => import('./Andar5'),
  () => import('./Andar6'),
  () => import('./Andar7'),
  () => import('./Andar8'),
  () => import('./Andar9'),
  () => import('./Andar10'),
  () => import('./Andar11'),
  () => import('./Andar12'),
  () => import('./Andar13'),
  () => import('./Andar14'),
  () => import('./Andar15'),
  () => import('./Andar16'),
  () => import('./Andar17'),
  () => import('./Andar18'),
  () => import('./Andar19'),
  () => import('./Andar20'),
  () => import('./Andar21'),
  () => import('./Andar22'),
  () => import('./Andar23'),
  () => import('./Andar24'),
  () => import('./Andar25'),
  () => import('./Andar26')
];

const floorRegistry = floorLoaders.map((load, index) => {
  const floorNumber = index + 1;

  return {
    floorNumber,
    load,
    Room: lazy(() => load().then((module) => ({
      default: module[`Salas${floorNumber}`]
    })))
  };
});

const Mapper = (props) => {
  const [salaAtiva, setSalaAtiva] = useState(null);
  const [nomeSala, setNomeSala] = useState(null);
  const [andarAtivo, setAndarAtivo] = useState(1);
  const [mapaAtivo, setMapaAtivo] = useState(null);
  const textareaRef = useRef(null);
  const [notas, setNotas] = useState("");
  const activeFloor = floorRegistry[andarAtivo - 1];
  const STORAGE_KEY = 'mad-mage-notes';
  const STORAGE_VERSION = 1;

  function loadNotesStorage() {
    try {
      if (typeof localStorage === 'undefined') {
        return { version: STORAGE_VERSION, notes: {} };
      }

      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) {
        return { version: STORAGE_VERSION, notes: {} };
      }

      const parsed = JSON.parse(raw);
      if (parsed && parsed.version === STORAGE_VERSION && typeof parsed.notes === 'object') {
        return parsed;
      }
    } catch (error) {
      console.warn('Failed to load notes from storage', error);
    }

    return { version: STORAGE_VERSION, notes: {} };
  }

  function saveNotesStorage(data) {
    try {
      if (typeof localStorage === 'undefined') {
        return;
      }
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (error) {
      console.warn('Failed to save notes to storage', error);
    }
  }

  function getNote(areaId) {
    const storage = loadNotesStorage();
    if (storage.notes[areaId] !== undefined) {
      return storage.notes[areaId];
    }

    try {
      if (typeof localStorage !== 'undefined') {
        const oldValue = localStorage.getItem(areaId);
        if (oldValue !== null) {
          storage.notes[areaId] = oldValue;
          saveNotesStorage(storage);
          localStorage.removeItem(areaId);
          return oldValue;
        }
      }
    } catch (error) {
      console.warn('Failed to migrate old note from localStorage', error);
    }

    return "";
  }

  function saveNote(areaId, text) {
    const storage = loadNotesStorage();
    storage.notes[areaId] = text;
    saveNotesStorage(storage);
  }

  function TextAreaHandler(e) {
    const value = e.target.value;
    setNotas(value);
    saveNote(salaAtiva, value);
  }

  function clickedElevador(a) {
    setAndarAtivo(a);
    setMapaAtivo(null);
    setSalaAtiva(null);
    setNomeSala(null);
  }

  useEffect(() => {
    let cancelled = false;

    activeFloor.load().then(({ [`Mapa${andarAtivo}`]: mapa }) => {
      if (!cancelled) {
        setMapaAtivo(mapa);
      }
    });

    return () => {
      cancelled = true;
    };
  }, [activeFloor, andarAtivo]);

  useEffect(() => {
    document.title = `${mapaAtivo?.name || `Floor ${andarAtivo}`} | Dungeon of the Mad Mage`;
  }, [andarAtivo, mapaAtivo]);

  useEffect(() => {
    if (!textareaRef.current) return;
    
    textareaRef.current.style.height = 'auto';
    textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
  }, [notas, salaAtiva]);

  const clickArea = (area) => {
    if (area.name === "upperSkullport") {
      clickedElevador(24);
    } else if (area.name === "skullIsland") {
      clickedElevador(25);
    } else if (area.name === "xanatharlair") {
      clickedElevador(26);
    } else {
      setSalaAtiva(area.id);
      setNomeSala(area.name);
      setNotas(getNote(area.id));
    }
  };
  
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
        {mapaAtivo && <MapSvg map={mapaAtivo} onAreaClick={clickArea} />}
      </div>
      <div id="info">
        <h1>{nomeSala || mapaAtivo?.name || 'Loading floor...'}</h1>

        <Suspense fallback={<div className="sala">Loading floor notes...</div>}>
          <activeFloor.Room salaAtual={salaAtiva} />
        </Suspense>

        {salaAtiva && <textarea ref={textareaRef} value={notas} onChange={TextAreaHandler} />}
        
      </div>
    </div>
  );
};

// Botão de limpar storage {salaAtiva && <button onClick={() => localStorage.clear()}>Clear all notes</button>}

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