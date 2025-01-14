import { Chart } from "./Chart";

interface ValueDisplayProps {
  label: string;
  value: number;
  unit: string;
  icon?: React.ReactNode;
  data: { x: string; y: number }[];
  showCurrentTime?: boolean;
  scale?: number;
  chartUnit?: string;
  color?: string;
}

export function ValueDisplay({
  label,
  value,
  unit,
  icon,
  data,
  showCurrentTime = false,
  scale = 1,
  chartUnit = "",
  color = "white",
}: ValueDisplayProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h2
        style={{
          fontSize: "24px",
          marginBottom: "20px",
          fontWeight: 700,
        }}
      >
        {label}
      </h2>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: icon ? "32px" : "44px",
          fontSize: "36px",
          gap: "6px",
          color:"white",
        }}
      >
        {icon && <span style={{ marginRight: "6px" }}>{icon}</span>}
        <span style={{ fontWeight: 700, color: color }}>{value}</span>
        <span style={{ fontWeight: 200, opacity: 0.6, color: color }}>{unit}</span>
      </div>
      <Chart
        data={data}
        showCurrentTime={showCurrentTime}
        scale={scale}
        unit={chartUnit}
        color={color}
      />
    </div>
  );
}
