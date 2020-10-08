import React from "react";
// import logo from './logo.svg';
import "./App.css";

function App() {
    return (
        <div className="App">
            <h1>Form Pembelian Buah</h1>
            <form style={{ textAlign: "left" }}>
                <table>
                    <tr>
                        <td style={{ paddingRight: "100px" }}>
                            <strong>Nama Pelanggan</strong>
                        </td>
                        <td>
                            <input type="text" />
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
    );
}

export default App;
