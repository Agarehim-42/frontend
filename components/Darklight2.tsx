import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes"; // Dark/Light themes management

const Darklight2: React.FC = () => {
  const { theme, setTheme } = useTheme(); // Get current theme and setTheme function
  const [isChecked, setIsChecked] = useState(false); // Track if dark mode is on

  // Toggle theme when the checkbox is clicked
  const handleToggleChange = () => {
    const newTheme = isChecked ? "dark" : "light"; // Toggle between light and dark
    setTheme(newTheme); // Update theme
    setIsChecked(!isChecked); // Toggle the checkbox state
  };

  // Sync checkbox with theme
  useEffect(() => {
    setIsChecked(theme === "dark"); // If the theme is dark, check the checkbox
    // Add or remove the light-mode class to the body for styling
    if (theme === "light") {
      document.body.classList.add("light-mode");
    } else {
      document.body.classList.remove("light-mode");
    }
  }, [theme]); // Only run when the theme changes

  return (
    <div className={`app ${theme === "dark" ? "dark" : "light"}`}>
      <label 
        htmlFor="themeToggle" 
        className="switch cursor-pointer" 
        onClick={handleToggleChange} // Trigger theme toggle when clicked
      >
        <svg
          className="slider"
          viewBox="0 0 512 512"
          height="22"
          width="22"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V256c0 17.7 14.3 32 32 32s32-14.3 32-32V32zM143.5 120.6c13.6-11.3 15.4-31.5 4.1-45.1s-31.5-15.4-45.1-4.1C49.7 115.4 16 181.8 16 256c0 132.5 107.5 240 240 240s240-107.5 240-240c0-74.2-33.8-140.6-86.6-184.6c-13.6-11.3-33.8-9.4-45.1 4.1s-9.4 33.8 4.1 45.1c38.9 32.3 63.5 81 63.5 135.4c0 97.2-78.8 176-176 176s-176-78.8-176-176c0-54.4 24.7-103.1 63.5-135.4z"
          ></path>
        </svg>
        {theme === "dark" ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </label>
    </div>
  );
};

export default Darklight2;
