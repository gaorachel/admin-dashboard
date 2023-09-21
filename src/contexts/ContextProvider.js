import React, { createContext, useContext, useState } from "react";

const stateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

const initialChartStyle = {
  background: "transparent",
  legendSettings: {
    background: "transparent",
    textStyle: {
      color: "#fff",
      size: "18px",
      fontFamily: "sans-serif",
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
      ...chartStyle,
      legendSettings: {
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
