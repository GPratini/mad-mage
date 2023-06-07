import React, { useState } from 'react';
import ImageMapper from 'react-img-mapper';

const Mapper = (props) => {
  const [msg, setMsg] = useState(null);
  const [hoveredArea, setHoveredArea] = useState(null);
  const [moveMsg, setMoveMsg] = useState(null);

  const load = () => {
    setMsg("Interact with image !");
  };

  const clicked = (area) => {
    setMsg(
      `You clicked on ${area.shape} ${area.name} at coords ${JSON.stringify(
        area.coords
      )} !`
    );
  };

  const clickedOutside = (evt) => {
    const coords = { x: evt.nativeEvent.layerX, y: evt.nativeEvent.layerY };
    // setMsg(`You clicked on the image at coords ${JSON.stringify(coords)} !`);
  };

  const moveOnImage = (evt) => {
    const coords = { x: evt.nativeEvent.layerX, y: evt.nativeEvent.layerY };
    setMoveMsg(`You moved on the image at coords ${JSON.stringify(coords)}!`);
  };

  const enterArea = (area) => {
    setHoveredArea(area);
    setMsg(
      `You entered ${area.shape} ${area.name} at coords ${JSON.stringify(area.coords)}!`
    );
  };

  const leaveArea = (area) => {
    setHoveredArea(null);
    setMsg(
      `You left ${area.shape} ${area.name} at coords ${JSON.stringify(area.coords)}!`
    );
  };

  const moveOnArea = (area, evt) => {
    const coords = { x: evt.nativeEvent.layerX, y: evt.nativeEvent.layerY };
    setMoveMsg(
      "You moved on " + area.shape + " " + area.name + ' at coords {"x":' + coords.x + ',"y":' + coords.y + "}!"
    );
  };

  const getTipPosition = (area) => {
    return { top: `${area.center[1]}px`, left: `${area.center[0]}px` };
  };

  return (
    <div>
          <ImageMapper
            src={"andar1.png"}
            map={{
              name: "andar1",
              areas: [
                {
                  id: "1-1",
                  name: "Poço",
                  shape: "rect",
                  coords: [169,167,305,315],
                  preFillColor: "rgba(0, 0, 255, 0.15)",
                  fillColor: "rgba(0, 0, 255, 0.2)"
                }
              ]
            }}
            height={730}
            onImageClick={(evt) => clickedOutside(evt)}
            onImageMouseMove={(evt) => moveOnImage(evt)}
            onLoad={() => load()}
            onMouseMove={(area, _, evt) => moveOnArea(area, evt)}
            onClick={(area) => clicked(area)}
          />

{hoveredArea && (
            <span
              className="tooltip"
              style={{ ...getTipPosition(hoveredArea) }}
            >
              {hoveredArea && hoveredArea.name}
            </span>
          )}

        <pre className="message">{msg ? msg : null}</pre>
        <pre>{moveMsg ? moveMsg : null}</pre>
    </div>
  );
};

export default Mapper;