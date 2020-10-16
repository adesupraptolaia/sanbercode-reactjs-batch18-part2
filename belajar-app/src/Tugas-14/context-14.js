import React, { useState, createContext, useEffect } from "react";
import axios from "axios";


export const DaftarBuahContext = createContext();

export const DataBuah = (props) => {
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

    return (
        <DaftarBuahContext.Provider value={[daftarBuah, setDaftarBuah, name, setName, price, setPrice, weight, setWeight, command, setCommand, showForm, setShowForm, indexEdit, setIndexEdit]}>
            {props.children}
        </DaftarBuahContext.Provider>
    );
};
