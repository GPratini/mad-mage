export const Mapa24 = {
  src: "skullport2.png",
  name: "Skullport - Upper",
  areas: [
    {
      id: "24-32",
      name: "Dumathoin's Jest",
      shape: "rect",
      coords: [940, 595, 856, 684]
    },
    {
      id: "24-33",
      name: "The Overflowing Urn",
      shape: "rect",
      coords: [636, 808, 758, 906]
    },
    {
      id: "24-34",
      name: "Nightshade's Caress",
      shape: "poly",
      coords: [971, 811, 1067, 813, 1067, 928, 1022, 928, 1018, 882, 969, 880]
    },
    {
      id: "24-35",
      name: "The Worm's Gullet",
      shape: "poly",
      coords: [1340, 442, 1353, 398, 1502, 380, 1566, 349, 1664, 446, 1733, 433, 1773, 380, 1706, 411, 1666, 393, 1604, 318, 1546, 307, 1488, 338, 1338, 358, 1293, 395, 1298, 444]
    },
    {
      id: "24-36",
      name: "Tanor'thal Refuge",
      shape: "circle",
      coords: [1571,884,71]
    }
  ]
}

export function Salas24({ salaAtual }) {
  return (
    <div>
      {salaAtual == null && <div className='sala'>
        <h2>General Environment</h2>

        <p>Everything has a deteriorated, haphazard look to it. Tightly packed buildings of wood and stone are piled atop one another, creating three levels: a lower level (often called the street level), a middle level, and an upper level.</p>

        <p>Unnamed thoroughfares wind through the town at street level. Above this labyrinth run mazes of catwalks made from the wood of old shipwrecks. Old rigging is used to suspend the creaky catwalks.</p>

        <p>The 90-foot-high cavern ceiling is covered with a forest of stalactites.</p>

        <p>Most of the lanterns that once illuminated Skullport are gone, turned to rust or stolen by thieves long ago. Denizens carry their own light sources or rely on darkvision to see. Flameskulls are often mistaken from a distance for bobbing torches as they drift through town.</p>

        <h2>Lost Boy</h2>

        <p>Delvin and his friend Abel "borrowed" a boat a couple days ago and went to explore level 3. They ended up caught by the hags there and only Abel managed to escape.</p>

        <p>If the adventurers haven't saved Delvin yet, the whole town is talking about the missing child and offer rewards if they go find him. Xanathar's Guild doesn't care and will not get involved.</p>

        <h2>The Winches and Locks</h2>

        <p>Both winches that control the gates to the harbors and the mechanism that controled the locks that allowed ships to enters and leave skullport have broken and Xanathar's Guild have no interest in fixing them. The town has been degrading fast in the past few months as commerce has stopped and the only trade must be done through the guild, with great costs.</p>

        <h2>The Thirteen</h2>

        <p><a href="https://forgottenrealms.fandom.com/wiki/Skulls_of_Skullport">Thirteen</a> ancient <a href="https://5e.tools/bestiary.html#flameskull_xmm">flameskulls</a> haunt Skullport. These entities, which have defended the town since the fall of the Netherese Sargauth Enclave. The flameskulls considered themselves the true rulers of Skullport, but they have lost touch with reality, their minds drifting in and out of the present and the past. They rarely communicate, and when they do it is often in a dead language.</p>

        <h2>Fourteenth Skull</h2>

        <p>A <a href="https://forgottenrealms.fandom.com/wiki/Fourteenth_Skull">drow who was transformed by the thirteen</a> when they where trying to create new guardians for Skullport and escape undermountain. He doesn't want to leave and instead wants to become the only ruler of Skullport and have it grow in strength.</p>

        <p>He isn't strong enough to fight Xanathar's Guild alone and hides so they don't know of his existence, but he knows it is possible to take control over the other skulls and together they could retake the town. He knows there is an underwater cave where he could do this, but doesn't know where it is or how to get there (he can't be completely engulfed by water else he dies). He also needs the blood of a netherese descendant and knows Anderian Dusk is the only such person left in the town.</p>

        <p>Bosskyn Gorrb in area 26 knows of The Fourteenth and is willing to help as this would weaken Xanathar's Guild and help bring more Zhentarim to Waterdeep but The Fourteenth doesn't trust him.</p>
      </div>}
      {salaAtual === "24-enc" && <div className='sala' id='24-enc'>
        <p></p>
      </div>}
      {salaAtual === "24-32" && <div className='sala' id='24-32'>
        <p>Ygarra Urmbaalt, a duergar, appraises gemstones for a flat fee of 20 percent of a gem's value. Her establishment is a one-story, ugly stone building.</p>

        <p>She also sells gems and diamons, which are important components for powerful spells. The diamonds must be requested and then picked up a few days later.</p>
      </div>}
      {salaAtual === "24-33" && <div className='sala' id='24-33'>
        <p>This store rests atop another structure that is crumbling with age. As a result, the building tilts slightly to the east. Inside, a man calling himself Garryth sells flasks of oil for 5 sp each and casks of pitch for 2 gp each.</p>

        <p>Five years ago, a doppelganger killed Garryth and assumed his identity after disposing of the body. The doppelganger is content running the business and has no qualms about paying money to Xanathar for protection.</p>

        <p>Garryth's wife, Alice, recently began to suspect that her husband has fallen to dementia. How else could he have forgotten such important details of their lives together, like their wedding or the death of their son Jeremiah? Alice can be heard lamenting in The Flagon and the Dragon; or Cal'al gossips with the adventurers about her situation.</p>
      </div>}
      {salaAtual === "24-34" && <div className='sala' id='24-34'>
        <p>Displayed in the window of this shop are various herbs, vials of poison, and baskets of fungi. The store is cluttered with more such goods, all labeled and clearly priced.</p>

        <p>The apothecary, Nightshade, is an undead creature (use the <a href="https://5e.tools/bestiary.html#mummy_xmm">mummy</a> statistics) that looks like a withered crone dressed in a tattered black robe.</p>

        <p>Nightshade is not in the business to relieve ailments but cause them. On her shelves are a number of harmful concoctions (all the poisons on 5e tools poison filter for items)</p>
      </div>}
      {salaAtual === "24-35" && <div className='sala' id='24-35'>
        <p>The only restaurant in town is located inside a petrified, hollowed-out purple worm. The food and the service have gone downhill ever since Xanathar installed a new manager: a heartless duergar named Gharz Stonedark.</p>

        <p>Gharz makes meals out of whatever his kobolds can find, and patrons are expected to eat whatever Gharz serves them. Common meals include stirge loaf, carrion crawler soufflé, flumph stew, and hot shrieker pie. The house ale is Wyrmwizz, straight from the local distillery (area 16). A meal with a drink costs 5 sp per person.</p>

        <p>O QUE TEM NA PASSAGEM SECRETA ATRAS DA MINHOCA?</p>
      </div>}
      {salaAtual === "24-36" && <div className='sala' id='24-36'>
        <p>This abandoned stronghold teems with 3d8 + 4 <a href="https://5e.tools/bestiary.html#giant%20spider_xmm">giant spiders</a> spread out across three chambers. Three <a href="https://5e.tools/bestiary.html#ettercap_xmm">ettercaps</a> watch over the arachnids like shepherds.</p>

        <p>Occasionally, these monstrosities creep down to Skullport, snatching up unsuspecting individuals and hauling them back to the Refuge as food. The arachnids will assault any intruders, but while the ettercaps fight to the death, the giant spiders retreat to guard their eggs if reduced to half their hit points.</p>

        <p>A creature that succeeds on a DC 16 Intelligence (History) check can recall that House Tanor'thal once dominated Skullport's slave trade. Drow characters succeed on this check automatically.</p>

        <p><strong>Head.</strong> A small chamber reserved for the highest ranked member of House Tanor'thal and her consort, this room has a few cocooned victims, all dead.</p>

        <p><strong>Thorax.</strong> The thorax has several small living rooms carved into the stone, each sporting cold stone slabs upon which rotten straw mattresses have moldered. </p>

        <p><strong>Abdomen.</strong> The entrance to the refuge, the abdomen is the largest chamber. It's ovoid in shape, 50 feet in length and 30 feet wide at its widest point. Once an audience chamber, it's now choked by webs and spider eggs.</p>

        <p><strong>Treasure.</strong> The drow were sure to clear everything out before they fled Skullport, but a few trinkets were left behind. In each room, underneath cobwebs, 1d4 silvered emblems bearing House Tanor'thal's spidery symbol (25 gp) can be found. Additionally, some victims have common magic items (roll for them)</p>
      </div>}
    </div >
  );
};