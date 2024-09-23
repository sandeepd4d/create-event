import { useTheme } from '@/context/ThemeContext';
import React from 'react'
import PorfileDropdown from './ProfileDropdown';

const Header = () => {
  return (
    <header>
        <nav className="py-3 px-4 relative flex flex-wrap z-20 gap-2 justify-between items-center w-full">
          <div className="logo p-1 text-lightBlack/[0.36] cursor-pointer group">
            <svg
              className="w-5 h-5 fill-lightBlack/[.36] group-hover:fill-black transition-all"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 133 134"
            >
              <path d="M133 67C96.282 67 66.5 36.994 66.5 0c0 36.994-29.782 67-66.5 67 36.718 0 66.5 30.006 66.5 67 0-36.994 29.782-67 66.5-67"></path>
            </svg>
          </div>
          <div className="header-right flex items-center justify-between flex-1 min-w-0">
            <ul className="flex flex-wrap items-center gap-5 px-4">
              <li>
                <a
                  href=""
                  className={`flex flex-wrap items-center gap-2 text-lightBlack/[0.36] font-medium text-sm transition-all hover:text-black`}
                >
                  <svg
                    className="w-4 h-4 fill-lightBlack/[.36]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M3.204 1.25C1.44 1.25.251 2.938.251 4.693v1.452c-.001.068-.001.163.007.247a.96.96 0 0 0 .162.466c.142.205.348.298.411.327l.005.002c.083.038.185.076.277.11l.016.007c.177.066.394.309.394.696s-.217.63-.394.696l-.017.007c-.091.034-.193.072-.276.11l-.005.002c-.063.029-.269.122-.411.327a.96.96 0 0 0-.162.465c-.008.084-.008.18-.008.247v1.453c0 1.755 1.188 3.443 2.954 3.443h9.592c1.766 0 2.954-1.688 2.954-3.443V9.854c0-.068 0-.163-.008-.247a.96.96 0 0 0-.162-.465c-.142-.205-.348-.298-.411-.327l-.005-.003a5 5 0 0 0-.276-.11l-.017-.006c-.177-.066-.394-.309-.394-.696s.217-.63.394-.696l.017-.007c.091-.034.193-.072.276-.11l.005-.002a1 1 0 0 0 .411-.327.96.96 0 0 0 .162-.466c.008-.084.008-.179.008-.247V4.693c0-1.755-1.19-3.443-2.954-3.443zM1.751 4.693c0-1.221.784-1.943 1.453-1.943H9.25v3.008a.75.75 0 0 0 1.5 0V2.75h2.046c.669 0 1.453.722 1.453 1.943v1.244c-.788.344-1.272 1.178-1.272 2.063s.484 1.72 1.273 2.063v1.244c0 1.221-.784 1.943-1.454 1.943H10.75v-2.492a.75.75 0 0 0-1.5 0v2.492H3.204c-.67 0-1.454-.722-1.454-1.943v-1.244C2.54 9.719 3.023 8.885 3.023 8S2.539 6.28 1.75 5.937z"
                    ></path>
                  </svg>
                  <span className="hidden md:block">Events</span>
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="flex flex-wrap items-center gap-2 text-lightBlack/[0.36] font-medium text-sm transition-all hover:text-black"
                >
                  <svg
                    className="w-4 h-4 fill-lightBlack/[.36]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M5.75 1.25a.75.75 0 1 0-1.5 0v.823l-.392.044c-.9.121-1.658.38-2.26.982s-.861 1.36-.982 2.26C.5 6.225.5 7.328.5 8.695v.11l.117 3.337c.121.9.38 1.658.982 2.26s1.36.861 2.26.982c.867.117 1.969.117 3.337.117h1.658l3.337-.117c.9-.121 1.658-.38 2.26-.982s.861-1.36.982-2.26c.117-.867.117-1.969.117-3.337v-.11l-.117-3.337c-.121-.9-.38-1.658-.982-2.26s-1.36-.861-2.26-.982l-.44-.048V1.25a.75.75 0 0 0-1.5 0v.756L8.853 2H7.195q-.78-.002-1.445.006zm4.5 3v-.744L8.798 3.5H7.25l-1.5.007v.743a.75.75 0 1 1-1.5 0v-.67l-.192.023c-.734.099-1.122.279-1.399.556s-.457.665-.556 1.399C2.002 6.313 2 7.315 2 8.75l.103 3.192c.099.734.279 1.122.556 1.399s.665.457 1.399.556c.755.101 1.756.103 3.192.103h1.548l3.192-.103c.734-.099 1.122-.279 1.399-.556s.457-.665.556-1.399c.102-.755.103-1.757.103-3.192l-.103-3.192c-.099-.734-.279-1.122-.556-1.399s-.665-.457-1.399-.556l-.241-.028v.675a.75.75 0 0 1-1.5 0zm-5 3.5a.75.75 0 1 1-1.5 0 .75.75 0 1 1 1.5 0m0 3.5a.75.75 0 1 1-1.5 0 .75.75 0 1 1 1.5 0M8 8.5A.75.75 0 1 0 8 7a.75.75 0 1 0 0 1.5m.75 2.75a.75.75 0 1 1-1.5 0 .75.75 0 1 1 1.5 0M11.5 8.5a.75.75 0 1 0 0-1.5.75.75 0 1 0 0 1.5m.75 2.75a.75.75 0 1 1-1.5 0 .75.75 0 1 1 1.5 0"
                    ></path>
                  </svg>
                  <span className="hidden md:block">Calendars</span>
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="flex flex-wrap items-center gap-2 text-lightBlack/[0.36] font-medium text-sm transition-all hover:text-black"
                >
                  <svg
                    className="w-4 h-4 fill-lightBlack/[.36]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M2 7.997a5.997 5.997 0 1 1 11.995 0A5.997 5.997 0 0 1 2 7.997M7.997.5a7.497 7.497 0 1 0 0 14.995A7.497 7.497 0 0 0 7.997.5m3.323 5.084a.75.75 0 0 0-.91-.91l-3.548.888c-.64.16-1.14.66-1.3 1.3l-.888 3.549a.75.75 0 0 0 .91.91l3.548-.888c.64-.16 1.14-.66 1.3-1.3zM7.226 7.017l2.335-.584-.583 2.335a.29.29 0 0 1-.21.21l-2.335.584.584-2.336a.29.29 0 0 1 .21-.21"
                    ></path>
                  </svg>
                  <span className="hidden md:block">Discover</span>
                </a>
              </li>
            </ul>
            <ul className="flex flex-wrap items-center gap-5">
              <li>
                <a
                  href=""
                  className="hidden cursor-auto md:block text-lightBlack/[0.36] text-sm focus-visible:outline-none"
                >
                  5:50 PM GMT+5:30
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="text-lightBlack/[0.64] hover:text-black text-sm font-medium focus-visible:outline-none"
                >
                  Create Event
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="text-lightBlack/[0.64] text-sm font-medium focus-visible:outline-none group"
                >
                  <svg
                    className="w-4 h-4 fill-lightBlack/[.36] group-hover:fill-black transition-all"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 7A5 5 0 1 1 2 7a5 5 0 0 1 10 0m-.965 5.096a6.5 6.5 0 1 1 1.06-1.06l2.935 2.934a.75.75 0 1 1-1.06 1.06z"
                    ></path>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="text-lightBlack/[0.64] text-sm font-medium focus-visible:outline-none group"
                >
                  <svg
                    className="w-4 h-4 fill-lightBlack/[.36] group-hover:fill-black transition-all"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.119.553c-1.716 0-2.999.64-3.838 1.657-.822.994-1.162 2.279-1.162 3.499 0 .552-.109.92-.25 1.199-.146.29-.345.52-.603.797l-.09.096C1.67 8.337 1.01 9.036 1.01 10.36q0 .033.003.065c.057.653.253 1.237.636 1.727.38.487.899.825 1.509 1.061.524.203 1.143.34 1.853.431q.022.04.05.08c.796 1.133 1.885 1.79 3.066 1.786 1.179-.004 2.263-.666 3.052-1.786a1 1 0 0 0 .05-.081c.71-.092 1.329-.23 1.852-.433.61-.237 1.129-.575 1.509-1.061.382-.49.578-1.073.635-1.724l.003-.065c0-1.323-.66-2.022-1.165-2.558l-.091-.096c-.258-.276-.458-.508-.604-.797-.14-.278-.249-.647-.249-1.2 0-1.165-.344-2.444-1.157-3.447C11.129 1.234 9.849.553 8.119.553m.835 13.236a43 43 0 0 1-1.673 0c.289.154.575.221.841.22.264 0 .547-.068.832-.22M4.62 5.709c0-.963.27-1.881.818-2.544.53-.64 1.372-1.112 2.682-1.112 1.296 0 2.141.491 2.678 1.152.555.685.822 1.609.822 2.504 0 .766.155 1.37.41 1.875.25.494.578.857.847 1.145l.057.061c.498.532.786.84.795 1.536-.04.407-.156.688-.32.899-.172.22-.44.419-.87.585-.893.347-2.307.487-4.419.487-2.113 0-3.526-.138-4.42-.484-.429-.166-.696-.365-.868-.584-.164-.211-.28-.493-.321-.903.009-.696.297-1.004.795-1.536l.057-.061c.27-.288.597-.651.847-1.145.255-.505.41-1.109.41-1.875"
                    ></path>
                  </svg>
                </a>
              </li>
              <li>
                <PorfileDropdown />
              </li>
            </ul>
          </div>
        </nav>
      </header>
  )
}

export default Header
