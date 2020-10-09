import React from "react";
import "./App.css";
import Tugas9 from "./Tugas-9/tugas-9.js";
import Tugas10 from "./Tugas-10/tugas-10.js";

function App() {
    let dataHargaBuah = [
        { nama: "Semangka", harga: 10000, berat: 1000 },
        { nama: "Anggur", harga: 40000, berat: 500 },
        { nama: "Strawberry", harga: 30000, berat: 400 },
        { nama: "Jeruk", harga: 30000, berat: 1000 },
        { nama: "Mangga", harga: 30000, berat: 500 },
    ];

    return (
        <div className="App">
            <Tugas9 />
            <Tugas10 daftar={dataHargaBuah} />
        </div>
    );
}

export default App;
