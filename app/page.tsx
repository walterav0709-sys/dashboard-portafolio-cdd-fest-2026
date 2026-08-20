export const dynamic = "force-static";

export default function Home() {
  return (
    <main className="dashboard-shell">
      <iframe
        className="dashboard-frame"
        src="/dashboard_portafolio_ptp.html"
        title="Dashboard del Portafolio de Proyectos CdD-FEST"
      />
    </main>
  );
}
