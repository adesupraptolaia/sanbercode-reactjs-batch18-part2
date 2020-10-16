import React, { useContext } from "react";
import {DaftarBuahContext} from './context-14';
import axios from "axios";


const Table = () => {
    const [daftarBuah, setDaftarBuah, name, setName, price, setPrice, weight, setWeight, command, setCommand, showForm, setShowForm, indexEdit, setIndexEdit] = useContext(DaftarBuahContext);


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

    const reloadData = () => {
        console.log("HANDLE RELOAD")

        axios
            .get("http://backendexample.sanbercloud.com/api/fruits")
            .then((res) => {
                setDaftarBuah(res.data);
            })
            .catch((err) => alert(err));
    };

    return (
        <>
            <h1>Tugas 14</h1>

            <div className="tugas14table">
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
        </>
    );
};

export default Table;