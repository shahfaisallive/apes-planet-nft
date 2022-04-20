import React from "react";
import { useEffect } from "react";
const DarkMode = () => {
  useEffect(() => {
    if (typeof window !== undefined) {
      let clickedClass = "clicked";
      const body = document.body;
      const lightTheme = "light";
      const darkTheme = "is_dark";
      let theme;

      if (localStorage) {
        theme = localStorage.getItem("theme");
      }
      if (theme === lightTheme || theme === darkTheme) {
        body.classList.add(theme);
      } else {
        body.classList.add(darkTheme);
      }
    }
  }, [typeof window]);

  return (
    <div className="mode_switcher">
      {/* <h6>Dark mode <strong>Available</strong></h6>
        <Link to="#" 
            onClick={e => switchTheme(e)}  >
            <img src={imgsun} alt="" />
        </Link> */}
    </div>
  );
};

export default DarkMode;
