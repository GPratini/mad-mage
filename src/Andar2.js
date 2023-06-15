export const Mapa2 = {
  src: "andar2.png",
  name: "2º Andar",
  areas: [
    {
      id: "2-1a",
      name: "Bazaar Side Entrance",
      shape: "rect",
      coords: [849, 904, 925, 982]
    }
  ]
}

export function Salas2({ salaAtual }) {
  return (
    <div>
      {salaAtual === "2-1a" && <p className='sala' id='2-1a'>
        <strong>Detritus.</strong> Trash and debris litter the floor.<br></br>

        <strong>Bas-Reliefs.</strong> The walls are adorned with bas-reliefs that once depicted dwarves carrying supplies. The dwarves' faces have been chipped away and replaced with cartoonish goblin heads drawn in charcoal.<br></br>

        <strong>Noise.</strong> Banging noises can be heard to the north. (The goblins in area 1b are building a wooden stage there.)
      </p>}
    </div>
  );
};