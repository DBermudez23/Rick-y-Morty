import RickandMorty from "../assets/Rick-and-Morty.png";

function Header() {
  return (
    <header className="flex flex-row items-center fixed top-0 h-24 min-w-full border-b-2 border-b-green-300 py-3 px-6 bg-gray-900 text-white justify-between">
      {/* Logo */}
      <a href="/" className="w-40 md:w-60">
        <img
          src={RickandMorty}
          alt="Logo Rick y Morty"
          className="h-full w-full object-contain"
        />
      </a>

      {/* Navegación */}
      <nav>
        <ul className="flex flex-row space-x-6 md:space-x-10 text-lg font-semibold gap-8">
          <li>
            <a
              href="#"
              className="text-white hover:text-green-300 transition-colors duration-200"
            >
              Episodios
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-white hover:text-green-300 transition-colors duration-200"
            >
              Lugares
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-white hover:text-green-300 transition-colors duration-200"
            >
              Personajes
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;