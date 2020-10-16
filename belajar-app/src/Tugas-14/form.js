import React, { useContext } from "react";
import { DaftarBuahContext } from "./context-14";
import axios from "axios";

const Form = () => {
    const [daftarBuah, setDaftarBuah, name, setName, price, setPrice, weight, setWeight, command, setCommand, showForm, setShowForm, indexEdit, setIndexEdit] = useContext(DaftarBuahContext);

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

        const cekWeight = parseInt(weight);
        const cekPrice = parseInt(price);

        if (isNaN(cekWeight) || isNaN(cekPrice)) {
            alert("price atau weight SALAH !!!");
            return;
        }

        const newItem = {
            name: name,
            price: price,
            weight: weight,
        };

        let url = "http://backendexample.sanbercloud.com/api/fruits";

        // form edit
        if (key === "Edit") {
            console.log("HANDLE EDIT");
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

        console.log("HANDLE ADD");
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

    const reloadData = () => {
        console.log("HANDLE RELOAD");

        axios
            .get("http://backendexample.sanbercloud.com/api/fruits")
            .then((res) => {
                setDaftarBuah(res.data);
            })
            .catch((err) => alert(err));
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

    return <>{form}</>;
};

export default Form;
