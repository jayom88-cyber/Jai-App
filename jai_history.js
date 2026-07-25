const JAI_HISTORY_VAULT = [
  // == MESOAMERICA & NORTH AMERICA (Your Originals + Additions) ==
  {
    id: "meso_nezahualcoyotl_1402_1472",
    region: "Mesoamerica",
    subregion: "Valley of Mexico",
    era: "1402-1472",
    start: 1402,
    end: 1472,
    date_precision: "year",
    subject: "Nezahualcoyotl",
    type: "Person",
    tags: ["philosopher","engineer","poet","ruler","texcoco"],
    summary: "Philosopher-king of Texcoco; poet, engineer, and statesman.",
    description: "Nezahualcoyotl (1402–1472) ruled the city-state of Texcoco and is remembered for his brilliant legal code, lyrical poetry, and massive engineering projects, including a dike to manage the waters of Lake Texcoco.",
    sources: [{name:"Encyclopaedia Britannica", url:"https://www.britannica.com/biography/Nezahualcoyotl"}],
    lat: 19.51, lng: -98.98,
    related_ids: ["meso_texcoco_dike_1450"]
  },
  {
    id: "meso_cuauhtemoc_1520_1525",
    region: "Mesoamerica",
    subregion: "Valley of Mexico",
    era: "1520-1525",
    start: 1520,
    end: 1525,
    date_precision: "year",
    subject: "Cuauhtémoc",
    type: "Person",
    tags: ["tlatoani","resistance","aztec_empire","tenochtitlan"],
    summary: "Last Aztec emperor who led resistance during the Spanish siege.",
    description: "Cuauhtémoc ('Descending Eagle') became the Tlatoani (ruler) of Tenochtitlan in 1520 and led the final, valiant defense against Spanish forces. He is a national symbol of indigenous resistance in Mexico.",
    sources: [{name:"Britannica", url:"https://www.britannica.com/biography/Cuauhtemoc"}],
    lat: 19.43, lng: -99.13,
    related_ids: ["event_spanish_siege_1521"]
  },
  {
    id: "north_frida_kahlo_1907_1954",
    region: "North America",
    subregion: "Mexico",
    era: "1907-1954",
    start: 1907,
    end: 1954,
    date_precision: "year",
    subject: "Frida Kahlo",
    type: "Person",
    tags: ["artist","modernism","mexican_culture","surrealism"],
    summary: "Mexican painter known for vivid self-portraits and exploration of identity.",
    description: "Frida Kahlo (1907–1954) was a Mexican painter whose intensely personal and symbolic work explored themes of identity, postcolonialism, gender, class, and race in Mexican society. She is a global icon of artistic resilience.",
    sources: [{name:"Frida Kahlo Biography - Britannica", url:"https://www.britannica.com/biography/Frida-Kahlo"}],
    lat: 19.34, lng: -99.16, // Coyoacán, Mexico City
    related_ids: []
  },
  {
    id: "territory_guadalupe_hidalgo_1848",
    region: "North America",
    era: "1848",
    start: 1848,
    end: 1848,
    date_precision: "year",
    subject: "Treaty of Guadalupe Hidalgo",
    type: "Event",
    tags: ["treaty","territory","mexico","usa","mexican_american_war"],
    summary: "Treaty that ended the Mexican–American War and ceded large territories to the U.S.",
    description: "Signed on February 2, 1848, the Treaty of Guadalupe Hidalgo ended the Mexican–American War. It resulted in Mexico ceding 55 percent of its territory, including present-day California, Nevada, Utah, and parts of several other states, to the United States for $15 million.",
    sources: [{name:"National Archives", url:"https://www.archives.gov/milestone-documents/treaty-of-guadalupe-hidalgo"}],
    lat: 29.5, lng: -100.0, // Approximate center of ceded territory
    related_ids: []
  },
  {
    id: "meso_maize_domestication_7000bce",
    region: "Mesoamerica",
    subregion: "Balsas River Valley",
    era: "Pre-Columbian",
    start: -7000,
    end: -5000,
    date_precision: "millennium",
    subject: "Domestication of Maize",
    type: "Innovation",
    tags: ["agriculture","domestication","food","teosinte","neolithic"],
    summary: "The agricultural revolution of domesticating maize from teosinte grass.",
    description: "Beginning around 9,000 years ago in what is now southern Mexico, indigenous peoples began a millennia-long process of selectively breeding a wild grass called teosinte. This resulted in maize (corn), a staple crop that fueled the rise of every major civilization in the Americas, from the Olmec to the Inca.",
    sources: [{name:"National Science Foundation", url:"https://www.nsf.gov/news/news_summ.jsp?cntn_id=129596"}],
    lat: 18.5, lng: -100.5,
    related_ids: ["meso_olmec_civilization_1500bce"]
  },
  {
    id: "north_cahokia_600_1400",
    region: "North America",
    subregion: "Mississippi Valley",
    era: "600-1400 CE",
    start: 600,
    end: 1400,
    date_precision: "century",
    subject: "Cahokia",
    type: "Civilization",
    tags: ["mississippian","mound_builders","urbanism","trade_network"],
    summary: "The largest pre-Columbian city north of Mexico and center of Mississippian culture.",
    description: "Located near modern-day St. Louis, Cahokia was the center of a vast Mississippian culture. At its peak around 1100 CE, it had a population of 10,000-20,000, larger than London at the time. It featured massive earthen mounds, including the 100-foot-tall Monks Mound, and a sophisticated society.",
    sources: [{name:"Cahokia Mounds State Historic Site", url:"https://cahokiamounds.org/"}],
    lat: 38.65, lng: -90.06,
    related_ids: []
  },

  // == SOUTH AMERICA (Your Original + Additions) ==
  {
    id: "south_mapuche_resistance_precolumbian",
    region: "South America",
    subregion: "Patagonia",
    era: "Pre-Columbian to Colonial",
    start: 1450, // Approx. start of major Inca/Spanish resistance
    end: 1883, // Approx. end of major organized resistance
    date_precision: "century",
    subject: "Mapuche Resistance",
    type: "Culture",
    tags: ["resistance","sovereignty","indigenous","araucania"],
    summary: "The Mapuche people maintained autonomy by resisting Inca and Spanish expansion for centuries.",
    description: "Living in the region of modern-day Chile and Argentina, the Mapuche people successfully resisted incursions by the Inca Empire. Following Spanish arrival, they fought the Arauco War for over 300 years, making them one of the few indigenous groups in the Americas to maintain a sovereign territory long into the colonial era.",
    sources: [{name:"Wikipedia - Arauco War", url:"https://en.wikipedia.org/wiki/Arauco_War"}],
    lat: -38.95, lng: -72.59, // Temuco, Chile (central Araucanía)
    related_ids: []
  },
  {
    id: "south_inca_road_system_1400s",
    region: "South America",
    subregion: "Andes",
    era: "1400-1533",
    start: 1400,
    end: 1533,
    date_precision: "century",
    subject: "Qhapaq Ñan (Inca Road System)",
    type: "Infrastructure",
    tags: ["inca_empire","engineering","transportation","communication"],
    summary: "A vast and sophisticated road network that was the backbone of the Inca Empire.",
    description: "The Qhapaq Ñan was an extensive network of roads, bridges, and tunnels spanning over 25,000 miles (40,000 km) across the Andes. It connected the Inca capital of Cusco to the far reaches of the empire, enabling rapid communication via chasqui (runners), military movement, and administrative control.",
    sources: [{name:"UNESCO World Heritage Centre", url:"https://whc.unesco.org/en/list/1459/"}],
    lat: -13.53, lng: -71.96, // Cusco, Peru (hub of the network)
    related_ids: []
  },
  {
    id: "south_simon_bolivar_1783_1830",
    region: "South America",
    subregion: "Andean States",
    era: "1783-1830",
    start: 1783,
    end: 1830,
    date_precision: "year",
    subject: "Simón Bolívar",
    type: "Person",
    tags: ["liberator","independence","statesman","military_leader","gran_colombia"],
    summary: "Venezuelan military and political leader, 'El Libertador' of South America.",
    description: "Simón Bolívar was a central figure in the Latin American wars of independence against the Spanish Empire. He played a key role in the liberation of Venezuela, Bolivia, Colombia, Ecuador, Peru, and Panama, and was the first president of Gran Colombia.",
    sources: [{name:"Britannica", url:"https://www.britannica.com/biography/Simon-Bolivar"}],
    lat: 10.48, lng: -66.90, // Caracas, Venezuela (birthplace)
    related_ids: []
  },

  // == CARIBBEAN & CENTRAL AMERICA ==
  {
    id: "carib_haitian_revolution_1791_1804",
    region: "Caribbean",
    subregion: "Saint-Domingue (Haiti)",
    era: "1791-1804",
    start: 1791,
    end: 1804,
    date_precision: "year",
    subject: "Haitian Revolution",
    type: "Event",
    tags: ["revolution","slavery","abolition","independence","toussaint_louverture"],
    summary: "The only successful slave revolt in history that led to the founding of a sovereign nation.",
    description: "A series of conflicts between 1791 and 1804 where self-liberated slaves in the French colony of Saint-Domingue successfully overthrew both French colonial rule and the institution of slavery. It established the independent republic of Haiti, the first in Latin America and the Caribbean.",
    sources: [{name:"BlackPast.org", url:"https://www.blackpast.org/global-african-history/haitian-revolution-1791-1804/"}],
    lat: 18.54, lng: -72.33,
    related_ids: ["person_toussaint_louverture_1743_1803"]
  },
  {
    id: "person_toussaint_louverture_1743_1803",
    region: "Caribbean",
    subregion: "Saint-Domingue (Haiti)",
    era: "1743-1803",
    start: 1743,
    end: 1803,
    date_precision: "year",
    subject: "Toussaint Louverture",
    type: "Person",
    tags: ["general", "revolutionary", "abolitionist", "governor"],
    summary: "The brilliant leader of the Haitian Revolution.",
    description: "François-Dominique Toussaint Louverture was a former slave who rose to become the leader of the Haitian Revolution. A brilliant military strategist and political commander, he turned a slave insurgency into a disciplined revolutionary movement and governed Saint-Domingue as a French protectorate before being captured.",
    sources: [{name:"Britannica", url:"https://www.britannica.com/biography/Toussaint-Louverture"}],
    lat: 19.58, lng: -72.29,
    related_ids: ["carib_haitian_revolution_1791_1804"]
  },
  {
    id: "central_panama_canal_1914",
    region: "Central America",
    subregion: "Panama",
    era: "1914",
    start: 1914,
    end: 1914,
    date_precision: "year",
    subject: "Opening of the Panama Canal",
    type: "Infrastructure",
    tags: ["engineering","trade","geopolitics","usa","maritime"],
    summary: "A monumental waterway connecting the Atlantic and Pacific oceans, transforming world trade.",
    description: "Completed by the United States and opened in 1914, the Panama Canal is a 51-mile artificial waterway that cuts across the Isthmus of Panama. Its creation was one of the largest and most difficult engineering projects ever undertaken, and it drastically reduced the time for ships to travel between the two great oceans.",
    sources: [{name:"Panama Canal Authority", url:"https://www.pancanal.com/en/history/"}],
    lat: 9.08, lng: -79.68,
    related_ids: []
  }
];

// In the future, we will link this to your index.html using:
// <script src="jai_history_vault.js"></script> // (updated filename)
// And add a search function to processTier1Offline() that scans this array!