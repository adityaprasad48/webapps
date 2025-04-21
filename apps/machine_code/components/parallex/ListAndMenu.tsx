'use client';
import { useEffect } from "react";
import "./ListAndMenu.css";

const ParallexView = () => {
  useEffect(() => {
    const scrollingContainer = document.querySelector(".scrolling-content") as HTMLDivElement;
    const menu = document.querySelector(".menu") as HTMLDivElement;

    // const handleScroll = () => {};

    // const handleScroll = () => {
    // 	let lastScrollTop = 0;
    // 	menu.style.transition = 'transform 0.5s ease';
    // 	const {bottom} = getComputedStyle(menu);
    // 	// let timer = null;
    //
    // 	return (e) => {
    // 		// clearTimeout(timer);
    // 		// timer = setTimeout(() => {
    // 		// 	menu.style.transform = 'translateY(0)';
    // 		// }, 350);
    // 		if (e.target.scrollTop > lastScrollTop) {
    // 			menu.style.transform = `translateY(calc(100% + ${bottom}))`
    // 		} else {
    // 			menu.style.transform = 'translateY(0)'
    // 		}
    //
    // 		lastScrollTop = e.target.scrollTop;
    // 	}
    // };

    const handleScroll = () => {
      let lastDirection = "down";
      let lastScrollTop = 0;
      let lastScrollPositionChange = 0;
      let translate = 0;
      let timer:any = null;
      // get the full height of the container plus its offset from the bottom
      const { offsetHeight } = menu;
      const { bottom } = getComputedStyle(menu);
      const max = offsetHeight + parseInt(bottom);

      return (e:any) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
          translate = 0;
          menu.style.transition = "transform 0.5s ease";
          menu.style.transform = `translateY(0px)`;
        }, 350);
        // detect scroll position
        const direction = e.target.scrollTop > lastScrollTop ? "down" : "up";

        // grab position at direction change
        if (lastDirection !== direction) {
          lastScrollPositionChange = e.target.scrollTop;
          lastDirection = direction;
        }

        // get the difference from the changing point and current point
        const diff = Math.abs(e.target.scrollTop - lastScrollPositionChange);

        menu.style.transition = "transform 0s ease";
        if (direction === "down") {
          translate = Math.min(max, diff);
          menu.style.transform = `translateY(${translate}px)`;
        } else {
          menu.style.transform = `translateY(${Math.max(0, translate - diff)}px)`;
        }

        lastScrollTop = e.target.scrollTop;
      };
    };

    scrollingContainer.addEventListener("scroll", handleScroll(), {
      passive: true,
    });
    return () => {
      scrollingContainer.removeEventListener("scroll", handleScroll());
    };
  }, []);
  return (
    <div className="wrapper">
      <div className="scrolling-content">
        {Array.from({ length: 30 }).map((_, i) => (
          <div key={i} className="post">
            {Array.from({ length: 3 }).map((_, j) => (
              <span key={j}></span>
            ))}
          </div>
        ))}
      </div>
      <div className="menu">
        <ul>
          {Array.from({ length: 4 }).map((_, i) => (
            <li key={i}></li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ParallexView;
