import React from 'react';

function Realisations() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 relative">
        {/* Bloc gauche avec les photos */}
        <div className="w-full md:w-1/2 relative flex flex-wrap justify-center items-center gap-2">
          {/* Ces divs représentent les photos avec différentes tailles */}
          <img
            src="src/assets/images/photo18.jpeg"
            alt="Réalisation 1"
            className="w-16 h-16 object-cover rounded-md"
          />
          <img
            src="src/assets/images/photo3.png"
            alt="Réalisation 2"
            className="w-24 h-12 object-cover rounded-md"
          />
          <img
            src="src/assets/images/photo24.jpeg"
            alt="Réalisation 3"
            className="w-20 h-20 object-cover rounded-md"
          />
          <img
            src="src/assets/images/photo30.jpeg"
            alt="Réalisation 4"
            className="w-28 h-28 object-cover rounded-md"
          />
          <img
            src="src/assets/images/photo29.jpeg"
            alt="Réalisation 5"
            className="w-40 h-28 object-cover rounded-md"
          />
          <img
            src="src/assets/images/photo7.png"
            alt="Réalisation 6"
            className="w-36 h-36 object-cover rounded-md"
          />
          <img
            src="src/assets/images/photo2.jpeg"
            alt="Réalisation 7"
            className="w-48 h-40 object-cover rounded-md"
          />
        </div>

        {/* Bloc droit avec le texte */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold text-emerald-700 mb-4">Nos réalisations</h2>
          <p className="text-gray-600 mb-6">
            The standard Lorem Ipsum passage is: Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>

          <button className="border border-emerald-600 px-6 py-2 rounded hover:bg-emerald-600 hover:text-white transition">
            Voir plus
          </button>
        </div>
      </div>
    </section>
  );
}

export default Realisations;
