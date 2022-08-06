window.onload = function () {
  /* #region  Logo svg */
  document.querySelector('[class*="SearchHeaderLogo"]').innerHTML =
    '<svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" style="padding-top: 15px;" viewBox="0 0 120 120" class="QwantLogo-module__logoWithText___1u1Cr QwantLogo-module__logoWithText___1u1Cr Qwoodle-module__QwantLogo___1YNDL" data-testid="logo" aria-label="Qwant"><defs><path id="logo-qwant_svg__a" d="M97.821 133.706c1.085 1.282 1.627 2.853 1.627 4.798 0 2.067-.626 3.722-1.835 5.003-1.21 1.283-2.753 1.944-4.63 1.944-1.876 0-3.42-.661-4.629-1.944-1.084-1.158-1.71-2.646-1.793-4.466 0 0-.417-3.185 1.793-5.542 1.21-1.282 2.753-1.943 4.671-1.943 0 .04 2.878-.125 4.796 2.15zm46.712-13.606a.73.73 0 01.75.661v5.832h6.84c.417 0 .75.33.75.703v4.053c0 .372-.291.661-.666.703h-6.924v8.891c0 1.654.292 2.854.876 3.598.584.703 1.543 1.076 2.92 1.076 1.21 0 2.293-.166 3.336-.58.042-.04.125-.04.167-.082.083-.041.125-.041.209-.041.375 0 .667.248.709.62l.5 4.012v.108a.321.321 0 01-.042.099c-.041.289-.209.537-.458.62a12.93 12.93 0 01-2.336.744c-1.168.248-2.42.372-3.67.372-3.003 0-5.255-.785-6.715-2.316-1.501-1.53-2.21-3.887-2.21-7.03v-10.091h-4.13c-.333-.042-.583-.331-.583-.703v-3.97c0-.414.333-.745.75-.745h4.004v-5.831a.764.764 0 01.75-.703zm-125.495-6.204c2.127-.165 4.338-.041 6.423.414a19.99 19.99 0 015.63 2.233c1.627.992 3.086 2.192 4.338 3.64 1.334 1.57 2.46 3.35 3.211 5.252a18.835 18.835 0 011.293 6.575 19.322 19.322 0 01-.876 6.163c-.334.95-.709 1.86-1.168 2.77-.25.455-.5.91-.75 1.324-.209.372-.626.785-.543 1.282.042.207.167.414.25.579l2.17 3.887c.333.662.708 1.282 1.042 1.944.334.579-.125 1.282-.792 1.282h-5.464c-.292 0-.625.041-.876-.124-.333-.207-.542-.744-.709-1.117l-3.545-6.989a.79.79 0 01-.041-.62c.083-.248.25-.414.458-.58 1.335-1.199 2.461-2.729 3.17-4.383a11.521 11.521 0 001.001-5.542 12.178 12.178 0 00-1.96-5.955 12.629 12.629 0 00-3.796-3.764c-1.668-1.075-3.586-1.695-5.588-1.902a12.253 12.253 0 00-6.423 1.117 12.381 12.381 0 00-4.754 3.887 11.935 11.935 0 00-2.336 5.831c-.25 2.15.042 4.343.918 6.328a12.257 12.257 0 003.878 4.963c1.71 1.323 3.795 2.15 5.923 2.44 1.126.166 2.293.166 3.42 0 .291-.041.583-.083.834-.124.208-.042.417-.124.667-.042.25.083.417.29.542.497.417.827.834 1.613 1.251 2.44.209.455.459.868.668 1.324.166.371.417.702.25 1.116-.209.496-.71.579-1.168.703-.542.124-1.126.248-1.668.33a38.66 38.66 0 01-3.087.249 16.598 16.598 0 01-3.21-.207 22.392 22.392 0 01-3.296-.744 18.48 18.48 0 01-5.463-2.813c-1.669-1.282-3.128-2.812-4.254-4.59-1.126-1.779-2.002-3.805-2.461-5.873a21.194 21.194 0 01-.375-6.493 18.366 18.366 0 011.751-6.286c.918-1.944 2.21-3.764 3.796-5.252a18.227 18.227 0 015.38-3.598c2.002-.91 4.17-1.407 6.34-1.572zm72.528 11.828c1.668 0 3.17.373 4.504 1.034 1.334.662 2.419 1.613 3.211 2.854l.084-2.565v-.04c.041-.373.333-.62.709-.62h4.921c.417 0 .75.33.75.743v22.664a.744.744 0 01-.75.744h-4.921c-.334 0-.668-.29-.71-.62l-.083-2.44c-1.46 2.357-4.045 3.184-4.045 3.184-1.168.455-2.503.662-4.004.662-2.127 0-4.046-.538-5.756-1.571-1.71-1.034-3.044-2.524-4.045-4.467-.918-1.82-1.418-3.887-1.46-6.204v-.496c0-2.316.5-4.467 1.46-6.41.96-1.944 2.335-3.474 4.129-4.674 1.751-1.199 3.795-1.778 6.006-1.778zm32.322.042c2.836 0 5.046.909 6.548 2.646 1.501 1.778 2.252 4.301 2.252 7.61v13.896a.745.745 0 01-.75.744h-5.214c-.334 0-.626-.207-.709-.496v-12.903c0-3.764-1.46-5.625-4.338-5.625-1.584 0-2.836.496-3.711 1.572-.876 1.034-1.335 2.523-1.335 4.466v12.49c-.125.29-.375.496-.709.496h-5.213a.744.744 0 01-.751-.744v-22.664c0-.413.334-.744.75-.744h4.964c.375 0 .667.248.709.62l.167 2.358c.667-1.2 1.668-2.11 2.92-2.771 1.25-.62 2.752-.951 4.42-.951zm-60.766.661c.292 0 .542.166.667.414l5.213 16.212 4.38-16.047c.083-.29.375-.496.709-.496h5.255c.417 0 .75.33.75.744 0 .083 0 .124-.041.207l-7.633 22.746a.744.744 0 01-.667.414h-4.963a.744.744 0 01-.667-.414l-5.339-15.467-5.13 15.508c-.125.207-.375.373-.625.373h-4.88a.715.715 0 01-.667-.455l-7.632-22.953c0-.414.333-.745.75-.745h5.422c.25.042.5.207.584.414l4.337 16.088 5.005-16.088c.125-.248.376-.455.667-.455h4.505z"></path></defs><path fill="#AF27CC" d="M89.192 92.077c-1.343.33-2.703.592-4.07.8-2.478.373-4.981.53-7.485.635-2.592.108-5.241-.127-7.807-.487-2.729-.383-5.424-1-8.044-1.848-4.785-1.547-9.315-3.867-13.324-6.902a43.457 43.457 0 01-3.686-3.123 42.864 42.864 0 01-6.668-8.066c-2.81-4.412-4.872-9.295-6.013-14.396-1.162-5.197-1.379-10.9-.865-16.198l.01-.121c.498 7.528 3.027 14.76 7.174 20.566a40.113 40.113 0 0029.49 16.668c1.068.086 2.15.13 3.24.13a40.27 40.27 0 0014.102-2.53c.068.011.137.028.207.05.605.19 1.034.624 1.317 1.178 1.018 1.987 2.008 3.99 3.01 5.983.034.071.07.14.105.21.514 1.016 1.024 2.035 1.536 3.051.431.86.95 1.68.591 2.684-.44 1.235-1.693 1.438-2.82 1.716z"></path><path fill="#FF3B4A" d="M31.255 42.35c0 4.428 3.526 8.03 7.925 8.164a8.18 8.18 0 008.3-6.665c-.016.117-.03.233-.043.35-.605 5.235.157 10.606 2.243 15.452a30.442 30.442 0 009.466 12.113c4.171 3.18 9.165 5.261 14.372 5.947a30.762 30.762 0 0010.267-.374c.498-.105.966-.226 1.46-.132a40.26 40.26 0 01-14.1 2.53 40.35 40.35 0 01-3.24-.13 40.113 40.113 0 01-29.491-16.668c-4.147-5.806-6.676-13.038-7.173-20.566"></path><path fill="#FFDA12" d="M77.455 1.674c-1.409.003-2.816.06-4.217.17-5.327.414-10.58 1.672-15.459 3.857a46.62 46.62 0 00-13.101 8.84c-3.839 3.678-6.976 8.066-9.274 12.853-2.107 4.384-3.473 9.096-4.092 13.913l.009.002a8.143 8.143 0 00-.066 1.042c0 4.427 3.526 8.03 7.925 8.163a8.181 8.181 0 008.301-6.665v-.008c.031-.24.063-.479.1-.716 0-.004 0-.009.002-.011l.07-.44a40.017 40.017 0 012.481-12.017c5.662-15.131 20.187-25.9 37.214-25.9.812 0 1.617.025 2.416.075 2.739.165 5.4.609 7.96 1.304h.002l.01.002c.551.091 1.083.24 1.59.435a46.758 46.758 0 00-10.457-3.675 50.659 50.659 0 00-6.417-1 53.174 53.174 0 00-4.805-.224h-.192z"></path><path fill="#87C966" d="M104.538 14.186a8.18 8.18 0 01-.577 3.023 8.183 8.183 0 01-7.6 5.14 8.168 8.168 0 01-3.897-.984l-.002.005c-3.766-2.12-7.928-3.381-12.244-3.798-5.342-.515-10.762.492-15.604 2.773a30.205 30.205 0 00-6.545 4.19 30.415 30.415 0 00-5 5.332 30.257 30.257 0 00-5.415 12.807 39.986 39.986 0 012.48-12.017c5.662-15.131 20.187-25.9 37.214-25.9.812 0 1.617.025 2.416.075 2.739.165 5.4.609 7.96 1.304h.002l.01.002c.593.16 1.184.335 1.766.524.44.217.88.442 1.314.677.007.002.012.007.016.01a8.152 8.152 0 013.706 6.837"></path><path fill="#65CEE7" d="M122.08 61.301a45.252 45.252 0 01-2.798 6.829c-.23.45-.468.9-.716 1.344a42.79 42.79 0 01-1.077 1.855c-.4.647-1.058 1.418-1.323 2.161l.036-.113c.232-.613.45-1.232.652-1.86a40.19 40.19 0 001.929-12.33c0-8.923-2.91-17.167-7.837-23.836a40.37 40.37 0 00-18.062-13.737c-.14-.085-.281-.164-.423-.244l.003-.004a8.18 8.18 0 003.897.984 8.184 8.184 0 007.6-5.14 8.193 8.193 0 00.577-3.024 8.155 8.155 0 00-3.706-6.838c.59.319 1.173.65 1.748.994a43.808 43.808 0 0110.596 8.865c3.306 3.812 5.994 8.18 7.843 12.874 2.017 5.117 3.01 10.613 3.138 16.102.12 5.13-.525 10.221-2.077 15.118"></path><path fill="#4BA2EA" d="M105.28 90.446c.442.879.865 2.198 1.764 2.72.65.376 1.435.29 2.156.29l13.284-.003c1.595-.032 2.715-1.71 1.933-3.17-.84-1.578-1.68-3.157-2.517-4.736l-5.13-9.64c-.238-.443-.553-.912-.639-1.413 0 0-.187-.294.07-1.117.233-.613.45-1.233.653-1.859a40.203 40.203 0 001.929-12.332c0-8.922-2.91-17.166-7.837-23.835a40.37 40.37 0 00-18.062-13.737c.321.187.639.38.953.58a30.491 30.491 0 019.245 9.218 30.26 30.26 0 014.726 14.591c.26 4.644-.554 9.34-2.389 13.617a29.74 29.74 0 01-2.31 4.351 30.569 30.569 0 01-5.444 6.369c-.475.422-.945.768-1.144 1.399a2.233 2.233 0 00.078 1.567l8.68 17.14z"></path></g></svg>';
  /* #endregion */

  document.querySelector('[class*="SearchHeaderLogo"]').style.visibility =
    "visible";

/*   document.querySelector(
    ".SearchHeader-module__SearchHeader___27RFp"
  ).style.backgroundColor = "transparent";

  document.querySelector(
    ".SearchHeader-module__SearchHeader___27RFp"
  ).style.visibility = "visible"; */

  const closeRibbonBtn = document.querySelector('[class*="RibbonClose"]');

  if (closeRibbonBtn) {
    closeRibbonBtn.click();
  }

  //Google One click
  const buttonGoogle = document.createElement("a");
  buttonGoogle.className = "button";

  /* #region buttonGoogle SVG */
  buttonGoogle.innerHTML =
    '<svg viewBox="0 0 24 24" height="1.8em" width="1.8em" xmlns="http://www.w3.org/2000/svg"><g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)"><title>Google</title><path fill="#4285F4" d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z"/><path fill="#34A853" d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z"/><path fill="#FBBC05" d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z"/><path fill="#EA4335" d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z"/></g></svg>';
  /* #endregion */
  buttonGoogle.onclick = clickGoogleHandler;

  //duckduck One click
  const buttonDuck = document.createElement("a");
  buttonDuck.className = "button";
  /* #region buttonDuck SVG */
  buttonDuck.innerHTML =
    '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="1.8em" width="1.8em" viewBox="0 0 32 32" ><title>DuckDuckGo</title><g transform="matrix(.266667 0 0 .266667 -17.954934 -5.057333)"><circle cx="127.332" cy="78.966" r="51.15" fill="#de5833"/><defs><path id="A" d="M178.684 78.824c0 28.316-23.035 51.354-51.354 51.354-28.313 0-51.348-23.04-51.348-51.354s23.036-51.35 51.348-51.35c28.318 0 51.354 23.036 51.354 51.35z"/></defs><clipPath id="B"><use xlink:href="#A"/></clipPath><g clip-path="url(#B)"><path d="M148.293 155.158c-1.8-8.285-12.262-27.04-16.23-34.97s-7.938-19.1-6.13-26.322c.328-1.312-3.436-11.308-2.354-12.015 8.416-5.5 10.632.6 14.002-1.862 1.734-1.273 4.1 1.047 4.7-1.06 2.158-7.567-3.006-20.76-8.77-26.526-1.885-1.88-4.77-3.06-8.03-3.687-1.254-1.713-3.275-3.36-6.138-4.88-3.188-1.697-10.12-3.938-13.717-4.535-2.492-.4-3.055.287-4.12.46.992.088 5.7 2.414 6.615 2.55-.916.62-3.607-.028-5.324.742-.865.392-1.512 1.877-1.506 2.58 4.9-.496 12.574-.016 17.1 2-3.602.4-9.08.867-11.436 2.105-6.848 3.608-9.873 12.035-8.07 22.133 1.804 10.075 9.738 46.85 12.262 59.13 2.525 12.264-5.408 20.2-10.455 22.354l5.408.363-1.8 3.967c6.484.72 13.695-1.44 13.695-1.44-1.438 3.965-11.176 5.412-11.176 5.412s4.7 1.438 12.258-1.447l12.263-4.688 3.604 9.373 6.854-6.847 2.885 7.2c.014-.001 5.424-1.808 3.62-10.103z" fill="#d5d7d8"/><path d="M150.47 153.477c-1.795-8.3-12.256-27.043-16.228-34.98s-7.935-19.112-6.13-26.32c.335-1.3.34-6.668 1.43-7.38 8.4-5.494 7.812-.184 11.187-2.645 1.74-1.27 3.133-2.806 3.738-4.912 2.164-7.572-3.006-20.76-8.773-26.53-1.88-1.88-4.768-3.062-8.023-3.686-1.252-1.718-3.27-3.36-6.13-4.882-5.4-2.862-12.074-4.006-18.266-2.883 1 .1 3.256 2.138 4.168 2.273-1.38.936-5.053.815-5.03 2.896 4.916-.492 10.303.285 14.834 2.297-3.602.4-6.955 1.3-9.3 2.543-6.854 3.603-8.656 10.812-6.854 20.914 1.807 10.097 9.742 46.873 12.256 59.126 2.527 12.26-5.402 20.188-10.45 22.354l5.408.36-1.8 3.973c6.484.72 13.695-1.44 13.695-1.44-1.438 3.974-11.176 5.406-11.176 5.406s4.686 1.44 12.258-1.445l12.27-4.688 3.604 9.373 6.852-6.85 2.9 7.215c-.016.007 5.388-1.797 3.58-10.088z" fill="#fff"/><path d="M109.02 70.69c0-2.093 1.693-3.787 3.79-3.787 2.1 0 3.785 1.694 3.785 3.787s-1.695 3.786-3.785 3.786c-2.096.001-3.79-1.692-3.79-3.786z" fill="#2d4f8e"/><path d="M113.507 69.43a.98.98 0 0 1 .98-.983c.543 0 .984.438.984.983s-.44.984-.984.984c-.538.001-.98-.44-.98-.984z" fill="#fff"/><path d="M134.867 68.445c0-1.793 1.46-3.25 3.252-3.25 1.8 0 3.256 1.457 3.256 3.25 0 1.8-1.455 3.258-3.256 3.258a3.26 3.26 0 0 1-3.252-3.258z" fill="#2d4f8e"/><path d="M138.725 67.363c0-.463.38-.843.838-.843a.84.84 0 0 1 .846.843c0 .47-.367.842-.846.842a.84.84 0 0 1-.838-.842z" fill="#fff"/><linearGradient id="C" gradientUnits="userSpaceOnUse" x1="105.318" y1="60.979" x2="113.887" y2="60.979"><stop offset=".006" stop-color="#6176b9"/><stop offset=".691" stop-color="#394a9f"/></linearGradient><path d="M113.886 59.718s-2.854-1.3-5.63.453-2.668 3.523-2.668 3.523-1.473-3.283 2.453-4.892 5.844.916 5.844.916z" fill="url(#C)"/><linearGradient id="D" gradientUnits="userSpaceOnUse" x1="132.273" y1="58.371" x2="140.078" y2="58.371"><stop offset=".006" stop-color="#6176b9"/><stop offset=".691" stop-color="#394a9f"/></linearGradient><path d="M140.078 59.458s-2.05-1.172-3.643-1.152c-3.27.043-4.162 1.488-4.162 1.488s.55-3.445 4.732-2.754c2.268.377 3.073 2.418 3.073 2.418z" fill="url(#D)"/></g><path d="M124.4 85.295c.38-2.3 6.3-6.625 10.5-6.887 4.2-.265 5.5-.205 9-1.043s12.535-3.088 15.033-4.242c2.504-1.156 13.104.572 5.63 4.738-3.232 1.8-11.943 5.13-18.172 6.987-6.22 1.86-10-1.776-12.06 1.28-1.646 2.432-.334 5.762 7.1 6.453 10.037.93 19.66-4.52 20.72-1.625s-8.625 6.508-14.525 6.623c-5.893.1-17.77-3.896-19.555-5.137s-4.165-4.13-3.67-7.148z" fill="#fdd20a"/><path d="M128.943 115.592s-14.102-7.52-14.332-4.47c-.238 3.056 0 15.5 1.643 16.45s13.396-6.108 13.396-6.108zm5.403-.474s9.635-7.285 11.754-6.815c2.1.48 2.582 15.5.7 16.23-1.88.7-12.908-3.813-12.908-3.813z" fill="#65bc46"/><path d="M125.53 116.4c0 4.932-.7 7.05 1.4 7.52s6.104 0 7.518-.938.232-7.28-.232-8.465c-.477-1.174-8.696-.232-8.696 1.884z" fill="#43a244"/><path d="M126.426 115.292c0 4.933-.707 7.05 1.4 7.52 2.106.48 6.104 0 7.52-.938 1.4-.94.23-7.28-.236-8.466-.473-1.173-8.692-.227-8.692 1.885z" fill="#65bc46"/><circle cx="127.331" cy="78.965" r="57.5" fill="none" stroke="#de5833" stroke-width="5"/></g></svg>';
  /* #endregion */
  buttonDuck.onclick = clickDuckHandler;

  //Maps One click
  const buttonMaps = document.createElement("a");
  buttonMaps.className = "button";
  /* #region buttonMaps SVG */
  buttonMaps.innerHTML =
    '<svg height="1.8em" width="1.8em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 92.3 132.3"><path fill="#1a73e8" d="M60.2 2.2C55.8.8 51 0 46.1 0 32 0 19.3 6.4 10.8 16.5l21.8 18.3L60.2 2.2z"/><title>Google Maps</title><path fill="#ea4335" d="M10.8 16.5C4.1 24.5 0 34.9 0 46.1c0 8.7 1.7 15.7 4.6 22l28-33.3-21.8-18.3z"/><path fill="#4285f4" d="M46.2 28.5c9.8 0 17.7 7.9 17.7 17.7 0 4.3-1.6 8.3-4.2 11.4 0 0 13.9-16.6 27.5-32.7-5.6-10.8-15.3-19-27-22.7L32.6 34.8c3.3-3.8 8.1-6.3 13.6-6.3"/><path fill="#fbbc04" d="M46.2 63.8c-9.8 0-17.7-7.9-17.7-17.7 0-4.3 1.5-8.3 4.1-11.3l-28 33.3c4.8 10.6 12.8 19.2 21 29.9l34.1-40.5c-3.3 3.9-8.1 6.3-13.5 6.3"/><path fill="#34a853" d="M59.1 109.2c15.4-24.1 33.3-35 33.3-63 0-7.7-1.9-14.9-5.2-21.3L25.6 98c2.6 3.4 5.3 7.3 7.9 11.3 9.4 14.5 6.8 23.1 12.8 23.1s3.4-8.7 12.8-23.2"/></svg>';
  /* #endregion */
  buttonMaps.onclick = clickMapHandler;

  //Wikipedia One click
  const buttonWiki = document.createElement("a");
  buttonWiki.className = "button";
  /* #region buttonWiki SVG */
  buttonWiki.innerHTML =
    '<svg enable-background="new 0 0 100 100" height="1.8em" width="1.8em" id="wiki" version="1.1" viewBox="0 0 100 100" width="100px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><defs><rect height="100" id="SVGID_1_" width="100"/></defs><title>Wikipedia</title><path d="M94.938,19H76.331l-1.332,0.229v1.788c0,0.21,0.636,0.386,0.812,0.517   c0.168,0.142,0.623,0.219,0.811,0.219l1.686,0.084c1.912,0.09,2.494,0.505,3.239,1.205c0.731,0.725,0.851,1.955,0.281,3.684   L65.383,69.654l-0.628-0.187L54.309,45.97c0.151-0.353,0.242-0.551,0.242-0.551l8.553-17.578c0.994-1.854,1.957-3.511,2.446-4.283   c0.894-1.408,1.328-1.674,3.763-1.797c0.498,0,0.688-0.244,0.688-0.738v-1.778l-0.125-0.191c0,0-10.224-0.035-14.879,0l0.002,0.183   v1.779c0,0.217-0.119,0.39,0.046,0.521c0.176,0.142,0.25,0.215,0.439,0.215l0.697,0.089c1.902,0.09,2.754,0.636,3.012,0.979   c0.455,0.615,0.668,1.271-0.434,3.911l-6.585,14.42l-5.95-13.376c-1.952-4.274-2.434-5.597,0.507-5.844l0.79-0.183   c0.566,0,0.478-0.224,0.478-0.649v-1.87l-0.059-0.153c0,0-10.899,0-15.873,0.003L32,19.262v1.875c0,0.421,0.416,0.529,1.186,0.645   c2.754,0.396,2.707,0.713,5.428,6.646c0.407,0.889,1.61,3.57,1.61,3.57l6.203,13.391c0,0,0.704,1.72,1.805,4.39l-9.016,19.763   l-0.514-0.146c0,0-13.992-32.418-18.037-43.266c-0.427-1.117-0.611-1.953-0.611-2.468c0-1.102,0.904-1.699,2.712-1.779l2.751-0.099   c0.563,0,1.483-0.236,1.483-0.727v-1.779l-0.829-0.184c0,0-17.139-0.021-20.602,0L5,19.279v1.872c0,0.336,0.449,0.545,1.228,0.634   c2.128,0.129,3.559,0.499,4.229,1.123c0.668,0.628,1.393,2.215,2.333,4.688c5.086,13.424,15.901,37.38,21.166,51.026   c1.512,3.724,3.423,4.303,5.732-0.117c2.379-4.848,7.179-15.608,10.68-23.552c3.275,7.924,7.734,18.645,9.885,23.501   c1.712,3.887,3.664,4.271,5.646,0.116c5.183-12.654,20.319-50.736,20.319-50.736c0.654-1.869,1.568-3.309,2.746-4.355   c1.169-1.033,2.909-1.617,5.349-1.731c0.494,0,0.688-0.249,0.688-0.731v-1.788L94.938,19z"/></g></svg>';
  /* #endregion */
  buttonWiki.onclick = clickWikiHandler;

  //Youtube One click
  const buttonYTB = document.createElement("a");
  buttonYTB.className = "button";
  /* #region buttonYTB SVG */
  buttonYTB.innerHTML =
    '<svg height="1.8em" width="1.8em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 86.43"><defs><style>.cls-1,.cls-2{fill-rule:evenodd;}.cls-2{fill:#fff;}</style></defs><title>YouTube</title><path fill="#FF0000" class="cls-1" d="M121.63,18.65s-1.2-8.47-4.9-12.19c-4.67-4.89-9.91-4.92-12.31-5.21C87.24,0,61.43,0,61.43,0h0s-25.8,0-43,1.25c-2.4.29-7.63.31-12.31,5.21C2.4,10.18,1.22,18.65,1.22,18.65A187.15,187.15,0,0,0,0,38.55v9.31a187.65,187.65,0,0,0,1.22,19.9S2.42,76.23,6.09,80c4.68,4.9,10.82,4.74,13.57,5.26,9.83.94,41.78,1.22,41.78,1.22s25.83,0,43-1.27c2.41-.29,7.64-.32,12.32-5.21,3.69-3.72,4.89-12.2,4.89-12.2a187.15,187.15,0,0,0,1.22-19.9V38.54a189.26,189.26,0,0,0-1.25-19.9Z"/><polygon class="cls-2" points="48.71 59.16 48.71 24.63 81.9 41.95 48.71 59.16 48.71 59.16"/></svg>';
  /* #endregion */
  buttonYTB.onclick = clickYtbHandler;

  const buttons = document.createElement("div");
  buttons.className = "buttons";

  buttons.appendChild(buttonGoogle);
  buttons.appendChild(buttonDuck);
  buttons.appendChild(buttonMaps);
  buttons.appendChild(buttonWiki);
  buttons.appendChild(buttonYTB);

  const isMobile = document.querySelector('[data-device="mobile"]');

  if (isMobile) {
    const body = document.querySelector("body");

    body.appendChild(buttons);
  } else {
    const searchBar = document.querySelector('[class*="SearchHeader"]');

    searchBar.appendChild(buttons);
  }
};

function clickGoogleHandler() {
  const input = document.querySelector("input[type=search]");
  const url =
    "https://www.google.com/search?q=" + encodeURIComponent(input.value);
  urlRedirect(url);
}

function clickDuckHandler() {
  const input = document.querySelector("input[type=search]");
  const url =
    "https://www.duckduckgo.com/?q=" + encodeURIComponent(input.value);
  urlRedirect(url);
}

function clickMapHandler() {
  const input = document.querySelector("input[type=search]");
  const url =
    "https://www.google.fr/maps/search/" + encodeURIComponent(input.value);
  urlRedirect(url);
}

function clickWikiHandler() {
  const input = document.querySelector("input[type=search]");
  var url = "https://" + navigator.language.slice(0, 2) + ".wikipedia.org";
  if (input.value) {
    url =
      "https://" +
      navigator.language.slice(0, 2) +
      ".wikipedia.org/w/index.php?sort=relevance&search=" +
      encodeURIComponent(input.value);
  }

  urlRedirect(url);
}

function clickYtbHandler() {
  const input = document.querySelector("input[type=search]");
  var url = "https://www.youtube.com";
  if (input.value) {
    url =
      "https://www.youtube.com/results?search_query=" +
      encodeURIComponent(input.value);
  }
  urlRedirect(url);
}

function urlRedirect(url) {
  const X = setTimeout(function () {
    window.location.replace(url);
    return true;
  }, 300);

  if ((window.location = url)) {
    clearTimeout(X);
    return true;
  } else {
    if ((window.location.href = url)) {
      clearTimeout(X);
      return true;
    } else {
      clearTimeout(X);
      window.location.replace(url);
      return true;
    }
  }
}
