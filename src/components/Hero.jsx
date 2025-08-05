function Hero() {
    return (
        <>
            <section className="relative bg-[url('hero.jpeg')] bg-cover bg-center h-[70vh] text-white">
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="relative z-20 p-20">
                    <div className="max-w-xl">
                        <h1 className="text-4xl font-bold mb-4">Agir pour les plus fragiles</h1>
                        <p className="text-lg">
                            Nous œuvrons pour offrir aide, dignité et sourire aux enfants, aux personnes handicapées et aux oubliés du quotidien.
                        </p>
                        <a href="#don" className="inline-block mt-6 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-6 rounded-lg shadow transition duration-200">
    Faire un don</a>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Hero;
