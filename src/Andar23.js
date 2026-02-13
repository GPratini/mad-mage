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
    }
  ]
}

export function Salas23({ salaAtual }) {
  return (
    <div>
      {salaAtual == null && <div className='sala'>
        <p>Everything has a deteriorated, haphazard look to it. Tightly packed buildings of wood and stone are piled atop one another, creating three levels: a lower level (often called the street level), a middle level, and an upper level.</p>

        <p>Unnamed thoroughfares wind through the town at street level. Above this labyrinth run mazes of catwalks made from the wood of old shipwrecks. Old rigging is used to suspend the creaky catwalks.</p>

        <p>The 90-foot-high cavern ceiling is covered with a forest of stalactites.</p>

        <p>Most of the lanterns that once illuminated Skullport are gone, turned to rust or stolen by thieves long ago. Denizens carry their own light sources or rely on darkvision to see. </p>

        <p>Flameskulls are often mistaken from a distance for bobbing torches as they drift through town.</p>
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

        <p>Krystaleen buys reusable goods from visitors at 60% normal cost (as listed in the Player's Handbook). If the characters are looking to buy a nonmagical item, there is a 10% chance that Krystaleen has such an item in stock. All merchandise is sold at five times the normal cost.</p>

        <p>She also has a host of interesting magical items on display and is keen:</p>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
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