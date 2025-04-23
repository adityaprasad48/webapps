"use client";

import React, { useEffect } from "react";

const DropDown = () => {
  useEffect(() => {
    function DropDown(dropDown) {
      const [toggler, menu] = dropDown.children;

      const handleClickOut = (e) => {
        if (!dropDown) {
          return document.removeEventListener("click", handleClickOut);
        }

        if (!dropDown.contains(e.target)) {
          this.toggle(false);
        }
      };

      const setValue = (item) => {
        const val = item.textContent;
        toggler.textContent = val;
        this.value = val;
        this.toggle(false);
        dropDown.dispatchEvent(new Event("change"));
        toggler.focus();
      };

      const handleItemKeyDown = (e) => {
        e.preventDefault();

        if (e.keyCode === 38 && e.target.previousElementSibling) {
          // up
          e.target.previousElementSibling.focus();
        } else if (e.keyCode === 40 && e.target.nextElementSibling) {
          // down
          e.target.nextElementSibling.focus();
        } else if (e.keyCode === 27) {
          // escape key
          this.toggle(false);
        } else if (e.keyCode === 13 || e.keyCode === 32) {
          // enter or spacebar key
          setValue(e.target);
        }
      };

      const handleToggleKeyPress = (e) => {
        e.preventDefault();

        if (e.keyCode === 27) {
          // escape key
          this.toggle(false);
        } else if (e.keyCode === 13 || e.keyCode === 32) {
          // enter or spacebar key
          this.toggle(true);
        }
      };

      toggler.addEventListener("keydown", handleToggleKeyPress);
      toggler.addEventListener("click", () => this.toggle());
      [...menu.children].forEach((item) => {
        item.addEventListener("keydown", handleItemKeyDown);
        item.addEventListener("click", () => setValue(item));
      });

      this.element = dropDown;

      this.value = toggler.textContent;

      this.toggle = (expand = null) => {
        expand =
          expand === null
            ? menu.getAttribute("aria-expanded") !== "true"
            : expand;

        menu.setAttribute("aria-expanded", expand);

        if (expand) {
          toggler.classList.add("active");
          menu.children[0].focus();
          document.addEventListener("click", handleClickOut);
          dropDown.dispatchEvent(new Event("opened"));
        } else {
          toggler.classList.remove("active");
          dropDown.dispatchEvent(new Event("closed"));
          document.removeEventListener("click", handleClickOut);
        }
      };
    }

    const dropDown = new DropDown(document.querySelector(".dropdown"));

    dropDown.element.addEventListener("change", (e) => {
      console.log("changed", dropDown.value);
    });

    dropDown.element.addEventListener("opened", (e) => {
      console.log("opened", dropDown.value);
    });

    dropDown.element.addEventListener("closed", (e) => {
      console.log("closed", dropDown.value);
    });

    dropDown.toggle();
  }, []);

  return (
    <>
      <div className="dropdown">
        <button className="dropdown-toggle" type="button" aria-haspopup="true">
          Select from Options
        </button>
        <ul className="dropdown-menu" role="listbox" aria-expanded="false">
          <li role="option" tabIndex={0}>
            Option 1 sd js dksd ksd skj dksjd ksdjk sj
          </li>
          <li role="option" tabIndex={0}>
            Option 2
          </li>
          <li role="option" tabIndex={0}>
            Option 3
          </li>
          <li role="option" tabIndex={0}>
            Option 4
          </li>
          <li role="option" tabIndex={0}>
            Option 5
          </li>
        </ul>
      </div>
    </>
  );
};

export default DropDown;
