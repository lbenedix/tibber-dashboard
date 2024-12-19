export default function Page() {
  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "2rem" }}>
      <img
        src="/dashboard.png"
        alt="Tibber Dashboard"
        width={800}
        height={600}
        style={{
          maxWidth: "100%",
          height: "auto",
        }}
      />
    </div>
  );
}
