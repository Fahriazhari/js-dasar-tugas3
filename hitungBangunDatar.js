
// 1. Menghitung Luas dan Keliling Persegi
function hitungLuasPersegi(sisi) {
    luas = sisi * sisi;
    return luas;
}

function hitungKelilingPersegi(sisi) {
    keliling = 4 * sisi;
    return keliling;
}

// 2. Menghitung Luas dan Keliling Persegi Panjang
function hitungLuasPersegiPanjang(panjang, lebar) {
    luas = panjang * lebar;
    return luas;
}
function hitungKelilingPersegiPanjang(panjang, lebar) {
    keliling = 2 * (panjang + lebar);
    return keliling;
}

// 3. Menghitung Luas dan Keliling Lingkaran
function hitungLuasLingkaran(r) {
    luas = Math.PI * r * r;
    return luas;
}
function hitungKelilingLingkaran(r) {
    keliling = 2 * Math.PI * r;
    return keliling;
}

// 4. Menghitung Luas dan Keliling Segitiga
function hitungLuasSegitiga(alas, tinggi) {
    luas = 0.5 * alas * tinggi;
    return luas;
}
function hitungKelilingSegitiga(alas) {
    keliling = alas + alas + alas;
    return keliling;
}


function tampilkanPersegi(sisi) {
    console.log("======Menghitung Luas dan Keliling Bangun Datar======");
    console.log(`Luas Persegi dengan sisi ${sisi} adalah ${hitungLuasPersegi(sisi)}`);
    console.log(`Keliling Persegi dengan sisi ${sisi} adalah ${hitungKelilingPersegi(sisi)}`);
    return;
}

function tampilkanPersegiPanjang(panjang, lebar) {
    console.log("======Menghitung Luas dan Keliling Bangun Datar======");
    console.log(`Luas Persegi Panjang dengan sisi ${panjang} dan ${lebar} adalah ${hitungLuasPersegiPanjang(panjang, lebar)}`);
    console.log(`Keliling Persegi Panjang dengan sisi ${panjang} dan ${lebar} adalah ${hitungKelilingPersegiPanjang(panjang, lebar)}`);
    return tampilkanPersegiPanjang;
}

function tampilkanLingkaran(r) {
    console.log("======Menghitung Luas dan Keliling Lingkaran======");
    console.log(`Luas Lingkaran dengan jari ${r} adalah ${hitungLuasLingkaran(r).toFixed(2)}`);
    console.log(`Keliling Lingkaran dengan jari ${r} adalah ${hitungKelilingLingkaran(r).toFixed(2)}`);
    return tampilkanLingkaran;
}
function tampilkanSegitiga(a, b, c) {
    console.log("======Menghitung Luas dan Keliling Segitiga======");
    console.log(`Luas Segitiga dengan sisi ${a}, ${b}, dan ${c} adalah ${hitungLuasSegitiga(a, b, c)}`);
    console.log(`Keliling Segitiga dengan sisi ${a}, ${b}, dan ${c} adalah ${hitungKelilingSegitiga(a, b, c)}`);
    return tampilkanSegitiga;
}

function tampilkanLuasBangunDatar(sisi, panjang, lebar, r, alas, tinggi) {
    console.log("======Menghitung Luas Bangun Datar======");
    console.log(`Luas Persegi dengan sisi ${sisi} adalah ${hitungLuasPersegi(sisi)}`);
    console.log(`Luas Persegi Panjang dengan sisi ${panjang} dan ${lebar} adalah ${hitungLuasPersegiPanjang(panjang, lebar)}`);
    console.log(`Luas Lingkaran dengan jari ${r} adalah ${hitungLuasLingkaran(r).toFixed(2)}`);
    console.log(`Luas Segitiga dengan alas ${alas} dan tinggi ${tinggi} adalah ${hitungLuasSegitiga(alas, tinggi)}`);
    return tampilkanLuasBangunDatar;
}

function tamppilkanKelilingBangunDatar(sisi, panjang, lebar, r, alas) {
    console.log("======Menghitung Keliling Bangun Datar======");
    console.log(`Keliling Persegi dengan sisi ${sisi} adalah ${hitungKelilingPersegi(sisi)}`);
    console.log(`Keliling Persegi Panjang dengan sisi ${panjang} dan ${lebar} adalah ${hitungKelilingPersegiPanjang(panjang, lebar)}`);
    console.log(`Keliling Lingkaran dengan jari ${r} adalah ${hitungKelilingLingkaran(r).toFixed(2)}`);
    console.log(`Keliling Segitiga dengan sisi ${alas} adalah ${hitungKelilingSegitiga(alas)}`);
    return tamppilkanKelilingBangunDatar;
}

tampilkanLuasBangunDatar(8, 9, 3, 6, 6, 4);
console.log('\n');
tamppilkanKelilingBangunDatar(8, 9, 3, 6, 6);

