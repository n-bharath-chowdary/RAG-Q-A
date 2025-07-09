function handlePDFUpload() {
  const input = document.getElementById("pdfUpload");
  const files = input.files;

  if (!files.length) return;

  const formData = new FormData();
  for (let file of files) {
    formData.append("documents", file);
  }

  fetch("http://localhost:8000/upload", {
    method: "POST",
    body: formData
  })
  .then(res => res.json())
  .then(data => {
    alert("✅ Upload successful: " + data.message);
  })
  .catch(err => {
    alert("❌ Upload failed.");
    console.error(err);
  });
}
