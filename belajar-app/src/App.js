import React from "react";
// import logo from './logo.svg';
import "./App.css";

function App() {
    return (
        <div className="App">
            <div
                style={{
                    border: "solid 1px black",
                    borderRadius: "20px",
                    margin: "10px auto",
                    width: "50%",
                    padding: "20px",
                }}
            >
                <h1>Form Pembelian Buah</h1>
                <form style={{ textAlign: "left", width: "100%" }}>
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
                            <td style={{ verticalAlign: "bottom" }}>
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
                                <button
                                    style={{
                                        backgroundColor: "white",
                                        borderRadius: "30%",
                                    }}
                                >
                                    Kirim
                                </button>
                            </td>
                        </tr>
                    </table>
                </form>
            </div>
        </div>
    );
}

export default App;
