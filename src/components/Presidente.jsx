function Presidente() {
  return (
    <section className="bg-stone-50 py-16 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-10 max-w-5xl">
        {/* Image de la fondatrice */}
        <div className="w-[40vw] max-w-[150px] h-[25vw] rounded-full overflow-hidden border-4 border-emerald-600 shadow-lg">
          <img
            src="src/assets/images/Fondatrice.png"
            alt="RAKOTOMAHARO Miangola Valisoa"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Texte */}
        <div>
          <h2 className="text-2xl font-bold text-emerald-700 mb-4">Mot de la fondatrice</h2>
          <p className="text-gray-700 mb-4">
            Fondée par une jeune visionnaire de 22 ans, <strong>RAKOTOMAHARO Miangola Valisoa</strong>, notre association incarne l'audace
            et la détermination d'une nouvelle génération prête à transformer Madagascar.
            Ensemble, nous bâtissons un avenir où l'entraide et l'innovation font la différence !
          </p>
          <p className="text-gray-700">
            « Je suis une jeune femme de 22 ans, déterminée à accomplir mes rêves et à changer
            les choses dans mon pays, Madagascar. Depuis toujours, j'ai été portée par une
            ambition profonde : améliorer la vie des autres et faire avancer le monde autour de
            moi. Les projets sociaux, environnementaux, éducatifs et de santé me tiennent à
            cœur, mais ce qui me passionne le plus, c'est le social. C'est pourquoi j'ai décidé de
            créer l’<strong>Association d’Entraide Valisoa (Mutual Aid Foundation)</strong>, un lieu d'entraide
            et de solidarité, où chacun peut compter sur les autres pour avancer. »
          </p>
        </div>
      </div>
    </section>
  );
}

export default Presidente;
