"use client";
import { FollowerPointerCard } from "@/components/ui/following-pointer";
import React, { useState } from "react";
import {
  VictoryContainer,
  VictoryLegend,
  VictoryPie,
  VictoryThemeDefinition,
} from "victory";

const chartColors: string[] = [
  "#e74c3c", // Red
  "#2ecc71", // Green
  "#f1c40f", // Yellow
  "#9b59b6", // Purple
  "#e67e22", // Orange
  "#1abc9c", // Teal
  "#34495e", // Dark Blue
];

type Props = {
  data: { x: string; y: number }[];
};

const customTheme: VictoryThemeDefinition = {
  pie: {
    colorScale: chartColors,
  },
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
  const [currentTitle, setCurrentTitle] = useState<string>("Course Details");
  const [currentColor, setCurrentColor] = useState<string>("#095AF1");

  return (
    <FollowerPointerCard
      title={<TitleComponent title={currentTitle} color={currentColor} />}
      className="relative h-72 w-full md:h-80 md:w-1/2 lg:h-96"
    >
      <VictoryPie
        containerComponent={
          <VictoryContainer style={{ touchAction: "auto" }} />
        }
        data={data}
        animate={{
          duration: 1000,
        }}
        padAngle={2}
        labelPosition={"centroid"}
        style={{ labels: { fontSize: 12 } }}
        theme={customTheme}
        labels={({ datum }) => ""}
        events={[
          {
            target: "data",
            eventHandlers: {
              onMouseEnter: (evt, props) => {
                setCurrentTitle(props.datum.x);
                setCurrentColor(chartColors[props.index % chartColors.length]);
              },
              onMouseLeave: () => {
                setCurrentTitle("Course Details");
              },
            },
          },
        ]}
      />
      {/* <VictoryLegend
        x={125}
        y={50}
        title="Legend"
        centerTitle
        orientation="vertical"
        gutter={20}
        containerComponent={
          <VictoryContainer
            style={{
              touchAction: "auto",
            }}
          />
        }
        style={{ border: { stroke: "black" }, title: { fontSize: 20 } }}
        data={data.map((d) => ({ name: d.x }))}
      /> */}
    </FollowerPointerCard>
  );
}

const TitleComponent = ({
  title,
  color = "#ff000f",
}: {
  title: string;
  color?: string;
}) => (
  <div
    className="rounded-full border-2 px-4 py-1 text-base shadow-lg"
    style={{ backgroundColor: color }}
  >
    <p>{title}</p>
  </div>
);

export default PieChart;
