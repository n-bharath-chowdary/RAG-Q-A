async function askQuestion() {
  const query = document.getElementById("userQuery").value.trim();
  const responseArea = document.getElementById("responseArea");

  if (!query) {
    responseArea.innerHTML = "⚠️ Please enter a valid question.";
    return;
  }

  responseArea.innerHTML = "🧠 Processing your query...";

  try {
    const res = await fetch("http://localhost:8000/ask", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ query })
    });

    const data = await res.json();
    responseArea.innerHTML = `<strong>📘 Answer:</strong><br><br>${data.answer}`;
    renderGraph(data.knowledge_graph || {});
  } catch (err) {
    console.error(err);
    responseArea.innerHTML = "❌ Oops! Failed to retrieve answer from the system.";
  }
}
