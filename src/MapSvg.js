import React, { useEffect, useState } from 'react';

function rectangleProps(coords) {
  const [firstX, firstY, secondX, secondY] = coords;
  const x = Math.min(firstX, secondX);
  const y = Math.min(firstY, secondY);

  return {
    x,
    y,
    width: Math.abs(secondX - firstX),
    height: Math.abs(secondY - firstY)
  };
}

function AreaShape({ area, active, onClick, onHover }) {
  if (!area.id || !Array.isArray(area.coords) || area.coords.length === 0) {
    return null;
  }

  const className = `map-area${active ? ' map-area-active' : ''}`;
  const commonProps = {
    className,
    role: 'button',
    tabIndex: 0,
    'aria-label': area.name || area.id,
    onClick: () => onClick(area),
    onFocus: () => onHover(area.id),
    onBlur: () => onHover(null),
    onMouseEnter: () => onHover(area.id),
    onMouseLeave: () => onHover(null),
    onKeyDown: (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        onClick(area);
      }
    }
  };

  if (area.shape === 'circle' && area.coords.length >= 3) {
    const [cx, cy, r] = area.coords;
    return <circle {...commonProps} cx={cx} cy={cy} r={r} />;
  }

  if (area.shape === 'rect' && area.coords.length >= 4) {
    return <rect {...commonProps} {...rectangleProps(area.coords)} />;
  }

  if (area.shape === 'poly' && area.coords.length >= 6) {
    const points = [];
    for (let index = 0; index < area.coords.length; index += 2) {
      points.push(`${area.coords[index]},${area.coords[index + 1]}`);
    }
    return <polygon {...commonProps} points={points.join(' ')} />;
  }

  return null;
}

export default function MapSvg({ map, onAreaClick }) {
  const [dimensions, setDimensions] = useState(null);
  const [hoveredArea, setHoveredArea] = useState(null);

  useEffect(() => {
    const image = new Image();
    image.onload = () => setDimensions({ width: image.naturalWidth, height: image.naturalHeight });
    image.src = map.src;

    return () => {
      image.onload = null;
    };
  }, [map.src]);

  return (
    <svg
      className="map-svg"
      viewBox={dimensions ? `0 0 ${dimensions.width} ${dimensions.height}` : undefined}
      role="img"
      aria-label={map.name}
      preserveAspectRatio="xMidYMin meet"
    >
      <image
        href={map.src}
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMin meet"
      />
      {dimensions && map.areas.map((area) => (
        <AreaShape
          key={`${area.id}-${area.coords.join('-')}`}
          area={area}
          active={hoveredArea === area.id}
          onClick={onAreaClick}
          onHover={setHoveredArea}
        />
      ))}
    </svg>
  );
}
