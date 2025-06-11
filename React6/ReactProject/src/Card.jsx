import React, { useState } from "react";

export default function Card() {
    const [img, setImg] = useState('');
    const [name, SetName] = useState('');
    const [desc, SetDesc] = useState('');
    const [price, SetPrice] = useState('');
    const [record, SetRecord] = useState([]);

    const handleClick = () => {
        let obj = { img, name, desc, price };
        SetRecord([...record, obj]);
        setImg('');
        SetName('');
        SetDesc('');
        SetPrice('');
    };
    return (
        <center>
            <div class='mainform'>
                {/* <h1>Hello</h1> */}
                <input type='file' style={{ marginTop: "20px" }} placeholder='Enter Product Name' value={name} onChange={(e) => setImg(e.target.files[0])} />
                <input type='text' style={{ marginTop: "15px", width: "260px", height: "30px" }} placeholder='Enter Product Name' value={name} onChange={(e) => SetName(e.target.value)} />
                <input type='text' style={{ marginTop: "15px", width: "260px", height: "30px" }} placeholder='Enter Product Desc..' value={desc} onChange={(e) => SetDesc(e.target.value)} />
                <input type='text' style={{ marginTop: "15px", width: "260px", height: "30px" }} placeholder='Enter Product Price' value={price} onChange={(e) => SetPrice(e.target.value)} /><br></br>
                <button className="btn" onClick={handleClick}>Add Product</button>
                <div style={{ marginTop: "30px", width: "400px" }}>
                    {record.map((item, index) => (
                        <div key={index} style={{ border: "1px solid gray", padding: "10px", marginBottom: "10px" }}>
                            <img src={item.img} alt="" style={{ width: "100%", height: "200px", objectFit: "cover" }}></img>
                            <h3>{item.name}</h3>
                            <p>{item.desc}</p>
                            <p><strong>Price:</strong> ₹{item.price}</p>
                        </div>
                    ))}
                </div>
            </div>
        </center>
    )
}