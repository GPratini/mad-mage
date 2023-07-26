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
      id: "1-16",
      name: "Manticore Den",
      shape: "poly",
      coords: [923, 209, 972, 160, 1074, 158, 1131, 212, 1130, 499, 1077, 549, 980, 552, 923, 501]
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
      {salaAtual === "1-1" && <div className='sala' id='1-1'>
        <p>At the bottom of the Yawning Portal entry well is a dark, 40-foot-square room with the following features:<br></br>

          <strong>Exits.</strong> The only exit appears to be a tunnel that leads south before bending west. (There's also a one-way secret door to the north.)<br></br>
          <strong>Sandy Floor.</strong> A thin layer of sand covers the floor.<br></br>
          <strong>Hanging Shields.</strong> Dented, rusty shields adorn the walls, which are also covered with graffiti.</p>

        <h2>One-Way Secret Door</h2>

        <p>A one-way secret door built into the north wall can't be opened from the south without the aid of a knock spell or similar magic. Any character who finds the secret door also notices a 1-inch-diameter hole bored through it at a height of 5 feet. On the north side of the secret door, a human bandit quietly listens at the hole for sounds of newcomers descending the shaft. Upon hearing creatures enter the area, the bandit retreats to warn its confederates in areas 6, area 8, and area 9. Characters in the room can hear the bandit's soft, retreating footfalls with a successful DC 20 Wisdom (Perception) check.</p>

        <h2>Sand</h2>

        <p>A search of the sand yields some discarded gear (two iron spikes, an empty wineskin, a tinderbox, and a pair of pants sized for an adult human) and a random trinket dropped by a frightened adventurer. Roll percentile dice and consult the Trinkets table in chapter 5 of the Player's Handbook to determine the trinket.</p>

        <h2>Shields</h2>

        <p>Sixty old shields hang on the walls; they break apart if disturbed in any way. Written in blood on the wall, concealed behind one of the shields, is the following message in Elvish:<br></br>
          Beyond the pillar forest, the Mad Mage waits.<br></br>
          Casting spells behind magic gates.</p>
      </div>}
      {salaAtual === "1-2a" && <div className='sala' id='1-2a'>
        <p>At the west end of a 20-foot-wide hall (area 2a), stairs descend 10 feet to a room lined with pillars (area 2b).<br></br>

          <strong>Bas-Reliefs.</strong> Every 10-foot section of wall has a 9-foot-high, 4-foot-wide, 3-inch-deep door-shaped recess containing a bas-relief carving of a demon. Each relief depicts a different kind of demon (see below).<br></br>

          <strong>Skeleton.</strong> A kenku skeleton lies on the floor, one of its thin arms pointing toward a bas-relief of a nalfeshnee demon on the south wall. (Halaster artfully placed the skeleton here to help adventurers find the secret door to area 3.)<br></br>

          The <a target="blank" href="demon.reliefsN.jpg">carvings on the north wall</a> of area 2a depict (from east to west) a balor, a barlgura, a chasme, a dretch, a glabrezu, a goristro, and a hezrou. The <a target="blank" href="demon.reliefsS.jpg">carvings on the south wall</a> depict (from west to east) a marilith, a nalfeshnee, a quasit, a shadow demon, a vrock, and a yochlol. The recessed wall that contains the nalfeshnee carving has a secret door leading to area 3. The recessed wall that contains the dretch carving has another secret door, which leads to area 4. The dretch carving has half-inch spy-holes for eyes. These holes are detected when the secret door is found.</p>
      </div>}

      {salaAtual === "1-2b" && <div className='sala' id='1-2b'>
        <p>At the west end of a 20-foot-wide hall (area 2a), stairs descend 10 feet to a room lined with pillars (area 2b). Similar staircases descend into the room from 10-foot-wide tunnels leading north, west, and south.</p>

        <p><strong>Bugbears.</strong> Two <a href="https://5e.tools/bestiary.html#bugbear_mm" target="blank">bugbears</a> hide behind pillars. (Each bugbear is host to an <a href="https://5e.tools/bestiary.html#intellect%20devourer_mm" target="blank">intellect devourer</a> in its skull cavity.)<br></br>

          <strong>Snake Skeleton.</strong> The skeleton of a giant constrictor snake coils up the top half of the northernmost pillar. The snake skeleton is harmless and falls apart if disturbed, clattering loudly as it hits the floor.<br></br>

          <strong>Warning.</strong> The words "Certain death this way!" are carved in Common on the southeast wall, with an arrow pointing toward the southern exit.<br></br></p>

        <p>The bugbears detect the approach of adventurers with the aid of the intellect devourers' Detect Sentience trait and therefore can't be surprised. As intruders approach their location, the bugbears withdraw down the southern tunnel and circle around to warn the goblinoids in area 23 of intruders. The bugbears know the perils of the western tunnel (area 21) and avoid it. Characters whose passive Wisdom (Perception) scores equal or exceed the bugbears' Dexterity (Stealth) checks notice the hiding or fleeing bugbears. When a bugbear drops to 0 hit points, the intellect devourer in its skull teleports out to seek a new host.</p>

        <p><strong>Secret Compartment.</strong> Inspection of the southernmost pillar reveals a loose stone in its base. Behind the stone is an empty compartment, its contents discovered and plundered long ago.</p>
      </div>}

      {salaAtual === "1-3" && <div className='sala' id='1-3'>
        <p>A secret door opens to reveal an empty 10-foot-square cubicle with a 5-foot-wide tunnel of rough-hewn stone leading away from it. The tunnel descends slightly until it reaches a room that smells like a sewer. The room contains the following features:</p>

        <p><strong>Flood.</strong> The floor of the room tilts—its west end is 6 feet lower than its east end. Foul sewer water covers the floor, barely reaching the east wall but deepening by 1 foot for every 10 feet of travel westward.<br></br>

          <strong>Statue.</strong> A wide alcove in the north wall contains a life-size statue of a sahuagin, submerged up to its chest in sewer water. The statue emits a dim purple radiance, its head is completely turned around, and one of its arms has broken off and is nowhere to be seen.<br></br>

          <strong>Ooze.</strong> A <a href="https://5e.tools/bestiary.html#gray%20ooze_mm" target="_blank" rel="noreferrer">psychic gray ooze</a> lurks beneath the murky water, north of the statue. (It's invisible while underwater.) The ooze uses its Psychic Crush action option (see the "Variant: Psychic Gray Ooze" sidebar in the "Oozes" entry in the Monster Manual) to attack anyone who approaches the statue.</p>

        <h2>Statue</h2>

        <p>The purple aura around the sahuagin statue is harmless, and casting dispel magic on the statue removes it. The statue's arm broke off long ago and rests now against the west wall, concealed beneath the dark water.</p>

        <p>The statue's head is hollow, with holes for eyes and a larger hole for its fanged mouth. Further inspection reveals that the head has screw threads and is removable. Previous adventurers managed to unscrew it halfway before being scared off by the gray ooze. Unscrewing and removing the head exposes a hidden, charred compartment in the statue's neck. The compartment contains melted wax from candles that were used to illuminate the statue's head like a jack-o'-lantern.</p>

        <h2>Water</h2>

        <p>The water seeps through cracks in the ceiling of the alcove, drips down the walls, and accumulates in the west end of the room before slowly leaking out through smaller cracks in the floor. The water is tepid, and not fit for drinking unless a purify food and drink spell is cast on it.</p>
      </div>}
      {salaAtual === "1-4" && <div className='sala' id='1-4'>
        <p><strong>Sword Stand.</strong> An unadorned wooden armor stand rests in the middle of the room, with a faintly glowing longsword stabbed into it. At the base of the stand lie the skeletal remains of a hand, amid stains of dried blood.<br></br>

          <strong>Distant Voices.</strong> Echoes of distant voices occasionally fill the room, emanating from 10-inch-long, 5-inch wide vents in the ceiling (see "Echoes" below).<br></br>

          <strong>Secret Door.</strong> A secret door leading south is obvious from this side (no ability check required). It has two eye-holes bored into it at a height of 5 feet, allowing a creature to peer into area 2a beyond.</p>

        <p>The longsword is easy to remove from the armor stand, requiring no ability check. A detect magic spell reveals that the sword is magical. It sheds dim light in a 10-foot radius. It also carries a curse that prevents its wielder from dropping it. If the blade is pried from its wielder's grasp, it instantly teleports back into the wielder's hand. The curse can be ended by casting a remove curse spell or using similar magic on the sword's wielder, or by chopping off the hand that holds the weapon. The skeletal hand on the floor belonged to the orc who last held the sword.</p>

        <h2>Echoes</h2>

        <p>Vent shafts in the ceiling connect to shop cellars in the city above. These passages carry voices from Waterdeep, but the sound is distorted so badly that words at one end can't be discerned by creatures at the other end. If the grills that cover the vent shafts are pried loose, a Tiny or gaseous creature could crawl through a shaft to escape Undermountain.</p>
      </div>}
      {salaAtual === "1-5" && <div className='sala' id='1-5'>
        <p>At the end of a long hall is a 50-foot-square room with five pillars made of mortared humanoid bones, painted black. Two <a href="https://5e.tools/bestiary.html#grell_mm" target="blank">grells</a> float in separate alcoves to the north and the east. The floors of the alcoves are littered with the gnawed bones of past meals (mostly goblins and gricks).</p>

        <p>The deep alcoves and black pillars provide cover for the grells. As the characters move into the room, they can spot one or both grells by succeeding on a Wisdom (Perception) check contested by the monsters' Dexterity (Stealth) checks. The grells are hungry and eagerly pursue fleeing prey. They have no treasure.</p>
      </div>}
      {salaAtual === "1-6a" && <div className='sala' id='1-6a'>
        <p>Several members of the Undertakers gang dwell here in their vampire disguises. If the bandit keeping an eye on area 1 through the secret door retreats here with news of the adventurers' arrival, add that individual to the forces arrayed here (one <a href="https://5e.tools/bestiary.html#bandit%20captain_mm" target="blank">bandit captain</a>, six <a href="https://5e.tools/bestiary.html#bandit_mm" target="blank">bandits</a>, and two <a href="https://5e.tools/bestiary.html#doppelganger_mm" target="blank">doppelgangers</a>). Once alerted, these forces gather in area 6a and wait for the adventurers to arrive so they can extort money from them.</p>

        <p><strong>Statues.</strong> Standing atop stone plinths in the middle of the room, facing east, are three 6-foot-tall statues depicting male Waterdavian nobles clad in decorative plate armor.<br></br>

          <strong>Bones and Broken Staff.</strong> Lying at the base of the central statue are the bones of a long-dead hobgoblin and a white wooden staff broken in half.</p>

        <p>Carved into the stone base of each statue is a name: Elyndraun (south statue), Ruathyndar (central statue), and Onthalass (north statue). These names have been crossed out with chalk; beneath them, new names have been added in Goblin: Smelly Bottom, Stupid Skull, and Born Toothless, respectively.</p>

        <p>A detect magic spell reveals the faintest, lingering trace of magic within both fragments of the staff. The staff can be repaired with a mending cantrip. The first time the intact staff is held, it wails, "Help! Thief! Criminal!" before its magic fades forever. If the wailing occurs here, the creatures in areas 6b and area 6c hear the noise and come to investigate.</p>
      </div>}
      {salaAtual === "1-6b" && <div className='sala' id='1-6b'>
        <p>Piled up against the west side of this secret door, undetectable from the east side, is a stack of old ceramic plates that fall and break when the door is opened, alerting any bandits in areas 6a, area 6c, and area 6d.</p>
      </div>}
      {salaAtual === "1-6c" && <div className='sala' id='1-6c'>
        <p>Several members of the Undertakers gang dwell here in their vampire disguises. If the bandit keeping an eye on area 1 through the secret door retreats here with news of the adventurers' arrival, add that individual to the forces arrayed here (one bandit captain, six bandits, and two doppelgangers). Once alerted, these forces gather in area 6a and wait for the adventurers to arrive so they can extort money from them.</p>

        <p><strong>Bandits.</strong> Unless they have been encountered elsewhere, four members of the Undertakers sit around a decrepit wooden table near the door: Uktarl Krannoc (NE human <a href="https://5e.tools/bestiary.html#bandit%20captain_mm" target="blank">bandit captain</a> with Performance +4), two human <a href="https://5e.tools/bestiary.html#bandit_mm" target="blank">bandits</a>, and a <a href="https://5e.tools/bestiary.html#doppelganger_mm" target="blank">doppelganger</a>, all disguised as vampires. They play cards using a marked deck that Uktarl carries around, and each has a stack of coins on the table.<br></br>

          <strong>Fresco.</strong> The entire northern wall is one large stone fresco depicting a rugged mountain, hollowed out with caverns containing tiny sculpted figures of dwarves. Behind the mountain, carved rays of brilliant sunlight fan out to the edges of the wall.<br></br>

          <strong>Tub.</strong> Beneath the mountain fresco, carved into the floor, is a large, recessed stone tub 8 feet long, 4 feet wide, and 2 feet deep.</p>

        <p>Uktarl lies and cheats for fun, and he is quick to blame others for his failings as a leader. If he takes damage or sees any of his underlings slaughtered, cowardice compels him to retreat to area 7. The others flee to area 8 and team up with any bandits remaining there.</p>

        <p>A character who inspects the stone fresco and succeeds on a DC 13 Wisdom (Perception) check discovers that one of the tiny dwarf figures is the top of a stone key slotted into a cavity that hides its teeth. The key is easily removed from the fresco and unlocks the stone box in area 14b. The bandits are unaware of the key's presence.</p>

        <p>Uktarl keeps his bedroll inside the stone tub, along with a set of thieves' tools and enough stolen gear to create one explorer's pack.</p>

        <p><strong>Treasure.</strong> On the table are stacks of coins totaling 220 cp, 91 sp, and 85 gp, as well as a silver ring (25 gp) engraved with dwarven symbols commonly associated with fertility and sexual potency.</p>
      </div>}
      {salaAtual === "1-6d" && <div className='sala' id='1-6d'>
        <p><strong>Furnishings.</strong> Eight bedrolls are spread out on the floor. Two battered and rusty oil lanterns, also on the floor, light the chamber.<br></br>

          <strong>Bandits.</strong> Unless they're encountered elsewhere, four human bandits sleep in their bedrolls. A doppelganger sits on another bedroll, keeping watch.</p>

        <p><strong>Treasure.</strong> Each bandit carries 1d6 gp in a pouch. The doppelganger has no interest in treasure and carries nothing of value.</p>
      </div>}
      {salaAtual === "1-6e" && <div className='sala' id='1-6e'>
        <p>At the end of this corridor is a latrine that clearly hasn't been properly cleaned in a long time. The walls are covered in writing, mostly jokes and crude poetry, but one message says "Whoever gets my pocket watch from the latrine can have my share of the next score - Bran"</p>

        <p>Retrieving the item takes a Constitution save DC 10 and it is a <a href="https://5e.tools/items.html#clockwork%20amulet_xge" target="blank">clockwork amulet</a></p>
      </div>}
      {salaAtual === "1-7a" && <div className='sala' id='1-7a'>
        <p>These chambers once served as a true vampire's lair. The Undertakers use the crypt to hide from the dungeon denizens they can't rob or kill.</p>

        <p>Characters who find the secret door leading to this area notice a 1-inch-diameter hole bored through it a few inches above the floor. This hole allowed the ancient vampire to enter and leave its lair in mist form.</p>

        <p>If they are forced to retreat to this hall, Uktarl (area 6) and Harria (area 8) make their final stand here, still blaming each other for their failures.</p>

        <p>This hall has the following features:<br></br>
          <strong>Bedrolls.</strong> A dozen empty bedrolls lie on the dusty floor.<br></br>
          <strong>Frescoes.</strong> Faded frescoes cover the walls, depicting villagers and farmers being terrorized by a giant bat.</p>
      </div>}
      {salaAtual === "1-7b" && <div className='sala' id='1-7b'>
        <p>These chambers once served as a true vampire's lair. The Undertakers use the crypt to hide from the dungeon denizens they can't rob or kill.</p>

        <p>Characters who find the secret door leading to this area notice a 1-inch-diameter hole bored through it a few inches above the floor. This hole allowed the ancient vampire to enter and leave its lair in mist form.</p>

        <p>This area contains a cobweb-draped wooden coffin resting on a 2-foot-high block of gray stone. The coffin is intact and has an obvious 1-inch-diameter hole bored into its foot panel. The coffin's lid is unlocked.</p>

        <p>A thin layer of grave dirt inside the coffin has been flattened down, suggesting that a creature once slept here. A vial of holy water rests atop the dirt. The coffin is otherwise empty.</p>
      </div>}
      {salaAtual === "1-8a" && <div className='sala' id='1-8a'>
        <p>Dominating the area is a throne hall (area 8a). Side chambers (areas 8b and area 8c) serve as a base for members of the Undertakers, who investigate loud noises in the throne hall.</p>

        <p><strong>Dead Wyvern.</strong> In the middle of the room lie the bones, skull, rotted leather wing flaps, and stinger of a wyvern, intermingled with shards of clear crystal.<br></br>

          <strong>Throne.</strong> At the south end of this 70-foot-high vaulted room, marble steps form a dais upon which stands a large, high-backed throne made of interwoven, bleached bones. Each of the throne's bone armrests is carved to resemble a fanged snake (see "Bone Throne" below).<br></br>

          <strong>Torch Brackets.</strong> Empty torch brackets made of fluted, discolored bronze protrude from the walls.</p>

        <p>Halaster trapped the wyvern in a floating crystal sphere and left it here as a guardian, but adventurers released and slew the creature long ago. The wyvern's remains lie alongside the fragments of its crystalline prison.</p>

        <p><strong>Bone Throne.</strong> The throne is impervious to all damage. Its velvet seat cushion serves as the hinged lid of an empty hidden compartment. Whatever treasure the compartment once held was stolen by adventurers long ago.</p>

        <p>The throne's serpent armrests magically animate and bite anyone who sits on the throne or raises the seat's lid. Each snake makes a single melee weapon attack (+8 to hit) and deals 3 (1d4 + 1) piercing damage on a hit. Any creature bitten by a snake must make a DC 13 Constitution saving throw, taking 24 (7d6) poison damage on a failed save, or half as much damage on a successful one. After each snake makes one attack, the armrests revert to their inanimate state until triggered again.</p>
      </div>}
      {salaAtual === "1-8b" && <div className='sala' id='1-8b'>
        <p>Dominating the area is a throne hall (area 8a). Side chambers (areas 8b and area 8c) serve as a base for members of the Undertakers, who investigate loud noises in the throne hall.</p>

        <p><strong>Bandit Captain.</strong> Unless awakened by loud noises, Harria Valashtar (NE human <a href="https://5e.tools/bestiary.html#bandit%20captain_mm" target="blank">bandit captain</a> with Performance +4) sleeps on a cot against the south wall. She is disguised as a vampire but doesn't wear her fangs while sleeping.<br></br>

          <strong>Golem.</strong> A <a href="https://5e.tools/bestiary.html#flesh%20golem_mm" target="blank">flesh golem</a> under Harria's control stands guard in the middle of the room.<br></br>

          <strong>Furnishings.</strong> Other furnishings include a lit lantern, which rests atop a wooden trunk painted with pictures of clowns; a frayed circular rug; and a folding wooden privacy screen. The trunk is unlocked and contains a disguise kit, as well as a small selection of theater costumes and props.</p>

        <p>Harria is a greedy, treacherous, and vindictive young woman who considers herself the world's most underrated actress and singer. She isn't able to control the golem once it goes berserk, and she retreats to area 7 if things turn bleak.</p>
      </div>}
      {salaAtual === "1-8c" && <div className='sala' id='1-8c'>
        <p>Dominating the area is a throne hall (area 8a). Side chambers (areas 8b and area 8c) serve as a base for members of the Undertakers, who investigate loud noises in the throne hall.</p>

        <p><strong>Bandits.</strong> Sitting in chairs around a long stone table are five human <a href="https://5e.tools/bestiary.html#bandit_mm" target="blank">bandits</a> (members of the Undertakers, all disguised as vampires) and a <a href="https://5e.tools/bestiary.html#doppelganger_mm" target="blank">doppelganger</a> (disguised to look like a sixth human vampire).<br></br>

          <strong>Lanterns.</strong> Two glowing oil lanterns hang from chains above the table.<br></br>

          <strong>Supplies.</strong> On the table are three disguise kits and three backpacks. Each backpack is stuffed with 11 days of rations.</p>

        <p>Posing as vampires, the bandits and the doppelganger try to extort money from passing adventurers. If that doesn't work, they attack until it becomes clear they're outmatched, whereupon they flee to area 6 in search of reinforcements.</p>

        <p><strong>Treasure.</strong> Each bandit carries 1d6 gp in a pouch. The doppelganger has a similar pouch, plus a tiger eye gemstone (10 gp) tucked into its boot.</p>
      </div>}
      {salaAtual === "1-9a" && <div className='sala' id='1-9a'>
        <p>This corner of the dungeon sees little traffic, though other adventurers have plundered it in the past.</p>

        <p><strong>Pillars.</strong> Six pillars pockmarked with tiny indentations stretch the length of the hall. (The indentations held gemstones, which were stolen long ago.)<br></br>

          <strong>Alcove.</strong> An alcove in the northwest corner contains a rusty pile of armor (the remains of a suit of animated armor that was destroyed years ago by adventurers).</p>
      </div>}
      {salaAtual === "1-9b" && <div className='sala' id='1-9b'>
        <p>This corner of the dungeon sees little traffic, though other adventurers have plundered it in the past.</p>

        <p>The maggot-ridden corpse of a dead human lies facedown on the floor next to a discarded scimitar, a light crossbow, and a money pouch.</p>

        <p>During a battle to rid area 12 of giant spiders, the Undertakers lost one of their own. They left his body here to rot. A successful DC 10 Wisdom (Medicine) check reveals that the bandit died from spider bites and the ensuing poison. The bandit's leather armor is punched full of holes, but his weapons are intact. The money pouch is empty.</p>
      </div>}
      {salaAtual === "1-10" && <div className='sala' id='1-10'>
        <p>The wooden door to this room reads in common "Fools"</p>

        <p>Skulls tumble into the hall when the door to this 10-foot-square room is pulled open. The entire room is filled to the ceiling with the skulls of dead adventurers and other humanoids who crossed Halaster. Thousands of skulls have accumulated here; they're harmless, if a bit macabre. The cubicle contains nothing else.</p>
      </div>}
      {salaAtual === "1-11" && <div className='sala' id='1-11'>
        <p><strong>Helm.</strong> A green copper helm with a protective visor lies on the floor, draped in cobwebs.<br></br>

          <strong>Throne.</strong> Against the back wall, atop a marble riser, stands a slender throne also made of green copper and covered with cobwebs.
          Treasure.</p>

        <p>There is nothing remarkable about the copper throne or helm, and neither object detects as magical. But if a character wears the helm while sitting on the throne, a tube-shaped compartment in the ceiling above opens and a <a href="https://5e.tools/items.html#wand%20of%20secrets_dmg" target="blank">wand of secrets</a> falls out onto the character's head (which the helm conveniently protects).</p>
      </div>}
      {salaAtual === "1-12" && <div className='sala' id='1-12'>
        <p><strong>Statues.</strong> Life-size granite statues of human warriors, facing inward, stand atop two rows of pedestals that run through the hall.

          <strong>Web-Covered Ceiling.</strong> The ceiling of this long hall is 20 feet high, arched, and lightly obscured by thick webs.

          <strong>Dead Spiders.</strong> Three giant spiders lie dead at various points in the hallway, riddled with crossbow bolts. (Members of the Undertakers killed them.)</p>

        <p>The hall holds thirty-eight statues, nineteen in each row. Their nameplates have been severely chipped or defaced, as have many of the statues' features.</p>

        <h2>Eastern Doors</h2>

        <p>Halaster has placed an elder rune (see "Elder Runes") on the double door leading to area 16, set to trigger when the doors are opened. Draw from the Elder Runes Deck to determine which rune appears. The elder rune targets a random creature in this hall and within 60 feet of the doors.</p>
      </div>}
      {salaAtual === "1-13" && <div className='sala' id='1-13'>
        <p>At the end of this hall is a door leading to a 10-foot-square room that seems to be upside-down. A fireplace hangs from the ceiling, casting shadows across the den. A high-backed chair is firmly set on the ceiling, facing the fire with a closed book and glasses rested on it. Upside-down bookshelves teem with ancient tomes and on top of one of the shelves, within reach of a tall person, is a bronze mask resembling Halaster.</p>

        <p>In fact, the furniture is an illusion except for the mask and any character that tries to touch it is captured by either a <a href="https://5e.tools/bestiary.html#cave%20fisher_mpmm" target="blank">cave fisher (CR 3)</a>, an <a href="https://5e.tools/bestiary.html#angler%20worm_tob" target="blank">angler worm (CR 4)</a> or a <a href="https://5e.tools/bestiary.html#roper_mm" target="blank">roper (CR 5)</a>, chosen by the DM.</p>
      </div>}
      {salaAtual === "1-14a" && <div className='sala' id='1-14a'>
        <p>This room is empty. The north tunnel gradually slopes down 20 feet to area 14b.</p>
      </div>}
      {salaAtual === "1-14b" && <div className='sala' id='1-14b'>
        <p><strong>Acid.</strong> The room's domed ceiling is 15 feet high at the edges and 30 feet high in the middle. The dome is filled with sizzling acid that defies gravity as it floats 15 feet above the floor.

          <strong>Statue.</strong> An 8-foot-tall statue of a four-armed fish monster (a petrified <a href="https://5e.tools/bestiary.html#sahuagin%20baron_mm" target="blank">sahuagin baron</a> with no trident) stands in the middle of the room, facing north. Its webbed hands clutch an ornate, 1-foot-square stone box with a lid and a keyhole (see "Box" below).

          <strong>Secret Door.</strong> At the north end of the east wall is a secret door.</p>

        <p>The acid floating in the domed area overhead is held there by magic. Opening the stone box without using the proper key causes the acid to fall. When the acid falls, each creature in the room takes 11 (2d10) acid damage. Any creature that starts its turn in the acid takes the same damage again. The acid floods the room to a depth of 5 feet and flows 40 feet out into the hall leading back to area 14a before slowly draining out through tiny holes in the floor, losing 1 foot of depth per minute.</p>

        <p><strong>Box.</strong> The box can be unlocked and opened while the statue holds it. Prying it from the statue's grasp requires a successful DC 20 Strength (Athletics) check and causes the petrified <a href="https://5e.tools/bestiary.html#sahuagin%20baron_mm" target="blank">sahuagin baron</a> to revert to flesh, attacking with its teeth and claws.</p>

        <p>The box's key is hidden in area 6c. The box can also be opened with a knock spell or unlocked with thieves' tools and a successful DC 15 Dexterity check. Opening the box without the proper key, however, causes the acid overhead to plunge.</p>

        <p>The box's interior is lined with thin sheets of lead to thwart certain forms of divination magic, including the detect magic spell. Inside the box is the dry, withered heart of a tiefling wizard (see area 24b). A detect magic spell reveals an aura of necromancy magic around the heart, while an identify spell or similar magic reveals its magical properties. A creature that has a heart in its own body can attune to the withered heart as though it were a magic item. When it does so, the withered heart switches places with the attuned creature's living heart, which has the effect of killing the creature instantly. The creature's living heart then withers and dies, and it gains the same properties as the tiefling's heart, allowing it to be passed on in the same way.</p>
      </div>}
      {/* {salaAtual === "1-14c" && <div className='sala' id='1-14c'>
        <p>In this secret room is a <a href="https://5e.tools/bestiary.html#red%20slaad_mm" target="blank">red slaad</a> wearing an ill-fitting studded leather armor. It attacks the party immediately with hungry desperation.</p>

        <p>The room also contains a <a href="https://5e.tools/items.html#rapier_phb" target="blank">rapier</a>, thieves' tools, a coin whith two "heads" sides that show the face of the goddess <a href="https://forgottenrealms.fandom.com/wiki/Tymora" target="blank">Tymora</a>, and scatered pieces of paper. The paper consists of rough and incomplete maps of levels 8 and 6, and a note which reads: </p>

        <p><i>"My name is Noira Grelise. I was captured by bullywugs in level 8, along with my companions Rauk Riversong, Quint Fern and Kessia Norben. I managed to escape but got lost and this disease will soon transform me in one of those monsters. If you're reading this you've probably killed me, thank you. Please tell Durnan the fate of The Clover's Leaves, hopefully he still remembers us and can spread the word to our loved ones. May Beshaba never turn her gaze to you, as she did to us."</i></p> 
      </div>*/}
      {salaAtual === "1-15" && <div className='sala' id='1-15'>
        <p><strong>Racks.</strong> Cobwebs enshroud rows of old weapon racks, many of which have collapsed under their own weight.

          <strong>Axe.</strong> A door in the south wall has a handaxe embedded in it.</p>

        <p>Although its presence might be mistaken for a warning, the handaxe is ordinary and signifies nothing. It can easily be pulled free from the door.</p>

        <h2>South Room</h2>

        <p>Behind the door with the handaxe is a 10-foot-square room with a 1-foot-thick, 5-foot-diameter stone sharpening wheel set into the floor. Pressing down on a stone pedal previously turned the wheel, but the mechanisms under the floor have seized up with age, and the wheel no longer turns.</p>
      </div>}
      {salaAtual === "1-16" && <div className='sala' id='1-16'>
        <p><strong>Manticores.</strong> Three <a href="https://5e.tools/bestiary.html#manticore_mm" target="blank">manticores</a> dwell here.<br></br>

          <strong>Makeshift Beds.</strong> Three large piles of soiled, torn tapestries and curtains, intermixed with humanoid bones and broken bits of stone, serve as beds for the manticores.<br></br>

          <strong>Scrying Eye.</strong> If the characters leave after killing the manticores and later return, they find one of Halaster's scrying eyes floating in the middle of the chamber (see "Halaster's Lair,"). It studies the characters for a minute or two before disappearing without a sound
        </p>

        <p>As the party enters the room, a voice speaks in common from above: "Ah... it's been a few days. Welcome!" a manticore flies down in front of the party as the other two hide in the shadows (contest their Stealth checks with the party's passive Perception).</p>

        <p>The manticore asks if the party knows what he is. He claims that previous adventurers mistook him for a sphynx and that have it the idea to ask questions to those who come through. Correctly knowing he is a manticore is the first of seven question and if the party can answer four of the seven correctly, he will let them pass freely (this is a lie)</p>

        <p>The questions and answers are as follows: <br></br>
          <ol>
            <li>
              "Ancient is this realm. On the bones of what civilization is the Mad Mage's dungeon built?"<br></br>
              A character that succeeds on a DC 15 Intelligence (History) check can recall that Waterdeep is built upon the bones of a dwarven realm (the Underhalls of Melairbode) which itself was built upon the ancient elven kingdom of Illefarn. This capitol was named Aelinthaldaar.
            </li>
            <li>
              "What fungus comes alive and shrieks when it senses other creatures nearby?"<br></br>
              A character that succeeds on a DC 16 Intelligence (Nature) check recalls that "shriekers" are semi-sentient fungi that emit piercing screams when threatened.
            </li>
            <li>
              "The dwarves chipped away at their precious mithril until the drow came with sword and fire. Down went their temples and up went the new. Which deity do these elves worship?"<br></br>
              A character that succeeds on a DC 13 Intelligence (Religion) can recall that the drow worship Lolth, the spider demoness.
            </li>
            <li>
              "How much blood is in an elf's body?"<br></br>
              A character that succeeds on a DC 14 Wisdom (Medicine) check knows that there are 4.5 liters of blood in the average elf's body.
            </li>
            <li>
              "Which mortal race makes for the tastiest meat?"<br></br>
              This question is subject to the whims of the manticore. A character that succeeds on a DC 16 Wisdom (Insight) check understands the manticore's subtle body language, realizing he hungers for one party member more than the others.
            </li>
            <li>
              "Why shouldn't I kill you right now?"<br></br>
              This question has no correct answer. If the adventurers have made it this far, the manticore loses its patience and initiates the inevitable attack.
            </li>
          </ol>
        </p>

        <p><strong>Treasure.</strong> A search of the manticores' nests yields the following: a chain shirt, a flail, a wooden flute (2 gp), a pouch containing 14 sp and 29 cp, a pouch containing 21 gp, and a silver necklace with a bloodstone pendant (250 gp).</p>
      </div>}
      {salaAtual === "1-17a" && <div className='sala' id='1-17a'>
        <p>The desiccated corpse of an unusually large basilisk lies in the middle of the floor on its back, its shriveled tongue hanging out and all six feet sticking up in the air. Clutched in one of its clawed feet is a transparent orb.</p>

        <p>The basilisk was killed by previous adventurers and left here. Anyone who inspects the corpse discovers that the basilisk died from wounds consistent with weapon attacks and destructive spells. Two <a href="https://5e.tools/bestiary.html#giant%20centipede_mm" target="blank">giant centipedes</a> reside in the corpse. If the basilisk is disturbed, the centipedes emerge and attack the nearest creature.</p>

        <p><strong>Treasure.</strong> The basilisk clutches a <a href="https://5e.tools/items.html#driftglobe_dmg" target="blank">driftglobe</a>. The creature's claw must be pried open to release the globe.</p>
      </div>}
      {salaAtual === "1-17b" && <div className='sala' id='1-17b'>
        <p><strong>Ceiling.</strong> The ceiling is 60 feet high.

          <strong>Petrified Creatures.</strong> Eleven lifelike statues in a variety of poses are clustered together in the south end of the room. (These statues are petrified creatures.)

          <strong>Statues.</strong> Alcoves along the walls once held six statues, but five of them lie toppled and smashed to pieces on the floor. The sixth statue, located in the middle alcove along the east wall, remains intact and appears to be made of glistening black stone. (The sheen is due to a <a href="https://5e.tools/bestiary.html#black%20pudding_mm" target="blank">black pudding</a> that coats the statue.)</p>

        <p>The black pudding has 120 hit points and is held in stasis by Halaster's magic. The stasis ends and the pudding attacks if it is touched or harmed.</p>

        <p>The statue's stone features are impossible to discern while the black pudding covers it. Once the pudding sloughs off, characters who succeed on a DC 15 Intelligence (Religion) check realize that the statue depicts <a href="https://forgottenrealms.fandom.com/wiki/Gond" target="blank">Gond, the god of invention</a>. A character who worships Gond automatically succeeds on the check. The five toppled statues once depicted Bhaal, Chronos, Leira, Mystra, and Murdane (all dead gods), but now they lie smashed beyond recognition.</p>

        <p>The assembly of petrified creatures includes five unfortunate adventurers (a male human, a male half-orc, a female elf, and two male halflings) and six unlucky monsters (two kobolds, three goblins, and a carrion crawler).</p>

        <p><strong>Treasure.</strong> A copper crown with six arrowhead-shaped malachite spires (75 gp) hangs from one of the carrion crawler's stony tentacles.</p>
      </div>}
      {salaAtual === "1-18" && <div className='sala' id='1-18'>
        <p>A filthy, 30-foot-square room lies at the end of a long hall, and a putrid stench fills both the room and the hallway.</p>

        <p>A voracious <a href="https://5e.tools/bestiary.html#troll_mm" target="blank">troll</a> hunkers in the room's southwest corner and attacks interlopers on sight. It can't be surprised by adventurers who are noisy or who approach with uncovered light sources.</p>

        <p>Halaster charmed the troll so that once a day it is compelled to fetch food from area 19a and deliver it to the manticores in area 16. A successful dispel magic cast on the troll (DC 15) ends the charmed condition on it but has no effect on its vile disposition. The troll pursues any fleeing prey.</p>
      </div>}
      {salaAtual === "1-19a" && <div className='sala' id='1-19a'>
        <p><strong>Furnishings.</strong> Two 20-foot-long, 5-foot-wide stone tables stand in the middle of each room, flanked by stone benches.

          <strong>Hanging Rods.</strong> Iron rods designed to hold tapestries are bolted to the walls near the ceiling. The tapestries have long since turned to dust, leaving the rods bare.</p>

        <p>This room reeks. A detect magic spell reveals auras of conjuration magic around the tables. Every day at dawn, piles of rotting meat materialize atop the tables, courtesy of Halaster. Sometime between dawn and dusk, the troll in area 18 visits the room, spends an hour devouring half of the meat, and dutifully delivers what's left to the manticores in area 16.</p>
      </div>}
      {salaAtual === "1-19b" && <div className='sala' id='1-19b'>
        <p><strong>Furnishings.</strong> Two 20-foot-long, 5-foot-wide stone tables stand in the middle of each room, flanked by stone benches.

          <strong>Hanging Rods.</strong> Iron rods designed to hold tapestries are bolted to the walls near the ceiling. The tapestries have long since turned to dust, leaving the rods bare.</p>

        <p>Under one of the tables in this room is a copper tankard with a hinged lid (25 gp).</p>
      </div>}
      {salaAtual === "1-19c" && <div className='sala' id='1-19c'>
        <p><strong>Furnishings.</strong> Two 20-foot-long, 5-foot-wide stone tables stand in the middle of each room, flanked by stone benches.

          <strong>Hanging Rods.</strong> Iron rods designed to hold tapestries are bolted to the walls near the ceiling. The tapestries have long since turned to dust, leaving the rods bare.</p>

        <p>The door to this room doesn't open easily. Inside, propped against the door, is the maggot-eaten corpse of a female dwarf adventurer wearing tattered leather armor and a matching leather skullcap. In one skeletal hand, she clutches a dagger; in the other, an empty tin flagon. On a bench in the room is her burglar's pack, complete except for the lantern and the flasks of oil.</p>
      </div>}
      {salaAtual === "1-21" && <div className='sala' id='1-21'>
        <p><strong>Mirrors.</strong> Eight pairs of niches, each 3 feet deep, line the north and south walls. Mounted on the back wall inside each one is a large, oval glass mirror in a heavy stone frame—sixteen mirrors in all.

          <strong>Torch Stub.</strong> The blackened end of a burnt-out torch lies on the floor in the middle of the corridor.</p>

        <p>If a character examines any mirror for a few seconds, their further reflections (since there are multiple due to the mirrors facing each other) start to become twisted and more similar to a scorpion. If a character keeps looking at the same mirror for a few minutes, their closest reflection becomes that of <a href="https://5e.tools/bestiary.html#muiral_wdmm" target="blank">Muiral</a> and the mirror breaks.</p>

        <p>Whenever a mirror breaks, roll a d20 to determine what is behind it, from the list below:</p>

        <ul>
          <li>1-7 Nothing.</li>
          <li>8 A <a href="https://5e.tools/items.html#potion%20of%20healing_dmg" target="blank">potion of healing</a> and a piece of paper written "You will need this".</li>
          <li>9 A piece of paper written "Don't you know that's bad luck?".</li>
          <li>10 Nothing. Roll on the Wild Magic Surge table, the effect happens to the character that caused the mirror to break.</li>
          <li>11 A single coin. It is actually a creature which feeds on coins. If placed along with coins, it will sneakly eat 3gp per day. It can be distinguished from real coins by a DC 15 investigation check.</li>
          <li>12 An obsidian scarab engraved with the insignia of House Auvryndar (25 gp). A character may make a DC 12 history check to know this is a drow symbol and a DC 18 check to recognize the insignia.</li>
          <li>13 A ring with a crest that depicts a lit torch with three embers rising from the flame, set against a purple background. A character may make a DC 15 history check to remember that this is the crest of the Shadowdusk family, which were exiled from Waterdeep decades ago for dealing with powers of the Far Realm.</li>
          <li>14 A metal disk with purple border and a very black middle. A character may make a DC 12 religion check to know that this is the symbol of <a href="https://forgottenrealms.fandom.com/wiki/Shar" target="blank">Shar</a>.</li>
          <li>15 A metal disk depicting a twisted circular maze awash in blood. A character may make a DC 14 religion check to know that this is the symbol of <a href="https://forgottenrealms.fandom.com/wiki/Baphomet" target="blank">Baphomet</a>.</li>
          <li>16 A swarm of scorpions, which immediately attacks. It has the statistics of a <a href="https://5e.tools/bestiary.html#swarm%20of%20insects_mm" target="blank">swarm of insects</a> but it's only action is:<br></br>
            <strong>Sting.</strong> Melee Weapon Attack: +3 to hit, reach 0 ft., one target in the swarm's space. Hit: 10 (4d4) piercing damage, or 5 (2d4) piercing damage if the swarm has half of its hit points or fewer. Either way, the target must make a DC 10 Constitution saving throw, taking 9 (2d8) poison damage on a failed save, or half as much damage on a successful one.</li>
          <li>17-20 a number of gold coins equal to the die roll.</li>
        </ul>

        <p>When the 7th mirror is broken, a <a href="https://5e.tools/bestiary.html#luck%20leech_tob2" target="blank">Luck Leech</a> is behind the mirror and attacks immediately.</p>

        <p>If all mirrors are broken, the last mirror instead becomes a <a href="https://5e.tools/bestiary.html#helashruu_tob2" target="blank">Helashruu</a>, which attacks immediately.</p>

        <p>If an invisible creature stands directly in front of any of the mirrors, it becomes a gate for 1 minute, leading to area area 4b on level 10.</p>
      </div>}
      {salaAtual === "1-22" && <div className='sala' id='1-22'>
        <p>This room seems to have been used as a resting point that was hastily abandoned. Three waterskins and some food are on the floor. There are two <a href="https://5e.tools/bestiary.html#doppelrat_tob" target="blank">doppelrats</a> eating the food, if the characters get close, the rats make clones and try to escape as the clones attack.</p>
      </div>}
      {salaAtual === "1-23a" && <div className='sala' id='1-'>
        <p>The Xanathar Guild maintains a watch post here, called "Worg's Eye" by the bugbears that command it. The goblinoids stationed here, two <a href="https://5e.tools/bestiary.html#bugbear_mm" target="blank">bugbears</a> and fifteen <a href="https://5e.tools/bestiary.html#goblin_mm" target="blank">goblins</a>, can't be surprised if they know trouble is on the way. If the two bugbears in area 2b managed to make it this far, add them to the roster of enemies.</p>

        <p><strong>Goblins.</strong> Six bored goblins play here. The goblins have turned a human skeleton into a marionette and dangled it from ropes attached to the ceiling so that they can make it dance around the room. The goblins chant "Nimraith! Nimraith! Nimraith!" as it bobs about.<br></br>

          <strong>Cleft Shield.</strong> Two halves of a cloven wooden shield lie in the room's northwest corner. Each half of the cloven shield has letters etched into it. One half reads "Nimr." The other reads "aith."</p>

        <p>The goblins fearfully obey the bugbears in area 23b. If their leaders are killed, the goblins flee to area 28 (by way of areas 24 and area 25).</p>

        <p>Held together with moldy string, the yellowed skeleton is all that remains of Nimraith, a human adventurer who perished in Undermountain over a century ago.</p>
      </div>}
      {salaAtual === "1-23b" && <div className='sala' id='1-23b'>
        <p>The Xanathar Guild maintains a watch post here, called "Worg's Eye" by the bugbears that command it. The goblinoids stationed here, two <a href="https://5e.tools/bestiary.html#bugbear_mm" target="blank">bugbears</a> and fifteen <a href="https://5e.tools/bestiary.html#goblin_mm" target="blank">goblins</a>, can't be surprised if they know trouble is on the way. If the two bugbears in area 2b managed to make it this far, add them to the roster of enemies.</p>

        <p><strong>Bugbears.</strong> Two bugbears stand guard. Each bugbear has an <a href="https://5e.tools/bestiary.html#intellect%20devourer_mm" target="blank">intellect devourer</a> in its skull cavity.<br></br>

          <strong>Noise.</strong> The goblins in the adjoining room (area 23a) are noisy enough to be heard here.<br></br>

          <strong>Shattered Statue.</strong> The remains of a shattered statue lie in the middle of the room. (The bugbears are trying to reassemble it.)</p>

        <p>The bugbears detect the approach of adventurers with the aid of the intellect devourers' Detect Sentience trait and therefore can't be surprised. When a bugbear drops to 0 hit points, the intellect devourer inhabiting its skull teleports away to seek a new host.</p>

        <p>This nonmagical statue has broken into seventeen fist-sized chunks of black stone. (Restoring it will take the bugbears a month.) Any character who succeeds on a DC 15 Intelligence (Investigation) check can ascertain what the statue depicted: three male human warriors standing together on a stone mound, facing outward and clutching swords.</p>
      </div>}
      {salaAtual === "1-23c" && <div className='sala' id='1-23c'>
        <p>The Xanathar Guild maintains a watch post here, called "Worg's Eye" by the bugbears that command it. The goblinoids stationed here, two <a href="https://5e.tools/bestiary.html#bugbear_mm" target="blank">bugbears</a> and fifteen <a href="https://5e.tools/bestiary.html#goblin_mm" target="blank">goblins</a>, can't be surprised if they know trouble is on the way. If the two bugbears in area 2b managed to make it this far, add them to the roster of enemies.</p>

        <p>Unless the watch post is on alert, nine goblins sleep on the floor, their weapons and shields in easy reach.</p>

        <p>The goblins fearfully obey the bugbears in area 23b. If their leaders are killed, the goblins flee to area 28 (by way of areas 24 and area 25).</p>
      </div>}
      {salaAtual === "1-24a" && <div className='sala' id='1-24a'>
        <p>Goblins and bugbears pass through these rooms often. No creatures live here, however.</p>

        <p><strong>Pillars.</strong> Two stone pillars with a 10-foot-wide arch between them support the 20-foot-high ceiling.<br></br>

          <strong>Orc Bones.</strong> Near the base of each pillar are the skeletal remains of two orcs. (Adventurers killed and robbed these four orcs long ago, leaving nothing of value.)</p>

        <p>One of Halaster's magic gates once stood between the pillars but was destroyed during the Spellplague. The gate's destruction left behind a lingering aura of wild magic that can be perceived with a detect magic spell. When a creature passes between the pillars, roll a d12 and consult the following table to determine what happens:</p>

        <p>d12	Effect<br></br>
          1-2	The creature must make a DC 12 Constitution saving throw against the lingering magic, taking 22 (4d10) force damage on a failed save, or half as much damage on a successful one.<br></br>
          3-7	Nothing happens.<br></br>
          8-11	The creature, along with anything it is carrying or wearing, turns invisible for 1 hour. The effect ends if the creature attacks or casts a spell.<br></br>
          12	For the next 24 hours, each nonmagical weapon carried by the creature glows with a faint purple light and becomes a +1 weapon.</p>
      </div>}
      {salaAtual === "1-24b" && <div className='sala' id='1-24b'>
        <p><strong>Bones.</strong> Moldy bones have been swept into a deep alcove in the south wall.<br></br>

          <strong>Dead Prisoner.</strong> Hanging from rusty manacles on the back wall of an alcove to the east is a tiefling skeleton missing its legs. Written on the wall above the skeleton in dried blood are the following words in Infernal: TALK TO ME.</p>

        <p>A tiefling mage was cast out of Dweomercore, the secret academy on level 9, for spell theft and for being a suspected agent of the Arcane Brotherhood (a society of renegade wizards based in Luskan). Halaster killed the tiefling as a precaution and hung its skeleton here as a macabre decoration. If a speak with dead spell is cast on the skeleton, it answers whatever questions it must to satisfy the conditions of the spell and then intones, "Look for the little dwarves under the mountain! One of them hides the key to my heart!" This clue refers to the stone fresco in area 6c and the magic heart in area 14b.</p>
      </div>}
      {salaAtual === "1-25a" && <div className='sala' id='1-25a'>
        <p>Goblins in league with the Xanathar Guild dug a tunnel that connects a dead-end hallway (area 25a) with a partially collapsed hall (area 25b).</p>

        <p><strong>Dead Goblin.</strong> A dead goblin lies on the floor. (A bugbear caved in its skull for falling asleep on the job.)<br></br>

          <strong>Tools.</strong> Three pickaxes and two shovels rest atop piles of rubble at the mouth of a 5-foot-wide, 5-foot-high tunnel that meanders through collapsed stone.</p>
      </div>}
      {salaAtual === "1-25b" && <div className='sala' id='1-25b'>
        <p>Half-buried in stone debris at the north end of this partially collapsed hall is a headless stone statue of a strong male torso with bovine legs. Characters who take time to clear the rubble find the statue's head, which is that of a minotaur. They also uncover the base of the statue, which shows the image of an arrow pointing downward, an arch with a rust monster inside and an arch with a flagon pouring liquid inside.</p>
      </div>}
      {salaAtual === "1-26a" && <div className='sala' id='1-26a'>
        <p>These tunnels are 10 feet high with flat ceilings. They're swept clean on a regular basis by the gelatinous cube that characters first encounter in area 26c.</p>

        <p><strong>Candles.</strong> The hall is brightly lit by flickering tallow candles that float in shallow niches along the walls. The candles produce heat but no smoke.<br></br>

          <strong>Clean Hall.</strong> The corridor is conspicuously free of dust and debris.</p>

        <p>Each of the twenty-five niches contains two lit candles. Although wax runs down the sides of the candles, it never drips off them onto the niche, nor do the candles ever seem to be diminished or consumed.</p>

        <p>A dispel magic cast on any candle causes all the candles to extinguish, then fall to the floor and break upon impact. A candle taken from its niche becomes an ordinary candle that doesn't float and burns down as any normal candle would.</p>
      </div>}
      {salaAtual === "1-26b" && <div className='sala' id='1-26b'>
        <p>Behind this door is an empty, 10-foot-square room.</p>
      </div>}
      {salaAtual === "1-26c" && <div className='sala' id='1-26c'>
        <p>Just around this corner is a <a href="https://5e.tools/bestiary.html#gelatinous%20cube_mm" target="blank">gelatinous cube.</a> The first character to walk around the corner is surprised by the cube unless that character has a passive Wisdom (Perception) score of 15 or higher.</p>
      </div>}
      {salaAtual === "1-26d" && <div className='sala' id='1-26d'>
      </div>}
      {salaAtual === "1-27" && <div className='sala' id='1-27'>
        <p><strong>Bas-Relief.</strong> Carved into the back wall of this alcove is a shallow niche containing a bas-relief sculpture of a nude, heavyset man playing a harp (see below).<br></br>

          <strong>Half a Pole.</strong> Lying on the floor of the alcove is a broken half of a 10-foot pole.</p>

        <p>Close inspection of the bas-relief reveals the following inscription carved into the harp, in Common:<br></br>

          Gaze upon me with bronzed visage<br></br>

          And secrets shall I reveal.</p>

        <p>A detect magic spell reveals a strong aura of conjuration magic in the alcove. Any character who steps into the alcove wearing the bronze Halaster mask found in area 21 is transported to a demiplane (see "Demiplane" below). Any nonmagical object anchoring the character to the Material Plane, such as a rope or a pole held by another creature, is sheared or snapped off as the character crosses the threshold.</p>

        <h2>Demiplane</h2>

        <p>The demiplane looks like a 30-foot-square stone room with the following features:</p>

        <p><strong>Misty Portal.</strong> A mist-filled open doorway leads back to the dungeon alcove on the Material Plane.<br></br>

          <strong>Half a Pole.</strong> The other half of the broken 10-foot pole lies on the floor just inside the doorway.<br></br>

          <strong>Portrait.</strong> Hanging upside down on one wall is a tall, wood-framed painting of Halaster Blackcloak.<br></br>

          <strong>Simulacrum.</strong> Seated in a high-backed oak chair in front of the painting is a simulacrum of the Mad Mage himself (created by the <a href="https://5e.tools/spells.html#simulacrum_phb" target="blank">simulacrum</a> spell).</p>

        <p>When it meets a character for the first time, Halaster's simulacrum says, "Well, don't just stand there like a boob. Ask me three questions about Undermountain. Two of my answers will be true, and one will be false."</p>

        <p>The simulacrum knows everything that Halaster knows and makes good on its offer. After answering three questions, it turns to slush and is destroyed. The simulacrum won't provide any additional information and can't leave the demiplane. The demiplane remains even after the simulacrum is destroyed.</p>

        <p>Removing the Halaster mask does not affect the demiplane. By tossing the mask through the misty doorway, a character inside the demiplane can enable others to use it to enter from the Material Plane.</p>
      </div>}
      {salaAtual === "1-28a" && <div className='sala' id='1-28a'>
        <p>The Xanathar Guild maintains a watch post here, called "Grick Snack" by the bugbears that command it. Two <a href="https://5e.tools/bestiary.html#bugbear_mm" target="blank">bugbears</a> and six <a href="https://5e.tools/bestiary.html#goblin_mm" target="blank">goblins</a> are stationed in this area.</p>

        <p>Two bugbears stand guard in this empty room. When confronted by any threat, they retreat along the curved northern tunnel to area 28c, gather reinforcements, and make their stand in area 28b.</p>

        <h2>Secret Door.</h2>

        <p>A secret door in the north wall opens into a tunnel leading north. The watch post defenders are unaware of it.</p>
      </div>}
      {salaAtual === "1-28b" && <div className='sala' id='1-28b'>
        <p><strong>Obelisk.</strong> In the north end of this room stands a 14-foot-tall granite obelisk with a lidless eye carved near its top on the south-facing side. The bottom half of the obelisk is covered with dirty, bloody handprints.<br></br>

          <strong>Alcoves.</strong> Wide alcoves surround the obelisk to the west, north, and east. They contain a dozen goblin beds made of bundled rugs and torn fabric. (The beds have nothing of value.)</p>

        <p>A detect magic spell reveals a faint aura of divination magic surrounding the obelisk, and the goblinoids believe (incorrectly) that Xanathar can see through the obelisk's eye to keep watch on them.</p>

        <p>The first character to touch the obelisk with a bare hand receives the following telepathic message in Common: "I cast my eye into the future and see in yours a perilous descent. South of here, beyond a secret passage, waits the Two-Headed King. Look to his left. There you will see the path you are destined to take." These words seem to emanate from within the obelisk and are meant to sound soothing, but a character who hears the words can discern a hint of subdued madness in them with a successful DC 15 Wisdom (Insight) check. (The obelisk was created by Halaster and sounds just like him.) The obelisk's "vision" refers to the secret passage at area 38, the two-headed statue in area 39a, and the stairs west of the statue that lead down to level 2.</p>

        <p>Casting dispel magic on the obelisk renders it nonfunctional. Toppling the obelisk requires a successful DC 25 Strength (Athletics) check and causes it to break into myriad pieces on the floor.</p>
      </div>}
      {salaAtual === "1-28c" && <div className='sala' id='1-28c'>
        <p><strong>Goblins.</strong> Unless they are led elsewhere, six <a href="https://5e.tools/bestiary.html#goblin_mm" target="blank">goblins</a> cower behind broken halves of a stone table tipped on its side. (They peer around the table's edges with their bows aimed at the rough-hewn tunnel leading east.)<br></br>

          <strong>Corpses.</strong> Lying on the floor between the goblins and the tunnel are two dead goblins (one headless) and a dead grick, riddled with goblin arrows.<br></br>

          <strong>Secret Door.</strong> A secret door in the north wall opens into a tunnel leading north and east. The watch post defenders are unaware of it.</p>

        <p>The goblins have orders to kill any gricks that emerge from the eastern tunnel. Having lost several of their companions to the gricks in area 36, the goblins are jittery and afraid for their lives.</p>
      </div>}
      {salaAtual === "1-28d" && <div className='sala' id='1-28d'>
        <p>The 10-foot-square section of floor at the end of this tunnel doubles as the lid of a 30-foot-deep pit with stone spikes at the bottom. Any creature weighing 50 pounds or more that stands on the lid falls into the pit as the lid swings open, taking 10 (3d6) bludgeoning damage from the fall and 11 (2d10) piercing damage from the spikes. The lid remains open for 1 hour, then automatically snaps shut as the trap resets.</p>

        <p>A character searching the tunnel for traps spots the pit with a successful DC 15 Wisdom (Perception) check. Hammering spikes between the edges of the lid and the surrounding walls keeps the pit from opening.</p>

        <p><strong>Dead Goblin.</strong> A dead goblin is impaled through the head by a spike at the bottom of the pit. Its gear lies nearby. A scimitar, a shortbow, and a quiver with 9 arrows lie near the goblin's impaled corpse. The dead goblin also has a lucky charm: a desiccated dwarf thumb.</p>
      </div>}
      {salaAtual === "1-29" && <div className='sala' id='1-29'>
        <p><strong>Hanging Shields.</strong> Sixteen old shields bearing emblems from long-forgotten human, dwarven, and elven realms hang on the north and south walls of this tunnel.<br></br>

          <strong>Scrying Eye.</strong> As the characters traverse the corridor, a large floating eye surrounded by glowing motes of light appears ahead of them. This is one of Halaster's scrying eyes (see "Halaster's Lair"). It studies the characters for a minute or two before disappearing without a sound.</p>
      </div>}
      {salaAtual === "1-30a" && <div className='sala' id='1-30a'>
        <p>This area consists of a zigzagging hall (area 30a) and a guard room (area 30b). A berserk air elemental is trapped here. Its howls can be heard throughout the area. Assume it's in area 30b when the characters first arrive.</p>

        <p>The elemental can tell when someone opens the door at either end of the zigzagging hall or the secret door in the guard room. As soon as it hears a door open or feels a slight change in air pressure, it rushes toward the open doorway, attacking all creatures in its path.</p>

        <p>This hall was designed to thwart archers by reducing their line of sight. Other than a few scattered bones on floor, it contains nothing of interest.</p>
      </div>}
      {salaAtual === "1-30b" && <div className='sala' id='1-30b'>
        <p>This area consists of a zigzagging hall (area 30a) and a guard room (area 30b). A berserk <a href="https://5e.tools/bestiary.html#air%20elemental_mm" target="blank">air elemental</a> is trapped here. Its howls can be heard throughout the area. Assume it's in area 30b when the characters first arrive.</p>

        <p>The elemental can tell when someone opens the door at either end of the zigzagging hall or the secret door in the guard room. As soon as it hears a door open or feels a slight change in air pressure, it rushes toward the open doorway, attacking all creatures in its path.</p>

        <p>Lying on the floor is a battered helm, a tattered suit of leather armor, two halves of a shattered wooden shield, a rusty longsword, a rotting quiver, several broken arrows, and a longbow with a snapped string.</p>

        <p>A secret door in the west wall leads to a dusty tunnel that connects to area 31.</p>
      </div>}
      {salaAtual === "1-31" && <div className='sala' id='1-31'>
        <p><strong>Wererat.</strong> A <a href="https://5e.tools/bestiary.html#wererat_mm" target="blank">wererat</a> named Sylvia Featherstone scours the hall in her giant rat form.<br></br>

          <strong>Statues.</strong> Cobweb-covered statues of dwarves stand atop 2-foot-high pedestals in alcoves. (One of the northernmost statues has been pushed aside, leaving grooves in the floor and clearing a path to a secret door that opens into a tunnel connecting with area 30b.)</p>

        <p>If cornered, Sylvia assumes hybrid form and claims that she is searching the dungeon for food. If accused of lying, she explains that she is looking for treasure to buy food in Skullport (which is another lie). In fact, Sylvia is one of Xanathar's spies and is searching for secret doors that lead to unexplored areas of the dungeon—information the beholder considers valuable. If threatened, she tries to rejoin her companion in area 35. If captured, she takes every opportunity to try to escape. She wears no armor, carries no weapons, and has nothing of value on her. She is familiar with levels 1, 2, and 3 of Undermountain but lies about what's there unless magically compelled to speak the truth.</p>
      </div>}
      {salaAtual === "1-32a" && <div className='sala' id='1-32a'>
        <p>The Melairkyn dwarves built these rooms for honored guests in the Underhalls. The door to this suite is carved with the image of a stern, heavily armored dwarf warrior locked in a defensive stance behind a shield.</p>

        <p>Every wall of this empty room is carved with a floor-to-ceiling fresco of a cavern wall, giving the room a cave-like quality.</p>
      </div>}
      {salaAtual === "1-32b" && <div className='sala' id='1-32b'>
        <p>The Melairkyn dwarves built these rooms for honored guests in the Underhalls. The door to this suite is carved with the image of a stern, heavily armored dwarf warrior locked in a defensive stance behind a shield.</p>

        <p>The southern half of the room contains a sunken basin with a drain at the west end and a stone drain plug nearby. A heavy stone spigot sticks out of the south wall above the basin.</p>

        <p>Surprisingly, this facility still works. When the spigot is turned, clean, hot water pours into the basin. The water is supplied and heated by natural sources below.</p>
      </div>}
      {salaAtual === "1-33" && <div className='sala' id='1-33'>
        <p>Carved into the walls, 2 feet off the floor, are eleven bare stone shelves meant to serve as beds. Each shelf is 7 feet long and 3 feet deep with an arched ceiling 4 feet above it.</p>
      </div>}
      {salaAtual === "1-34" && <div className='sala' id='1-34'>
        <p>This room is identical to area 33 except for one detail: lying in one of the beds is an elf skeleton draped in cobwebs. It wears hide armor and clutches an oak quarterstaff, both in serviceable condition.</p>
      </div>}
      {salaAtual === "1-35" && <div className='sala' id='1-35'>
        <p>The door to this room hangs slightly ajar, and the sound of squeaking rats emanates from within. The room has these features:</p>

        <p><strong>Giant Rats.</strong> Ten <a href="https://5e.tools/bestiary.html#giant%20rat_mm" target="blank">giant rats</a> scour the room for food.<br></br>

          <strong>Wererat.</strong> An obese giant rat is sleeping on the seat of a crumbling stone throne that stands on a dais opposite the door. (This creature is a shapechanged <a href="https://5e.tools/bestiary.html#wererat_mm" target="blank">wererat</a> named Flyndol Greeth.)<br></br>

          <strong>Fountains.</strong> Not visible from the door are two semicircular fountains built into the south wall, one in each half of the room (see "Fountains" below).</p>

        <p>Flyndol Greeth is a lazy wererat who serves Xanathar out of fear, not loyalty. He's waiting for his companion, Sylvia, to return (see area 31). If threatened, Flyndol commands the giant rats to cover his escape. If escape is impossible, he surrenders but won't give his captors any useful information unless they charm him. He carries nothing of value.</p>

        <h2>Fountains</h2>

        <p>Each fountain consists of a blue marble basin enclosed by a 1-foot-high stone retaining wall with drainage holes on the inside of the rim to prevent overflow. Carved above each basin is a bas-relief of a dwarf's face with an open mouth. Water from an underground river once flowed out of the mouths and into the basins, but no longer. Both basins are dry, and the dwarves' stone beards are stained and discolored.</p>
      </div>}
      {salaAtual === "1-36a" && <div className='sala' id='1-36a'>
        <p>These halls are connected by 5-foot-wide, tube-like passages of rough-hewn stone that slope up and down. Dust hangs in the air here.</p>

        <p><strong>Gricks.</strong> Two <a href="https://5e.tools/bestiary.html#grick_mm" target="blank">gricks</a> in the middle of this partially collapsed hall attack all who enter.</p>

        <p><strong>Debris.</strong> The floor is littered with small rocks and pebbles, broken statuary, and jagged chunks of masonry big enough to crush a man's skull.</p>
      </div>}
      {salaAtual === "1-36b" && <div className='sala' id='1-36b'>
        <p>Gricks. Five <a href="https://5e.tools/bestiary.html#grick_mm" target="blank">gricks</a> lurk in the diagonal hallway to the south. They attack all who enter.

          Trapped Adventurer. The sound of weeping comes from behind a closed door in the west wall (leading to a 10-foot-square closet). A small hole has been drilled through the middle of the door.</p>

        <p>An adventuring party called the Fine Fellows of Daggerford descended into Undermountain one tenday ago. One of its members, a thief named Kelim the Weasel (NE human <a href="https://5e.tools/bestiary.html#spy_mm" target="blank">spy</a>), wandered off, snuck into this corner of the dungeon, found a spellbook left behind by a long-dead adventurer, and inadvertently aroused the gricks. With his escape route cut off, Kelim sealed himself in the closet to avoid being eaten. He drilled a small hole in the door so that he could peer out of it and get some fresher air. He wants to sneak out while the gricks are asleep or distracted, but he's too scared to leave. He has been without food or water for two days.</p>

        <p>If rescued, Kelim gives his saviors a stolen spellbook as a token of gratitude. Beyond that, he's an unreliable coward who will betray anyone to save his own skin. He doesn't know where the rest of his adventuring party is (see level 2) and doesn't seem to care.</p>

        <p><strong>Treasure.</strong> The stolen spellbook contains the following spells: blight, burning hands, comprehend languages, darkvision, dispel magic, false life, feign death, gust of wind, invisibility, lightning bolt, and sleep.</p>

        <p>Kelim also carries an explorer's pack (with its perishable supplies mostly depleted) and a pouch containing 5 pp, 24 gp, and 4 sp.</p>
      </div>}
      {salaAtual === "1-36c" && <div className='sala' id='1-36c'>
        <p><strong>Sleeping Grick.</strong> A <a href="https://5e.tools/bestiary.html#grick%20alpha_mm" target="blank">grick alpha</a> is coiled up in the southernmost section of the room and appears to be asleep. The creature recently gorged itself on goblins and is not hungry. If the characters stay at least 10 feet away from it and cause it no harm, it ignores them.

          <strong>Reverse Gravity.</strong> Directly above the grick, on the 20-foot-high ceiling, is an upside-down stone throne, seated upon which is a mummified minotaur with gems embedded in its eyes (see "Treasure" below). A greataxe lies at the foot of the throne.

          <strong>Debris.</strong> Stone debris is strewn across the floor and ceiling.

          <strong>Secret Door.</strong> This secret door is hidden in the east corner of the north wall. The gricks can't open it.</p>

        <p>The top half of the room is under the effect of a permanent reverse gravity spell. The effect takes hold of any creature or object more than 10 feet off the floor. A successful dispel magic (DC 18) ends the effect, causing creatures and objects on the ceiling to fall if there's nothing to counteract the effect of normal gravity on them.</p>

        <p><strong>Treasure.</strong> The mummy is inanimate, and its greataxe is nothing special. One of the gemstones in the mummy's eyes is a banded agate (10 gp), the other a zircon (50 gp).</p>
      </div>}
      {salaAtual === "1-37" && <div className='sala' id='1-37'>
        <p>Four members of an adventuring party called the Fine Fellows of Daggerford rested here several days ago. An argument between them turned violent, leading three members to kill and dispose of the fourth. The room has the following features:</p>

        <p><strong>Map.</strong> A 30-foot-wide, floor-to-ceiling <a href="" target="blank">map</a> is carved into the west wall (see "Fresco" below).<br></br>

          <strong>Open Pit.</strong> In the middle of the room is a 10-foot-square open pit. A revenant is trapped in the pit and can be heard moving around inside it.<br></br>

          <strong>Secret Door.</strong> A secret door is hidden in the south wall. It opens into a curved tunnel (area 38).</p>

        <h2>Map Carving</h2>

        <p>This <a href="" target="blank">elaborate image</a> is a cross-section map of Undermountain, with what is clearly Mount Waterdeep and the City of Splendors at the top, and twenty-three hollowed-out dungeon levels stacked below it. Each dungeon level has its own stylistic side view, but no names or details are included to suggest what a level is called or what it contains. Three features stand out:</p>

        <ul>
          <li>Next to the third level is a bas-relief of a flaming skull.</li>
          <li>Next to the sixteenth level is a bas-relief of a comet.</li>
          <li>Next to the twenty-third (lowest) level is a bas-relief of a tower with a tiny rune engraved above it.</li>
        </ul>

        <p>Close inspection reveals that the flaming skull, the comet, and the tower are buttons that can be pressed.</p>

        <p><strong>Flaming Skull.</strong> This carving represents Skullport. Each time this button is pressed, a magical, disembodied male voice fills the room and says in Common, "Gate access to Skullport disabled."<br></br>

        <strong>Comet.</strong> This carving represents Stardock, the asteroid orbiting Toril that is connected by a gate to level 16. Each time this button is pressed, a magical, disembodied male voice fills the room and says in Common, "Gate access to Stardock from level 16 only."<br></br>

        <strong>Tower.</strong> This carving represents Halaster's extradimensional tower, and the tiny glyph above it is Halaster's rune. If this button is pressed, a magical, disembodied male voice fills the room and says in Common, "Gate access to Halaster's Tower from level 23 only."</p>

        <h2>Pit</h2>

        <p>The open pit used to be 30 feet deep, but now the bottom 10 feet of the hole are filled with stone rubble. Its sides are smooth and can't be ascended or descended without magic or climbing gear.</p>

        <h2>Revenant</h2>

        <p>When a half-elf cleric of Waukeen named Halleth Garke accused his adventuring companions of withholding treasure from him, the other members of the Fine Fellows of Daggerford (not including Kelim in area 36b, who had already wandered off) beat Halleth to death and threw his body into the pit. Halleth "awoke" the next day as a revenant, compelled to find and kill the three who murdered him. Unfortunately for him, he is unable to climb out of the pit without assistance and has been pacing down there for days.</p>

        <p>If the characters pull him up, Halleth points to the secret door in the south wall and offers to join the party until he locates his "friends," a shield dwarf named Copper Stormforge and two humans named Midna Tauberth and Rex the Hammer. Halleth no longer has access to his cleric spells, and his companions stole his gear (including his holy symbol), along with a wholly incorrect map of the Sargauth Level (level 3). He is willing to let the characters keep the map once they help him confront his killers and retrieve it. He believes the map is authentic and accurate. When the three Fine Fellows die, Halleth becomes a corpse again; if the characters helped him, award them XP as though they had defeated the revenant in combat. See level 2 for more information on Halleth's killers.</p>
      </div>}
      {salaAtual === "1-" && <div className='sala' id='1-'>
      </div>}
      {salaAtual === "1-" && <div className='sala' id='1-'>
      </div>}
      {salaAtual === "1-" && <div className='sala' id='1-'>
      </div>}
      {salaAtual === "1-" && <div className='sala' id='1-'>
      </div>}
    </div>
  );
};