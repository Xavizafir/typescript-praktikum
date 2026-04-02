"use strict";
// === Script sebelumnya ===
let nama = "Xavi";
let umur = 16;
let aktif = true;
console.log(nama, umur, aktif);
function login(username, password) {
    return username === "admin" && password === "admin";
}
console.log(login("admin", "admin"));
const siswa1 = {
    id: 1,
    nama: "Xavi",
    kelas: "11 PG 1"
};
console.log(siswa1);
// === Tugas 2 — Function Hitung Umur ===
function hitungUmur(tahunLahir) {
    const umurHasil = 2026 - tahunLahir;
    return umurHasil;
}
console.log(hitungUmur(2008)); // output: 18
