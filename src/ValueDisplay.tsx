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
          color:"hotpink",
        }}
      >
        {icon && <span style={{ marginRight: "6px" }}>{icon}</span>}
        <span style={{ fontWeight: 700 }}>{value}</span>
        <span style={{ fontWeight: 200, opacity: 0.6 }}>{unit}</span>
      </div>
      <Chart
        data={data}
        showCurrentTime={showCurrentTime}
        scale={scale}
        unit={chartUnit}
      />
    </div>
  );
}
