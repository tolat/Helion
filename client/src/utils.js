import { useEffect, useState } from "react";
import { useWindowSize } from "usehooks-ts";

// Function to use stately variables to update things that have changes based onsmall medium and alrge window sizes
export const selectTSML = (width, tiny, sml, med, lrg) => {
  return width < process.env.REACT_APP_BREAKPOINT_T
    ? tiny
    : width < process.env.REACT_APP_BREAKPOINT_S
    ? sml
    : width < process.env.REACT_APP_BREAKPOINT_L
    ? med
    : lrg;
};

export const handleToggleModal = (setModalVisFunction) => {
  const hide = { o: "0", v: "hidden" };
  const show = { o: "1", v: "visible" };
  // eslint-disable-next-line
  setModalVisFunction((prevState) => {
    if (prevState.o == "0") {
      document.body.style.overflowY = "hidden";
      document.body.style.touchAction = "none";
      document.body.style.webkitOverflowScrolling = "none";
      document.body.style.height = "100vh"

      return show;
    } else {
      document.body.style.height = "unset"
      document.body.style.overflowY = "scroll";
      document.body.style.touchAction = "unset";
      document.body.style.webkitOverflowScrolling = "unset";
      return hide;
    }
  });
};

export const sendMessage = (
  msgObject,
  path,
  successFunction,
  failureFunction
) => {
  fetch(`${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(msgObject),
    //credentials: "include",
  })
    .then((response) => {
      return response.json();
    })
    .then((responseData) => {
      responseData.success
        ? successFunction()
        : failureFunction(responseData.error);
    });
};

export const showFlash = (
  id,
  header,
  message,
  backgroundColor,
  headerColor,
  textColor
) => {
  document.getElementById(`${id}_flashContainer`).style.backgroundColor =
    backgroundColor;
  document.getElementById(`${id}_header`).innerText = header;
  document.getElementById(`${id}_message`).innerText = message;
  document.getElementById(`${id}_masterContainer`).style.marginTop = "2rem";
  document.getElementById(`${id}_header`).style.color = headerColor;
  document.getElementById(`${id}_message`).style.color = textColor;
};

export const closeFlash = (id) => {
  document.getElementById(`${id}_masterContainer`).style.marginTop = "-20rem";
};

export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset);
    };
    window.addEventListener("scroll", updatePosition);
    updatePosition();
    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  return scrollPosition;
};

export const scrollToId = (Id, width) => {
  if (!document.getElementById(Id)) {
    console.log("id not found");
    return;
  }

  const offset = document.getElementById(Id).getBoundingClientRect().top;

  window.scrollTo({
    top: offset,
    behavior: "smooth",
  });
};

export const toggleNavDrawer = () => {
  let navDrawer = document.getElementById("navDrawer");
  //let navDrawerBlackout = document.getElementById("navDrawerBlackout");
  // eslint-disable-next-line
  if (navDrawer.style.right != "0px") {
    navDrawer.style.right = "0px";
    document.body.style.overflowY = "hidden";
    document.body.style.height = "100vh"
    //navDrawerBlackout.style.display = "block";
  } else {
    navDrawer.style.right = "-30rem";
    document.body.style.overflowY = "scroll";
    document.body.style.height = "unset"
    //navDrawerBlackout.style.display = "none";
  }
};

export const clickBurgerMenuIcon = (buttonActive = false) => {
  document.getElementsByClassName("hamburger-react")[0].click();
  if (!buttonActive) {
    toggleNavDrawer();
  }
};

export const isMobile = (width) => {
  return width < process.env.REACT_APP_BREAKPOINT_T;
};
