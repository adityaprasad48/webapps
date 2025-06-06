"use client";

import React from "react";

const ImageFeedback = () => {
  return (
    <div className="text-base my-auto mx-auto py-5 [--thread-content-margin:--spacing(4)] @[37rem]:[--thread-content-margin:--spacing(6)] @[70rem]:[--thread-content-margin:--spacing(12)] px-(--thread-content-margin)">
      <div
        className="[--thread-content-max-width:32rem] @[34rem]:[--thread-content-max-width:40rem] @[64rem]:[--thread-content-max-width:48rem] mx-auto flex max-w-(--thread-content-max-width) flex-1 text-base gap-4 md:gap-5 lg:gap-6 group/turn-messages focus-visible:outline-hidden"
        tabIndex={-1}
      >
        <div className="group/conversation-turn relative flex w-full min-w-0 flex-col agent-turn">
          <div className="relative flex-col gap-1 md:gap-3">
            <div className="flex max-w-full flex-col grow">
              <div className="flex flex-col">
                <div className="pb-3">
                  <button
                    disabled=""
                    className="relative w-full text-start inline"
                  >
                    <span
                      className="align-middle text-token-text-secondary"
                      style={{ opacity: 1 }}
                    >
                      Image created
                    </span>
                  </button>
                </div>
                <div className="grid pb-2 grid-cols-1">
                  <div
                    className="group/imagegen-image relative overflow-hidden max-w-[480px] rounded-2xl"
                    style={{ aspectRatio: "1 / 1" }}
                  >
                    <div
                      tabIndex={0}
                      role="button"
                      className="relative z-0 cursor-pointer overflow-hidden max-w-[480px]"
                      aria-label="Generated image"
                      style={{ aspectRatio: "1 / 1" }}
                    >
                      <div
                        className="absolute start-0 end-0 top-0 z-2 w-full overflow-hidden transition-[mask] ease-linear"
                        style={{ height: "100%" }}
                      >
                        <img
                          alt="Generated image"
                          className="absolute top-0 z-1 w-full"
                          src="https://sdmntprsouthcentralus.oaiusercontent.com/files/00000000-4c64-61f7-a5ed-8b5f689e469c/raw?se=2025-04-15T08%3A31%3A17Z&sp=r&sv=2024-08-04&sr=b&scid=2d44ae70-c3c3-5464-b2c1-d222fc0534ff&skoid=fa7966e7-f8ea-483c-919a-13acfd61d696&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-14T23%3A43%3A30Z&ske=2025-04-15T23%3A43%3A30Z&sks=b&skv=2024-08-04&sig=11pib7QPTpXxKvm%2BKPFyX9pDs%2BTdWEklbeK1xGq8QmE%3D"
                          style={{ aspectRatio: "1 / 1" }}
                        />
                        <div className="absolute inset-0 z-0 w-full overflow-hidden opacity-0 transition-opacity duration-300 group-hover/imagegen-image:opacity-100 group-focus/imagegen-image:opacity-100">
                          <div
                            className="absolute inset-0 bg-repeat"
                            style={{
                              backgroundImage: 'url("data:image/svg+xml',
                              backgroundSize: "auto",
                            }}
                          />
                        </div>
                      </div>
                      <div
                        className="relative z-1 w-full overflow-hidden"
                        style={{ aspectRatio: "1 / 1", filter: "blur(0px)" }}
                      >
                        <img
                          alt="Generated image"
                          className="absolute top-0 w-full"
                          src="https://sdmntprsouthcentralus.oaiusercontent.com/files/00000000-4c64-61f7-a5ed-8b5f689e469c/raw?se=2025-04-15T08%3A31%3A17Z&sp=r&sv=2024-08-04&sr=b&scid=2d44ae70-c3c3-5464-b2c1-d222fc0534ff&skoid=fa7966e7-f8ea-483c-919a-13acfd61d696&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-14T23%3A43%3A30Z&ske=2025-04-15T23%3A43%3A30Z&sks=b&skv=2024-08-04&sig=11pib7QPTpXxKvm%2BKPFyX9pDs%2BTdWEklbeK1xGq8QmE%3D"
                          style={{
                            opacity: 1,
                            willChange: "opacity",
                            aspectRatio: "1 / 1",
                          }}
                        />
                      </div>
                      <div
                        className="absolute inset-0 z-0 scale-110 overflow-hidden blur-2xl"
                        style={{ aspectRatio: "1 / 1" }}
                      />
                    </div>
                    <div className="absolute z-2 transition-opacity duration-300 opacity-0 group-hover/imagegen-image:opacity-100 group-focus/imagegen-image:opacity-100 focus-within:opacity-100 end-0 top-0 w-full">
                      <div className="bg-linear-to-t from-transparent to-black/30 h-20 w-full" />
                      <div className="absolute inset-0 flex items-start pt-1 pb-3 justify-end pe-1">
                        <div className="flex flex-row">
                          <span className="" data-state="closed">
                            <button
                              className="hover:bg-token-icon-surface/10 focus:bg-token-icon-surface/10 z-11 flex h-10 w-10 items-center justify-center rounded-xl"
                              aria-label="Download this image"
                            >
                              <svg
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon-lg fill-transparent text-white"
                                style={{
                                  filter:
                                    "drop-shadow(rgba(0, 0, 0, 0.2) 0px 2px 4px)",
                                }}
                              >
                                <path
                                  d="M7.70711 10.2929C7.31658 9.90237 6.68342 9.90237 6.29289 10.2929C5.90237 10.6834 5.90237 11.3166 6.29289 11.7071L11.2929 16.7071C11.6834 17.0976 12.3166 17.0976 12.7071 16.7071L17.7071 11.7071C18.0976 11.3166 18.0976 10.6834 17.7071 10.2929C17.3166 9.90237 16.6834 9.90237 16.2929 10.2929L13 13.5858L13 4C13 3.44771 12.5523 3 12 3C11.4477 3 11 3.44771 11 4L11 13.5858L7.70711 10.2929Z"
                                  fill="currentColor"
                                />
                                <path
                                  d="M5 19C4.44772 19 4 19.4477 4 20C4 20.5523 4.44772 21 5 21H19C19.5523 21 20 20.5523 20 20C20 19.4477 19.5523 19 19 19L5 19Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </button>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="absolute z-2 transition-opacity duration-300 opacity-0 group-hover/imagegen-image:opacity-100 group-focus/imagegen-image:opacity-100 focus-within:opacity-100 end-0 bottom-0 w-full">
                      <div className="bg-linear-to-b from-transparent to-black/30 h-20 w-full" />
                      <div className="absolute inset-0 flex items-end pt-3 pb-1 justify-end pe-1 justify-between">
                        <div
                          className="flex w-full items-center justify-between transition-opacity ease-in-out opacity-100"
                          style={{ transitionDuration: "1000ms" }}
                        >
                          <div
                            className="flex items-center ps-4 font-semibold text-white"
                            style={{
                              textShadow: "rgba(0, 0, 0, 0.2) 0px 2px 4px",
                            }}
                          >
                            Rate this image
                          </div>
                          <div
                            className="flex flex-row transition-opacity ease-in-out opacity-100"
                            style={{ transitionDuration: "300ms" }}
                          >
                            <span className="" data-state="closed">
                              <button
                                className="hover:bg-token-icon-surface/10 focus:bg-token-icon-surface/10 z-11 flex h-10 w-10 items-center justify-center rounded-xl"
                                aria-label="Like this image"
                              >
                                <svg
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="icon-lg fill-transparent text-white"
                                  style={{
                                    filter:
                                      "drop-shadow(rgba(0, 0, 0, 0.2) 0px 2px 4px)",
                                  }}
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M12.1318 2.50389C12.3321 2.15338 12.7235 1.95768 13.124 2.00775L13.5778 2.06447C16.0449 2.37286 17.636 4.83353 16.9048 7.20993L16.354 8.99999H17.0722C19.7097 8.99999 21.6253 11.5079 20.9313 14.0525L19.5677 19.0525C19.0931 20.7927 17.5124 22 15.7086 22H6C4.34315 22 3 20.6568 3 19V12C3 10.3431 4.34315 8.99999 6 8.99999H8C8.25952 8.99999 8.49914 8.86094 8.6279 8.63561L12.1318 2.50389ZM10 20H15.7086C16.6105 20 17.4008 19.3964 17.6381 18.5262L19.0018 13.5262C19.3488 12.2539 18.391 11 17.0722 11H15C14.6827 11 14.3841 10.8494 14.1956 10.5941C14.0071 10.3388 13.9509 10.0092 14.0442 9.70591L14.9932 6.62175C15.3384 5.49984 14.6484 4.34036 13.5319 4.08468L10.3644 9.62789C10.0522 10.1742 9.56691 10.5859 9 10.8098V19C9 19.5523 9.44772 20 10 20ZM7 11V19C7 19.3506 7.06015 19.6872 7.17071 20H6C5.44772 20 5 19.5523 5 19V12C5 11.4477 5.44772 11 6 11H7Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </button>
                            </span>
                            <span className="" data-state="closed">
                              <button
                                className="hover:bg-token-icon-surface/10 focus:bg-token-icon-surface/10 z-11 flex h-10 w-10 items-center justify-center rounded-xl"
                                aria-label="Dislike this image"
                              >
                                <svg
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="icon-lg fill-transparent text-white"
                                  style={{
                                    filter:
                                      "drop-shadow(rgba(0, 0, 0, 0.2) 0px 2px 4px)",
                                  }}
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M11.8727 21.4961C11.6725 21.8466 11.2811 22.0423 10.8805 21.9922L10.4267 21.9355C7.95958 21.6271 6.36855 19.1665 7.09975 16.7901L7.65054 15H6.93226C4.29476 15 2.37923 12.4921 3.0732 9.94753L4.43684 4.94753C4.91145 3.20728 6.49209 2 8.29589 2H18.0045C19.6614 2 21.0045 3.34315 21.0045 5V12C21.0045 13.6569 19.6614 15 18.0045 15H16.0045C15.745 15 15.5054 15.1391 15.3766 15.3644L11.8727 21.4961ZM14.0045 4H8.29589C7.39399 4 6.60367 4.60364 6.36637 5.47376L5.00273 10.4738C4.65574 11.746 5.61351 13 6.93226 13H9.00451C9.32185 13 9.62036 13.1506 9.8089 13.4059C9.99743 13.6612 10.0536 13.9908 9.96028 14.2941L9.01131 17.3782C8.6661 18.5002 9.35608 19.6596 10.4726 19.9153L13.6401 14.3721C13.9523 13.8258 14.4376 13.4141 15.0045 13.1902V5C15.0045 4.44772 14.5568 4 14.0045 4ZM17.0045 13V5C17.0045 4.64937 16.9444 4.31278 16.8338 4H18.0045C18.5568 4 19.0045 4.44772 19.0045 5V12C19.0045 12.5523 18.5568 13 18.0045 13H17.0045Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </button>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-message-author-role="assistant"
                data-message-id="7b91b3bb-652f-4dc6-8c20-aa44550c8e91"
                dir="auto"
                className="min-h-8 text-message relative flex w-full flex-col items-end gap-2 text-start break-words whitespace-normal [.text-message+&]:mt-5"
                data-message-model-slug="gpt-4o"
              >
                <div className="flex w-full flex-col gap-1 empty:hidden first:pt-[3px]">
                  <div className="relative max-w-[var(--user-chat-width,70%)]" />
                </div>
              </div>
            </div>
            <div className="flex absolute start-0 end-0 flex justify-start">
              <div className="touch:-me-2 touch:-ms-3.5 -ms-2.5 -me-1 flex items-center p-1 select-none -mt-1 focus-within:transition-none hover:transition-none duration-500 group-hover/turn-messages:delay-300 pointer-events-none [mask-image:linear-gradient(to_right,black_33%,transparent_66%)] [mask-position:100%_0%] [mask-size:300%_100%] motion-safe:transition-[mask-position] group-hover/turn-messages:pointer-events-auto group-hover/turn-messages:[mask-position:0_0] group-focus-within/turn-messages:pointer-events-auto group-focus-within/turn-messages:[mask-position:0_0] has-data-[state=open]:pointer-events-auto has-data-[state=open]:[mask-position:0_0]">
                <span className="" data-state="closed">
                  <button
                    className="text-token-text-secondary hover:bg-token-main-surface-secondary rounded-lg"
                    aria-label="Copy"
                    data-testid="copy-turn-action-button"
                  >
                    <span className="touch:w-[38px] flex h-[30px] w-[30px] items-center justify-center">
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon-md-heavy"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M7 5C7 3.34315 8.34315 2 10 2H19C20.6569 2 22 3.34315 22 5V14C22 15.6569 20.6569 17 19 17H17V19C17 20.6569 15.6569 22 14 22H5C3.34315 22 2 20.6569 2 19V10C2 8.34315 3.34315 7 5 7H7V5ZM9 7H14C15.6569 7 17 8.34315 17 10V15H19C19.5523 15 20 14.5523 20 14V5C20 4.44772 19.5523 4 19 4H10C9.44772 4 9 4.44772 9 5V7ZM5 9C4.44772 9 4 9.44772 4 10V19C4 19.5523 4.44772 20 5 20H14C14.5523 20 15 19.5523 15 19V10C15 9.44772 14.5523 9 14 9H5Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                  </button>
                </span>
                <span className="" data-state="closed">
                  <button
                    className="text-token-text-secondary hover:bg-token-main-surface-secondary rounded-lg"
                    aria-label="Read aloud"
                    data-testid="voice-play-turn-action-button"
                  >
                    <span className="touch:w-[38px] flex h-[30px] w-[30px] items-center justify-center">
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon-md-heavy"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11 4.9099C11 4.47485 10.4828 4.24734 10.1621 4.54132L6.67572 7.7372C6.49129 7.90626 6.25019 8.00005 6 8.00005H4C3.44772 8.00005 3 8.44776 3 9.00005V15C3 15.5523 3.44772 16 4 16H6C6.25019 16 6.49129 16.0938 6.67572 16.2629L10.1621 19.4588C10.4828 19.7527 11 19.5252 11 19.0902V4.9099ZM8.81069 3.06701C10.4142 1.59714 13 2.73463 13 4.9099V19.0902C13 21.2655 10.4142 22.403 8.81069 20.9331L5.61102 18H4C2.34315 18 1 16.6569 1 15V9.00005C1 7.34319 2.34315 6.00005 4 6.00005H5.61102L8.81069 3.06701ZM20.3166 6.35665C20.8019 6.09313 21.409 6.27296 21.6725 6.75833C22.5191 8.3176 22.9996 10.1042 22.9996 12.0001C22.9996 13.8507 22.5418 15.5974 21.7323 17.1302C21.4744 17.6185 20.8695 17.8054 20.3811 17.5475C19.8927 17.2896 19.7059 16.6846 19.9638 16.1962C20.6249 14.9444 20.9996 13.5175 20.9996 12.0001C20.9996 10.4458 20.6064 8.98627 19.9149 7.71262C19.6514 7.22726 19.8312 6.62017 20.3166 6.35665ZM15.7994 7.90049C16.241 7.5688 16.8679 7.65789 17.1995 8.09947C18.0156 9.18593 18.4996 10.5379 18.4996 12.0001C18.4996 13.3127 18.1094 14.5372 17.4385 15.5604C17.1357 16.0222 16.5158 16.1511 16.0539 15.8483C15.5921 15.5455 15.4632 14.9255 15.766 14.4637C16.2298 13.7564 16.4996 12.9113 16.4996 12.0001C16.4996 10.9859 16.1653 10.0526 15.6004 9.30063C15.2687 8.85905 15.3578 8.23218 15.7994 7.90049Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageFeedback;
