const Realisations = () => {
  const data = [
    {
      id: 1,
      images: ["photo1.jpeg "],
      title: "Notre premier geste : un début qui fait chaud au cœur",
      description:
        "En juillet 2024, notre aventure a réellement commencé. Nous avons eu l’immense joie d’aider et de redonner le sourire à plus d’un millier de personnes... Merci à tous ceux qui croient en notre mission. Chaque geste compte."
    },
    {
      id: 2,
      images: ["photo2.jpeg", "photo3.png"],
      title: "Solidarité avec nos aînés",
      description:
        "Nous n'avons pas oublié nos aînés... chaque geste de solidarité, venait du cœur."
    },
    {
      id: 3,
      images: ["photo4.png", "photo5.png", "photo6.png", "photo7.png"],
      title: "Soutien scolaire aux enfants de l'EPP",
      description:
        "Parce que chaque enfant mérite d'apprendre dans de bonnes conditions... Un simple cahier, un stylo… parfois, ce sont ces petites choses qui ouvrent les portes de l'avenir."
    },
    {
      id: 4,
      images: ["photo8.jpeg", "photo9.jpeg"],
      title: "Parrainage scolaire",
      description:
        "Des enfants parrainés par notre association, accompagnés avec amour et espoir dans leur parcours scolaire..."
    },
    {
      id: 5,
      images: ["photo10.jpeg", "photo11.jpeg", "photo12.jpeg", "photo13.jpeg", "photo14.jpeg"],
      title: "Visite au Centre Sœur Éducation Orchidée",
      description:
        "SOUTIEN ET SOLIDARITÉ AUX PERSONNES EN SITUATION DE HANDICAP... Chaque action compte et peut apporter un peu de lumière dans leur vie."
    },
    {
      id: 6,
      images: ["photo15.jpg", "photo16.jpg", "photo17.jpg"],
      title: "Journée de la femme - 8 mars",
      description:
        "Hommage à ces femmes courageuses d'Ambatomaro... Leur résilience inspire le respect."
    },
    {
      id: 7,
      images: ["photo18.jpeg", "photo19.jpeg"],
      title: "Formation en développement personnel",
      description:
        "Une journée de formation avec les collaborateurs de Transport RAR... placer l’humain au cœur de l’entreprise."
    },
    {
      id: 8,
      images: ["photo20.jpg", "photo21.jpg", "photo22.jpg", "photo23.jpg"],
      title: "Soutien scolaire et goûter dans une école catholique",
      description:
        "Offrir fournitures scolaires et partager un moment chaleureux avec les élèves et enseignants."
    },
    {
      id: 9,
      images: ["photo24.jpg", "photo25.jpg"],
      title: "Reboisement à Belou sur Tsiribina",
      description:
        "Un engagement durable pour les générations futures... un symbole d’espoir pour Belou."
    },
    {
      id: 10,
      images: ["photo26.jpg", "photo27.jpg", "photo28.jpg", "photo29.jpg"],
      title: "Mission dans le Sud-Ouest pour les femmes rurales",
      description:
        "Partager un peu de joie pendant les festivités de l’indépendance... Autonomiser une femme rurale, c’est lui donner les moyens de prendre sa vie en main."
    },
    {
      id: 11,
      images: ["photo30.jpeg"],
      title: "Moments mensuels avec les enfants",
      description:
        "À travers la distribution de friandises, de goûters, de petits cadeaux... illuminer les cœurs."
    }
  ];

  return (
    <section className="bg-gray-100 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-emerald-600">
          Nos Réalisations
        </h2>
        <div className="grid gap-12">
          {data.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="grid grid-cols-2 gap-2">
                  {item.images.map((img, index) => (
                    <img
                      key={index}
                      src={`src/assets/images/${img}`}
                      alt={item.title}
                      className="rounded-lg object-cover w-full h-40"
                    />
                  ))}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-emerald-700 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 text-sm whitespace-pre-wrap">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Realisations;
