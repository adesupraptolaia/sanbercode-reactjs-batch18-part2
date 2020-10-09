import React from "react";

class Tugas10 extends React.Component {
    render() {
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
                        {this.props.daftar.map((item) => {
                            return (
                                <tr>
                                    <td>{item.nama}</td>
                                    <td>{item.harga}</td>
                                    <td>{item.berat/1000} kg</td>
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
