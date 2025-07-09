function renderGraph(graphData) {
  const container = document.getElementById("graphContainer");
  if (!graphData || Object.keys(graphData).length === 0) {
    container.innerHTML = "📉 No graph data available yet.";
    return;
  }

  // Just show raw JSON view (you can replace with D3 or Cytoscape for real visuals)
  container.innerHTML = `<pre>${JSON.stringify(graphData, null, 2)}</pre>`;
}
