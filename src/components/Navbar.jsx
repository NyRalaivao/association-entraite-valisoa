function Navbar() {
  return (
     <>
    <nav className="bg-stone-100 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-gray-700 text-lg font-semibold hover:text-white">Association Valisoa</div>
        <ul className="flex space-x-6">
          <li><a href="/" className="text-gray-900 text-base hover:underline">Acceuil</a></li>
          <li><a href="/about" className="text-gray-900 text-base hover:underline">À propos</a></li>
          <li><a href="/contact" className="text-gray-900 text-base hover:underline hover:text-emerald-900">Nos actions</a></li>
          <li><a href="/contact" className="text-emerald-900 text-base hover:text-lg">Contact</a></li>
        </ul>
      </div>
    </nav>
    </>
  );
}

export default Navbar;