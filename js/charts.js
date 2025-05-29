// charts.js: actualización de gráficos con Chart.js • https://www.chartjs.org/docs/latest/

let chart;
export function updateChart(data) {
  const ctx = document.getElementById('stats-chart').getContext('2d');
  const counts = data.reduce((acc, p) => {
    acc[p.consulta] = (acc[p.consulta] || 0) + 1;
    return acc;
  }, {});
  const labels = Object.keys(counts);
  const vals   = labels.map(l => counts[l]);

  if (chart) chart.destroy();
  chart = new Chart(ctx, {
    type: 'bar',
    data: { labels, datasets: [{ label: 'Consultas', data: vals }] },
    options: { responsive: true }
  });
}
