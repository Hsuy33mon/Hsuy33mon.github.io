
function openModal() {
  document.getElementById("productModal").style.display = "block";
}

function closeModal() {
  document.getElementById("productModal").style.display = "none";
}

function addProduct() {
  const select = document.getElementById("productSelect");
  const product = select.value;
  const price = parseFloat(select.options[select.selectedIndex].dataset.price);

  const vat = +(price * 0.07).toFixed(2);
  const total = +(price + vat).toFixed(2);

  const table = document.getElementById("accessoryTable").getElementsByTagName("tbody")[0];
  const row = table.insertRow();

  row.innerHTML = `
    <td>${product}</td>
    <td>${price} ฿</td>
    <td>${vat} ฿</td>
    <td>${total} ฿</td>
    <td><button onclick="deleteRow(this)">Delete</button></td>
  `;

  closeModal();
}

function deleteRow(button) {
  const row = button.parentNode.parentNode;
  row.parentNode.removeChild(row);
}
