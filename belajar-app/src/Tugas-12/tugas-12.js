import React from "react";

class Tugas11 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            daftarBuah: [
                { nama: "Semangka", harga: 10000, berat: 1000 },
                { nama: "Anggur", harga: 40000, berat: 500 },
                { nama: "Strawberry", harga: 30000, berat: 400 },
                { nama: "Jeruk", harga: 30000, berat: 1000 },
                { nama: "Mangga", harga: 30000, berat: 500 },
            ],
            nama: "",
            harga: "",
            berat: "",
            command: "",
            inputSalah: false,
            showForm: false,
            indexEdit: -1,
        };
    }

    handleChange = (event) => {
        let key = event.target.name;
        this.setState({
            [key]: event.target.value,
        });
    };

    handleSubmit = (event, key, idx) => {
        event.preventDefault();

        if (isNaN(this.state.berat) || isNaN(this.state.harga)) {
            alert("Harga atau Berat SALAH !!!");
            return;
        }

        let newItem = {
            nama: this.state.nama,
            harga: this.state.harga,
            berat: this.state.berat,
        };

        if (key === "Edit") {
            let temp = this.state.daftarBuah;
            temp[idx] = newItem;
            this.setState({
                showForm: false,
                daftarBuah: temp,
                nama: "",
                harga: "",
                berat: "",
                command: "",
                indexEdit: -1,
            });
            return;
        }

        this.setState({
            showForm: false,
            daftarBuah: [...this.state.daftarBuah, newItem],
            nama: "",
            harga: "",
            berat: "",
            command: "",
            indexEdit: -1,
        });
    };

    handleEdit = (e, idx) => {
        e.preventDefault();
        this.setState({
            showForm: true,
            command: "Edit",
            nama: this.state.daftarBuah[idx].nama,
            harga: this.state.daftarBuah[idx].harga,
            berat: this.state.daftarBuah[idx].berat,
            indexEdit: idx,
        });
    };

    handleDelete = (e, idx) => {
        e.preventDefault();
        this.state.daftarBuah.splice(idx,1)

        this.setState({
            daftarBuah: this.state.daftarBuah
        });
    };

    handleShowFormAdd = (e) => {
        e.preventDefault();
        this.setState({
            showForm: true,
            command: "Tambahkan",
        });
    };

    render() {
        let form = <></>;

        if (this.state.showForm) {
            form = (
                <>
                    <form className="tableform">
                        <table>
                            <tr>
                                <td>
                                    <label>Nama Buah:</label>
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        value={this.state.nama}
                                        name="nama"
                                        onChange={this.handleChange}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>Harga:</label>
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        value={this.state.harga}
                                        name="harga"
                                        onChange={this.handleChange}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>Berat:</label>
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        value={this.state.berat}
                                        name="berat"
                                        onChange={this.handleChange}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <button
                                        onClick={(e) =>
                                            this.handleSubmit(
                                                e,
                                                this.state.command,
                                                this.state.indexEdit
                                            )
                                        }
                                    >
                                        {this.state.command}
                                    </button>
                                </td>
                                <td></td>
                            </tr>
                        </table>
                    </form>
                    <button onClick={() => this.setState({ showForm: false })}>
                        Cancel
                    </button>
                </>
            );
        }

        return (
            <div className="tugas12">
                <h1>Tugas 12</h1>

                <div className="tugas12table">
                    <h1>Tabel Harga Buah</h1>
                    <table className="tablebuah">
                        <thead>
                            <th>Nama</th>
                            <th>Harga</th>
                            <th>Berat</th>
                        </thead>
                        <tbody>
                            {this.state.daftarBuah.map((item, idx) => {
                                return (
                                    <tr>
                                        <td>{item.nama}</td>
                                        <td>{item.harga}</td>
                                        <td>{item.berat / 1000} kg</td>
                                        <td>
                                            <button
                                                onClick={(e) =>
                                                    this.handleEdit(e, idx)
                                                }
                                            >
                                                Edit
                                            </button>
                                            <button
                                                onClick={(e) =>
                                                    this.handleDelete(e, idx)
                                                }
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>

                <br />
                <button onClick={this.handleShowFormAdd}>
                    Tambahkan Data Buah
                </button>

                {form}
            </div>
        );
    }
}

export default Tugas11;
