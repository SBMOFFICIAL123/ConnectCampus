document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Complaint submitted successfully!");
  this.reset();
});
