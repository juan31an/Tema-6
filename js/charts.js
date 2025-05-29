// charts.js: actualización de gráficos con Chart.js • https://www.chartjs.org/docs/latest/

let chart;
export function updateChart(data) {
  if (typeof Chart === 'undefined') {
    console.warn('Chart.js library not loaded. Skipping chart update.');
    const chartCanvas = document.getElementById('stats-chart');
    if (chartCanvas) {
      try {
        const ctx = chartCanvas.getContext('2d');
        if (ctx) {
          chartCanvas.height = chartCanvas.height; // Clears the canvas
          ctx.font = '14px Arial';
          ctx.fillStyle = 'grey';
          ctx.textAlign = 'center';
          ctx.fillText('Gráfico no disponible (Chart.js no cargado)', chartCanvas.width / 2, chartCanvas.height / 2);
        }
      } catch(e) {
        console.error("Error accessing canvas context for chart placeholder: ", e);
      }
    }
    return; 
  }

  const chartCanvas = document.getElementById('stats-chart');
  if (!chartCanvas) {
      console.warn('Canvas element #stats-chart not found. Skipping chart update.');
      return;
  }
  const ctx = chartCanvas.getContext('2d');
  if (!ctx) {
    console.warn('Canvas context for stats-chart not found. Skipping chart update.');
    return;
  }

  const counts = data.reduce((acc, p) => {
    acc[p.consulta] = (acc[p.consulta] || 0) + 1;
    return acc;
  }, {});
  const labels = Object.keys(counts);
  const vals   = labels.map(l => counts[l]);

  if (chart) {
    chart.destroy();
  }
  chart = new Chart(ctx, {
    type: 'bar',
    data: { labels, datasets: [{ label: 'Consultas', data: vals }] },
    options: { responsive: true }
  });
}
