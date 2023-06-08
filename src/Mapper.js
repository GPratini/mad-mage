import React, { useState } from 'react';
import ImageMapper from 'react-img-mapper';
import './Mapper.css';

const Mapper = (props) => {
  const [msg, setMsg] = useState(null);
  const [moveMsg, setMoveMsg] = useState(null);

  const load = () => {
    setMsg("Interact with the image!");
  };

  const mapas = ["andar1.png", "andar2.png","andar3.png","andar4.png","andar5.png","andar6.png","andar7.png","andar8.png","andar9.png","andar10.png","andar11.png","andar12.png","andar13.png","andar14.png","andar15.png","andar16.png","andar17.png","andar18.png","andar19.png","andar20.png","andar21.png","andar22.png","andar23.png","skullport.png"];

  const clicked = (area) => {
    setMsg(`You clicked on ${area.id} ${area.name}!`);
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
        <ImageMapper
          src={mapas[0]}
          map={{
            name: "Andar da catacumba",
            areas: [
              {
                id: "1-1",
                name: "Poço",
                shape: "rect",
                coords: [473, 570, 532, 630]
              }
            ]
          }}
          onLoad={() => load()}
          onImageClick={(evt) => clickedOutside(evt)}
          onImageMouseMove={(evt) => moveOnImage(evt)}
          onMouseMove={(area, _, evt) => moveOnArea(area, evt)}
          onClick={(area) => clicked(area)}
          fillColor='rgba(0, 0, 255, 0.2)'
          width={980}
        />
      </div>
      <div id="info">
        <p>{msg ? msg : null}</p>
        <p>{moveMsg ? moveMsg : null}</p>
      </div>
    </div>
  );
};

export default Mapper;