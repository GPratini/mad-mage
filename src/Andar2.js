import React, { useState } from 'react';
import ImageMapper from 'react-img-mapper';
import { setAndar } from './index';

const Andar2 = (props) => {
  const [msg, setMsg] = useState(null);
  const [moveMsg, setMoveMsg] = useState(null);
  var [salaAtiva, setSalaAtiva] = useState(null);
  var [nomeSala, setNomeSala] = useState(null);
  var viewPortWidth = window.innerWidth;

  const load = () => {
    setMsg("Interact with the image!");
  };

  const clicked = (area) => {
    setMsg(`You clicked on ${area.id} ${area.name}!`);
    setSalaAtiva(area.id);
    setNomeSala(area.name);
  };

  const moveOnArea = (area, evt) => {
    setMoveMsg("You moved on " + area.id + " " + area.name + "!");
  };

  const clickedOutside = (evt) => {
    const coords = { x: evt.nativeEvent.layerX, y: evt.nativeEvent.layerY };
    setMsg(`You clicked on the image at coords ${JSON.stringify(coords)}!`);
  };

  const moveOnImage = (evt) => {
    const coords = { x: evt.nativeEvent.layerX, y: evt.nativeEvent.layerY };
    setMoveMsg(`You moved on the image at coords ${JSON.stringify(coords)}!`);
  };

  return (
    <div>
      <div id="mapa">
        <button class='elevador' id='botao1' onClick={setAndar(1)}>1º</button><button class='elevador' id='botao2' onClick={setAndar(2)}>2º</button>
        <ImageMapper
          src={"andar2.png"}
          map={{
            name: "2º Andar",
            areas: [
              {
                id: "2-1a",
                name: "Bazaar Side Entrance",
                shape: "rect",
                coords: [849,904,925,982]
              }          
            ]
          }}
          onLoad={() => load()}
          onImageClick={(evt) => clickedOutside(evt)}
          onImageMouseMove={(evt) => moveOnImage(evt)}
          onMouseMove={(area, _, evt) => moveOnArea(area, evt)}
          onClick={(area) => clicked(area)}
          stayHighlighted= {true}
          fillColor='rgba(0, 0, 255, 0.2)'
          responsive={true}
          parentWidth={(viewPortWidth/100)*48}
        />
      </div>
      <div id="info">
        <p>{msg ? msg : null}</p>
        <p>{moveMsg ? moveMsg : null}</p>

        <h1>{nomeSala ? nomeSala : "Dungeon of the Mad Mage"}</h1>

        {salaAtiva === "2-1" && <p className='sala' id='2-1'>
          <strong>Detritus.</strong> Trash and debris litter the floor.

          <strong>Bas-Reliefs.</strong> The walls are adorned with bas-reliefs that once depicted dwarves carrying supplies. The dwarves' faces have been chipped away and replaced with cartoonish goblin heads drawn in charcoal.

          <strong>Noise.</strong> Banging noises can be heard to the north. (The goblins in area 1b are building a wooden stage there.)
        </p>}
      </div>
    </div>
  );
};

export default Andar2;