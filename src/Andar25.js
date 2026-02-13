export const Mapa25 = {
  src: "skullport3.png",
  name: "Skullport - Skull Island",
  areas: [
    {
      id: "25-1",
      name: "Murkspan Bridge",
      shape: "rect",
      coords: [1131, 564, 1184, 826]
    },
    {
      id: "25-2",
      name: "Main Gate",
      shape: "rect",
      coords: [1116, 830, 1195, 1008]
    },
    {
      id: "25-3a",
      name: "Harbors",
      shape: "circle",
      coords: [1340, 1484, 168]
    },
    {
      id: "25-3b",
      name: "Harbors",
      shape: "circle",
      coords: [609, 2134, 130]
    },
    {
      id: "25-4",
      name: "Duergar Barracks",
      shape: "poly",
      coords: [749, 1088, 989, 1092, 989, 1150, 807, 1334, 747, 1336]
    },
    {
      id: "25-5",
      name: "Human Barracks",
      shape: "poly",
      coords: [940, 1352, 1140, 1152, 1235, 1245, 1084, 1407, 1082, 1516, 1167, 1602, 1069, 1696, 940, 1567]
    },
    {
      id: "25-6",
      name: "Depleted Armory",
      shape: "rect",
      coords: [936, 1771, 1067, 1898]
    },
    {
      id: "25-7",
      name: "Bugbear Barracks",
      shape: "poly",
      coords: [1129, 1756, 1215, 1665, 1324, 1771, 1411, 1769, 1409, 1906, 1131, 1904]
    },
    {
      id: "25-8",
      name: "Gargoyle Towers",
      shape: "rect",
      coords: [816, 1955, 1224, 2060]
    },
    {
      id: "25-9",
      name: "Tower of the Seven Woes",
      shape: "poly",
      coords: [889, 2120, 969, 2102, 1031, 2195, 1102, 2202, 1104, 2337, 1056, 2350, 1011, 2310, 869, 2304]
    },
    {
      id: "25-10a",
      name: "Kuo-toa Lair - Old Dock",
      shape: "poly",
      coords: [1919,1784,1802,1687,1848,1638,1959,1742]
    },
    {
      id: "25-10b",
      name: "Kuo-toa Lair - Kuo-toa Cave",
      shape: "circle",
      coords: [2020,1807,75]
    }
  ]
}

export function Salas25({ salaAtual }) {
  return (
    <div>
      {salaAtual == null && <div className='sala'>
        <h2>Skull Island Weaponry</h2>
        <p>The fortress on Skull Island bristles with ballistae and flame cannons. Before one of these weapons can be fired, it must be loaded and aimed. It takes one action to load a weapon, one action to aim it, and one action to fire it. Each ballista or flame cannon is a Large object with AC 15, 50 hit points, and immunity to poison and psychic damage.</p>

        <p><strong>Ballista.</strong> Ranged Weapon Attack: +6 to hit, range 120/480 ft., one target. Hit: 16 (3d10) piercing damage. <br></br>

          <strong>Flame Cannon.</strong> Ranged Weapon Attack: +4 to hit, range 60/240 ft., one target. Hit: 3 (1d6) bludgeoning damage plus 17 (5d6) fire damage, and the target catches fire. While on fire, the target takes 3 (1d6) fire damage at the start of each of its turns. A creature can end this damage by immersing itself in water or by using an action to make a DC 10 Dexterity check to extinguish the flames.</p>
      </div>}
      {salaAtual === "25-enc" && <div className='sala' id='25-enc'>
        <p></p>
      </div>}
      {salaAtual === "25-1" && <div className='sala' id='25-1'>
        <p>An arched stone bridge connects the island to the town. The middle 30-foot span of the bridge is rigged to collapse. Two stone levers hidden in secret compartments at the south end of the bridge trigger the collapse when they are pulled simultaneously (requiring an action for each one). Characters who search the south end of the bridge can find the levers and discern their purpose with a successful DC 20 Wisdom (Perception) check.</p>
      </div>}
      {salaAtual === "25-2" && <div className='sala' id='25-2'>
        <p>The main entrance to the fortress is protected by a sturdy iron gate. Winches in the flanking guard towers open and close this gate.</p>
      </div>}
      {salaAtual === "25-3a" && <div className='sala' id='25-3a'>
        <p>Skull Island has two natural harbors (area 3a and area 3b). Each harbor is 60 feet deep and lined with rotted wooden docks. Steel augers installed along the mouth of each harbor can be raised or lowered on rusty iron chains connected to winches in the towers to either side of the harbor. When they are raised, the augers pierce the hulls of passing ships, flooding their lower decks and causing them to sink.</p>
      </div>}
      {salaAtual === "25-3b" && <div className='sala' id='25-3b'>
        <p>Skull Island has two natural harbors (area 3a and area 3b). Each harbor is 60 feet deep and lined with rotted wooden docks. Steel augers installed along the mouth of each harbor can be raised or lowered on rusty iron chains connected to winches in the towers to either side of the harbor. When they are raised, the augers pierce the hulls of passing ships, flooding their lower decks and causing them to sink.</p>
      </div>}
      {salaAtual === "25-4" && <div className='sala' id='25-4'>
        <p>Ten <a href="https://5e.tools/bestiary.html#duergar_mm">duergar</a> are quartered in this two-story building.</p>
      </div>}
      {salaAtual === "25-5" && <div className='sala' id='25-5'>
        <p>This three-story edifice looms over the northeast harbor (area 3b). Seventy human <a href="https://5e.tools/bestiary.html#tough_xmm">thugs</a> are quartered here.</p>
      </div>}
      {salaAtual === "25-6" && <div className='sala' id='25-6'>
        <p>The Xanathar Guild plundered this two-story building after taking control of the fortress. It stands empty.</p>
      </div>}
      {salaAtual === "25-7" && <div className='sala' id='25-7'>
        <p>Sixty <a href="https://5e.tools/bestiary.html#bugbear%20warrior_xmm">bugbears</a> inhabit this two-story stone building.</p>
      </div>}
      {salaAtual === "25-8" && <div className='sala' id='25-8'>
        <p>Twelve <a href="https://5e.tools/bestiary.html#gargoyle_xmm">gargoyles</a> perch on the battlements of these three-story stone towers (four atop each tower).</p>
      </div>}
      {salaAtual === "25-9" && <div className='sala' id='25-9'>
        <p>The fortress's half-ogre commander, <a href="https://5e.tools/bestiary.html#sundeth_wdmm">Sundeth</a>, lives in this hollowed-out spire with his <a href="https://5e.tools/bestiary.html#wyvern_xmm">wyvern</a> mount. Sundeth is a hideous, 8-foot-tall, half-ogre.</p>

          <p>The column merges with the cavern roof, narrows in the middle (where a stalactite and a stalagmite converged eons ago), and has abundant ledges and handholds on the outside. The outer door is made of iron and squeals loudly when opened, alerting the spire's occupants.</p>

          <p>Carved into the column is a seven-story prison composed of windowless torture chambers connected to one another by rough-hewn stairways. Worshipers of Loviatar used this tower to imprison and torture slaves. The walls throughout are lined with manacles; rusted shackles lie strewn amid torture racks, spiked cages, and other contraptions that have fallen into disrepair.</p>
      </div>}
      {salaAtual === "25-10a" && <div className='sala' id='25-10a'>
        <p>East of the island fortress, an old dock protrudes from the mouth of a damp cave like a wooden tongue.</p>

        <p>The dock creaks and groans but is safe to stand on.</p>
      </div>}
      {salaAtual === "25-10b" && <div className='sala' id='25-10b'>
        <p>A hungry <a href="https://5e.tools/bestiary.html#kuo-toa_xmm">kuo-toa</a> named Hlool crouches in the middle of this cave. If the characters give it food, Hlool eats the food, then dives to the bottom of the River Sargauth, returns minutes later with a bundled-up <a href="https://5e.tools/items.html#cloak%20of%20the%20manta%20ray_xdmg">cloak of the manta ray</a> that it took from a dead adventurer, and gives it to the characters as a thank-you gift.</p>
      </div>}
    </div >
  );
};