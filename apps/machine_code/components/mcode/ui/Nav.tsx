"use client";
import React from "react";

const Nav = () => {
  return (
    <div>
      <div className="px-5 py-0 block desktop-s:flex flex-col bg-white w-full h-screen min-h-full fixed left-0 top-0 z-30 overflow-y-scroll transition tablet-l:max-h-[100dvh] opacity-100 select-none pointer-events-none ">
        <div className="fixed top-0 left-0 bg-white w-full h-20 z-10" />
        <ul className="mt-16 w-full top-20">
          {/*[*/}
          <li className="relative border-tertiary-300 border-t first:border-none">
            <button
              className="flex gap-x-1 items-center transition-colors h-full desktop-s:justify-between desktop-s:w-full text-tertiary-900 hover:text-primary-500 active:text-primary-500"
              tabIndex={0}
            >
              <span className="font-heading font-bold text-heading-s desktop-s:py-5 desktop-s:select-none desktop-s:text-body-eyebrow desktop-s:uppercase desktop-s:text-tertiary-600 desktop-s:mt-4">
                Product
              </span>
              <svg
                fill="none"
                height={16}
                viewBox="0 0 12 12"
                width={16}
                xmlns="http://www.w3.org/2000/svg"
                className="-rotate-90 desktop-s:hidden"
                data-id="icon-chevron"
                size={16}
                style={{ color: "currentColor" }}
              >
                <path
                  d="M7.88428 2.5L4.11505 6L7.88428 9.5"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>
            </button>
            <ul className="grid mb-10 mt-1">
              {/*[*/}
              <li className="w-full">
                <a
                  href="/product/save-your-time"
                  className="p-4 flex gap-4 bg-white hover:bg-tertiary-100 rounded-xl transition-colors desktop-s:px-0 desktop-s:py-3 relative"
                >
                  <svg
                    fill="none"
                    height={40}
                    viewBox="0 0 40 40"
                    width={40}
                    xmlns="http://www.w3.org/2000/svg"
                    data-id="illucon-organizing"
                  >
                    <path
                      d="M32 16H24C21.7909 16 20 17.7909 20 20V32C20 34.2091 21.7909 36 24 36H32C34.2091 36 36 34.2091 36 32V20C36 17.7909 34.2091 16 32 16Z"
                      stroke="#111827"
                      strokeLinejoin="round"
                      strokeWidth={2}
                    />
                    <path
                      d="M28 26V14C28 11.7909 26.2091 10 24 10H20V20C20 22.2091 18.2091 24 16 24H12V26C12 28.2091 13.7909 30 16 30H24C26.2091 30 28 28.2091 28 26Z"
                      fill="#5DEAEA"
                      stroke="#111827"
                      strokeLinejoin="round"
                      strokeWidth={2}
                    />
                    <path
                      d="M16 4H8C5.79086 4 4 5.79086 4 8V20C4 22.2091 5.79086 24 8 24H16C18.2091 24 20 22.2091 20 20V8C20 5.79086 18.2091 4 16 4Z"
                      stroke="#111827"
                      strokeLinejoin="round"
                      strokeWidth={2}
                    />
                  </svg>
                  <div className="grid flex-1 grid-flow-row -mt-0.5">
                    <span className="font-heading text-heading-base font-bold desktop-s:select-none">
                      Save your time
                    </span>
                    <p className="text-body-base text-tertiary-600 line-clamp-1 desktop-s:select-none">
                      Organize your lessons and class materials.
                    </p>
                  </div>
                  {/**/}
                </a>
              </li>
              <li className="w-full">
                <a
                  href="/product/control-the-clock"
                  className="p-4 flex gap-4 bg-white hover:bg-tertiary-100 rounded-xl transition-colors desktop-s:px-0 desktop-s:py-3 relative"
                >
                  <svg
                    fill="none"
                    height={40}
                    viewBox="0 0 40 40"
                    width={40}
                    xmlns="http://www.w3.org/2000/svg"
                    data-id="illucon-clock"
                  >
                    <circle
                      cx={20}
                      cy={20}
                      r={17}
                      stroke="#172636"
                      strokeWidth={2}
                    />
                    <path
                      d="M20 7V9"
                      stroke="#172636"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                    />
                    <path
                      d="M20 31V33"
                      stroke="#172636"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                    />
                    <path
                      d="M31 20L33 20"
                      stroke="#172636"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                    />
                    <path
                      d="M7 20L9 20"
                      stroke="#172636"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                    />
                    <path
                      d="M29.1924 10.8076L28.4853 11.5147"
                      stroke="#172636"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                    />
                    <path
                      d="M11.5146 28.4854L10.8075 29.1925"
                      stroke="#172636"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                    />
                    <path
                      d="M28.4854 28.4854L29.1925 29.1925"
                      stroke="#172636"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                    />
                    <path
                      d="M10.8076 10.8076L11.5147 11.5147"
                      stroke="#172636"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                    />
                    <path
                      d="M29 11L20 20L14 14"
                      stroke="#172636"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                    />
                    <path
                      d="M23 20C23 21.6569 21.6569 23 20 23C18.3431 23 17 21.6569 17 20C17 18.3431 18.3431 17 20 17C21.6569 17 23 18.3431 23 20Z"
                      fill="#FDA5BD"
                      stroke="#172636"
                      strokeWidth={2}
                    />
                  </svg>
                  <div className="grid flex-1 grid-flow-row -mt-0.5">
                    <span className="font-heading text-heading-base font-bold desktop-s:select-none">
                      Control the clock
                    </span>
                    <p className="text-body-base text-tertiary-600 line-clamp-1 desktop-s:select-none">
                      Help students stay on track.
                    </p>
                  </div>
                  {/**/}
                </a>
              </li>
              <li className="w-full">
                <a
                  href="/product/give-instruction"
                  className="p-4 flex gap-4 bg-white hover:bg-tertiary-100 rounded-xl transition-colors desktop-s:px-0 desktop-s:py-3 relative"
                >
                  <svg
                    fill="none"
                    height={40}
                    viewBox="0 0 40 40"
                    width={40}
                    xmlns="http://www.w3.org/2000/svg"
                    data-id="illucon-instructions"
                  >
                    <path
                      d="M3 36V32.1992C3 31.6623 3.42391 31.2213 3.96035 31.2L7.0793 31.0762C8.15218 31.0336 9 30.1515 9 29.0778V26.7403C9 26.5884 9.06904 26.4448 9.18765 26.3499L11.012 24.8904C11.2622 24.6903 11.2622 24.3097 11.012 24.1096L9.56152 22.9492C9.28943 22.7315 9.31783 22.3093 9.61662 22.13L10.9509 21.3295C11.2298 21.1621 11.2772 20.7772 11.0472 20.5472L9.54285 19.0428C9.2873 18.7873 9.37893 18.3534 9.71598 18.223L12.3831 17.1911C12.6925 17.0713 12.8017 16.689 12.6021 16.424L4 5"
                      stroke="#172636"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                    />
                    <circle cx="3.5" cy="13.5" fill="#172636" r="1.5" />
                    <path
                      d="M18 7C18 4.79086 19.7909 3 22 3H33C35.2091 3 37 4.79086 37 7V16C37 18.2091 35.2091 20 33 20H29.1079C28.383 20 27.6716 20.197 27.05 20.57L23 23V20H22C19.7909 20 18 18.2091 18 16V7Z"
                      fill="#A6A7FC"
                      stroke="#172636"
                      strokeLinejoin="round"
                      strokeWidth={2}
                    />
                    <path
                      d="M23 9H32"
                      stroke="#172636"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                    />
                    <path
                      d="M23 14H28.5"
                      stroke="#172636"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                    />
                  </svg>
                  <div className="grid flex-1 grid-flow-row -mt-0.5">
                    <span className="font-heading text-heading-base font-bold desktop-s:select-none">
                      Give instruction
                    </span>
                    <p className="text-body-base text-tertiary-600 line-clamp-1 desktop-s:select-none">
                      Teach students how to teach themselves.
                    </p>
                  </div>
                  {/**/}
                </a>
              </li>
              <li className="w-full">
                <a
                  href="/product/games-for-learners"
                  className="p-4 flex gap-4 bg-white hover:bg-tertiary-100 rounded-xl transition-colors desktop-s:px-0 desktop-s:py-3 relative"
                >
                  <svg
                    fill="none"
                    height={40}
                    viewBox="0 0 40 40"
                    width={40}
                    xmlns="http://www.w3.org/2000/svg"
                    data-id="illucon-simple-to-use"
                  >
                    <path
                      d="M17.2408 34.8688L8.72118 26.3492L7.08207 27.9883C6.30102 28.7693 6.30102 30.0357 7.08207 30.8167L12.7732 36.5079C13.5543 37.2889 14.8206 37.2889 15.6017 36.5079L17.2408 34.8688Z"
                      fill="#A6A7FC"
                    />
                    <path
                      d="M17.2408 34.8688L8.72118 26.3492M17.2408 34.8688L23.3903 30.7213C24.5588 29.9332 25.6488 29.0348 26.6453 28.0382L28.1257 26.5578C28.5646 26.1189 28.8137 25.5263 28.8183 24.9102C28.8229 24.2941 28.5826 23.705 28.1502 23.2726C27.7178 22.8403 27.1287 22.5999 26.5126 22.6045C25.8966 22.6091 25.3039 22.8582 24.865 23.2971L26.1888 21.9733C26.6277 21.5344 26.8769 20.9417 26.8815 20.3256C26.886 19.7095 26.6457 19.1205 26.2133 18.6881C25.7809 18.2557 25.1919 18.0153 24.5758 18.0199C23.9597 18.0245 23.367 18.2737 22.9281 18.7125L27.5616 14.079C28.0005 13.6402 28.2496 13.0475 28.2542 12.4314C28.2588 11.8153 28.0185 11.2263 27.5861 10.7939C27.1537 10.3615 26.5646 10.1211 25.9486 10.1257C25.3325 10.1303 24.7398 10.3794 24.3009 10.8183L15.3649 19.7543L16.3244 15.7494C16.4836 15.1547 16.4021 14.5246 16.0975 13.9967C15.793 13.4688 15.2902 13.0858 14.6989 12.9315C14.1075 12.7771 13.4757 12.8639 12.9411 13.1728C12.4066 13.4817 12.0128 13.9877 11.8458 14.5804C9.4426 23.099 8.42935 23.6444 8.72118 26.3492M17.2408 34.8688L15.6017 36.5079C14.8206 37.2889 13.5543 37.2889 12.7732 36.5079L7.08207 30.8167C6.30102 30.0357 6.30102 28.7693 7.08207 27.9883L8.72118 26.3492"
                      stroke="#111827"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                    />
                    <path
                      clipRule="evenodd"
                      d="M27.5 2C28.0523 2 28.5 2.44772 28.5 3V6.5C28.5 7.05228 28.0523 7.5 27.5 7.5C26.9477 7.5 26.5 7.05228 26.5 6.5V3C26.5 2.44772 26.9477 2 27.5 2ZM34.0503 4.29848C34.4408 4.689 34.4408 5.32217 34.0503 5.71269L31.5754 8.18757C31.1849 8.57809 30.5517 8.57809 30.1612 8.18757C29.7707 7.79704 29.7707 7.16388 30.1612 6.77335L32.6361 4.29848C33.0266 3.90795 33.6597 3.90795 34.0503 4.29848ZM35.5206 12.0206C36.0728 12.0206 36.5206 11.5729 36.5206 11.0206C36.5206 10.4683 36.0728 10.0206 35.5206 10.0206H32.0206C31.4683 10.0206 31.0206 10.4683 31.0206 11.0206C31.0206 11.5729 31.4683 12.0206 32.0206 12.0206H35.5206Z"
                      fill="#111827"
                      fillRule="evenodd"
                    />
                  </svg>
                  <div className="grid flex-1 grid-flow-row -mt-0.5">
                    <span className="font-heading text-heading-base font-bold desktop-s:select-none">
                      Games for learners
                    </span>
                    <p className="text-body-base text-tertiary-600 line-clamp-1 desktop-s:select-none">
                      Learn through play with ready-made games.
                    </p>
                  </div>
                  {/**/}
                </a>
              </li>
              <li className="w-full">
                <a
                  href="/product/engage-students"
                  className="p-4 flex gap-4 bg-white hover:bg-tertiary-100 rounded-xl transition-colors desktop-s:px-0 desktop-s:py-3 relative"
                >
                  <svg
                    fill="none"
                    height={40}
                    viewBox="0 0 40 40"
                    width={40}
                    xmlns="http://www.w3.org/2000/svg"
                    data-id="illucon-engagement"
                  >
                    <rect
                      fill="white"
                      height={23}
                      rx={2}
                      stroke="#172636"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      width={8}
                      x={3}
                      y={14}
                    />
                    <rect
                      fill="#ABF263"
                      height={34}
                      rx={2}
                      stroke="#172636"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      width={8}
                      x={16}
                      y={3}
                    />
                    <rect
                      fill="white"
                      height={16}
                      rx={2}
                      stroke="#172636"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      width={8}
                      x={29}
                      y={21}
                    />
                  </svg>
                  <div className="grid flex-1 grid-flow-row -mt-0.5">
                    <span className="font-heading text-heading-base font-bold desktop-s:select-none">
                      Engage students
                    </span>
                    <p className="text-body-base text-tertiary-600 line-clamp-1 desktop-s:select-none">
                      Keep students glued to the right screen.
                    </p>
                  </div>
                  {/**/}
                </a>
              </li>
              {/*]*/}
              <li className="pt-4">
                <ul className="grid grid-flow-col gap-4 w-fit tablet-s:grid-flow-row tablet-s:w-full tablet-s:gap-3">
                  {/*[*/}
                  <li className="inline-block tablet-s:w-full">
                    <a
                      aria-current="page"
                      href="/widgets"
                      className="router-link-active router-link-exact-active p-3 rounded-xl bg-primary-500/[.16] text-primary-500 transition-colors text-heading-s flex items-center gap-2 justify-center desktop-s:select-none"
                    >
                      <svg
                        fill="none"
                        height={16}
                        viewBox="0 0 16 16"
                        width={16}
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-white"
                        data-id="icon-meet-widgets-simple"
                        size={16}
                        style={{ color: "currentColor" }}
                      >
                        <g clipPath="url(#clip0_1603_39266)">
                          <rect
                            height={5}
                            rx="1.5"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            width={5}
                            x="9.5"
                            y="9.5"
                          />
                          <rect
                            height={5}
                            rx="1.5"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            width={5}
                            x="1.5"
                            y="1.5"
                          />
                          <rect
                            height={5}
                            rx="1.5"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            width={5}
                            x="1.5"
                            y="9.5"
                          />
                          <rect
                            height={5}
                            rx="1.5"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            width={5}
                            x="9.5"
                            y="1.5"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1603_39266">
                            <rect fill="currentColor" height={16} width={16} />
                          </clipPath>
                        </defs>
                      </svg>{" "}
                      Meet the widgets
                    </a>
                  </li>
                  <li className="inline-block tablet-s:w-full">
                    <a
                      href="/templates"
                      className="p-3 rounded-xl bg-primary-500/[.16] text-primary-500 transition-colors text-heading-s flex items-center gap-2 justify-center desktop-s:select-none"
                    >
                      <svg
                        fill="none"
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-white"
                        data-id="icon-fire"
                        height={16}
                        size={16}
                        style={{ color: "currentColor" }}
                        width={16}
                      >
                        <path
                          d="M7 6.18L8.64188 1.5C9.99125 2.6648 13 5.66975 13 9.3C13 10.6791 12.4732 12.0018 11.5355 12.977C10.5979 13.9521 9.32608 14.5 8 14.5C6.67392 14.5 5.40215 13.9521 4.46447 12.977C3.52678 12.0018 3 10.6791 3 9.3C3 7.31295 3.90125 5.5131 4.9375 4.1L7 6.18Z"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                        />
                      </svg>{" "}
                      Explore 100+ ready-made screens
                    </a>
                  </li>
                  {/*]*/}
                </ul>
              </li>
            </ul>
            {/**/}
          </li>
          <li className="relative border-tertiary-300 border-t first:border-none">
            <a
              href="/schools-districts"
              className="flex gap-x-1 items-center transition-colors h-full desktop-s:justify-between desktop-s:w-full text-tertiary-900 hover:text-primary-500 active:text-primary-500"
              tabIndex={0}
            >
              <span className="font-heading font-bold text-heading-s desktop-s:py-5 desktop-s:select-none desktop-s:text-heading-l">
                Schools &amp; Districts
              </span>
              {/**/}
            </a>
            {/**/}
            {/**/}
          </li>
          <li className="relative border-tertiary-300 border-t first:border-none">
            <a
              href="/pricing"
              className="flex gap-x-1 items-center transition-colors h-full desktop-s:justify-between desktop-s:w-full text-tertiary-900 hover:text-primary-500 active:text-primary-500"
              tabIndex={0}
            >
              <span className="font-heading font-bold text-heading-s desktop-s:py-5 desktop-s:select-none desktop-s:text-heading-l">
                Pricing
              </span>
              {/**/}
            </a>
            {/**/}
            {/**/}
          </li>
          <li className="relative border-tertiary-300 border-t first:border-none">
            <a
              href="/about"
              className="flex gap-x-1 items-center transition-colors h-full desktop-s:justify-between desktop-s:w-full text-tertiary-900 hover:text-primary-500 active:text-primary-500"
              tabIndex={0}
            >
              <span className="font-heading font-bold text-heading-s desktop-s:py-5 desktop-s:select-none desktop-s:text-heading-l">
                About us
              </span>
              {/**/}
            </a>
            {/**/}
            {/**/}
          </li>
          <li className="relative border-tertiary-300 border-t first:border-none">
            <button
              className="flex gap-x-1 items-center transition-colors h-full desktop-s:justify-between desktop-s:w-full text-tertiary-900 hover:text-primary-500 active:text-primary-500"
              tabIndex={0}
            >
              <span className="font-heading font-bold text-heading-s desktop-s:py-5 desktop-s:select-none desktop-s:text-body-eyebrow desktop-s:uppercase desktop-s:text-tertiary-600 desktop-s:mt-4">
                Resources
              </span>
              <svg
                fill="none"
                height={16}
                viewBox="0 0 12 12"
                width={16}
                xmlns="http://www.w3.org/2000/svg"
                className="-rotate-90 desktop-s:hidden"
                data-id="icon-chevron"
                size={16}
                style={{ color: "currentColor" }}
              >
                <path
                  d="M7.88428 2.5L4.11505 6L7.88428 9.5"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>
            </button>
            {/**/}
            <ul className="grid mt-1">
              {/*[*/}
              <li className="w-full">
                <a
                  href="/templates"
                  className="p-4 flex gap-4 bg-white hover:bg-tertiary-100 rounded-xl transition-colors desktop-s:px-0 desktop-s:py-3 relative"
                >
                  <svg
                    fill="none"
                    height={40}
                    viewBox="0 0 40 40"
                    width={40}
                    xmlns="http://www.w3.org/2000/svg"
                    data-id="illucon-knowledge-base"
                  >
                    <path
                      d="M15.8263 10.3911H4V31.0872H15.8263V10.3911Z"
                      fill="#ABF263"
                    />
                    <path
                      d="M20.9616 16.8581L32.5034 14.3783L30.358 4.17988C30.3187 3.98897 30.242 3.80773 30.1323 3.64658C30.0227 3.48544 29.8822 3.34757 29.719 3.24091C29.5559 3.13426 29.3732 3.06093 29.1816 3.02514C28.99 2.98934 28.7932 2.9918 28.6026 3.03236L19.9527 4.88022C19.5682 4.96519 19.2328 5.19883 19.0199 5.53014C18.807 5.86145 18.7338 6.26354 18.8163 6.64863L20.9616 16.8581Z"
                      fill="#ABF263"
                    />
                    <path
                      d="M14.348 4.47754H5.47829C4.66185 4.47754 4 5.13939 4 5.95583V35.5217C4 36.3381 4.66185 37 5.47829 37H14.348C15.1645 37 15.8263 36.3381 15.8263 35.5217V5.95583C15.8263 5.13939 15.1645 4.47754 14.348 4.47754Z"
                      stroke="#172636"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                    />
                    <path
                      d="M35.3528 35.109L26.703 36.9569C26.5123 36.9974 26.3155 36.9999 26.1239 36.9641C25.9323 36.9283 25.7497 36.855 25.5865 36.7483C25.4233 36.6417 25.2829 36.5038 25.1732 36.3426C25.0636 36.1815 24.9868 36.0003 24.9475 35.8093L18.8163 6.65742C18.7338 6.27233 18.807 5.87024 19.0199 5.53893C19.2328 5.20762 19.5682 4.97398 19.9527 4.88901L28.6026 3.04115C28.7932 3.00059 28.99 2.99813 29.1816 3.03392C29.3732 3.06972 29.5559 3.14305 29.719 3.2497C29.8822 3.35636 30.0226 3.49422 30.1323 3.65537C30.242 3.81652 30.3187 3.99776 30.358 4.18867L36.4893 33.3406C36.5717 33.7257 36.4985 34.1278 36.2856 34.4591C36.0727 34.7904 35.7374 35.024 35.3528 35.109Z"
                      stroke="#172636"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                    />
                    <path
                      d="M4 10.3911H15.8263"
                      stroke="#172636"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                    />
                    <path
                      d="M4 31.0864H15.8263"
                      stroke="#172636"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                    />
                    <path
                      d="M19.7363 11.0331L31.2762 8.55322"
                      stroke="#172636"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                    />
                    <path
                      d="M20.9609 16.8656L32.5027 14.3857"
                      stroke="#172636"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                    />
                    <path
                      d="M24.0298 31.4452L35.5697 28.9653"
                      stroke="#172636"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                    />
                  </svg>
                  <div className="grid flex-1 grid-flow-row -mt-0.5">
                    <span className="font-heading text-heading-base font-bold desktop-s:select-none">
                      Our library
                    </span>
                    <p className="text-body-base text-tertiary-600 line-clamp-1 desktop-s:select-none">
                      Get inspired by 100+ ready-made screens
                    </p>
                  </div>
                  {/**/}
                </a>
              </li>
              <li className="w-full">
                <a
                  href="/blog"
                  className="p-4 flex gap-4 bg-white hover:bg-tertiary-100 rounded-xl transition-colors desktop-s:px-0 desktop-s:py-3 relative"
                >
                  <svg
                    fill="none"
                    height={40}
                    viewBox="0 0 40 40"
                    width={40}
                    xmlns="http://www.w3.org/2000/svg"
                    data-id="illucon-blog"
                  >
                    <path
                      d="M20 34.7692C20 33.3819 20.5511 32.0515 21.5321 31.0705C22.513 30.0896 23.8435 29.5385 25.2308 29.5385H35.6923C36.0391 29.5385 36.3717 29.4007 36.617 29.1555C36.8622 28.9102 37 28.5776 37 28.2308V7.30769C37 6.96087 36.8622 6.62825 36.617 6.38301C36.3717 6.13777 36.0391 6 35.6923 6H25.2308C23.8435 6 22.513 6.5511 21.5321 7.53206C20.5511 8.51302 20 9.84348 20 11.2308V34.7692Z"
                      fill="#FDE68A"
                    />
                    <path
                      d="M20 11.2308C20 9.84348 20.5511 8.51302 21.5321 7.53206C22.513 6.5511 23.8435 6 25.2308 6H35.6923C36.0391 6 36.3717 6.13777 36.617 6.38301C36.8622 6.62825 37 6.96087 37 7.30769V28.2308C37 28.5776 36.8622 28.9102 36.617 29.1555C36.3717 29.4007 36.0391 29.5385 35.6923 29.5385H25.2308C23.8435 29.5385 22.513 30.0896 21.5321 31.0705C20.5511 32.0515 20 33.3819 20 34.7692"
                      stroke="#172636"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                    />
                    <path
                      d="M3 28.2308C3 28.5776 3.13777 28.9102 3.38301 29.1555C3.62825 29.4007 3.96087 29.5385 4.30769 29.5385H14.7692C16.1565 29.5385 17.487 30.0896 18.4679 31.0705C19.4489 32.0515 20 33.3819 20 34.7692V11.2308C20 9.84348 19.4489 8.51302 18.4679 7.53206C17.487 6.5511 16.1565 6 14.7692 6H4.30769C3.96087 6 3.62825 6.13777 3.38301 6.38301C3.13777 6.62825 3 6.96087 3 7.30769V28.2308Z"
                      stroke="#172636"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                    />
                    <path
                      d="M25.231 12.5381H31.7694"
                      stroke="#172636"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                    />
                    <path
                      d="M25.231 17.769H31.7694"
                      stroke="#172636"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                    />
                    <path
                      d="M25.231 23H31.7694"
                      stroke="#172636"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                    />
                  </svg>
                  <div className="grid flex-1 grid-flow-row -mt-0.5">
                    <span className="font-heading text-heading-base font-bold desktop-s:select-none">
                      Our blog
                    </span>
                    <p className="text-body-base text-tertiary-600 line-clamp-1 desktop-s:select-none">
                      Find out what we’re finding out.
                    </p>
                  </div>
                  {/**/}
                </a>
              </li>
              <li className="w-full">
                <a
                  aria-current="page"
                  href="/widgets"
                  className="router-link-active router-link-exact-active p-4 flex gap-4 bg-white hover:bg-tertiary-100 rounded-xl transition-colors desktop-s:px-0 desktop-s:py-3 relative"
                >
                  <svg
                    fill="none"
                    height={40}
                    viewBox="0 0 40 41"
                    width={40}
                    xmlns="http://www.w3.org/2000/svg"
                    data-id="illucon-widgets"
                  >
                    <rect
                      height={12}
                      rx={3}
                      stroke="#172636"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      width={12}
                      x={4}
                      y="24.5"
                    />
                    <rect
                      fill="#A6A7FC"
                      height={12}
                      rx={3}
                      stroke="#172636"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      width={16}
                      x={20}
                      y="24.5"
                    />
                    <rect
                      height={16}
                      rx={3}
                      stroke="#172636"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      width={16}
                      x={20}
                      y="4.5"
                    />
                    <rect
                      fill="#A6A7FC"
                      height={16}
                      rx={3}
                      stroke="#172636"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      width={12}
                      x={4}
                      y="4.5"
                    />
                  </svg>
                  <div className="grid flex-1 grid-flow-row -mt-0.5">
                    <span className="font-heading text-heading-base font-bold desktop-s:select-none">
                      Meet the widgets
                    </span>
                    <p className="text-body-base text-tertiary-600 line-clamp-1 desktop-s:select-none">
                      Get to know our educational tools
                    </p>
                  </div>
                  {/**/}
                </a>
              </li>
              <li className="w-full">
                <a
                  href="https://help.classroomscreen.com/"
                  rel="noopener noreferrer"
                  className="p-4 flex gap-4 bg-white hover:bg-tertiary-100 rounded-xl transition-colors desktop-s:px-0 desktop-s:py-3 relative"
                >
                  <svg
                    fill="none"
                    height={40}
                    viewBox="0 0 40 40"
                    width={40}
                    xmlns="http://www.w3.org/2000/svg"
                    data-id="illucon-templates"
                  >
                    <rect
                      height={26}
                      rx={6}
                      stroke="#172636"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      transform="rotate(-90 7 36.5)"
                      width={33}
                      x={7}
                      y="36.5"
                    />
                    <path
                      d="M10 30H29"
                      stroke="#172636"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                    />
                    <path
                      d="M10 25.5H23"
                      stroke="#172636"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                    />
                    <path
                      d="M10 17.5H23"
                      stroke="#172636"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                    />
                    <path
                      d="M10 21.5H29"
                      stroke="#172636"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                    />
                    <path
                      d="M35 8.5V5.5C35 3.29086 33.2091 1.5 31 1.5H28C25.7909 1.5 24 3.29086 24 5.5V8.5C24 10.7091 25.7909 12.5 28 12.5H31C33.2091 12.5 35 10.7091 35 8.5Z"
                      fill="#FDA5BD"
                      stroke="#172636"
                      strokeLinejoin="round"
                      strokeWidth={2}
                    />
                  </svg>
                  <div className="grid flex-1 grid-flow-row -mt-0.5">
                    <span className="font-heading text-heading-base font-bold desktop-s:select-none">
                      Help center
                    </span>
                    <p className="text-body-base text-tertiary-600 line-clamp-1 desktop-s:select-none">
                      Find answers, guides, and hidden gems.
                    </p>
                  </div>
                  <svg
                    fill="none"
                    height={16}
                    viewBox="0 0 14 14"
                    width={16}
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute right-3 top-3 rotate-[135deg] text-tertiary-700 tablet-m:hidden"
                    data-id="icon-arrow"
                    size={16}
                    style={{ color: "currentColor" }}
                  >
                    <path
                      d="M11 7H3"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      vectorEffect="non-scaling-stroke"
                    />
                    <path
                      d="M6 4L3 7L6 10"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      vectorEffect="non-scaling-stroke"
                    />
                  </svg>
                </a>
              </li>
              {/*]*/}
              <li className="pt-4">
                <ul className="grid grid-flow-col gap-4 w-fit tablet-s:grid-flow-row tablet-s:w-full tablet-s:gap-3">
                  {/*[*/}
                  <li className="inline-block tablet-s:w-full">
                    <a
                      href="/blog/the-ultimate-getting-started-guide"
                      className="p-3 rounded-xl bg-primary-500/[.16] text-primary-500 transition-colors text-heading-s flex items-center gap-2 justify-center desktop-s:select-none"
                    >
                      <svg
                        fill="none"
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-white"
                        data-id="icon-guide"
                        height={16}
                        size={16}
                        style={{ color: "currentColor" }}
                        width={16}
                      >
                        <path
                          d="M5.5 4.5H9.5"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                        />
                        <path
                          d="M5.5 7H7.5"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                        />
                        <rect
                          height={12}
                          rx={2}
                          stroke="currentColor"
                          strokeWidth="1.5"
                          width={10}
                          x={3}
                          y={2}
                        />
                      </svg>{" "}
                      Getting started guide
                    </a>
                  </li>
                  <li className="inline-block tablet-s:w-full">
                    <a
                      href="https://7de7f4b1.sibforms.com/serve/MUIFAJPXQ1THD3iMa17nBLiLK3Oa-zyJSjjXyUzgKxveB2Qbq9FaCcgz8DMCZsM-kqk80nle2s5dkqQzMygpDtwRBsJMzs9k20ZzZ5-aInOJo7g7WAny0oyPUQwEo4lzyam5yqyRJHlbOgNvH6az6oLwspah3r7f8pNfF6jc4vl9AWhj9Xit8yFGF6yPw4awAtHR-3rgu-ek4MlQ"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl bg-primary-500/[.16] text-primary-500 transition-colors text-heading-s flex items-center gap-2 justify-center desktop-s:select-none"
                    >
                      <svg
                        fill="none"
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-white"
                        data-id="icon-fire"
                        height={16}
                        size={16}
                        style={{ color: "currentColor" }}
                        width={16}
                      >
                        <path
                          d="M7 6.18L8.64188 1.5C9.99125 2.6648 13 5.66975 13 9.3C13 10.6791 12.4732 12.0018 11.5355 12.977C10.5979 13.9521 9.32608 14.5 8 14.5C6.67392 14.5 5.40215 13.9521 4.46447 12.977C3.52678 12.0018 3 10.6791 3 9.3C3 7.31295 3.90125 5.5131 4.9375 4.1L7 6.18Z"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                        />
                      </svg>{" "}
                      Receive our newsletter
                    </a>
                  </li>
                  {/*]*/}
                </ul>
              </li>
            </ul>
          </li>
          {/*]*/}
        </ul>
        <div className="flex gap-4 w-full border-tertiary-300 border-t mt-10 py-6 tablet-s:flex-col tablet-s:gap-3">
          <a
            className="group font-base font-semibold inline-block pointer w-[200px] tablet-s:w-full"
            href="https://classroomscreen.com/app/login"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="relative font-bold font-heading inline-flex gap-1.5 items-center justify-center cursor-pointer w-full group-disabled:cursor-not-allowed group-disabled:pointer-events-none group-disabled:opacity-[.45] duration-200 ease-in-out focus:outline-none focus:ring focus:ring-primary-500 desktop-s:select-none shadow-button-secondary bg-white hover:shadow-button-secondary-hover text-tertiary-600 hover:text-tertiary-800 active:text-tertiary-900 px-4 h-10 text-heading-base rounded-[14px] tablet-s:rounded-[16px] tablet-s:text-[16px] tablet-s:h-12">
              {/**/}
              {/**/}
              {/*[*/}Log in{/*]*/}
            </span>
          </a>
          <a
            className="group font-base font-semibold inline-block pointer w-[200px] tablet-s:w-full"
            href="https://classroomscreen.com/app"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="relative font-bold font-heading inline-flex gap-1.5 items-center justify-center cursor-pointer w-full group-disabled:cursor-not-allowed group-disabled:pointer-events-none group-disabled:opacity-[.45] duration-200 ease-in-out focus:outline-none focus:ring focus:ring-primary-500 desktop-s:select-none shadow-button bg-primary-500 text-white hover:bg-primary-800 active:bg-primary-800 px-4 h-10 text-heading-base rounded-[14px] tablet-s:rounded-[16px] tablet-s:text-[16px] tablet-s:h-12">
              {/**/}
              {/**/}
              {/*[*/}Try for free{/*]*/}
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
