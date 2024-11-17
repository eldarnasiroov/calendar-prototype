import React, { useState } from "react";

export const Test = () => {
  const [isOpen, setIsOpen] = useState(false); // Состояние открытия dropdown
  const [selected, setSelected] = useState("Select an option"); // Выбранный элемент

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
  };

  const options = ["Option 1", "Option 2", "Option 3"]; // Данные dropdown

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <button
        onClick={toggleDropdown}
        style={{
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        {selected}
      </button>
      {isOpen && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            backgroundColor: "#fff",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            borderRadius: "4px",
            zIndex: 10,
            minWidth: "150px",
          }}
        >
          {options.map((option, index) => (
            <div
              key={index}
              onClick={() => handleSelect(option)}
              style={{
                padding: "10px",
                cursor: "pointer",
                borderBottom:
                  index < options.length - 1 ? "1px solid #f0f0f0" : "none",
                backgroundColor: "#fff",
                color: "#333",
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#f0f0f0")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#fff")}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
