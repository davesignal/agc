const serverSelectorHelper = {};

serverSelectorHelper.serverListTemplate = (region) => {
  const servers = {
    'na': [
      ["aegwynn", "Aegwynn"],
      ["aerie-peak", "Aerie Peak"],
      ["agamaggan", "Agamaggan"],
      ["aggramar", "Aggramar"],
      ["akama", "Akama"],
      ["alexstrasza", "Alexstrasza"],
      ["alleria", "Alleria"],
      ["altar-of-storms", "Altar of Storms"],
      ["alterac-mountains", "Alterac Mountains"],
      ["amanthul", "Aman'Thul"],
      ["andorhal", "Andorhal"],
      ["anetheron", "Anetheron"],
      ["antonidas", "Antonidas"],
      ["anubarak", "Anub'arak"],
      ["anvilmar", "Anvilmar"],
      ["arathor", "Arathor"],
      ["archimonde", "Archimonde"],
      ["area-52", "Area 52"],
      ["argent-dawn", "Argent Dawn"],
      ["arthas", "Arthas"],
      ["arygos", "Arygos"],
      ["auchindoun", "Auchindoun"],
      ["azgalor", "Azgalor"],
      ["azjol-nerub", "Azjol-Nerub"],
      ["azshara", "Azshara"],
      ["azuremyst", "Azuremyst"],
      ["baelgun", "Baelgun"],
      ["balnazzar", "Balnazzar"],
      ["barthilas", "Barthilas"],
      ["black-dragonflight", "Black Dragonflight"],
      ["blackhand", "Blackhand"],
      ["blackrock", "Blackrock"],
      ["blackwater-raiders", "Blackwater Raiders"],
      ["blackwing-lair", "Blackwing Lair"],
      ["blades-edge", "Blade's Edge"],
      ["bladefist", "Bladefist"],
      ["bleeding-hollow", "Bleeding Hollow"],
      ["blood-furnace", "Blood Furnace"],
      ["bloodhoof", "Bloodhoof"],
      ["bloodscalp", "Bloodscalp"],
      ["bonechewer", "Bonechewer"],
      ["borean-tundra", "Borean Tundra"],
      ["boulderfist", "Boulderfist"],
      ["bronzebeard", "Bronzebeard"],
      ["burning-blade", "Burning Blade"],
      ["burning-legion", "Burning Legion"],
      ["caelestrasz", "Caelestrasz"],
      ["cairne", "Cairne"],
      ["cenarion-circle", "Cenarion Circle"],
      ["cenarius", "Cenarius"],
      ["chogall", "Cho'gall"],
      ["chromaggus", "Chromaggus"],
      ["coilfang", "Coilfang"],
      ["crushridge", "Crushridge"],
      ["daggerspine", "Daggerspine"],
      ["dalaran", "Dalaran"],
      ["dalvengyr", "Dalvengyr"],
      ["dark-iron", "Dark Iron"],
      ["darkspear", "Darkspear"],
      ["darrowmere", "Darrowmere"],
      ["dathremar", "Dath'Remar"],
      ["dawnbringer", "Dawnbringer"],
      ["deathwing", "Deathwing"],
      ["demon-soul", "Demon Soul"],
      ["dentarg", "Dentarg"],
      ["destromath", "Destromath"],
      ["dethecus", "Dethecus"],
      ["detheroc", "Detheroc"],
      ["doomhammer", "Doomhammer"],
      ["draenor", "Draenor"],
      ["dragonblight", "Dragonblight"],
      ["dragonmaw", "Dragonmaw"],
      ["draktharon", "Drak'Tharon"],
      ["drakthul", "Drak'thul"],
      ["draka", "Draka"],
      ["dreadmaul", "Dreadmaul"],
      ["drenden", "Drenden"],
      ["dunemaul", "Dunemaul"],
      ["durotan", "Durotan"],
      ["duskwood", "Duskwood"],
      ["earthen-ring", "Earthen Ring"],
      ["echo-isles", "Echo Isles"],
      ["eitrigg", "Eitrigg"],
      ["eldrethalas", "Eldre'Thalas"],
      ["elune", "Elune"],
      ["emerald-dream", "Emerald Dream"],
      ["eonar", "Eonar"],
      ["eredar", "Eredar"],
      ["executus", "Executus"],
      ["exodar", "Exodar"],
      ["farstriders", "Farstriders"],
      ["feathermoon", "Feathermoon"],
      ["fenris", "Fenris"],
      ["firetree", "Firetree"],
      ["fizzcrank", "Fizzcrank"],
      ["frostmane", "Frostmane"],
      ["frostmourne", "Frostmourne"],
      ["frostwolf", "Frostwolf"],
      ["galakrond", "Galakrond"],
      ["garithos", "Garithos"],
      ["garona", "Garona"],
      ["garrosh", "Garrosh"],
      ["ghostlands", "Ghostlands"],
      ["gilneas", "Gilneas"],
      ["gnomeregan", "Gnomeregan"],
      ["gorefiend", "Gorefiend"],
      ["gorgonnash", "Gorgonnash"],
      ["greymane", "Greymane"],
      ["grizzly-hills", "Grizzly Hills"],
      ["guldan", "Gul'dan"],
      ["gundrak", "Gundrak"],
      ["gurubashi", "Gurubashi"],
      ["hakkar", "Hakkar"],
      ["haomarush", "Haomarush"],
      ["hellscream", "Hellscream"],
      ["hydraxis", "Hydraxis"],
      ["hyjal", "Hyjal"],
      ["icecrown", "Icecrown"],
      ["illidan", "Illidan"],
      ["jaedenar", "Jaedenar"],
      ["jubeithos", "Jubei'Thos"],
      ["kaelthas", "Kael'thas"],
      ["kalecgos", "Kalecgos"],
      ["kargath", "Kargath"],
      ["kelthuzad", "Kel'Thuzad"],
      ["khadgar", "Khadgar"],
      ["khaz-modan", "Khaz Modan"],
      ["khazgoroth", "Khaz'goroth"],
      ["kiljaeden", "Kil'jaeden"],
      ["kilrogg", "Kilrogg"],
      ["kirin-tor", "Kirin Tor"],
      ["korgath", "Korgath"],
      ["korialstrasz", "Korialstrasz"],
      ["kul-tiras", "Kul Tiras"],
      ["laughing-skull", "Laughing Skull"],
      ["lethon", "Lethon"],
      ["lightbringer", "Lightbringer"],
      ["lightnings-blade", "Lightning's Blade"],
      ["lightninghoof", "Lightninghoof"],
      ["llane", "Llane"],
      ["lothar", "Lothar"],
      ["madoran", "Madoran"],
      ["maelstrom", "Maelstrom"],
      ["magtheridon", "Magtheridon"],
      ["maiev", "Maiev"],
      ["malganis", "Mal'Ganis"],
      ["malfurion", "Malfurion"],
      ["malorne", "Malorne"],
      ["malygos", "Malygos"],
      ["mannoroth", "Mannoroth"],
      ["medivh", "Medivh"],
      ["misha", "Misha"],
      ["moknathal", "Mok'Nathal"],
      ["moon-guard", "Moon Guard"],
      ["moonrunner", "Moonrunner"],
      ["mugthol", "Mug'thol"],
      ["muradin", "Muradin"],
      ["nagrand", "Nagrand"],
      ["nathrezim", "Nathrezim"],
      ["nazgrel", "Nazgrel"],
      ["nazjatar", "Nazjatar"],
      ["nerzhul", "Ner'zhul"],
      ["nesingwary", "Nesingwary"],
      ["nordrassil", "Nordrassil"],
      ["norgannon", "Norgannon"],
      ["onyxia", "Onyxia"],
      ["perenolde", "Perenolde"],
      ["proudmoore", "Proudmoore"],
      ["quel'dorei", "Quel'dorei"],
      ["ravencrest", "Ravencrest"],
      ["ravenholdt", "Ravenholdt"],
      ["rexxar", "Rexxar"],
      ["rivendare", "Rivendare"],
      ["runetotem", "Runetotem"],
      ["sargeras", "Sargeras"],
      ["saurfang", "Saurfang"],
      ["scarlet-crusade", "Scarlet Crusade"],
      ["scilla", "Scilla"],
      ["senjin", "Sen'jin"],
      ["sentinels", "Sentinels"],
      ["shadow-council", "Shadow Council"],
      ["shadowmoon", "Shadowmoon"],
      ["shadowsong", "Shadowsong"],
      ["shandris", "Shandris"],
      ["shattered-halls", "Shattered Halls"],
      ["shattered-hand", "Shattered Hand"],
      ["shuhalo", "Shu'halo"],
      ["silverhand", "Silver Hand"],
      ["silvermoon", "Silvermoon"],
      ["sisters-of-elune", "Sisters of Elune"],
      ["skullcrusher", "Skullcrusher"],
      ["skywall", "Skywall"],
      ["smolderthorn", "Smolderthorn"],
      ["spinebreaker", "Spinebreaker"],
      ["spirestone", "Spirestone"],
      ["staghelm", "Staghelm"],
      ["steamwheedle-cartel", "Steamwheedle Cartel"],
      ["stonemaul", "Stonemaul"],
      ["stormrage", "Stormrage"],
      ["stormreaver", "Stormreaver"],
      ["stormscale", "Stormscale"],
      ["suramar", "Suramar"],
      ["tanaris", "Tanaris"],
      ["terenas", "Terenas"],
      ["terokkar", "Terokkar"],
      ["thaurissan", "Thaurissan"],
      ["the-forgotten-coast", "The Forgotten Coast"],
      ["the-scryers", "The Scryers"],
      ["the-underbog", "The Underbog"],
      ["the-venture Co", "The Venture Co"],
      ["thorium-brotherhood", "Thorium Brotherhood"],
      ["thrall", "Thrall"],
      ["thunderhorn", "Thunderhorn"],
      ["thunderlord", "Thunderlord"],
      ["tichondrius", "Tichondrius"],
      ["tortheldrin", "Tortheldrin"],
      ["trollbane", "Trollbane"],
      ["turalyon", "Turalyon"],
      ["twisting-nether", "Twisting Nether"],
      ["uldaman", "Uldaman"],
      ["uldum", "Uldum"],
      ["undermine", "Undermine"],
      ["ursin", "Ursin"],
      ["uther", "Uther"],
      ["vashj", "Vashj"],
      ["veknilash", "Vek'nilash"],
      ["velen", "Velen"],
      ["warsong", "Warsong"],
      ["whisperwind", "Whisperwind"],
      ["wildhammer", "Wildhammer"],
      ["windrunner", "Windrunner"],
      ["winterhoof", "Winterhoof"],
      ["wyrmrest-accord", "Wyrmrest Accord"],
      ["ysera", "Ysera"],
      ["ysondre", "Ysondre"],
      ["zangarmarsh", "Zangarmarsh"],
      ["zuljin", "Zul'jin"],
      ["zuluhed", "Zuluhed"]
    ]
  }
  return servers[region];
}

export default serverSelectorHelper;