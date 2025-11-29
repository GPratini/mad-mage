export const Mapa5 = {
  src: "andar5.png",
  name: "5º Andar",
  areas: [
    {
      id: "5-1",
      name: "River of the Depths",
      shape: "poly",
      coords: [1557, 10, 1615, 186, 1415, 421, 1385, 519, 1188, 751, 1175, 873, 1325, 1126, 1322, 1214, 1281, 1301, 1354, 1478, 1549, 1493, 1522, 1383, 1523, 1328, 1469, 1260, 1466, 1087, 1484, 1015, 1334, 798, 1391, 677, 1561, 528, 1569, 460, 1687, 323, 1699, 271, 1752, 174, 1721, 15]
    },
    {
      id: "5-2a",
      name: "Riverside Forest",
      shape: "circle",
      coords: [1108,976,106]
    },
    {
      id: "5-2a",
      name: "Riverside Forest",
      shape: "circle",
      coords: [1268,1377,112]
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

export function Salas5({ salaAtual }) {
  return (
    <div>
      {salaAtual === "5-enconters" && <div className='sala' id='5-enconters'>
        <p></p>
      </div>}
      {salaAtual === "5-1" && <div className='sala' id='5-1'>
        <h2>Skill Challenge</h2>

        <p>If the party arrives to Wyllowwood by means of a boat,
          you can kick off this level with a skill challenge. The river
          hits nasty rough water before spilling out into this idyllic
          wonderland. The party must navigate the rapids.</p>

        <p><strong>Rules.</strong> The party must succeed on four ability checks
          before failing three. Once a character has used a specific
          skill, they personally cannot use it again for the remainder
          of the challenge. This is to spur creativity and not let the
          rogue repeatedly use his +9 Acrobatics skill. Players
          suggest skills to overcome obstacles, such as Perception
          to sight the stalactites ahead before hitting them. At your
          discretion, a player can only use a skill they're proficient
          with, so as to lend importance to it.</p>

        <p><strong>Conducting the Challenge.</strong> The challenge is divided
          into obstacles, described below. Roll initiative simply to
          have an order for the players to go in. They don't need to
          adhere to the order, but it does help critical thinking. On
          their turn, each player suggests a skill or tool to overcome
          an obstacle. Not coming up with a solution carries no
          penalty, unless no one can, in which case the party
          accumulates one failure—the price of indecision.</p>

        <p><strong>Failure.</strong> Failing an ability check merely means the
          vessel takes damage. On the third failure, the vessel is
          destroyed, and the characters are overcome by the rapids.
          Eventually, they spill out into Wyllowwood after
          suffering 4d8 bludgeoning damage.</p>

        <h2>Suggested Obstacles</h2>

        <p>The following obstacles have been written for you;
          replace them as you see fit. The DCs of all ability checks
          are left up to you, though they ought to be high
          considering the party is 8th level.</p>
        <ol>
          <li><strong>Rough Water.</strong> The party encounters rough waters that soon swell into rapids. Suggestions include Vehicle (water) checks, Survival or Athletics to navigate the channel without crashing into rocks.</li>
          <li><strong>Grimlocks!</strong> A band of <a href="https://5e.tools/bestiary.html#grimlock_xmm">grimlocks</a> are spearing fishing along the river. Suggestions include Stealth to remain undetected (as grimlocks are blind); Performance to sound like a predator; Perception to detect them long before they can; or Sleight of Hand to toss an object so as to distract them. On a failure, the grimlocks hurl four spears (+5 to hit, 1d6 + 3 piercing damage) at the characters or their boat.</li>
          <li><strong>Breached!</strong> The hull is breached by stones below the surface and water fills the vessel. With a successful Sleight of Hand check, one could be quick enough to bail
            water, while carpenter's tools could patch up the hole, provided there's adequate material.</li>
          <li><strong>Capsized!</strong> The river takes a sudden turn and the vessel crashes into rocks—not enough to arrest their movement but to overturn the boat. Suggestions include
            Athletics to overpower the momentum or snatch a falling comrade; or Insight to predict it.</li>
          <li><strong>Illusory Hydra.</strong> Halaster manifests an illusion of a hydra, whose many heads rise up from the waters. The beast opens its maws and acid boils up from its legion throats—but true hydras don't spit acid, and a discerning character can make an Arcana or Nature check to know that; or an Investigation check to see through the Illusion (DC 16). All these checks can be called for by you, rather than be suggested by the players. If characters bail from the boat or attack the hydra, they accumulate a failure— for it was all a ruse to distract them from a waterfall that Halaster has cloaked and silenced under an illusion. A waterfall that was otherwise easily navigable given time and effort.</li>
        </ol>
      </div>}
      {salaAtual === "5-2a" && <div className='sala' id='5-2a'>
        <p>Between the forest and the underground river are narrow, pebbled beaches upon which <a href="https://5e.tools/bestiary.html#wyllow_wdmm">Wyllow</a> has planted carved wooden signs that bear the following warning in Common, Draconic, and Elvish: BEHOLD WYLLOW'S WOOD. HARM NOT, LEST YE BE HARM'D.</p>

        <h2>Forests Features</h2>

        <p>Wyllowwood's forest contains both deciduous and coniferous trees, as well as berry bushes and other shrubs. All kinds of flowers grow here, but no roses, because Wyllow doesn't like them.</p>

        <p>Most of the trees are mature, with heights of 30 to 50 feet. Foot trails meander between them, and any character who succeeds on a DC 15 Wisdom (Survival) check to search for tracks can see the slender footprints of a solitary humanoid—a female elf—among the tracks left by various other forest inhabitants.</p>

        <p>Running through the forest are crumbling, 20-foot-high walkways atop ivy-covered, white marble archways supported by thick white marble columns. Some sections of the walkways have collapsed due to age or seismic activity.</p>

        <p>The characters are free to pick berries, gather fallen branches, collect acorns and pinecones, and rest on moss-covered logs. Chopping down a tree, starting a fire, killing an animal, or any similar act of destruction will not be tolerated. Wyllow has many spies in the forest, which speed to her tower to communicate the party's misdeeds. If so informed, she moves swiftly to eradicate the trespassers.</p>



        <h2>Riverside Forest</h2>

        <p>The trees growing alongside the river are some of the biggest in Wyllowwood. Their gnarled boughs form a tangled canopy that overhangs the pebbled beaches. Bears come to the river's edge to fish, and deer and elk come to drink and bathe.</p>

        <p><strong>Green Dragon.</strong>While the adventurers are here, they glimpse the dragon flying out from the west, until finally settling on the platform of Area 9 to the south</p>
      </div>}
      {salaAtual === "5-2b" && <div className='sala' id='5-2b'>
        <p></p>
      </div>}
      {salaAtual === "5-2c" && <div className='sala' id='5-2c'>
        <p></p>
      </div>}
      {salaAtual === "5-2d" && <div className='sala' id='5-2d'>
        <p>Between the forest and the underground river are narrow, pebbled beaches upon which <a href="https://5e.tools/bestiary.html#wyllow_wdmm">Wyllow</a> has planted carved wooden signs that bear the following warning in Common, Draconic, and Elvish: BEHOLD WYLLOW'S WOOD. HARM NOT, LEST YE BE HARM'D.</p>

        <h2>Forests Features</h2>

        <p>Wyllowwood's forest contains both deciduous and coniferous trees, as well as berry bushes and other shrubs. All kinds of flowers grow here, but no roses, because Wyllow doesn't like them.</p>

        <p>Most of the trees are mature, with heights of 30 to 50 feet. Foot trails meander between them, and any character who succeeds on a DC 15 Wisdom (Survival) check to search for tracks can see the slender footprints of a solitary humanoid—a female elf—among the tracks left by various other forest inhabitants.</p>

        <p>Running through the forest are crumbling, 20-foot-high walkways atop ivy-covered, white marble archways supported by thick white marble columns. Some sections of the walkways have collapsed due to age or seismic activity.</p>

        <p>The characters are free to pick berries, gather fallen branches, collect acorns and pinecones, and rest on moss-covered logs. Chopping down a tree, starting a fire, killing an animal, or any similar act of destruction will not be tolerated. Wyllow has many spies in the forest, which speed to her tower to communicate the party's misdeeds. If so informed, she moves swiftly to eradicate the trespassers.</p>

        <h2>Old Grave</h2>

        <p>Thin rays of sunlight or moonlight penetrate the dense canopy of this old forest, whose trees are covered with moss.</p>

        <p>At night, a <a href="https://5e.tools/bestiary.html#will-o'-wisp_xmm">will-o'-wisp</a> lures adventurers to a grave in the middle of this cavern. The grave stands amid a grove of dead, burned trees. It is marked with a headstone that reads in Common, "Here lies Crissann, human friend and companion." The top of the gravestone is carved in the shape of a rose. A detect magic spell cast in the vicinity reveals a source of evocation magic buried in the earth (see "Treasure" below).</p>

        <p>The will-o'-wisp is Crissann's disembodied spirit. During the day, it hovers invisibly over the grave. With a whispery voice, it says, in Common, "Take my wand. Use it to destroy Wyllow, the elf witch!" If the characters obtain the wand from the grave, the will-o'-wisp tries to lead them to Wyllow's tower and a showdown with the archdruid. If the characters refuse to avenge Crissann, it instead turns invisible and continues to rant and rave about how "the elven witch" must be put down. Otherwise, it considers the characters its allies. If Wyllow is defeated, the will-o'-wisp seems confused and sad, talking about love, hate Wyllow and Halaster, before disappearing.</p>

        <p><strong>Roleplaying the Will-o'-Wisp.</strong> Remember that these malevolent spirits are intelligent undead and speak the languages they knew in life. This one, however, is obsessed with revenge, not suffering. It has a shard of Crissann's personality and is not one for lengthy conversation.</p>

        <p><strong>Treasure.</strong> Characters who dig up the grave find a human skeleton clad in tattered clothes and a fully charged <a href="https://5e.tools/items.html#wand%20of%20fireballs_xdmg">wand of fireballs.</a></p>


      </div>}
      {salaAtual === "5-2e" && <div className='sala' id='5-2e'>
        <p></p>
      </div>}
      {salaAtual === "5-" && <div className='sala' id='5-'>
        <p></p>
      </div>}
      {salaAtual === "5-" && <div className='sala' id='5-'>
        <p></p>
      </div>}
      {salaAtual === "5-" && <div className='sala' id='5-'>
        <p></p>
      </div>}
      {salaAtual === "5-" && <div className='sala' id='5-'>
        <p></p>
      </div>}
      {salaAtual === "5-" && <div className='sala' id='5-'>
        <p></p>
      </div>}
      {salaAtual === "5-" && <div className='sala' id='5-'>
        <p></p>
      </div>}
      {salaAtual === "5-" && <div className='sala' id='5-'>
        <p></p>
      </div>}
      {salaAtual === "5-" && <div className='sala' id='5-'>
        <p></p>
      </div>}
      {salaAtual === "5-" && <div className='sala' id='5-'>
        <p></p>
      </div>}
      {salaAtual === "5-" && <div className='sala' id='5-'>
        <p></p>
      </div>}
      {salaAtual === "5-" && <div className='sala' id='5-'>
        <p></p>
      </div>}
      {salaAtual === "5-" && <div className='sala' id='5-'>
        <p></p>
      </div>}
      {salaAtual === "5-" && <div className='sala' id='5-'>
        <p></p>
      </div>}
      {salaAtual === "5-" && <div className='sala' id='5-'>
        <p></p>
      </div>}
      {salaAtual === "5-" && <div className='sala' id='5-'>
        <p></p>
      </div>}
      {salaAtual === "5-" && <div className='sala' id='5-'>
        <p></p>
      </div>}
      {salaAtual === "5-" && <div className='sala' id='5-'>
        <p></p>
      </div>}
      {salaAtual === "5-" && <div className='sala' id='5-'>
        <p></p>
      </div>}
    </div >
  );
};