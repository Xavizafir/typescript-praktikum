// === Script sebelumnya ===
let nama: string = "Xavi";
let umur: number = 16;
let aktif: boolean = true;
console.log(nama, umur, aktif);

function login(username: string, password: string): boolean {
    return username === "admin" && password === "admin";
}
console.log(login("admin", "admin"));

// === Tugas 1 — Interface Siswa ===
interface Siswa {
    id: number;
    nama: string;
    kelas: string;
}

const siswa1: Siswa = {
    id: 1,
    nama: "Xavi",
    kelas: "11 PG 1"
};

console.log(siswa1);

// === Tugas 2 — Function Hitung Umur ===
function hitungUmur(tahunLahir: number): number {
    const umurHasil = 2026 - tahunLahir;
    return umurHasil;
}

console.log(hitungUmur(2009)); // output: 18