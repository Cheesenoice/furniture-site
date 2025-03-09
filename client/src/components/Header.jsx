const Header = () => {
  return (
    <header className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">E-Commerce</h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="#" className="hover:text-gray-500">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-500">
                Products
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-500">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-500">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
