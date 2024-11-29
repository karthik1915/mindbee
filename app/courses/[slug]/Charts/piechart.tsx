"use client";

import * as React from "react";
import { Pie, PieChart } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { courseDataType } from "./data";

type Props = {
  data: courseDataType[];
  badge: string;
};

const colors: string[] = [
  "#e74c3c", // Red
  "#2ecc71", // Green
  "#f1c40f", // Yellow
  "#9b59b6", // Purple
  "#e67e22", // Orange
  "#1abc9c", // Teal
  "#34495e", // Dark Blue
];

export default function PieChartComponent({ data, badge }: Props) {
  const generateChartConfig = (
    data: { x: string; y: number }[],
    colors: string[],
  ): ChartConfig => {
    return data.reduce((config, item, index) => {
      config[item.x] = {
        label: item.x, // Use the `x` value as the label
        color: colors[index % colors.length], // Cycle through the colors array
      };
      return config;
    }, {} as ChartConfig);
  };

  const chartConfig = generateChartConfig(data, colors);

  const formattedData = data.map((item) => ({
    ...item,
    fill: chartConfig[item.x]?.color,
  }));

  return (
    <ChartContainer
      config={chartConfig}
      className="mx-auto aspect-square h-full max-h-[250px] w-1/3 pb-0 [&_.recharts-pie-label-text]:fill-foreground"
    >
      <PieChart>
        <ChartTooltip content={<ChartTooltipContent />} />
        <Pie data={formattedData} dataKey="y" label nameKey="x"></Pie>
      </PieChart>
    </ChartContainer>
  );
}
