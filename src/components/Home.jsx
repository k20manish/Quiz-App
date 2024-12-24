import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Header Section */}
      <header className="h-24 w-screen grid grid-cols-12 items-center bg-blue-600 shadow-lg">
        {/* Logo */}
        <div className="col-span-2 pl-10 text-white text-2xl font-bold">
          LOGO
        </div>

        {/* Navigation Links */}
        <nav className="col-span-8">
          <ul className="flex gap-8 justify-center text-white text-lg font-medium">
            <li className="hover:text-gray-200 transition">
              <Link to="/Home">Home</Link>
            </li>
            <li className="hover:text-gray-200 transition">
              <Link to="/About">About</Link>
            </li>
            <li className="hover:text-gray-200 transition">
              <Link to="/Contact">Contact</Link>
            </li>
            <li className="hover:text-gray-200 transition">
              <Link to="/Help">Help</Link>
            </li>
          </ul>
        </nav>

        {/* Start Quiz Button */}
        <div className="col-span-2 pr-10">
          <Link
            to="/Quiz"
            className="bg-white text-blue-600 px-6 py-2 rounded-full hover:bg-gray-200 transition shadow-md"
          >
            Start Play
          </Link>
        </div>
      </header>

      {/* Main Section */}
      <main className="flex-grow flex justify-center items-center text-gray-800 bg-gradient-to-r from-blue-200 to-cyan-200">
        <h1 className="text-4xl font-bold tracking-wide">
          Welcome! <span className="text-blue-600">Play Quiz</span>
        </h1>
      </main>
    </div>
  );
};

export default Home;

