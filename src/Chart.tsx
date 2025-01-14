interface ChartProps {
  data: { x: string; y: number }[];
  width?: number;
  height?: number;
  showCurrentTime?: boolean;
  scale?: number;
  unit?: string;
  color?: string;
}

export function Chart({
  data,
  width = 300,
  height = 300,
  showCurrentTime = false,
  scale = 1,
  unit = "",
  color="white",
}: ChartProps) {
  const maxY = Math.max(...data.map((p) => p.y * scale));
  const step = Math.ceil(maxY / 4);

  const points = data
    .map((point, index) => {
      const x = (index * width) / (data.length - 1);
      const y = height - ((point.y * scale) / maxY) * height;
      return `${x},${y}`;
    })
    .join(" ");

  const yLabels = [...Array(5)].map((_, i) => {
    const value = i * step;
    return i === 0 ? "" : `${value} ${i === 4 ? unit : ""}`;
  });

  const xLabels = data
    .filter((_, i) => i % 2 === 1)
    .map((point) => {
      return new Date(point.x).toLocaleTimeString("en", {
        hour: "2-digit",
        hour12: false,
        timeZone: "Europe/Berlin",
      });
    });

  const currentX = showCurrentTime
    ? (() => {
        const now = new Date();
        const currentHour = now.getHours();
        const currentIndex = data.findIndex(
          (point) => new Date(point.x).getHours() === currentHour
        );
        return currentIndex >= 0
          ? (currentIndex * width) / (data.length - 1)
          : null;
      })()
    : null;

  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          paddingRight: 8,
        }}
      >
        {yLabels.reverse().map((label, i) => (
          <div
            key={i}
            style={{ fontSize: "12px", color: color, fontWeight: 200 }}
          >
            {label === "0" ? "" : label}
          </div>
        ))}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
          <polyline
            points={points}
            fill="none"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {currentX !== null && (
            <line
              x1={currentX}
              y1={0}
              x2={currentX}
              y2={height}
              stroke="rgb(68 115 158)"
              strokeWidth="3"
              strokeDasharray="4,4"
            />
          )}
        </svg>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div></div>
          {xLabels.map((label, i) => (
            <div
              key={i}
              style={{
                textAlign: "center",
                fontSize: "12px",
                color: color,
                fontWeight: 300,
              }}
            >
              {label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
