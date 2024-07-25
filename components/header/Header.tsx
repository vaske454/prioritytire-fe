import React from 'react';
import Image from 'next/image';
import './Header.css';
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="page-header">
      <div className="header content">
        <span data-action="toggle-nav"
              className="action nav-toggle ninjamenus-top-triggered"><span>Toggle Nav</span>
        </span>
        <Link href="/" title="PriorityTire" aria-label="store logo">
          <Image
            src="/logo.png"
            alt="Logo"
            width={200}
            height={27}
            className="logo-icon"
          />
        </Link>
        <div className="block-search-wrapper" data-collapsible="true" role="tablist">
          <div
            className="aa-Autocomplete"
            role="combobox"
            aria-expanded="false"
            aria-haspopup="listbox"
            aria-controls="algoliaAutocomplete"
            aria-labelledby="autocomplete-1-label"
          >
            <form className="aa-Form" action="" noValidate role="search">
              <div className="aa-InputWrapperPrefix">
                <label
                  className="aa-Label"
                  htmlFor="autocomplete-1-input"
                  id="autocomplete-1-label"
                >
                  <button
                    className="aa-SubmitButton"
                    type="submit"
                    title="Submit"
                    aria-label="search"
                  >
                    <svg
                      className="aa-SubmitIcon"
                      viewBox="0 0 24 24"
                      width="20"
                      height="20"
                      fill="currentColor"
                    >
                      <path
                        d="M16.041 15.856c-0.034 0.026-0.067 0.055-0.099 0.087s-0.060 0.064-0.087 0.099c-1.258 1.213-2.969 1.958-4.855 1.958-1.933 0-3.682-0.782-4.95-2.050s-2.050-3.017-2.050-4.95 0.782-3.682 2.050-4.95 3.017-2.050 4.95-2.050 3.682 0.782 4.95 2.050 2.050 3.017 2.050 4.95c0 1.886-0.745 3.597-1.959 4.856zM21.707 20.293l-3.675-3.675c1.231-1.54 1.968-3.493 1.968-5.618 0-2.485-1.008-4.736-2.636-6.364s-3.879-2.636-6.364-2.636-4.736 1.008-6.364 2.636-2.636 3.879-2.636 6.364 1.008 4.736 2.636 6.364 3.879 2.636 6.364 2.636c2.125 0 4.078-0.737 5.618-1.968l3.675 3.675c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z"></path>
                    </svg>
                  </button>
                  <span
                    style={{
                      color: '#ffffff',
                      background: '#000000',
                      clip: 'rect(1px, 1px, 1px, 1px)',
                      clipPath: 'inset(50%)',
                      height: '1px',
                      width: '1px',
                      margin: '-1px',
                      overflow: 'hidden',
                      padding: '0',
                      position: 'absolute'
                    }}
                    className=""
                  >
                    Search Tires & Accessories
                  </span>
                </label>
              </div>
              <div className="aa-InputWrapper">
                <input
                  className="aa-Input"
                  aria-autocomplete="both"
                  aria-labelledby="autocomplete-1-label"
                  id="autocomplete-1-input"
                  autoComplete="off"
                  autoCorrect="off"
                  autoCapitalize="none"
                  enterKeyHint="search"
                  spellCheck="false"
                  placeholder="Search Tires & Accessories"
                  maxLength={512}
                  type="search"
                />
              </div>
            </form>
          </div>
        </div>
        <div className="header-links-wrapper">
          <ul className="header links">
            <li className="link authorization-link" data-label="or">
              <a
                href="#"
                data-uw-rm-brl="PR"
                data-uw-original-href="https://www.prioritytire.com/customer/account/login/referer/aHR0cHM6Ly93d3cucHJpb3JpdHlrYS5jb20v/">
                <span>Sign In</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
