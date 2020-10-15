import React, { useState, useEffect } from "react";
import axios from "axios";

const Tugas13 = () => {
    const [daftarBuah, setDaftarBuah] = useState([]);
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [weight, setWeight] = useState("");
    const [command, setCommand] = useState("");
    const [showForm, setShowForm] = useState(false);
    const [indexEdit, setIndexEdit] = useState(-1);

    useEffect(() => {
        console.log("HANDLE USE EFFECT")

        axios
            .get("http://backendexample.sanbercloud.com/api/fruits")
            .then((res) => {
                setDaftarBuah(res.data);
            })
            .catch((err) => alert(err));
    }, []);

    const reloadData = () => {
        console.log("HANDLE RELOAD")

        axios
            .get("http://backendexample.sanbercloud.com/api/fruits")
            .then((res) => {
                setDaftarBuah(res.data);
            })
            .catch((err) => alert(err));
    };

    const handleChange = (event) => {
        let key = event.target.name;

        if (key === "name") {
            setName(event.target.value);
        } else if (key === "price") {
            setPrice(event.target.value);
        } else if (key === "weight") {
            setWeight(event.target.value);
        }
    };

    const handleSubmit = (event, key) => {
        event.preventDefault();

        const cekWeight = parseInt(weight)
        const cekPrice = parseInt(price)

        if (isNaN(cekWeight) || isNaN(cekPrice)) {
            alert("price atau weight SALAH !!!");
            return;
        }

        const newItem = {
            name: name,
            price: price,
            weight: weight,
        };

        let url = "http://backendexample.sanbercloud.com/api/fruits"

        // form edit
        if (key === "Edit") {
            console.log("HANDLE EDIT")
            url =
                "http://backendexample.sanbercloud.com/api/fruits/" + indexEdit;
            axios
                .put(url, newItem)
                .then(() => {
                    reloadData();
                })
                .catch((err) => alert(err));

            setShowForm(false);
            setName("");
            setPrice("");
            setWeight("");

            return;
        }

        console.log("HANDLE ADD")
        axios
            .post(url, newItem)
            .then(() => {
                reloadData();
            })
            .catch((err) => alert(err));

        setShowForm(false);
        setName("");
        setPrice("");
        setWeight("");
    };

    const handleEdit = (e, idx) => {
        e.preventDefault();

        setShowForm(true);
        setCommand("Edit");
        setName(daftarBuah[idx].name);
        setPrice(daftarBuah[idx].price);
        setWeight(daftarBuah[idx].weight);
        setIndexEdit(daftarBuah[idx].id);
    };

    const handleDelete = (e, id) => {
        e.preventDefault();
        console.log("HANDLE DELETE")
        let url = "http://backendexample.sanbercloud.com/api/fruits/" + id
        axios
            .delete(url)
            .then((res) => {
                reloadData();
            })
            .catch((err) => alert(err));
    };

    const handleShowFormAdd = (e) => {
        e.preventDefault();

        setShowForm(true);
        setCommand("Tambahkan");
    };

    let form = <></>;

    if (showForm) {
        form = (
            <>
                <form className="tableform">
                    <table>
                        <tr>
                            <td>
                                <label>Name Buah:</label>
                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={name}
                                    name="name"
                                    onChange={handleChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>price:</label>
                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={price}
                                    name="price"
                                    onChange={handleChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>weight:</label>
                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={weight}
                                    name="weight"
                                    onChange={handleChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button
                                    onClick={(e) => handleSubmit(e, command)}
                                >
                                    {command}
                                </button>
                            </td>
                            <td></td>
                        </tr>
                    </table>
                </form>
                <button onClick={() => setShowForm(false)}>Cancel</button>
            </>
        );
    }

    return (
        <div className="tugas13">
            <h1>Tugas 13</h1>

            <div className="tugas13table">
                <h1>Tabel price Buah</h1>
                <table className="tablebuah">
                    <thead>
                        <th>No</th>
                        <th>Name</th>
                        <th>price</th>
                        <th>weight</th>
                        <th>Action</th>
                    </thead>
                    <tbody>
                        {daftarBuah.map((item, idx) => {
                            return (
                                <tr>
                                    <td>{idx + 1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>{item.weight / 1000} kg</td>
                                    <td>
                                        <button
                                            onClick={(e) => handleEdit(e, idx)}
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={(e) =>
                                                handleDelete(e, item.id)
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
            <button onClick={handleShowFormAdd}>Tambahkan Data Buah</button>

            {form}
        </div>
    );
};

export default Tugas13;
