export const Mapa23 = {
  src: "skullport1.png",
  name: "Skullport - Lower / Middle",
  areas: [
    {
      id: "skullIsland",
      name: "skullIsland",
      shape: "rect",
      coords: [740, 2927, 698, 2821]
    },
    {
      id: "upperSkullport1",
      name: "upperSkullport",
      shape: "rect",
      coords: [880, 479, 1064, 613]
    },
    {
      id: "upperSkullport2",
      name: "upperSkullport",
      shape: "rect",
      coords: [2274, 1021, 2061, 954]
    },
    {
      id: "upperSkullport3",
      name: "upperSkullport",
      shape: "rect",
      coords: [1970, 313, 2163, 493]
    },
    {
      id: "steamFall",
      name: "Steamfall Pass",
      shape: "rect",
      coords: [2048, 1902, 2230, 1756]
    },
    {
      id: "taglath",
      name: "Taglath's Pass",
      shape: "rect",
      coords: [1504, 1729, 1686, 1864]
    },
    {
      id: "beggar",
      name: "Beggar's Rest Pass",
      shape: "rect",
      coords: [1422, 1758, 1240, 1875]
    },
    {
      id: "23-11",
      name: "Old Markets",
      shape: "poly",
      coords: [450, 2892, 609, 2867, 609, 2839, 658, 2825, 800, 2825, 776, 2776, 756, 2705, 711, 2703, 707, 2776, 612, 2774, 516, 2752, 467, 2728, 425, 2768]
    },
    {
      id: "23-12",
      name: "Dead Man's Corner",
      shape: "poly",
      coords: [365, 2894, 370, 2819, 423, 2825, 425, 2872, 398, 2870, 398, 2892]
    },
    {
      id: "",
      name: "",
      shape: "circle",
      coords: []
    },
    {
      id: "23-19",
      name: "The Flagon and the Dragon",
      shape: "poly",
      coords: [1375, 2457, 1377, 2437, 1355, 2437, 1355, 2386, 1371, 2386, 1375, 2361, 1453, 2364, 1451, 2415, 1426, 2415, 1426, 2461]
    },
    {
      id: "",
      name: "",
      shape: "circle",
      coords: []
    },
    {
      id: "",
      name: "",
      shape: "circle",
      coords: []
    },
    {
      id: "23-22",
      name: "The Guts & Garters",
      shape: "poly",
      coords: [1522, 2290, 1520, 2219, 1566, 2217, 1568, 2124, 1595, 2122, 1644, 2177, 1639, 2264, 1595, 2273, 1593, 2290]
    },
    {
      id: "23-22s",
      name: "xanatharlair",
      shape: "rect",
      coords: [1642, 2246, 1693, 2224]
    },
    {
      id: "",
      name: "",
      shape: "circle",
      coords: []
    }
  ]
}

export function Salas23({ salaAtual }) {
  return (
    <div>
      {salaAtual == null && <div className='sala'>
        <h2>General Environment</h2>

        <p>Everything has a deteriorated, haphazard look to it. Tightly packed buildings of wood and stone are piled atop one another, creating three levels: a lower level (often called the street level), a middle level, and an upper level.</p>

        <p>Unnamed thoroughfares wind through the town at street level. Above this labyrinth run mazes of catwalks made from the wood of old shipwrecks. Old rigging is used to suspend the creaky catwalks.</p>

        <p>The 90-foot-high cavern ceiling is covered with a forest of stalactites.</p>

        <p>Most of the lanterns that once illuminated Skullport are gone, turned to rust or stolen by thieves long ago. Denizens carry their own light sources or rely on darkvision to see. Flameskulls are often mistaken from a distance for bobbing torches as they drift through town.</p>

        <h2>The Winches and Locks</h2>

        <p>Both winches that control the gates to the harbors and the mechanism that controled the locks that allowed ships to enters and leave skullport have broken and Xanathar's Guild have no interest in fixing them. The town has been degrading fast in the past few months as commerce has stopped and the only trade must be done through the guild, with great costs.</p>

        <h2>The Thirteen</h2>

        <p><a href="https://forgottenrealms.fandom.com/wiki/Skulls_of_Skullport">Thirteen</a> ancient <a href="https://5e.tools/bestiary.html#flameskull_xmm">flameskulls</a> haunt Skullport. These entities, which have defended the town since the fall of the Netherese Sargauth Enclave. The flameskulls considered themselves the true rulers of Skullport, but they have lost touch with reality, their minds drifting in and out of the present and the past. They rarely communicate, and when they do it is often in a dead language.</p>

        <h2>Fourteenth Skull</h2>

        <p>A <a href="https://forgottenrealms.fandom.com/wiki/Fourteenth_Skull">drow who was transformed by the thirteen</a> when they where trying to create new guardians for Skullport and escape undermountain. He doesn't want to leave and instead wants to become the only ruler of Skullport and have it grow in strength.</p>

        <p>He isn't strong enough to fight Xanathar's Guild alone and hides so they don't know of his existence, but he knows it is possible to take control over the other skulls and together they could retake the town. He knows there is an underwater cave where he could do this, but doesn't know where it is or how to get there (he can't be completely engulfed by water else he dies). He also needs the blood of a netherese descendant and knows Anderian Dusk is the only such person left in the town.</p>

        <p>Bosskyn Gorrb in area 26 knows of The Fourteenth and is willing to help as this would weaken Xanathar's Guild and help bring more Zhentarim to Waterdeep but The Fourteenth doesn't trust him.</p>
      </div>}
      {salaAtual === "steamFall" && <div className='sala' id='steamFall'>
        <p>If the party takes the route out of level 3 through area 17a, they arrive in Skullport here.</p>

        <p>Before characters start coming this way, roll a die or decide what time it is:</p>

        <ul>
          <li>If the roll is odd or the time is between midnight and dawn, this passage is safe but the whole way is covered with mud and ash from Thaglar's Foundry, which makes the ground difficult terrain and soils any clothes or objects less than 30 centimeters from the ground.</li>
          <li>If the roll is even or the time is between dawn and midnight, hot steam from Thaglar's Foundry covers the whole tunnel and creatures take 1 fire damage for each feet of movement spent crossing it. (The tunnel is 250 feet long and it's all difficult terrain)</li>
        </ul>
      </div>}
      {salaAtual === "taglath" && <div className='sala' id='taglath'>
        <p>If the party takes the route out of level 3 through area 23, they arrive in Skullport here if they take a left on the bifurcation.</p>

        <p>As they pass through here, a <a href="https://5e.tools/bestiary.html#ghost_xmm">ghost</a> appears. He is not hostile but wants to talk as he feels lonely. If any characters are female, he will try to flirt.</p>

        <p>In life, Taglath was a poet, explorer, and a romantic. He was known for courting the most beautiful women of the city, not caring for possible husbands. One day, after a tryst with the wife of a Calishite merchant, Taglath was brutally assassinated in this tunnel as he was fleeing.</p>
      </div>}
      {salaAtual === "beggar" && <div className='sala' id='beggar'>
        <p>If the party takes the route out of level 3 through area 23, they arrive in Skullport here if they take a right on the bifurcation.</p>

        <p>The pass had long served as a refuge for various tramps and vagrants dwelling on suspended catwalks above the floor.</p>

        <p>During the <a href="https://forgottenrealms.fandom.com/wiki/Time_of_Troubles">Time of Troubles</a> in 1358 DR, the passage’s walls, ceiling, and floor reportedly liquefied without warning, transforming the area into a muddy vortex. When the cavern liquefied, approximately 300 panhandlers and beggars fell from their perches into the mire below. According to contemporary accounts, onlookers witnessed the victims being drawn beneath the mud before the ground rapidly solidified back into stone. Many were entirely entombed and suffocated, while others reportedly died partially embedded in the hardened floor, their limbs remaining visible as they reached upward in vain.</p>

        <p>Since the disaster, no structures had been erected near the pass, owing partly to respect for the dead but more to lingering fear. Sounds were said to be unnaturally dampened in the vicinity. Individuals who lingered here had reported hearing faint clawing noises and muffled sobs emanating from beneath the stone.</p>

        <p>The tragedy has also served to limit violence in the area due to a widespread belief that bloodshed within the pass awakened those trapped below, prompting them to rise as zombies in search of the blood's source. If blood is spilled within 30 feet (9.1 meters) of the pass, <a href="https://5e.tools/bestiary.html#zombie_xmm">zombies</a> emerge from the ground and attack. Any creature slain during such an event is drawn below to join the buried dead.</p>
      </div>}
      {salaAtual === "23-enc" && <div className='sala' id='23-enc'>
        <p></p>
      </div>}
      {salaAtual === "23-11" && <div className='sala' id='23-11'>
        <p>These open-air spaces are dreary and forlorn.</p>

        <h2>Old Fish Market</h2>
        <p>Closed shops and warehouses enclose an abandoned market dotted with empty fish stands.</p>

        <h2>Old Slave Market</h2>
        <p>The shops that surround this abandoned slave market appear vacant. Further investigation reveals that one shop (area 12) is open for business.</p>
      </div>}
      {salaAtual === "23-12" && <div className='sala' id='23-12'>
        <p>A <a href="https://5e.tools/bestiary.html#green%20hag_xmm">green hag</a> named Olive Stillwater sells human <a href="https://5e.tools/bestiary.html#zombie_xmm">zombies</a> out of this dilapidated shop. She appears as an old woman covered with snails and barnacles.</p>

        <p>Olive keeps a dozen human zombies in her cramped shop. "They're great for setting off traps!" she says with a chuckle. As payment for each zombie, she demands a tiny vial of the buyer's blood and three hairs plucked from the buyer's head. She owns a pair of rusty iron shears that can be used to draw blood and cut hair. This payment will be used to cast Scrying on the characters from time to time, curse them if needed and get their bodies to make zombies if they die.</p>

        <p>Inspection of the zombies reveal some of them are people the party knew. (Choose people the party knows died in the dungeons)</p>

        <p>Each zombie wears a rope noose around its neck. A character who buys a zombie must lead it around by the noose; otherwise, the zombie stands still and does nothing.</p>

        <p>Olive enjoys getting the right zombie for the right customer, which is always someone the customer knew and will shock them.</p>

        <p>Her larger desires are:</p>

        <ul>
          <li>Getting rid of the coven in the third level, which she considers competition. (She may ask directly for their death or try to trick/convince players into it)</li>
          <li>Reestablishing the slave trade in Skullport, as slavery is a great source of suffering and desperation. (She know Kressando Rosznar wanted the same and may ask for a way to contact the Rosznar family)</li>
          <li>Having two children so she can form a coven of her own. (She needs children to eat)</li>
        </ul>
      </div>}
      {salaAtual === "23-13" && <div className='sala' id='23-13'>
        <p>A cheery rock gnome named Krystaleen runs this shop. She is the niece of the pawnshop's previous owner, Thimblewine, who died of old age a few years ago.</p>

        <p>Krystaleen buys reusable goods from visitors at 60% normal cost (as listed in the Player's Handbook). If the characters are looking to buy a nonmagical item, there is a 10% chance that Krystaleen has such an item in stock. All merchandise is sold at three times the normal cost.</p>

        <p>She also has some interesting magical items on display and is keen to sell:</p>
        <ul>
          <li><strong>Oleo da amargura (800 gp):</strong> Quando aplicado a uma armadura, qualquer criatura que te engula deve fazer um savamento de constituição DC 15 no final de cada turno ou imediatamente te cuspir. Qualquer criatura que te ataque com a boca deve fazer o mesmo salvamento em mordidas subsequentes ou ter desvantagem no ataque.</li>
          <li><strong>Capacete para-raios (1300gp):</strong> O usuario tem resistencia a dano de raio mas qualquer efeito eletrico numa area de 60 ft. em volta sempre vai nele independente do alvo original.</li>
          <li><strong>Orbe do mago de batalha (2000gp)</strong> Requer sintonia (atunement) por uma pessoa com pontos de magia. O usuario pode atacar com essa arma usando sua habilidade de magia, ao invés de força. Dano contundente 1d6, alcance, leve. Como uma ação, o usuario pode gastar um ponto de magia para lançar o orbe que irá fazer um ataque contra qualquer alvo a vista mais um ataque para cada nivel do ponto usado. Esse ataque especial causa +1d6 de dano de força a cada alvo que acerta.</li>
          <li></li>
          <li></li>
        </ul>
      </div>}
      {salaAtual === "23-14" && <div className='sala' id='23-14'>
        <p>This town square is littered with trash. Nearly all the buildings that surround it are abandoned.</p>
      </div>}
      {salaAtual === "23-15" && <div className='sala' id='23-15'>
        <p>COLOCAR ALGO INTERESSANTE</p>
      </div>}
      {salaAtual === "23-16" && <div className='sala' id='23-16'>
        <p>This dwarven distillery is a three-story stone building with a sagging roof. <a href="https://forgottenrealms.fandom.com/wiki/Gyudd">Gyudd</a>, the shield dwarf distiller, makes Amberjack (a sherry), bitter Goat's Head Ale, and a muddy alcoholic swill called Wyrmwizz. The cost of a 5-gallon cask is 20 gp for Amberjack, 10 gp for Goat's Head Ale, and 5 gp for Wyrmwizz</p>

        <p>Gyudd is one of the last Melairkyn dwarves alive and a direct descendant from <a href="https://forgottenrealms.fandom.com/wiki/Melair_IV">King Melair IV</a>. He has been haunted by the Melairkyn ghosts in his dreams for most of his life. Shaken and overwhelmed by the responsibility, he started to drink heavily, and this quiets the ghosts.</p>

        <p>A lover of his craft disappointed by inferior ingredients, Gyudd wants only to live up to his ancestors' brewing legacy. He offers payment if the characters can bring him any of the
          following:</p>

        <ul>
          <li><strong>Cave Fisher Blood.</strong> The blood of cave fishers (see Volo's Guide to Monsters) is alcoholic and used in several dwarven spirits. Gyudd pays 5 gp per vial of blood. A single fisher can provide up to five vials of blood. Cave fishers can be found in the caverns outside Skullport.</li>
          <li><strong>Wheat, Barley, or Rye.</strong> For every pound of grain the adventurers bring Gyudd, he pays 3 cp (thrice its going price on the surface)</li>
        </ul>
      </div>}
      {salaAtual === "23-17" && <div className='sala' id='23-17'>
        <p>Empty buildings surround this square, which is festooned with iron gibbets dangling from wooden masts.</p>
      </div>}
      {salaAtual === "23-18" && <div className='sala' id='23-18'>
        <p>This shop used to sell chests, strongboxes, and other containers, but the place is closed up. Its proprietor, a shield dwarf named Tor Grayfell, was killed and had his eyes taken by an unknown killer. </p>

        <p>(He had eyes that were half blue, half brown eyes and a Cloaked Gouger (Battlezoo Bestiary pg15) decided to take them. The Gouger is still hidden in town trying to find a way to take one of Xanathar's eyes)</p>
      </div>}
      {salaAtual === "23-19" && <div className='sala' id='23-19'>
        <p>This wood and stone tavern is the best Skullport has to offer. Tending bar is the proprietor, a female half-drow named Cal'al Claddani, and her <a href="https://5e.tools/bestiary.html#alehouse%20drake_tob1-2023">Alehouse Drake</a> Weeshrike. She always introduces herself by asking, "What's your poison?"</p>

        <p>Cal'al took over the tavern after its previous owners fled, but the drake stayed. She sells two local beverages: a sherry called Amberjack (8 sp per glass) and Goat's Head Ale (4 sp per flagon). She also keeps a few rare spirits behind the bar.</p>

        <p>If the characters drop a few coins here, Cal'al is happy to furnish them with information about Skullport's other inhabitants and establishments. Cal'al also fancies herself a gatherer of secrets and might share one or two with characters she trusts:</p>

        <ul>
          <li>"We had a pair of tiefling sisters here for a long while. Magi, they were. Pirates too, once. Heard they left for the Mad Mage's academy, buried far below the earth. Dweomercore,
            they call it." See Level 9 for more information</li>
          <li>"Been gettin' plenty of Shar-worshippers in these parts. Say they're on a pilgrimage to 'Vanrakdoom,' whatever the hell that is." See Level 18 for more information.</li>
          <li>"The Xans' run these parts ever since the Thirteen Skulls lost
            their god-hatin' minds. Plenty of folks are pining for the good old days when those undead ruled Skullport. 'Harsh, but fair,' they said the regime was."</li>
          <li>"Without the hoist, Skullport's as good as dead. Vessels of
            repute can't reach harbor. Economy's in shambles. Folks are in shambles. Shame people can't put aside their suspicions long enough to repair it—but that's the way the Guild likes it. They want us divided and isolated from the outside world."</li>
          <li>"An outcast drow from House Freth washed up here. Apparently, there's a war between Houses Auvryndar and Freth—survived some great battle, he did and made it here without a copper to his name. Still made sure to spit on me for being 'only' half a drow." See Levels 10 through 12 for more information on these drow houses.</li>
          <li>"Dizem que o tal do mago tinha sete aprendizes quando ele veio pra cá, dizem que os aprendizes ainda estão pelas masmorras, mais loucos que o proprio mestre."</li>
          <li>As masmorras originalmente eram o reino do grande rei anão Melair, até que meu povo matou todos eles e mudou o nome para Kyorlamshin e depois o mago veio e expulsou os drow de lá. A drow que conseguir se livrar do mago vai certamente poder criar seu proprio reino.</li>
        </ul>
        <p></p>
      </div>}
      {salaAtual === "23-20" && <div className='sala' id='23-20'>
        <p>Food harvested from the Underdark is sold here by 1d6 <a href="Duergar Alchemist">duergar</a>, who employ an equal number of <a href="https://5e.tools/bestiary.html#wererat_xmm">wererats</a> as bodyguards.</p>
      </div>}
      {salaAtual === "23-21" && <div className='sala' id='23-21'>
        <p>A pair of strongheart halflings named Oleander and Will buy and sell maps out of this modest shop. They are eager to procure accurate maps of Undermountain and will pay 20 gp for a complete map of a floor.</p>

        <p>They currently don't have good maps of undermountain but they have a map of Skullport, which they sell for 15gp and in the future they may be able to make maps of undermountain of the characters come back.</p>
      </div>}
      {salaAtual === "23-22" && <div className='sala' id='23-22'>
        <p>A sullen, soft-spoken tiefling named Quietude runs Skullport's last remaining inn and spies on guests for Xanathar. The inn is a run-down structure with windows so shrouded in grime as to be almost opaque. Quietude rents bedrooms for 5 gp per day.</p>

        <p>The inn's cellar contains a secret door that requires a successful DC 15 Wisdom (Perception) check to detect. Beyond the secret door is a 300-foot-long, rough-hewn tunnel heading west to Xanathar's dungeon hideout (described in Waterdeep: Dragon Heist).</p>

        <p>If the characters decide to sleep in the inn and at least one of them has interesting eyes or eye related objects, the Cloaked Gouger (Battlezoo Bestiary pg15) that is prowling around tries to take them during the night.</p>

        <p>If the characters are openly hostile towards Xanathar's Guild, they are kicked out of the inn but the Cloaked Gouger later looks for them and offers help in exchange for help taking one of Xanathar's Eyes.</p>
      </div>}
      {salaAtual === "23-23" && <div className='sala' id='23-23'>
        <p>Ulvira Snowveins, a venerable half-elf and Harper spy, runs this single-story pet store. Ulvira's merchandise and prices are as follows: bat (5 cp), cat (5 sp), frog or toad (5 cp), giant fire beetle (25 gp), giant rat (10 sp), lizard (5 cp), rat (5 cp), spider (5 cp), and stirge (10 sp).</p>

        <p>If the characters seem interested, Ulvira lets them know the Harpers have a plan to disrupt Xanathar's Guild but need strong infiltrators.</p>
      </div>}
      {salaAtual === "23-" && <div className='sala' id='23-'>
        <p></p>
      </div>}
      {salaAtual === "23-" && <div className='sala' id='23-'>
        <p></p>
      </div>}
      {salaAtual === "23-" && <div className='sala' id='23-'>
        <p></p>
      </div>}
      {salaAtual === "23-" && <div className='sala' id='23-'>
        <p></p>
      </div>}
      {salaAtual === "23-" && <div className='sala' id='23-'>
        <p></p>
      </div>}
      {salaAtual === "23-" && <div className='sala' id='23-'>
        <p></p>
      </div>}
    </div >
  );
};