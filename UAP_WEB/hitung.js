listbarang = [
  { kode: "001", nama: "A", harga: 10000 },
  { kode: "002", nama: "B", harga: 15000 },
  { kode: "003", nama: "C", harga: 20000 },
];

function createTableRow(barang) {
  const row = document.createElement("tr");
  const kodebarang = document.createElement("td");
  const namabarang = document.createElement("td");
  const hargabarang = document.createElement("td");

  kodebarang.textContent = barang.kode;
  namabarang.textContent = barang.nama;
  hargabarang.textContent = barang.harga;

  row.appendChild(kodebarang);
  row.appendChild(namabarang);
  row.appendChild(hargabarang);

  return row;
}

function displayItemList() {
  const bodytable = document.getElementById("barangtabel");
  listbarang.forEach((barang) => {
    const row = createTableRow(barang);
    bodytable.appendChild(row);
  });
}

function transaksi() {
  const kodebarangInput = document.getElementById("kodebarang").value;
  const jumlahbarangInput = parseInt(
    document.getElementById("jumlahbarang")
  ).value;

  const pilihbarang = listbarang.find(
    (barang) => barang.kode === kodebarangInput
  );

  const totalharga = pilihbarang.harga * jumlahbarangInput;
  alert(`total harga : ${totalharga}`);
  const uangbayar = parseFloat(prompt("banyak uang dibayarkan :"));
  const kembalian = uangbayar - totalharga;
  alert(`uang kembalian : ${kembalian}`);
}

document.addEventListener("DOMContentLoaded", () => {
  displayItemList();

  const submit = document.getElementById("submit");
  submit.addEventListener("click", transaksi);
});
