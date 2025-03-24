
import * as React from "react"
import {
  Bar,
  BarChart as RechartsBarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"
import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart"

interface BarChartProps {
  data: any[]
  index: string
  categories: string[]
  colors?: string[]
  valueFormatter?: (value: number) => string
  yAxisWidth?: number
  showLegend?: boolean
  showAnimation?: boolean
  showGridLines?: boolean
  startEndOnly?: boolean
}

export function BarChart({
  data,
  index,
  categories,
  colors = ["#2563eb", "#e11d48"],
  valueFormatter = (value: number) => value.toString(),
  yAxisWidth = 56,
  showLegend = true,
  showAnimation = true,
  showGridLines = true,
  startEndOnly = false,
}: BarChartProps) {
  const categoryColors = React.useMemo(() => {
    return Object.fromEntries(
      categories.map((category, i) => [
        category,
        colors[i % colors.length],
      ])
    )
  }, [categories, colors])

  const chartConfig = React.useMemo(() => {
    return Object.fromEntries(
      categories.map((category) => [
        category,
        {
          color: categoryColors[category],
        },
      ])
    )
  }, [categories, categoryColors])

  const legendFormatter = React.useCallback(
    (value: string) => {
      const category = categories.find((category) => category === value)
      return category || value
    },
    [categories]
  )

  return (
    <ChartContainer config={chartConfig}>
      <RechartsBarChart data={data}>
        <XAxis
          dataKey={index}
          axisLine={false}
          tickLine={false}
          tickMargin={10}
          padding={{ left: 20, right: 20 }}
          minTickGap={0}
          tick={{ fontSize: 12 }}
          tickFormatter={(value) => {
            if (startEndOnly) {
              const isFirstOrLast = value === data[0][index] || value === data[data.length - 1][index]
              return isFirstOrLast ? value : ""
            }
            return value
          }}
        />
        <YAxis
          axisLine={false}
          tickLine={false}
          tickMargin={10}
          tickFormatter={(value) => valueFormatter(value)}
          width={yAxisWidth}
          tick={{ fontSize: 12 }}
        />
        {showGridLines && <CartesianGrid vertical={false} strokeDasharray="3 3" />}
        <Tooltip
          content={
            <ChartTooltipContent
              formatter={valueFormatter}
              nameKey={index}
              labelKey={index}
            />
          }
        />
        {showLegend && (
          <Legend
            formatter={legendFormatter}
            iconType="circle"
            iconSize={8}
            margin={{ top: 20 }}
          />
        )}
        {categories.map((category) => (
          <Bar
            key={category}
            dataKey={category}
            fill={categoryColors[category]}
            radius={[4, 4, 0, 0]}
            isAnimationActive={showAnimation}
          />
        ))}
      </RechartsBarChart>
    </ChartContainer>
  )
}
