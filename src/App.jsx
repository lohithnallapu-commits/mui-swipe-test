import React, { useState } from "react";
import { Tabs, Tab } from "@mui/material";

const categories = [
  "Conservative",
  "Moderate",
  "Balanced",
  "Growth",
  "Aggressive",
  "Global",
  "Very Aggressive",
  "International",
  "Premium",
  "Dynamic"
];

function App() {
  const [value, setValue] = useState(0);

  return (
    <div style={{ padding: "20px" }}>

      <h2>MUI Swipe Test</h2>

      <p>
        Swipe the tabs left and right using your finger.
      </p>

      <div
        style={{
          width: "100%",
          border: "1px solid #ccc"
        }}
      >
        <Tabs
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          variant="scrollable"
          scrollButtons={false}
        >
          {categories.map((category) => (
            <Tab
              key={category}
              label={category}
            />
          ))}
        </Tabs>
      </div>

      <p>
        Selected tab: <b>{categories[value]}</b>
      </p>

    </div>
  );
}

export default App;