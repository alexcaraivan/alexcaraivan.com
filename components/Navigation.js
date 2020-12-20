import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const Navigation = ({ settings }) => {
  const [isMounted, setIsMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setIsMounted(true);
  }, []);
  const switchTheme = () => {
    if (isMounted) {
      setTheme(theme === 'light' ? 'dark' : 'light');
    }
  };

  return (
    <header className="w-full bg-gray-300 dark:bg-gray-800 dark:text-white">
      <nav className="" role="navigation">
        <div className="container mx-auto p-4 flex flex-wrap items-center md:flex-nowrap">
          <div className="mr-4 md:mr-8">
            <a href="/">
              <svg
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                width="128pt"
                height="40pt"
                viewBox="0 0 1280.0000 994.0000"
                preserveAspectRatio="xMidYMid meet"
              >
                <g
                  transform="translate(0.000000,994.0000) scale(0.100000,-0.100000)"
                  fill={theme === 'light' ? '#000' : '#fff'}
                  stroke="none"
                >
                  <path
                    d="M8780 9439 c-356 -36 -771 -180 -1165 -403 -290 -165 -681 -445 -967
-693 -14 -13 -32 -10 -145 21 -967 266 -1977 373 -2888 306 -734 -55 -1325
-216 -1783 -488 -587 -349 -866 -828 -822 -1412 27 -348 161 -640 410 -891
511 -515 1445 -810 2844 -899 88 -5 161 -12 163 -14 2 -2 -12 -84 -31 -182
-73 -372 -96 -592 -96 -927 0 -353 37 -632 125 -937 190 -661 635 -1229 1249
-1593 624 -370 1494 -496 2306 -335 314 62 578 153 870 299 652 327 1219 834
1956 1749 395 491 604 815 669 1036 32 105 30 200 -5 301 -18 51 -26 63 -52
72 -42 15 -101 14 -120 -1 -8 -7 -68 -92 -133 -188 -672 -992 -1315 -1743
-1868 -2179 -410 -322 -863 -546 -1278 -630 -195 -39 -271 -46 -519 -46 -436
1 -724 61 -1045 221 -177 87 -301 174 -437 303 -373 354 -572 809 -627 1431
-14 150 -5 626 14 810 28 270 65 492 121 721 l26 106 172 27 c875 139 1695
390 2399 734 l117 57 0 -33 c0 -97 -71 -336 -144 -479 -178 -355 -495 -665
-958 -937 -209 -122 -593 -297 -860 -391 -69 -24 -82 -33 -118 -80 -22 -28
-40 -63 -40 -76 0 -35 39 -150 59 -173 26 -30 98 -76 119 -76 11 0 89 23 173
51 894 297 1539 729 1910 1280 206 308 321 659 336 1034 l6 150 118 82 c658
462 1114 1015 1292 1568 63 195 81 314 81 525 0 164 -3 198 -26 296 -30 129
-74 243 -125 329 -176 292 -457 475 -831 540 -109 19 -333 26 -452 14z m263
-464 c125 -33 241 -111 311 -208 92 -129 122 -249 113 -452 -9 -200 -54 -352
-177 -597 -139 -275 -322 -527 -588 -808 l-99 -105 -55 115 c-175 368 -439
663 -828 926 -124 84 -251 159 -362 215 l-80 40 59 62 c441 463 946 770 1358
826 92 13 275 6 348 -14z m-4292 -745 c387 -20 716 -59 1049 -126 172 -34 438
-99 448 -109 3 -3 -62 -74 -144 -157 -668 -682 -1165 -1449 -1516 -2337 l-33
-84 -125 2 c-317 4 -757 49 -1050 107 -424 84 -822 242 -1060 421 -209 156
-348 347 -411 564 -29 102 -38 368 -16 484 73 382 350 690 832 925 301 147
592 229 985 279 309 39 662 50 1041 31z m2409 -556 c545 -279 891 -648 1049
-1123 18 -52 28 -97 24 -100 -149 -105 -400 -257 -593 -359 -356 -187 -789
-355 -1215 -471 -256 -70 -685 -157 -685 -139 0 14 109 272 194 460 154 341
334 686 519 998 184 311 523 810 548 810 6 0 78 -34 159 -76z"
                  />
                </g>
              </svg>
            </a>
          </div>
          <div>
            <p className="text-lg flex items-centered justify-between">
              Cara,{' '}
              <span
                className="relative inline-block w-10 align-middle select-none transition duration-200 ease-in"
              >
                <input
                  type="checkbox"
                  checked={theme === 'dark'}
                  onChange={switchTheme}
                  name="toggle"
                  id="toggle"
                  className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer outline-none"
                />
                <label
                  htmlFor="toggle"
                  className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-100 dark:bg-gray-300 cursor-pointer"
                ></label>
              </span>
            </p>
            <p>Digitally Yours</p>
          </div>
          <div className="ml-auto md:hidden">
            <button className="flex items-center px-3 py-2 border rounded" type="button">
              <svg className="h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <div className="w-full md:w-auto md:flex-grow md:flex md:items-center">
            <ul className="flex flex-col mt-4 -mx-4 pt-4 border-t md:flex-row md:items-center md:mx-0 md:mt-0 md:pt-0 md:mr-4 md:ml-auto lg:mr-8 md:border-0">
              <li>
                <a href="/" className="block px-4 py-1 md:p-2 lg:px-8">
                  Home
                </a>
              </li>
              <li>
                <a href="/blog" className="block px-4 py-1 md:p-2 lg:px-8">
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
