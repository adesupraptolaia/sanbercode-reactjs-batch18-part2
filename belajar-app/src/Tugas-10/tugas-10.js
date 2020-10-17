import React from "react";

class Tugas10 extends React.Component {
    render() {
        let dataHargaBuah = [
            { nama: "Semangka", harga: 10000, berat: 1000 },
            { nama: "Anggur", harga: 40000, berat: 500 },
            { nama: "Strawberry", harga: 30000, berat: 400 },
            { nama: "Jeruk", harga: 30000, berat: 1000 },
            { nama: "Mangga", harga: 30000, berat: 500 },
        ];

        return (
            <div className="tugas10">
                <h1>Tabel Harga Buah</h1>
                <table>
                    <thead>
                        <th>Nama</th>
                        <th>Harga</th>
                        <th>Berat</th>
                    </thead>
                    <tbody>
                        {dataHargaBuah.map((item) => {
                            return (
                                <tr>
                                    <td>{item.nama}</td>
                                    <td>{item.harga}</td>
                                    <td>{item.berat / 1000} kg</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Tugas10;
