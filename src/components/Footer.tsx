import React from "react";

export const Footer = () => {
  return (
    <div
      style={{
        position: "relative",
        zIndex: 5,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "2rem",
        padding: "2rem 0",
        backgroundColor: "#f9f9f9", // Optional: Add background color for better visibility
        color: "#333", // Optional: Set text color
      }}
    >
      <p
        style={{
          textAlign: "center",
          fontSize: "2rem",
          fontWeight: "lighter",
          color: "#333", // Ensure the color is consistent with the text color
        }}
      >
        2024-present Ethan Jordon All Rights Reserved
      </p>
    </div>
  );
};
