"use client";
import { useState } from "react";
import { Button, buttonVariants } from "./ui/button";
import CalendarDropdown from "./CalendarDropdown";
import PublicDropdown from "./PublicDropdown";

const Right = () => {
  const [position, setPosition] = useState("bottom");
  return (
    <div className="right-side">
      <div className="flex flex-wrap items-center justify-between flex-col xxs:flex-row gap-2">
        <CalendarDropdown position={position} setPosition={setPosition} />
        <PublicDropdown position={position} setPosition={setPosition} />
      </div>
      <div className="name-input-wrapper">
        <textarea
          name=""
          placeholder="Event Name"
          maxLength="140"
          autoCapitalize="words"
          spellCheck="false"
          // autoFocus
          className="font-mono"
        ></textarea>
      </div>

      <div className="flex flex-col gap-4">
        {/* Start and End Dates */}
        <div className="flex-col xxs:flex-row flex-1 gap-3 hidden xxs:flex">
          <div className="time-wrapper">
            <div className="timeline"></div>
            <div className="p-1 ps-3 gap-1 flex justify-between items-baseline">
              <div className="dot"></div>
              <div className="label">Start</div>
              <div className="date-wrapper">
                <div className="w-auto max-w-100">
                  <div className="max-w-56 rounded flex items-stretch">
                    <div className="date-input">
                      <input
                        type="text"
                        name=""
                        id=""
                        value="Wed, Sep 18"
                        onChange={() => {
                          console.log("e");
                        }}
                      />
                    </div>
                    <div className="divider"></div>
                    <div className="time-input">
                      <input
                        type="text"
                        name=""
                        id=""
                        value="Wed, Sep 18"
                        onChange={() => {
                          console.log("e");
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-1 ps-3 gap-1 flex justify-between items-baseline end-date">
              <div className="dot"></div>
              <div className="label">End</div>
              <div className="date-wrapper">
                <div className="w-auto max-w-100">
                  <div className="max-w-56 rounded flex items-stretch">
                    <div className="date-input">
                      <input
                        type="text"
                        name=""
                        id=""
                        value="Wed, Sep 18"
                        onChange={() => {
                          console.log("e");
                        }}
                      />
                    </div>
                    <div className="divider"></div>
                    <div className="time-input">
                      <input
                        type="text"
                        name=""
                        id=""
                        value="Wed, Sep 18"
                        onChange={() => {
                          console.log("e");
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="timezone">
            <div className="timezone-inner">
              <div className="timezone-wrapper">
                <div className="timezone-icon">
                  <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.394 12.674c-.604 1.208-1.178 1.42-1.394 1.42s-.79-.212-1.394-1.42c-.491-.982-.85-2.368-.932-3.97h4.652c-.082 1.602-.44 2.988-.932 3.97m.932-5.377H5.674c.082-1.603.44-2.989.932-3.971C7.21 2.118 7.784 1.906 8 1.906s.79.212 1.394 1.42c.491.982.85 2.368.932 3.97m1.408 1.406c-.09 1.915-.538 3.622-1.21 4.846a6.1 6.1 0 0 0 3.53-4.846zm2.32-1.406h-2.32c-.09-1.915-.538-3.622-1.21-4.845a6.1 6.1 0 0 1 3.53 4.845m-9.788 0c.09-1.915.538-3.622 1.21-4.845a6.1 6.1 0 0 0-3.53 4.845zm-2.32 1.406a6.1 6.1 0 0 0 3.53 4.846c-.672-1.224-1.12-2.93-1.21-4.846zM15.5 8a7.5 7.5 0 1 0-15 0 7.5 7.5 0 0 0 15 0"
                    ></path>
                  </svg>
                </div>
                <div className="text-sm font-medium gmt">GMT+05:30</div>
                <div className="whitespace-nowrap text-sm truncate gmt-state">
                  Calcutta
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Add Event Time */}
        <div className="add-event-time xxs:hidden">
          <div className="inner py-1.5 px-3">
            <div className="flex flex-start gap-2">
              <div className="icon">
                <svg
                  className="w-4 h-4 mt-1 svg-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12m0 1.5a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15m-.523-6.963A.75.75 0 0 1 7.25 8V4a.75.75 0 0 1 1.5 0v3.69l1.195 1.194a.75.75 0 0 1-1.061 1.06z"
                  ></path>
                </svg>
              </div>
              <div className="flex flex-col">
                <div className="location-text font-medium truncate">
                  Tuesday 24 September
                </div>
                <div className="virtual-link truncate text-sm">
                  15:30 - 16:30 GMT+5:30
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Add Event Location */}
        <div className="add-event-location">
          <div className="inner py-1.5 px-3">
            <div className="flex flex-start gap-2">
              <div className="icon">
                <svg
                  className="w-4 h-4 mt-1 svg-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                >
                  <g
                    fill="none"
                    fillRule="evenodd"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  >
                    <path d="M2 6.854C2 11.02 7.04 15 8 15s6-3.98 6-8.146C14 3.621 11.314 1 8 1S2 3.62 2 6.854"></path>
                    <path d="M9.5 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"></path>
                  </g>
                </svg>
              </div>
              <div className="flex flex-col">
                <div className="location-text font-medium truncate">
                  Add Event Location
                </div>
                <div className="virtual-link truncate text-sm">
                  Offline location or virtual link
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Add Description */}
        <div className="add-description">
          <div className="inner py-1.5 px-3">
            <div className="flex flex-start gap-2">
              <div className="icon">
                <svg
                  className="w-4 h-4 mt-1 svg-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M7.75 0h-.055c-1.367 0-2.47 0-3.337.117-.9.12-1.658.38-2.26.981-.602.602-.86 1.36-.981 2.26C1 4.225 1 5.328 1 6.695v2.11c0 1.368 0 2.47.117 3.337.12.9.38 1.658.981 2.26.602.602 1.36.86 2.26.982.867.116 1.97.116 3.337.116h.11c1.367 0 2.47 0 3.337-.116.9-.121 1.658-.38 2.26-.982s.86-1.36.982-2.26c.116-.867.116-1.97.116-3.337v-2.11c0-1.367 0-2.47-.116-3.337-.121-.9-.38-1.658-.982-2.26s-1.36-.86-2.26-.981C10.275 0 9.172 0 7.805 0zM3.159 2.159c.277-.277.665-.457 1.4-.556.754-.101 1.756-.103 3.191-.103s2.437.002 3.192.103c.734.099 1.122.28 1.399.556.277.277.457.665.556 1.4.101.754.103 1.756.103 3.191v2c0 1.435-.002 2.437-.103 3.192-.099.734-.28 1.122-.556 1.399-.277.277-.665.457-1.4.556-.754.101-1.756.103-3.191.103s-2.437-.002-3.192-.103c-.734-.099-1.122-.28-1.399-.556-.277-.277-.457-.665-.556-1.4-.101-.754-.103-1.756-.103-3.191v-2c0-1.435.002-2.437.103-3.192.099-.734.28-1.122.556-1.399M4.5 7.25a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75m0 3.5a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75"
                  ></path>
                </svg>
              </div>
              <div>
                <div className="description-text font-medium truncate">
                  Add Description
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Event Options */}
        <div className="event-options">
          <span className="event-text">Event Options</span>
          <div className="event-list-item first-item">
            <div className="inner py-2 px-3">
              <div className="flex flex-start gap-2">
                <div className="icon">
                  <svg
                    className="w-4 h-4 mt-1 svg-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M3.204 1.25C1.44 1.25.251 2.938.251 4.693v1.452c-.001.068-.001.163.007.247a.96.96 0 0 0 .162.466c.142.205.348.298.411.327l.005.002c.083.038.185.076.277.11l.016.007c.177.066.394.309.394.696s-.217.63-.394.696l-.017.007c-.091.034-.193.072-.276.11l-.005.002c-.063.029-.269.122-.411.327a.96.96 0 0 0-.162.465c-.008.084-.008.18-.008.247v1.453c0 1.755 1.188 3.443 2.954 3.443h9.592c1.766 0 2.954-1.688 2.954-3.443V9.854c0-.068 0-.163-.008-.247a.96.96 0 0 0-.162-.465c-.142-.205-.348-.298-.411-.327l-.005-.003a5 5 0 0 0-.276-.11l-.017-.006c-.177-.066-.394-.309-.394-.696s.217-.63.394-.696l.017-.007c.091-.034.193-.072.276-.11l.005-.002a1 1 0 0 0 .411-.327.96.96 0 0 0 .162-.466c.008-.084.008-.179.008-.247V4.693c0-1.755-1.19-3.443-2.954-3.443zM1.751 4.693c0-1.221.784-1.943 1.453-1.943H9.25v3.008a.75.75 0 0 0 1.5 0V2.75h2.046c.669 0 1.453.722 1.453 1.943v1.244c-.788.344-1.272 1.178-1.272 2.063s.484 1.72 1.273 2.063v1.244c0 1.221-.784 1.943-1.454 1.943H10.75v-2.492a.75.75 0 0 0-1.5 0v2.492H3.204c-.67 0-1.454-.722-1.454-1.943v-1.244C2.54 9.719 3.023 8.885 3.023 8S2.539 6.28 1.75 5.937z"
                    ></path>
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="ticket truncate">Tickets</div>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <div className="free truncate">Free</div>
                  <svg
                    className="w-4 h-4 mt-1 svg-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M10.217 3.22c.354-.354.456-.451.543-.51.42-.28.969-.28 1.389 0 .087.059.189.156.543.51s.45.456.509.543c.28.42.28.968 0 1.389-.058.086-.155.189-.509.543l-.53.53L9.687 3.75zm-1.59 1.59L11.1 7.287l-5.76 5.76a1.25 1.25 0 0 1-.963.363l-.49-.031c-.48-.03-.768-.05-.977-.09-.185-.036-.213-.072-.214-.074-.001 0-.037-.028-.073-.213-.04-.209-.06-.498-.09-.978l-.031-.489a1.25 1.25 0 0 1 .363-.963zm1.3-3.347c-.227.152-.441.366-.719.644l-.052.052-1.06 1.06-6.29 6.291a2.75 2.75 0 0 0-.8 2.12l.03.489.003.042c.027.424.052.81.113 1.124.066.345.191.697.485.99.293.293.645.419.99.485.314.06.7.085 1.124.112l.042.003.489.031a2.75 2.75 0 0 0 2.12-.8l6.29-6.29 1.06-1.06.052-.053c.278-.277.493-.491.644-.718a2.75 2.75 0 0 0 0-3.056c-.151-.226-.366-.44-.644-.718l-.051-.052-.052-.052c-.278-.278-.492-.492-.719-.644a2.75 2.75 0 0 0-3.055 0m.578 11.986a.75.75 0 1 0 0 1.5h4a.75.75 0 1 0 0-1.5z"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="event-list-item middle-list-item">
            <div className="inner py-2 px-3">
              <div className="flex flex-start gap-2">
                <div className="icon">
                  <svg
                    className="w-4 h-4 mt-1 svg-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M7.75.25C5.336.25 3.5 2.086 3.5 4.5c0 1.225.474 2.007.9 2.575.09.12.165.216.23.298.102.13.18.228.255.345.101.158.115.233.115.282 0 .34-.126.536-.392.728-.3.217-.708.375-1.25.585l-.13.05c-.55.215-1.233.49-1.767.954C.88 10.821.5 11.524.5 12.5c0 .752.341 1.354.85 1.799.488.427 1.133.717 1.81.92 1.354.406 3.065.531 4.59.531a.75.75 0 0 0 0-1.5c-1.475 0-3.014-.125-4.16-.468-.573-.173-.99-.383-1.252-.612-.242-.211-.338-.422-.338-.67 0-.524.18-.821.446-1.052.309-.269.751-.463 1.326-.687l.159-.061c.493-.19 1.087-.418 1.555-.756C6.064 9.527 6.5 8.91 6.5 8c0-.451-.174-.813-.353-1.093-.112-.173-.265-.37-.397-.537l-.15-.195c-.324-.432-.6-.9-.6-1.675 0-1.586 1.164-2.75 2.75-2.75S10.5 2.914 10.5 4.5c0 .672-.208 1.11-.463 1.484a.75.75 0 1 0 1.24.843A3.96 3.96 0 0 0 12 4.5C12 2.086 10.164.25 7.75.25m7.561 9.247a.75.75 0 0 0-1.122-.994l-2.962 3.34-.896-1.096a.75.75 0 0 0-1.161.95l1.454 1.778a.75.75 0 0 0 1.142.023z"
                    ></path>
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="free truncate">Required Approval</div>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <div className="free truncate">
                    <label className="switch">
                      <input type="checkbox" />
                      <span className="slider"></span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="event-list-item last-item">
            <div className="inner py-2 px-3">
              <div className="flex flex-start gap-2">
                <div className="icon">
                  <svg
                    className="w-4 h-4 mt-1 svg-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M8 15.5a.75.75 0 0 0 .75-.75V10.5h.041c.872 0 1.609 0 2.159-.08s1.195-.277 1.5-.928c.305-.65.043-1.273-.248-1.746-.29-.474-.762-1.04-1.32-1.71l-.04-.047-.422-.507-.033-.04c-.399-.478-.748-.897-1.072-1.19-.348-.314-.769-.578-1.315-.578s-.966.264-1.315.578c-.324.293-.673.712-1.071 1.19l-.034.04-.422.507-.04.047c-.557.67-1.03 1.236-1.32 1.71-.29.473-.552 1.096-.248 1.746.305.651.95.848 1.5.928s1.288.08 2.16.08h.04v4.25c0 .414.336.75.75.75M4.921 8.85c.046.022.145.057.345.086C5.695 8.998 6.321 9 7.27 9h1.46c.95 0 1.576-.002 2.004-.064.2-.03.3-.064.345-.086a1.3 1.3 0 0 0-.155-.32c-.227-.369-.626-.851-1.234-1.58l-.422-.507c-.442-.53-.723-.865-.958-1.077-.213-.193-.29-.192-.308-.192h-.003c-.02 0-.096 0-.308.192-.235.212-.516.546-.958 1.077l-.423.507c-.608.729-1.007 1.211-1.234 1.58-.106.173-.143.271-.155.32M14 2a.75.75 0 0 0 0-1.5H2A.75.75 0 1 0 2 2z"
                    ></path>
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="free truncate">Capacity</div>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <div className="free truncate">Unlimited</div>
                  <svg
                    className="w-4 h-4 mt-1 svg-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M10.217 3.22c.354-.354.456-.451.543-.51.42-.28.969-.28 1.389 0 .087.059.189.156.543.51s.45.456.509.543c.28.42.28.968 0 1.389-.058.086-.155.189-.509.543l-.53.53L9.687 3.75zm-1.59 1.59L11.1 7.287l-5.76 5.76a1.25 1.25 0 0 1-.963.363l-.49-.031c-.48-.03-.768-.05-.977-.09-.185-.036-.213-.072-.214-.074-.001 0-.037-.028-.073-.213-.04-.209-.06-.498-.09-.978l-.031-.489a1.25 1.25 0 0 1 .363-.963zm1.3-3.347c-.227.152-.441.366-.719.644l-.052.052-1.06 1.06-6.29 6.291a2.75 2.75 0 0 0-.8 2.12l.03.489.003.042c.027.424.052.81.113 1.124.066.345.191.697.485.99.293.293.645.419.99.485.314.06.7.085 1.124.112l.042.003.489.031a2.75 2.75 0 0 0 2.12-.8l6.29-6.29 1.06-1.06.052-.053c.278-.277.493-.491.644-.718a2.75 2.75 0 0 0 0-3.056c-.151-.226-.366-.44-.644-.718l-.051-.052-.052-.052c-.278-.278-.492-.492-.719-.644a2.75 2.75 0 0 0-3.055 0m.578 11.986a.75.75 0 1 0 0 1.5h4a.75.75 0 1 0 0-1.5z"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Create Event Button */}
        <Button
          variant={null}
          size={null}
          className={`custom-button px-5 !leading-5 py-3 mt-4 rounded-lg text-lg transition-all focus-visible:outline-0 text-white`}
        >
          Create Event
        </Button>
      </div>
    </div>
  );
};

export default Right;
