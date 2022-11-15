import React, { useEffect } from "react";

export default function Test3() {
  /*
Membeli makan siang dan menabung

Rusli adalah seorang anak sekolah di SD Beever
Setiap harinya, Rusli diberikan uang jajan oleh orang tuanya 
sebesar Rp. 10.000,- rupiah.

Rusli bisa menabung atau membeli makanan di sekolahnya untuk
makan siang. Kita telah diberikan catatan keuangan Rusli
dalam bentuk text biasa, dan kita diminta menghitung
jumlah uang tabungan Rusli per harinya dan total tabungannya.

OUTPUT:
{
    Senin: 2000,
    Selasa: 5500,
    Rabu: 3500,
    Kamis: 7000,
    Jumat: 5500,
    TotalTabungan: 23500
}

*/

  function jumlahTabungan(listHarga, history) {
    // Write your code here
    let arr = history.split(".");
    let countObj = {};
    let total = 0;
    arr.forEach((keys) => {
      let element = keys.split("-");
      let keyName = element[0];
      let child = element[1].split(",");
      countObj[keyName] = 0;

      child.forEach((namaMkn) => {
        listHarga.map((item) => {
          if (namaMkn === item.nama) {
            countObj[keyName] = countObj[keyName] + item.harga;
          }
        });
      });
      countObj[keyName] = 10000 - countObj[keyName];
      total = total + countObj[keyName];
    });

    countObj["Total tabungan"] = total;
    return countObj;
  }

  var hargaMakanan = [
    {
      nama: "ayam",
      harga: 5000,
    },
    {
      nama: "nasi",
      harga: 2000,
    },
    {
      nama: "cola",
      harga: 1000,
    },
    {
      nama: "chiki",
      harga: 1500,
    },
    {
      nama: "hotdog",
      harga: 3000,
    },
    {
      nama: "aqua",
      harga: 2000,
    },
  ];

  let historyPembelian = `Senin-ayam,nasi,cola.Selasa-chiki,hotdog.Rabu-ayam,chiki.Kamis-hotdog.Jumat-chiki,cola,nasi`;

  useEffect(() => {
    console.log(jumlahTabungan(hargaMakanan, historyPembelian));
  }, []);

  return <div>Test3</div>;
}
