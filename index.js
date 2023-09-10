const checkbox = document.getElementById('checkbox');
const body = document.body;

checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
      body.style.backgroundColor = '#1f1f1f'; // Warna ketika switch dinyalakan
    } else {
      body.style.backgroundColor = '#f3f3f3'; // Warna ketika switch dimatikan (kembali ke warna asli)
    }
});
