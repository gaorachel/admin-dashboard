import React, { createContext, useContext, useState } from "react";

const stateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

const initialChartStyle = {
  background: "#33373E",
  legendSettings: {
    background: "#33373E",
    },
  },
};

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState("#03C9D7");
  const [currentMode, setCurrentMode] = useState("Dark");
  const [themeSettings, setThemeSettings] = useState(false);
  const [chartStyle, setChartStyle] = useState(initialChartStyle);

  const handleClick = (clicked) => {
    setIsClicked({ ...initialState, [clicked]: true });
  };

  const setMode = (e) => {
    const currentTheme = e.target.value;

    setCurrentMode(currentTheme);

    setChartStyle({
      background: currentTheme === "Dark" ? "#33373E" : "#fff",
      legendSettings: {
        background: currentTheme === "Dark" ? "#33373E" : "#fff",
        textStyle: {
          color: currentTheme === "Dark" ? "#fff" : "",
        },
      },
    });

    localStorage.setItem("themeMode", currentTheme);

    setThemeSettings(false);
  };

  const setColor = (color) => {
    setCurrentColor(color);

    localStorage.setItem("colorMode", color);

    setThemeSettings(false);
  };

  return (
    <stateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick,
        screenSize,
        setScreenSize,
        currentColor,
        currentMode,
        setMode,
        setColor,
        themeSettings,
        setThemeSettings,
        chartStyle,
      }}
    >
      {children}
    </stateContext.Provider>
  );
};

export const useStateContext = () => useContext(stateContext);
