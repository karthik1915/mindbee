"use client";
import React from "react";
import { VictoryPie, VictoryTheme } from "victory";

type Props = {
  data: { x: string; y: number }[];
};

// Function to break text into lines after every three words
const formatLabel = (text: string) => {
  const words = text.split(" ");
  let formattedText = "";
  for (let i = 0; i < words.length; i++) {
    formattedText += words[i];
    if ((i + 1) % 3 === 0 && i !== words.length - 1) {
      formattedText += "\n";
    } else {
      formattedText += " ";
    }
  }
  return formattedText.trim();
};

function PieChart({ data }: Props) {
  return (
    <div className="h-64 w-3/4 md:h-80 md:w-1/2 lg:h-96">
      <VictoryPie
        data={data}
        animate={{
          duration: 2000,
        }}
        padAngle={2}
        innerRadius={100}
        labelPosition={"centroid"}
        style={{ labels: { fontSize: 12 } }}
        theme={VictoryTheme.material}
        labels={({ datum }) => formatLabel(datum.x)}
      />
    </div>
  );
}

export default PieChart;
