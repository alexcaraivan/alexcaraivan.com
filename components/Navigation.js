const Navigation = () => {
  return (
    <header className="w-full bg-gray-900 text-white">
      <nav className="" role="navigation">
        <div className="container mx-auto p-4 md:px-0 flex flex-wrap items-center md:flex-nowrap md:justify-between">
          <div className="mr-4 md:mr-8">
            <a href="/">
              <img src="/images/logo.png" className="w-10" />
            </a>
          </div>
          <div className="ml-auto md:hidden">
            <button className="flex items-center px-3 py-2 border rounded" type="button">
              <svg className="h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <div className="flex flex-col md:flex-row md:items-end">
            <a href="/">Home</a>
            <a href="/blog" className="px-6">
              Blog
            </a>
            <a href="/draw" className="pr-6">
              Draw
            </a>
            <a href="/work">Work</a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
