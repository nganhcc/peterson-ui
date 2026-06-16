import { FileSpreadsheet, FileText, TrendingDown, TrendingUp } from "lucide-react";
import Header from "../components/layout/Header";
import Sidebar from "../components/layout/Sidebar";
import "./StatisticsPage.css";

const summaryStats = [
  { label: "Lượt xem", value: "1.24M", trend: "12%", tone: "up" },
  { label: "Thời gian xem", value: "1.24M giờ", trend: "8%", tone: "up" },
  { label: "Đăng ký mới", value: "+2,340", trend: "3%", tone: "down" },
  { label: "Video mới", value: "+12", trend: "0%", tone: "flat" },
];

const chartData = [
  { day: "Mon", value: 17 },
  { day: "Tue", value: 29 },
  { day: "Wed", value: 46, active: true },
  { day: "Thu", value: 26 },
  { day: "Fri", value: 37 },
  { day: "Sat", value: 20 },
  { day: "Sun", value: 32 },
];

const topVideos = [
  { title: "Hướng dẫn Docker", views: "98.4K views", variant: "blue" },
  { title: "Review MacBook Air M4", views: "67.2K views", variant: "silver" },
];

export default function StatisticsPage({ activeItem = "statistics", onNavigate }) {
  function exportExcel() {
    const rows = [
      ["Metric", "Value", "Trend"],
      ...summaryStats.map((item) => [item.label, item.value, item.trend]),
      [],
      ["Top Video", "Views"],
      ...topVideos.map((video) => [video.title, video.views]),
    ];
    const csv = rows.map((row) => row.map((cell) => `"${cell}"`).join(",")).join("\n");
    const blob = new Blob([`\uFEFF${csv}`], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "thong-ke-kenh.csv";
    link.click();
    URL.revokeObjectURL(url);
  }

  function exportPdf() {
    window.print();
  }

  return (
    <div className="statistics-page">
      <Sidebar activeItem={activeItem} onNavigate={onNavigate} />
      <Header />

      <main className="statistics-main">
        <div className="statistics-heading">
          <div>
            <h1>THỐNG KÊ KÊNH</h1>
            <p>Overview of your channel&apos;s performance.</p>
          </div>

          <label className="time-filter">
            <span>Thời gian:</span>
            <select defaultValue="30">
              <option value="7">7 ngày qua</option>
              <option value="30">30 ngày qua</option>
              <option value="90">90 ngày qua</option>
            </select>
          </label>
        </div>

        <section className="stats-grid" aria-label="Số liệu tổng quan">
          {summaryStats.map((item) => (
            <article key={item.label} className="stat-card">
              <span>{item.label}</span>
              <strong>{item.value}</strong>
              <em className={`trend trend-${item.tone}`}>
                {item.tone === "down" ? (
                  <TrendingDown size={13} aria-hidden="true" />
                ) : (
                  <TrendingUp size={13} aria-hidden="true" />
                )}
                {item.trend}
              </em>
            </article>
          ))}
        </section>

        <section className="chart-card">
          <h2>Biểu đồ lượt xem theo thời gian</h2>
          <div className="chart-area">
            <div className="chart-scale">
              <span>50k</span>
              <span>40k</span>
              <span>30k</span>
              <span>20k</span>
              <span>10k</span>
              <span>0</span>
            </div>
            <div className="bar-chart">
              {chartData.map((item) => (
                <div key={item.day} className="bar-column">
                  <div
                    className={item.active ? "bar active" : "bar"}
                    style={{ height: `${item.value * 4}px` }}
                    title={`${item.day}: ${item.value}k views`}
                  />
                  <span>{item.day}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="top-video-card">
          <h2>Top Video</h2>
          <ol>
            {topVideos.map((video, index) => (
              <li key={video.title}>
                <span className="rank">{index + 1}.</span>
                <span className={`video-thumb video-thumb-${video.variant}`} />
                <span className="video-title">{video.title}</span>
                <span className="video-views">{video.views}</span>
              </li>
            ))}
          </ol>
        </section>

        <footer className="statistics-actions">
          <button type="button" className="export-button" onClick={exportExcel}>
            <FileSpreadsheet size={16} aria-hidden="true" />
            Xuất Excel
          </button>
          <button type="button" className="export-button export-button-primary" onClick={exportPdf}>
            <FileText size={16} aria-hidden="true" />
            Xuất PDF
          </button>
        </footer>
      </main>
    </div>
  );
}
