"use client";

import React, { useEffect, useState } from "react";
import "./CardExpand.css";

const CardExpand = () => {
  useEffect(() => {
    const cards = document.querySelectorAll(".card");

    const toggleExpansion = (element, to, duration = 350) => {
      return new Promise((res) => {
        element.animate(
          [
            {
              top: to.top,
              left: to.left,
              width: to.width,
              height: to.height,
            },
          ],
          { duration, fill: "forwards", ease: "ease-in" }
        );
        setTimeout(res, duration);
      });
    };

    const fadeContent = (element, opacity, duration = 300) => {
      return new Promise((res) => {
        [...element.children].forEach((child) => {
          requestAnimationFrame(() => {
            child.style.transition = `opacity ${duration}ms linear`;
            child.style.opacity = opacity;
          });
        });
        setTimeout(res, duration);
      });
    };

    const getCardContent = (title, type) => {
      return `
				<div class="card-content">
					<h2>${title}</h2>
            <Image
              className={styles.logo}
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor eum ipsa molestiae nesciunt nostrum porro
						reprehenderit? Animi corporis deleniti dolore laborum, nemo pariatur temporibus voluptatem.
					</p>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque eligendi fuga ullam? Aperiam blanditiis
						cupiditate dicta eius exercitationem explicabo fugit, impedit iure libero nam nihil nisi perferendis
						provident quaerat repellendus vitae voluptate? Aliquid amet architecto asperiores aut consequuntur
						corporis debitis ea eveniet in maiores, nam placeat quae, ratione rerum ullam?
					</p>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor eum ipsa molestiae nesciunt nostrum porro
						reprehenderit? Animi corporis deleniti dolore laborum, nemo pariatur temporibus voluptatem.
					</p>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor eum ipsa molestiae nesciunt nostrum porro
						reprehenderit? Animi corporis deleniti dolore laborum, nemo pariatur temporibus voluptatem.
					</p>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque eligendi fuga ullam? Aperiam blanditiis
						cupiditate dicta eius exercitationem explicabo fugit, impedit iure libero nam nihil nisi perferendis
						provident quaerat repellendus vitae voluptate? Aliquid amet architecto asperiores aut consequuntur
						corporis debitis ea eveniet in maiores, nam placeat quae, ratione rerum ullam?
					</p>
				</div>
			`;
    };

    const onCardClick = async (e) => {
      const card = e.currentTarget;
      // clone the card
      const cardClone = card.cloneNode(true);
      cardClone.classList.add("card-clone");

      // get the location of the card in the view
      const { top, left, width, height } = card.getBoundingClientRect();
      // position the clone on top of the original
      Object.assign(cardClone.style, {
        position: "fixed",
        top: `${top}px`,
        left: `${left}px`,
        width: `${width}px`,
        height: `${height}px`,
        zIndex: 100,
        overflowY: "scroll",
      });
      document.body.style.overflow = "hidden";

      // hide the original card with opacity
      card.style.opacity = "0";
      // add card to the same container
      card.parentNode.appendChild(cardClone);
      // create a close button to handle the undo
      const closeButton = document.createElement("button");
      closeButton.textContent = "X";
      // position the close button top corner

      Object.assign(closeButton.style, {
        position: "fixed",
        zIndex: "10000",
        top: "35px",
        right: "35px",
        width: "35px",
        height: "35px",
        borderRadius: "50%",
        backgroundColor: "rgb(39, 17, 17)",
        color: "#fff",
        cursor: "pointer",
      });
      // attach click event to the close button
      closeButton.addEventListener("click", async () => {
        // remove the button on close
        closeButton.remove();
        // remove the display style so the original content is displayed right
        cardClone.style.removeProperty("display");
        cardClone.style.removeProperty("padding");
        // show original card content
        [...cardClone.children].forEach((child) =>
          child.style.removeProperty("display")
        );
        fadeContent(cardClone, "0");

        // shrink the card back to the original position and size
        await toggleExpansion(
          cardClone,
          {
            top: `${top}px`,
            left: `${left}px`,
            width: `${width}px`,
            height: `${height}px`,
          },
          300
        );
        // show the original card again
        card.style.removeProperty("opacity");
        // remove the clone card
        cardClone.remove();
        document.body.style.overflow = "auto";
      });
      // fade the content away
      fadeContent(cardClone, "0").then(() => {
        [...cardClone.children].forEach(
          (child) => (child.style.display = "none")
        );
      });
      // expand the clone card
      await toggleExpansion(cardClone, {
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
      });
      const content = getCardContent(card.textContent, card.dataset.type);
      // set the display block so the content will follow the normal flow in case the original card is not display block
      cardClone.style.display = "block";
      cardClone.style.padding = "0";
      // append the close button after the expansion is done
      cardClone.appendChild(closeButton);
      cardClone.insertAdjacentHTML("afterbegin", content);
    };

    cards.forEach((card) => card.addEventListener("click", onCardClick));
    return () => {
      cards.forEach((card) => card.removeEventListener("click", onCardClick));
    };
  }, []);

  const skills = [
    { name: "HTML5", type: "html" },
    { name: "CSS3", type: "css" },
    { name: "Mongo", type: "mongo" },
    { name: "Javascript", type: "javascript" },
    { name: "NodeJs", type: "nodejs" },
    { name: "SQL", type: "sql" },
  ];

  return (
    <div>
      
      <div className="wrapper">
        <AnimateBoxes />

        <div className="header">
          <h1>Card Expand Animation</h1>
          <p>How to animate card expand opening</p>
        </div>
        <div className="cards">
          {skills.map((skill, index) => (
            <div key={index} className="card" data-type={skill.type}>
              <h2>{skill.name}</h2>
            </div>
          ))}
        </div>
      </div>

      
    </div>
  );
};

export default CardExpand;



// export default StackCards;

const AnimateBoxes = () => {
  const [activeIndexes, setActiveIndexes] = useState([]);

  useEffect(() => {
    // Animate boxes one by one
    [0, 1, 2, 3].forEach((i) => {
      setTimeout(() => {
        setActiveIndexes((prev) => [...prev, i]);
      }, i * 300); // delay each box by 300ms
    });
  }, []);

  return (
    <div className="flex flex-wrap gap-4 p-10 relative">
      {[0, 1, 2, 3].map((i) => (
        <div
          key={i}
          className="w-24 h-24 bg-blue-500 rounded-xl shadow-lg transition-all duration-2000"
          style={{
            transform: activeIndexes.includes(i)
              ? "translate(0, 0)"
              : "translate(-100px, -100px)",
            opacity: activeIndexes.includes(i) ? 1 : 0,
          }}
        />
      ))}
    </div>
  );
};
