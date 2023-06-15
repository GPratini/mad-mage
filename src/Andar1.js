export const Mapa1 = {
  src: "andar1.png",
  name: "1º Andar",
  areas: [
    {
      id: "1-1",
      name: "Entry Well",
      shape: "rect",
      coords: [846, 1021, 948, 1123]
    },
    {
      id: "1-2a",
      name: "Demon Reliefs",
      shape: "rect",
      coords: [559, 1126, 740, 1175]
    },
    {
      id: "1-2b",
      name: "Pillar Forest",
      shape: "poly",
      coords: [454, 1096, 427, 1125, 427, 1176, 455, 1201, 479, 1201, 531, 1174, 531, 1125, 480, 1096]
    },
    {
      id: "1-3",
      name: "Slanted Room",
      shape: "poly",
      coords: [611, 1280, 660, 1280, 660, 1305, 739, 1305, 739, 1357, 610, 1357, 610, 1382, 585, 1382, 585, 1306, 611, 1304]
    },
    {
      id: "1-41",
      name: "Cracked Ceiling",
      shape: "rect",
      coords: [1341, 2113, 1494, 2189]
    },
    {
      id: "1-22",
      name: "Empty Room",
      shape: "rect",
      coords: [324, 1072, 400, 1122]
    },
    {
      id: "1-39b",
      name: "Bugbear Den",
      shape: "rect",
      coords: [1105, 2012, 1159, 2166]
    },
    {
      id: "1-39c",
      name: "Goblin Hall",
      shape: "rect",
      coords: [1154, 1979, 1105, 1749]
    },
    {
      id: "1-39d",
      name: "Old Forge",
      shape: "poly",
      coords: [1211, 1697, 1233, 1696, 1259, 1668, 1259, 1643, 1286, 1646, 1286, 1667, 1312, 1696, 1338, 1699, 1337, 1824, 1287, 1826, 1287, 1799, 1208, 1798]
    },
    {
      id: "1-40",
      name: "Fearful Mimicry",
      shape: "poly",
      coords: [1208, 1803, 1233, 1803, 1233, 1826, 1259, 1828, 1258, 1849, 1236, 1849, 1235, 1931, 1281, 1927, 1281, 1953, 1233, 1956, 1233, 1979, 1205, 1976, 1208, 1957, 1157, 1956, 1159, 1930, 1207, 1930, 1207, 1852, 1182, 1852, 1182, 1826, 1205, 1826]
    },
    {
      id: "1-39a",
      name: "Hall of the Two-Headed King",
      shape: "poly",
      coords: [1077, 2033, 1076, 2188, 924, 2189, 920, 2164, 895, 2163, 897, 2090, 923, 2090, 924, 2035]
    },
    {
      id: "1-38",
      name: "Secret Tunnel",
      shape: "poly",
      coords: [893, 2111, 892, 2029, 889, 1988, 929, 1966, 948, 1949, 948, 1904, 923, 1903, 926, 1940, 898, 1954, 872, 1968, 860, 1988, 867, 2022, 867, 2111]
    },
    {
      id: "1-37",
      name: "Map Room",
      shape: "poly",
      coords: [895, 1902, 974, 1903, 972, 1878, 1025, 1875, 1026, 1824, 974, 1824, 972, 1776, 897, 1773]
    }
  ]
};

export function Salas1({ salaAtual }) {
  return (
    <div>
      {salaAtual === "1-1" && <p className='sala' id='1-1'>
        At the bottom of the Yawning Portal entry well is a dark, 40-foot-square room with the following features:<br></br>

        <strong>Exits.</strong> The only exit appears to be a tunnel that leads south before bending west. (There's also a one-way secret door to the north.)<br></br>
        <strong>Sandy Floor.</strong> A thin layer of sand covers the floor.<br></br>
        <strong>Hanging Shields.</strong> Dented, rusty shields adorn the walls, which are also covered with graffiti.<br></br>

        <h2>One-Way Secret Door</h2>

        A one-way secret door built into the north wall can't be opened from the south without the aid of a knock spell or similar magic. Any character who finds the secret door also notices a 1-inch-diameter hole bored through it at a height of 5 feet. On the north side of the secret door, a human bandit quietly listens at the hole for sounds of newcomers descending the shaft. Upon hearing creatures enter the area, the bandit retreats to warn its confederates in areas 6, area 8, and area 9. Characters in the room can hear the bandit's soft, retreating footfalls with a successful DC 20 Wisdom (Perception) check.

        <h2>Sand</h2>

        A search of the sand yields some discarded gear (two iron spikes, an empty wineskin, a tinderbox, and a pair of pants sized for an adult human) and a random trinket dropped by a frightened adventurer. Roll percentile dice and consult the Trinkets table in chapter 5 of the Player's Handbook to determine the trinket.

        <h2>Shields</h2>

        Sixty old shields hang on the walls; they break apart if disturbed in any way. Written in blood on the wall, concealed behind one of the shields, is the following message in Elvish:
        Beyond the pillar forest, the Mad Mage waits.
        Casting spells behind magic gates.
      </p>}
      {salaAtual === "1-2a" && <p className='sala' id='1-2a'>
        <strong>Bas-Reliefs.</strong> Every 10-foot section of wall has a 9-foot-high, 4-foot-wide, 3-inch-deep door-shaped recess containing a bas-relief carving of a demon. Each relief depicts a different kind of demon (see below).<br></br>

        <strong>Skeleton.</strong> A kenku skeleton lies on the floor, one of its thin arms pointing toward a bas-relief of a nalfeshnee demon on the south wall. (Halaster artfully placed the skeleton here to help adventurers find the secret door to area 3.)<br></br>

        The carvings on the north wall of area 2a depict (from east to west) a balor, a barlgura, a chasme, a dretch, a glabrezu, a goristro, and a hezrou. The carvings on the south wall depict (from west to east) a marilith, a nalfeshnee, a quasit, a shadow demon, a vrock, and a yochlol. The recessed wall that contains the nalfeshnee carving has a secret door leading to area 3. The recessed wall that contains the dretch carving has another secret door, which leads to area 4. The dretch carving has half-inch spy-holes for eyes. These holes are detected when the secret door is found.
      </p>}

      {salaAtual === "1-2b" && <p className='sala' id='1-2b'>
        <strong>Bugbears.</strong> Two bugbears hide behind pillars. (Each bugbear is host to an intellect devourer in its skull cavity.)<br></br>

        <strong>Snake Skeleton.</strong> The skeleton of a giant constrictor snake coils up the top half of the northernmost pillar. The snake skeleton is harmless and falls apart if disturbed, clattering loudly as it hits the floor.<br></br>

        <strong>Warning.</strong> The words "Certain death this way!" are carved in Common on the southeast wall, with an arrow pointing toward the southern exit.<br></br>

        The bugbears detect the approach of adventurers with the aid of the intellect devourers' Detect Sentience trait and therefore can't be surprised. As intruders approach their location, the bugbears withdraw down the southern tunnel and circle around to warn the goblinoids in area 23 of intruders. The bugbears know the perils of the western tunnel (area 21) and avoid it. Characters whose passive Wisdom (Perception) scores equal or exceed the bugbears' Dexterity (Stealth) checks notice the hiding or fleeing bugbears.<br></br>

        When a bugbear drops to 0 hit points, the intellect devourer in its skull teleports out to seek a new host.
        Secret Compartment.<br></br>

        Inspection of the southernmost pillar reveals a loose stone in its base. Behind the stone is an empty compartment, its contents discovered and plundered long ago.
      </p>}

      {salaAtual === "1-3" && <p className='sala' id='1-3'>
        A secret door opens to reveal an empty 10-foot-square cubicle with a 5-foot-wide tunnel of rough-hewn stone leading away from it. The tunnel descends slightly until it reaches a room that smells like a sewer. The room contains the following features:<br></br>

        <strong>Flood.</strong> The floor of the room tilts—its west end is 6 feet lower than its east end. Foul sewer water covers the floor, barely reaching the east wall but deepening by 1 foot for every 10 feet of travel westward.<br></br>

        <strong>Statue.</strong> A wide alcove in the north wall contains a life-size statue of a sahuagin, submerged up to its chest in sewer water. The statue emits a dim purple radiance, its head is completely turned around, and one of its arms has broken off and is nowhere to be seen.<br></br>

        <strong>Ooze.</strong> A <a href="https://5e.tools/bestiary.html#gray%20ooze_mm" target="_blank" rel="noreferrer">psychic gray ooze</a> lurks beneath the murky water, north of the statue. (It's invisible while underwater.)<br></br>

        The ooze uses its Psychic Crush action option (see the "Variant: Psychic Gray Ooze" sidebar in the "Oozes" entry in the Monster Manual) to attack anyone who approaches the statue.

        <h2>Statue</h2>

        The purple aura around the sahuagin statue is harmless, and casting dispel magic on the statue removes it. The statue's arm broke off long ago and rests now against the west wall, concealed beneath the dark water.<br></br>

        The statue's head is hollow, with holes for eyes and a larger hole for its fanged mouth. Further inspection reveals that the head has screw threads and is removable. Previous adventurers managed to unscrew it halfway before being scared off by the gray ooze. Unscrewing and removing the head exposes a hidden, charred compartment in the statue's neck. The compartment contains melted wax from candles that were used to illuminate the statue's head like a jack-o'-lantern.

        <h2>Water</h2>

        The water seeps through cracks in the ceiling of the alcove, drips down the walls, and accumulates in the west end of the room before slowly leaking out through smaller cracks in the floor. The water is tepid, and not fit for drinking unless a purify food and drink spell is cast on it.
      </p>}
    </div>
  );
};