// 30 Crazy Hard & Bizarre Trivia Levels for T-Bday: The Impossible Birthday Quiz

window.LEVELS = [
    // ----------------------------------------------------
    // LEVEL 1: Deep Space Chemical Composition
    // ----------------------------------------------------
    {
        id: 1,
        title: "Question 1",
        question: "Astronomers discovered that the massive Sagittarius B2 interstellar dust cloud at the center of our galaxy chemically smells and tastes like what?",
        type: "choice",
        hint: "Contains billions of liters of ethyl formate...",
        options: [
            { text: "Burnt Toast and Sulfur", correct: false, msg: "Nope! That is what Apollo astronauts said Moon dust smelled like!" },
            { text: "Raspberries and Dark Rum", correct: true, msg: "True Astrophysics! Ethyl formate provides the aroma of rum and flavor of raspberries!" },
            { text: "Rotten Eggs and Hydrogen", correct: false, msg: "Common on Venus, but not Sagittarius B2!" },
            { text: "Fresh Peppermint and Vanilla", correct: false, msg: "Too refreshing for deep space!" }
        ]
    },

    // ----------------------------------------------------
    // LEVEL 2: The Most Absurd War in History
    // ----------------------------------------------------
    {
        id: 2,
        title: "Question 2",
        question: "In 1859, the United States and Great Britain almost went to full-scale military war over the shooting of which farm animal on San Juan Island?",
        type: "choice",
        hint: "The 1859 border standoff...",
        options: [
            { text: "A Prize-Winning Dairy Cow", correct: false, msg: "Nope, not a bovine!" },
            { text: "A Black Berkshire Pig", correct: true, msg: "Historical Fact! The 'Pig War' escalated to 461 US soldiers and 5 British warships with 2,140 troops over one pig!" },
            { text: "A Rooster that crowed at 4 AM", correct: false, msg: "Nope, not poultry!" },
            { text: "A Prized Merino Sheep", correct: false, msg: "Sheep caused range wars in Texas, not the 1859 standoff." }
        ]
    },

    // ----------------------------------------------------
    // LEVEL 3: Incredibly Weird Parasite Biology
    // ----------------------------------------------------
    {
        id: 3,
        title: "Question 3",
        question: "Which creature biologically possesses 32 brains, 10 stomachs, 18 testicles, and 5 pairs of eyes?",
        type: "choice",
        hint: "Used in ancient and modern reconstructive medicine...",
        options: [
            { text: "The Giant Pacific Octopus", correct: false, msg: "Octopuses have 9 brains and 3 hearts, not 32 brains!" },
            { text: "The Medicinal Leech (Hirudo medicinalis)", correct: true, msg: "100% Biological Fact! A leech has 32 distinct body segments, each containing its own neuronal brain ganglion!" },
            { text: "The Portuguese Man o' War", correct: false, msg: "That is a colonial siphonophore with no central brain." },
            { text: "The Antarctic Colossal Squid", correct: false, msg: "Squid eyes are basketball sized, but only 1 pair!" }
        ]
    },

    // ----------------------------------------------------
    // LEVEL 4: Bomb Timer / Periodic Table Anomaly
    // ----------------------------------------------------
    {
        id: 4,
        title: "Question 4",
        question: "BOMB DEFUSAL! Which single letter of the English alphabet does NOT appear anywhere on the standard Periodic Table of Elements?",
        type: "choice",
        timer: 10,
        hint: "Only one letter has zero chemical element symbols or names...",
        options: [
            { text: "Letter 'J'", correct: true, msg: "Chemistry Master! 'J' is the ONLY letter absent from all chemical element symbols and names!" },
            { text: "Letter 'Q'", correct: false, msg: "Q appeared in systematic IUPAC element names like Ununquadium!" },
            { text: "Letter 'X'", correct: false, msg: "Xenon (Xe) is element 54!" },
            { text: "Letter 'Z'", correct: false, msg: "Zinc (Zn) and Zirconium (Zr) exist!" }
        ]
    },

    // ----------------------------------------------------
    // LEVEL 5: Crazy Postal Geography
    // ----------------------------------------------------
    {
        id: 5,
        title: "Question 5",
        question: "In which country did the national postal service famously deliver an envelope with no written address or name—only a hand-drawn map with 'a red roof'?",
        type: "choice",
        hint: "A volcanic island nation in the North Atlantic...",
        options: [
            { text: "Iceland", correct: true, msg: "True Story! In Hvammsveit, Iceland, a tourist mailed a letter with a hand-sketched map and the post office delivered it successfully!" },
            { text: "New Zealand", correct: false, msg: "Kiwi post is friendly, but Iceland holds this famous map delivery record!" },
            { text: "Greenland", correct: false, msg: "Nope!" },
            { text: "Liechtenstein", correct: false, msg: "Small country, but strict street numbering!" }
        ]
    },

    // ----------------------------------------------------
    // LEVEL 6: Bizarre Mammal Secretions
    // ----------------------------------------------------
    {
        id: 6,
        title: "Question 6",
        question: "What distinct color is the milk produced by a female hippopotamus (Hippopotamus amphibius)?",
        type: "choice",
        hint: "Two unique acids mix with white secretions...",
        options: [
            { text: "Neon Green", correct: false, msg: "Nope! That would look radioactive!" },
            { text: "Bright Strawberry Pink", correct: true, msg: "Bio Fact! Hippos secrete 'hipposudoric acid' (red) and 'norhipposudoric acid' (orange) which mix with white milk into vibrant pink!" },
            { text: "Jet Black", correct: false, msg: "No mammal produces black milk." },
            { text: "Pale Blue", correct: false, msg: "Nope!" }
        ]
    },

    // ----------------------------------------------------
    // LEVEL 7: Ancient Tactical Warfare
    // ----------------------------------------------------
    {
        id: 7,
        title: "Question 7",
        question: "In 525 BC at the Battle of Pelusium, how did the Persian King Cambyses II defeat the Egyptian defensive forces without suffering heavy casualties?",
        type: "choice",
        hint: "Religious taboo exploitation...",
        options: [
            { text: "His front-line soldiers held live cats as shields", correct: true, msg: "Legendary Tactics! Egyptians revered Bastet; hurting a cat carried the death penalty, so they surrendered rather than strike!" },
            { text: "He poisoned the Nile with fermented pomegranate juice", correct: false, msg: "Nope, water poisoning was not used here." },
            { text: "He projected giant shadow silhouettes using mirrors", correct: false, msg: "Too high tech for 525 BC!" },
            { text: "He traded 1,000 golden chariots for surrender", correct: false, msg: "Nope, it was the sacred feline frontline!" }
        ]
    },

    // ----------------------------------------------------
    // LEVEL 8: Obscure Etymological Origins
    // ----------------------------------------------------
    {
        id: 8,
        title: "Question 8",
        question: "What was the original Middle English meaning of the word 'CLUE' (originally spelled 'cleow')?",
        type: "choice",
        hint: "Think of Theseus escaping the Minotaur's labyrinth...",
        options: [
            { text: "A ball of wound yarn or thread", correct: true, msg: "Linguistic Genius! A 'cleow' was a ball of thread used to guide someone out of a maze. Finding a clue meant following the thread!" },
            { text: "A footprint in damp clay", correct: false, msg: "Nope!" },
            { text: "A whispered rumor in royal court", correct: false, msg: "Nope!" },
            { text: "A notched wooden signpost", correct: false, msg: "Nope!" }
        ]
    },

    // ----------------------------------------------------
    // LEVEL 9: Deep Marine Hydrostatic Physics
    // ----------------------------------------------------
    {
        id: 9,
        title: "Question 9",
        question: "If you crack open a raw chicken egg underwater at a depth of 60 feet (approx 2.8 atmospheres of pressure), what happens?",
        type: "choice",
        hint: "Equal hydrostatic pressure in all directions...",
        options: [
            { text: "The yolk instantly dissolves into yellow mist", correct: false, msg: "Nope! Surface tension and hydrostatic pressure prevent dissolution!" },
            { text: "It stays perfectly intact as a floating, bouncy yolk sphere", correct: true, msg: "Physics Verified! The surrounding water pressure acts like an invisible shell, keeping the albumen and yolk unified!" },
            { text: "It implodes into microscopic particles", correct: false, msg: "Water pressure is non-destructive to liquids of equal density!" },
            { text: "It instantly cooks solid from seawater salinity", correct: false, msg: "Salinity is far too low to denature egg protein instantly!" }
        ]
    },

    // ----------------------------------------------------
    // LEVEL 10: Bomb Timer / Botanical Deception
    // ----------------------------------------------------
    {
        id: 10,
        title: "Question 10",
        question: "BOMB DEFUSAL! Botanically speaking, which of the following is NOT a true berry?",
        type: "choice",
        timer: 9,
        hint: "Botanical berries derive from a single ovary of an individual flower...",
        options: [
            { text: "Banana", correct: false, msg: "Bananas ARE botanically berries (endocarp, mesocarp, exocarp)!" },
            { text: "Watermelon", correct: false, msg: "Watermelons ARE modified berries called pepos!" },
            { text: "Strawberry", correct: true, msg: "Botanical Trap Defused! Strawberries are aggregate accessory fruits; the tiny yellow specks on the outside (achenes) are the true fruits!" },
            { text: "Avocado", correct: false, msg: "Avocados ARE single-seeded berries!" }
        ]
    },

    // ----------------------------------------------------
    // LEVEL 11: Extreme Insect Anatomy
    // ----------------------------------------------------
    {
        id: 11,
        title: "Question 11",
        question: "How long can a decapitated cockroach survive alive, and what is the actual cause of its eventual death?",
        type: "choice",
        hint: "They breathe through spiracles in their abdomen...",
        options: [
            { text: "30 seconds (blood loss)", correct: false, msg: "Cockroaches have an open circulatory system with minimal blood pressure; their necks seal by clotting instantly!" },
            { text: "Several weeks (dies of dehydration / starvation)", correct: true, msg: "Horrifying Bio Fact! Cockroaches breathe through body spiracles and have local ganglia. Without a mouth, they eventually dehydrate!" },
            { text: "48 hours (lack of oxygen)", correct: false, msg: "They don't breathe through their mouths/heads at all!" },
            { text: "1 year (in a state of cryptobiosis)", correct: false, msg: "Too long, dehydration claims them in weeks." }
        ]
    },

    // ----------------------------------------------------
    // LEVEL 12: Obscure Early Aviation History
    // ----------------------------------------------------
    {
        id: 12,
        title: "Question 12",
        question: "On September 19, 1783, who were the passenger test subjects aboard the Montgolfier brothers' first hot air balloon flight before King Louis XVI?",
        type: "choice",
        hint: "Barnyard pioneers of flight...",
        options: [
            { text: "A Sheep, a Duck, and a Rooster", correct: true, msg: "History Verified! The sheep tested mammalian high-altitude breathing, the duck tested avian effects, and the rooster tested ground birds!" },
            { text: "Two Convicted French Prisoners", correct: false, msg: "King Louis XVI proposed prisoners, but the scientists refused and chose animals!" },
            { text: "A Chimpanzee named Pierre", correct: false, msg: "Monkeys flew in 20th century rockets, not 1783 balloons." },
            { text: "Three Royal Poodles", correct: false, msg: "Nope!" }
        ]
    },

    // ----------------------------------------------------
    // LEVEL 13: Bomb Timer / Hyper-Dense Nuclear Physics
    // ----------------------------------------------------
    {
        id: 13,
        title: "Question 13",
        question: "BOMB DEFUSAL! If you removed all the empty atomic space from every single human being alive on Earth (all 8 billion people), what volume would humanity occupy?",
        type: "choice",
        timer: 10,
        hint: "Atoms are 99.9999999% empty space...",
        options: [
            { text: "A single Sugar Cube (~1 cubic centimeter)", correct: true, msg: "Mind-Blowing Physics! Nuclei are tiny compared to electron clouds. Pure nuclear matter of 8 billion humans fits inside a sugar cube!" },
            { text: "The Empire State Building", correct: false, msg: "Way too big! Nuclei are unimaginably dense!" },
            { text: "An Olympic Swimming Pool", correct: false, msg: "Still vastly too large!" },
            { text: "A standard Basketball", correct: false, msg: "Nope, down to a single sugar cube!" }
        ]
    },

    // ----------------------------------------------------
    // LEVEL 14: The Great Military Blunder
    // ----------------------------------------------------
    {
        id: 14,
        title: "Question 14",
        question: "In November 1932, the Australian military deployed heavy Lewis machine guns and 10,000 rounds of ammunition in an official war against which adversary—and LOST?",
        type: "choice",
        hint: "Fast-running flightless birds in Western Australia...",
        options: [
            { text: "20,000 Wild Emus", correct: true, msg: "True Australian History! The Great Emu War! Emus scattered in guerrilla warfare squads and absorbed bullets like tanks, forcing the army to withdraw!" },
            { text: "Feral Dingo Packs", correct: false, msg: "Dingo fences were built, but no military Lewis machine gun war was declared." },
            { text: "Invasive Cane Toads", correct: false, msg: "Toads are toxic, but not fought with machine guns." },
            { text: "Wild Red Kangaroos", correct: false, msg: "Nope, it was the Emus!" }
        ]
    },

    // ----------------------------------------------------
    // LEVEL 15: Extreme Cellular Biology
    // ----------------------------------------------------
    {
        id: 15,
        title: "Question 15",
        question: "The 'Immortal Jellyfish' (Turritopsis dohrnii) is the only known animal capable of reverting back to its juvenile polyp state when damaged. What is this cellular process called?",
        type: "choice",
        hint: "Adult specialized cells transform into completely different cell types...",
        options: [
            { text: "Transdifferentiation", correct: true, msg: "Cell Biology Genius! Transdifferentiation allows differentiated adult somatic cells to re-specialize into new tissue lines perpetually!" },
            { text: "Telomeric Super-Extension", correct: false, msg: "Telomeres protect DNA ends, but the cell reversal process is transdifferentiation." },
            { text: "Apoptotic Reversal", correct: false, msg: "Apoptosis is programmed cell death, not rejuvenation." },
            { text: "Bioluminescent Mitosis", correct: false, msg: "Mitosis is standard cell division." }
        ]
    },

    // ----------------------------------------------------
    // LEVEL 16: Bomb Timer / The Lowest Sound in the Universe
    // ----------------------------------------------------
    {
        id: 16,
        title: "Question 16",
        question: "BOMB DEFUSAL! What is the lowest musical acoustic note ever recorded in the universe, emitted by a supermassive black hole in the Perseus cluster?",
        type: "choice",
        timer: 10,
        hint: "Oscillates once every 9.6 million years...",
        options: [
            { text: "A B-flat, 57 octaves below Middle C", correct: true, msg: "Acoustic Astrophysics! NASA detected sound waves in hot gas around the Perseus black hole pitched 57 octaves below middle C!" },
            { text: "An F-sharp, 12 octaves below human hearing", correct: false, msg: "Way too high pitched!" },
            { text: "A C-minor chord, 80 octaves below Middle C", correct: false, msg: "It was a single B-flat pitch, not a minor chord!" },
            { text: "An A-flat vibrating once per second (1 Hz)", correct: false, msg: "1 Hz is audible to elephants; the black hole note is 57 octaves lower!" }
        ]
    },

    // ----------------------------------------------------
    // LEVEL 17: Maritime Ghost Ship Mysteries
    // ----------------------------------------------------
    {
        id: 17,
        title: "Question 17",
        question: "In December 1872, the merchant ship Mary Celeste was found floating completely undamaged in the Atlantic with all crew vanished. What untouched cargo was found in its hold?",
        type: "choice",
        hint: "1,701 barrels of a hazardous flammable liquid...",
        options: [
            { text: "1,701 Barrels of Industrial Denatured Alcohol", correct: true, msg: "Historical Enigma! The 1,701 alcohol barrels were untouched and 6 months of food remained, leaving the evacuation an enduring mystery!" },
            { text: "500 Chests of Spanish Silver Dubloons", correct: false, msg: "No treasure was on board; pirates were ruled out because cargo was untouched." },
            { text: "20 Tons of Fine Silk & Spices", correct: false, msg: "Nope!" },
            { text: "1,000 Boxes of Unopened Royal Mail", correct: false, msg: "Nope!" }
        ]
    },

    // ----------------------------------------------------
    // LEVEL 18: DNA Data Storage Density
    // ----------------------------------------------------
    {
        id: 18,
        title: "Question 18",
        question: "According to molecular biology and biocomputing researchers, how much digital data can theoretically be stored inside a single gram of human DNA?",
        type: "choice",
        hint: "Adenine, Cytosine, Guanine, and Thymine act as 2-bit density storage...",
        options: [
            { text: "215 Petabytes (approx 215 Million Gigabytes)", correct: true, msg: "Bio-Storage Genius! 1 gram of DNA can theoretically store ~215 PB of data, meaning all world data could fit in a shoebox!" },
            { text: "1 Terabyte", correct: false, msg: "Way too small! Modern microSD cards hold 1 TB!" },
            { text: "500 Gigabytes", correct: false, msg: "A single flash drive holds that!" },
            { text: "10 Exabytes (more than all internet traffic)", correct: false, msg: "1 gram is ~215 Petabytes, not 10 Exabytes." }
        ]
    },

    // ----------------------------------------------------
    // LEVEL 19: Bizarre Imperial Russian Taxation
    // ----------------------------------------------------
    {
        id: 19,
        title: "Question 19",
        question: "In 1698, Tsar Peter the Great of Russia enacted a mandatory tax on what personal feature in an aggressive campaign to westernize the Russian Empire?",
        type: "choice",
        hint: "Taxpayers had to carry a stamped copper/silver token as proof...",
        options: [
            { text: "Facial Beards and Mustaches", correct: true, msg: "History Verified! Peter the Great taxed beards. Men who paid received a bronze 'Beard Token' inscribed: 'The beard is a useless burden'!" },
            { text: "Tall Woolen Hats", correct: false, msg: "Nope!" },
            { text: "Wooden Horseback Saddles", correct: false, msg: "Nope!" },
            { text: "Owning More than Two Fur Coats", correct: false, msg: "Nope, it was facial hair!" }
        ]
    },

    // ----------------------------------------------------
    // LEVEL 20: Bomb Timer / Explosive Entomology
    // ----------------------------------------------------
    {
        id: 20,
        title: "Question 20",
        question: "BOMB DEFUSAL! The Bombardier Beetle defends itself by mixing hydroquinone and hydrogen peroxide in an internal chamber. At what temperature does the boiling spray exit?",
        type: "choice",
        timer: 8,
        hint: "The boiling point of water...",
        options: [
            { text: "100°C (212°F - Boiling Point of Water)", correct: true, msg: "Extreme Entomology! Catalase and peroxidase enzymes trigger an exothermic explosion spraying 100°C boiling toxic chemicals at predators!" },
            { text: "50°C (122°F - Warm Bath)", correct: false, msg: "Too cool to deter praying mantises and frogs!" },
            { text: "350°C (662°F - Molten Lead)", correct: false, msg: "That would vaporize the beetle itself!" },
            { text: "0°C (Freezing Ice Blast)", correct: false, msg: "It is an exothermic heat reaction, not cryogenic!" }
        ]
    },

    // ----------------------------------------------------
    // LEVEL 21: Thermodynamics & Quantum Cold
    // ----------------------------------------------------
    {
        id: 21,
        title: "Question 21",
        question: "What is the exact physical temperature value of Absolute Zero (0 Kelvin), the theoretical point where all classical thermal motion ceases?",
        type: "choice",
        hint: "Minus two hundred seventy-three point...",
        options: [
            { text: "-273.15°C (-459.67°F)", correct: true, msg: "Physics Precision! -273.15°C is Absolute Zero where enthalpy and entropy of a cooled ideal gas reach minimum value!" },
            { text: "-300.00°C (-508.00°F)", correct: false, msg: "Thermodynamically impossible!" },
            { text: "-250.50°C (-418.90°F)", correct: false, msg: "Liquid nitrogen is -196°C; absolute zero is much colder (-273.15°C)!" },
            { text: "-459.00°C (-858.20°F)", correct: false, msg: "459 is the Fahrenheit number, not Celsius!" }
        ]
    },

    // ----------------------------------------------------
    // LEVEL 22: Bizarre Swiss Animal Legislation
    // ----------------------------------------------------
    {
        id: 22,
        title: "Question 22",
        question: "Under Swiss animal welfare law (Article 13 TSchV), it is strictly illegal to own only ONE of which pet because they are classified as social creatures prone to severe loneliness?",
        type: "choice",
        hint: "Chirping rodent native to the Andes...",
        options: [
            { text: "Guinea Pig (Cavia porcellus)", correct: true, msg: "True Law! In Switzerland, owning a single guinea pig is illegal animal cruelty. There are even guinea pig matchmaking rent services if one dies!" },
            { text: "Goldfish in a round bowl", correct: false, msg: "Round bowls are banned in Switzerland, but goldfish alone is not the famous pair law." },
            { text: "Hamster", correct: false, msg: "Syrian hamsters are solitary and fight; guinea pigs are strictly social!" },
            { text: "Siamese Cat", correct: false, msg: "Cats can be solitary if allowed outdoors." }
        ]
    },

    // ----------------------------------------------------
    // LEVEL 23: Bomb Timer / Extreme Planetary Tilt
    // ----------------------------------------------------
    {
        id: 23,
        title: "Question 23",
        question: "BOMB DEFUSAL! Because the ice giant Uranus has an extreme axial tilt of 97.77 degrees, how long does a SINGLE continuous summer or winter season last on its poles?",
        type: "choice",
        timer: 9,
        hint: "Uranus takes 84 Earth years to orbit the Sun once...",
        options: [
            { text: "21 Earth Years", correct: true, msg: "Astronomy Master! Because 84 years ÷ 4 seasons = 21 years of continuous sunlight or darkness per pole!" },
            { text: "84 Earth Years", correct: false, msg: "84 Earth years is its entire orbital year!" },
            { text: "6 Months", correct: false, msg: "That is Earth's polar seasons!" },
            { text: "42 Earth Years", correct: false, msg: "42 years is half an orbit (day/night cycle at the pole)!" }
        ]
    },

    // ----------------------------------------------------
    // LEVEL 24: Antipodal Geography
    // ----------------------------------------------------
    {
        id: 24,
        title: "Question 24",
        question: "If you dug a straight hole straight through the center of the Earth starting from the continental United States (e.g. New York or Kansas), where would you emerge?",
        type: "choice",
        hint: "Most landmasses on Earth have antipodes in the ocean...",
        options: [
            { text: "The Southern Indian Ocean (near Australia/Antarctica)", correct: true, msg: "Geography Master! Almost all of North America's antipodal points lie in the southern Indian Ocean, not China!" },
            { text: "Beijing, China", correct: false, msg: "The classic childhood myth is false! North America's antipode is the Indian Ocean!" },
            { text: "Sydney, Australia", correct: false, msg: "Australia is in the Eastern/Southern hemisphere, not antipodal to the US." },
            { text: "The Sahara Desert", correct: false, msg: "Nope!" }
        ]
    },

    // ----------------------------------------------------
    // LEVEL 25: Linguistic Isogram Oddities
    // ----------------------------------------------------
    {
        id: 25,
        title: "Question 25",
        question: "What is the longest common 15-letter English word that can be spelled without repeating any single letter even once (a first-order isogram)?",
        type: "choice",
        hint: "Related to legal intellectual property protection...",
        options: [
            { text: "Uncopyrightable", correct: true, msg: "Linguistic Precision! 'Uncopyrightable' has exactly 15 letters and zero duplicate characters!" },
            { text: "Incomprehensible", correct: false, msg: "Repeats 'e', 'i', and 'n' multiple times!" },
            { text: "Dermatoglyphics", correct: false, msg: "Dermatoglyphics is also a 15-letter isogram, but 'Uncopyrightable' is the classic standard!" },
            { text: "Subdermatoglyphic", correct: false, msg: "Subdermatoglyphic has 17 letters, but is not standard vocabulary!" }
        ]
    },

    // ----------------------------------------------------
    // LEVEL 26: Bomb Timer / Macabre Medieval Medicine
    // ----------------------------------------------------
    {
        id: 26,
        title: "Question 26",
        question: "BOMB DEFUSAL! In 16th and 17th century Europe, what bizarre substance was ground into powder and consumed as an elite cure-all remedy for internal bleeding and headaches?",
        type: "choice",
        timer: 10,
        hint: "Known as 'Mumia' in apothecary shops...",
        options: [
            { text: "Ground Ancient Egyptian Mummies", correct: true, msg: "Macabre History! 'Mumia' (powdered mummies) was prescribed by royal doctors across Europe for centuries for everything from bruising to coughs!" },
            { text: "Powdered Dinosaur Bones", correct: false, msg: "Dinosaurs were not scientifically identified until the 1800s!" },
            { text: "Crushed Meteorite Dust", correct: false, msg: "Meteorites were thought to be thunderstones, not medicine." },
            { text: "Dried Viper Brains", correct: false, msg: "Nope, it was actual Egyptian mummies!" }
        ]
    },

    // ----------------------------------------------------
    // LEVEL 27: Combinatorial Game Theory
    // ----------------------------------------------------
    {
        id: 27,
        title: "Question 27",
        question: "The 'Shannon Number', formulated by Claude Shannon in 1950, estimates the total number of possible distinct 40-move chess games to be at least:",
        type: "choice",
        hint: "Vastly exceeds the number of atoms in the observable universe (10^80)...",
        options: [
            { text: "10^120 (A 1 followed by 120 zeros)", correct: true, msg: "Math Genius! The Shannon Number (10^120) vastly dwarfs the estimated ~10^80 atoms in the entire observable universe!" },
            { text: "10^50", correct: false, msg: "Far too small! 10^50 is dwarfed after just ~15 full moves!" },
            { text: "10^500", correct: false, msg: "Too large for 40 moves." },
            { text: "10^80 (Equal to universe atoms)", correct: false, msg: "10^80 is the atoms; chess permutations are ~10^120!" }
        ]
    },

    // ----------------------------------------------------
    // LEVEL 28: Crazy Fluid Dynamics
    // ----------------------------------------------------
    {
        id: 28,
        title: "Question 28",
        question: "What is the name of the bizarre thermodynamic phenomenon where warm/boiling water can freeze into ice faster than cold water under specific conditions?",
        type: "choice",
        hint: "Named after a Tanzanian student who observed it in ice cream class in 1963...",
        options: [
            { text: "The Mpemba Effect", correct: true, msg: "Physics Phenomenon Verified! Erasto Mpemba proved that under certain evaporation and convection conditions, hot water freezes faster!" },
            { text: "The Bernoulli Paradox", correct: false, msg: "Bernoulli relates to fluid velocity and pressure, not freezing!" },
            { text: "The Leidenfrost Effect", correct: false, msg: "Leidenfrost is liquid hovering on steam barriers!" },
            { text: "The Coriolis Inversion", correct: false, msg: "Coriolis relates to planetary rotation!" }
        ]
    },

    // ----------------------------------------------------
    // LEVEL 29: The Ultimate Bizarre Fact Gatekeeper
    // ----------------------------------------------------
    {
        id: 29,
        title: "Question 29",
        question: "Which everyday culinary staple contains radioactive Potassium-40, making a commercial shipping container full of them capable of triggering port radiation alarms?",
        type: "choice",
        hint: "Known in physics as the BED (Banana Equivalent Dose)...",
        options: [
            { text: "Bananas", correct: true, msg: "Nuclear Fruit Certified! Bananas contain natural Potassium-40; cargo trucks of bananas frequently trip nuclear border sensors!" },
            { text: "Brazil Nuts", correct: false, msg: "Brazil nuts have Radium, but Potassium-40 and the official 'BED' radiation unit is named after Bananas!" },
            { text: "Avocados", correct: false, msg: "Nope!" },
            { text: "Cinnamon Bark", correct: false, msg: "Nope!" }
        ]
    },

    // ----------------------------------------------------
    // LEVEL 30: THE FINAL BOSS - The Grand Vault of Cosmic Trivia
    // ----------------------------------------------------
    {
        id: 30,
        title: "Level 30: THE GRAND FINALE",
        question: "👑 CRACK THE TITANIUM TRIVIA VAULT TO REVEAL T'S BIRTHDAY REWARD! 👑",
        type: "interactive",
        timer: 50,
        hint: "Dial 1: Earth's Age (~5 Billion yrs) | Dial 2: T's Initial ('T') | Dial 3: Human Chromosome Pairs (23)",
        html: `
            <div class="interactive-stage text-center" style="max-width: 520px; margin: 0 auto;">
                <div class="vault-chassis" style="background: radial-gradient(circle, #37474f 0%, #212121 100%); border: 6px solid #ffd700; border-radius: 16px; padding: 22px; box-shadow: 0 0 35px rgba(255,215,0,0.45);">
                    <div style="font-size: 50px; margin-bottom: 5px;">🔒 🏆 🔒</div>
                    <div style="color: #ffd700; font-weight: 900; letter-spacing: 2px; margin-bottom: 15px; font-size: 16px;">
                        COSMIC TRIVIA COMBINATION LOCK
                    </div>
                    
                    <div style="display: flex; justify-content: center; gap: 16px; margin-bottom: 20px;">
                        <!-- Dial 1 -->
                        <div class="vault-dial-box">
                            <button id="dial-1-up" class="dial-btn">▲</button>
                            <div id="dial-1-val" class="dial-val">1</div>
                            <button id="dial-1-dn" class="dial-btn">▼</button>
                            <span style="font-size: 10px; color: #aaa;">Earth Age (Gyr)</span>
                        </div>
                        <!-- Dial 2 -->
                        <div class="vault-dial-box">
                            <button id="dial-2-up" class="dial-btn">▲</button>
                            <div id="dial-2-val" class="dial-val">A</div>
                            <button id="dial-2-dn" class="dial-btn">▼</button>
                            <span style="font-size: 10px; color: #aaa;">Birthday Star</span>
                        </div>
                        <!-- Dial 3 -->
                        <div class="vault-dial-box">
                            <button id="dial-3-up" class="dial-btn">▲</button>
                            <div id="dial-3-val" class="dial-val">10</div>
                            <button id="dial-3-dn" class="dial-btn">▼</button>
                            <span style="font-size: 10px; color: #aaa;">Chromosomes</span>
                        </div>
                    </div>

                    <button id="btn-vault-unlock" class="quiz-btn" style="background: #ffd700; color: #000; font-size: 18px; font-weight: 900; width: 85%; box-shadow: 0 0 15px #ffd700;">
                        🔓 UNLOCK BIRTHDAY VAULT
                    </button>
                    <div style="font-size: 12px; color: #90caf9; margin-top: 12px;">
                        Trivia Lock Clues: [ 1: Earth ~5 Billion Yrs | 2: Birthday Initial 'T' | 3: 23 Chromosome Pairs ]
                    </div>
                </div>
            </div>
        `,
        setup: (container, game) => {
            const dial1Val = container.querySelector('#dial-1-val');
            const dial2Val = container.querySelector('#dial-2-val');
            const dial3Val = container.querySelector('#dial-3-val');
            const letters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
            let d1 = 1;
            let d2Idx = 0;
            let d3 = 10;

            container.querySelector('#dial-1-up').onclick = () => { d1 = (d1 % 9) + 1; dial1Val.innerText = d1; window.sound.playClick(); };
            container.querySelector('#dial-1-dn').onclick = () => { d1 = d1 > 1 ? d1 - 1 : 9; dial1Val.innerText = d1; window.sound.playClick(); };

            container.querySelector('#dial-2-up').onclick = () => { d2Idx = (d2Idx + 1) % letters.length; dial2Val.innerText = letters[d2Idx]; window.sound.playClick(); };
            container.querySelector('#dial-2-dn').onclick = () => { d2Idx = (d2Idx - 1 + letters.length) % letters.length; dial2Val.innerText = letters[d2Idx]; window.sound.playClick(); };

            container.querySelector('#dial-3-up').onclick = () => { d3 = (d3 % 50) + 1; dial3Val.innerText = d3; window.sound.playClick(); };
            container.querySelector('#dial-3-dn').onclick = () => { d3 = d3 > 1 ? d3 - 1 : 50; dial3Val.innerText = d3; window.sound.playClick(); };

            container.querySelector('#btn-vault-unlock').onclick = () => {
                if (d1 === 5 && letters[d2Idx] === 'T' && d3 === 23) {
                    window.sound.playVaultOpen();
                    setTimeout(() => {
                        game.triggerGrandVictory();
                    }, 500);
                } else {
                    window.sound.playWrong();
                    game.loseLife(`Incorrect code: [ ${d1} | ${letters[d2Idx]} | ${d3} ]! Hint: 5 - T - 23`);
                }
            };
        }
    }
];
