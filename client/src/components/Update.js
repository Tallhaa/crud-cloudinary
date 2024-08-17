import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Update = () => {
    const [name, setName] = useState("");
    const [file, setFile] = useState("");

    const navigate = useNavigate();
    const { id } = useParams();

    const getDetails = async () => {
        const res = await axios.get(`https://crud-cloudinary-server.vercel.app/${id}`, {
            headers: {
                "Content-Type": "application/json"
            }
        });



        if (res.status == 200) {
            console.log(res);

            setName(res.data.name);
            setFile(res.data.avatar)
        } else {
            alert("error")
        }
    }

    useEffect(() => {
        getDetails()
    }, [])



    const updateData = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("photo", file);
        formData.append("name", name);

        const config = {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        };

        const res = await axios.put(
            `https://crud-cloudinary-api.vercel.app/${id}`,
            formData,
            config
        );
        if (res.status == 200) {
            console.log("updated");

            navigate("/");
        } else {
            alert("error");
        }
    };
    return (
        <div className="container mt-3">
            <h1>Update</h1>

            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    {/* <Form.Label>Image</Form.Label> */}
                    <img src={file} style={{ width: "150px", height: "150px" }} />

                    <Form.Control
                        type="file"
                        onChange={(e) => setFile(e.target.files[0])}
                    />
                </Form.Group>

                <Button variant="primary" type="submit" onClick={updateData}>
                    Update
                </Button>
            </Form>
        </div>
    )
}

export default Update
