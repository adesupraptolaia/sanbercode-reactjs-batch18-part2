import React from "react";

class Tugas9 extends React.Component {
    render() {
        return (
            <div className="tugas9">
                <h1>Form Pembelian Buah</h1>
                <form>
                    <table>
                        <tr>
                            <td>
                                <label for="nama">
                                    <strong>Nama Pelanggan</strong>
                                </label>
                            </td>
                            <td>
                                <input type="text" id="nama" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <strong>Daftar Item</strong>
                            </td>
                            <td>
                                <input type="checkbox" id="semangka" />
                                <label for="semangka">Semangka</label>
                                <br />
                                <input type="checkbox" id="jeruk" />
                                <label for="jeruk">Jeruk</label>
                                <br />
                                <input type="checkbox" id="nanas" />
                                <label for="nanas">Nanas</label>
                                <br />
                                <input type="checkbox" id="salak" />
                                <label for="salak">Salak</label>
                                <br />
                                <input type="checkbox" id="anggur" />
                                <label for="anggur">Anggur</label>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button>Kirim</button>
                            </td>
                        </tr>
                    </table>
                </form>
            </div>
        );
    }
}

export default Tugas9;
