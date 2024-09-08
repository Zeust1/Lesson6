import { useState } from "react"
import Table from "./Table.jsx"

const Productinfo = () => {
    const [productDetail, setProductDetail] = useState([])

    const [formData, setFormData] = useState({
        productId: "",
        productName: "",
        productPrice: "",
        productImage: "",
        productType: "",
        productDescription: ""
    });

    const handleOnchange = (e) => {
        const {name, value} = e.target

        setFormData({
            ...formData,
           [name]: value
        })
    }
    
    const handleOnSubmit = (e) => {
        e.preventDefault()
            setProductDetail([
                ...productDetail,
                formData
            ])

    }
    

    const handleSetValue = (value) => {
        setFormData(value)
    }



    const handleUpdate = () => {

    }

    return (
        <>
            <div className="productInfo">
                <div className="header">
                    <span>Product info</span>
                </div>
                    <form className="form">
                        <div className="input-group mb-3">
                            <label htmlFor="productId">id</label>
                            <input type="text" name="productId" id="productId" placeholder="product id" value={formData.productId}  onChange={handleOnchange}/>
                        </div>

                        <div className="input-group mb-3">
                            <label htmlFor="productName">name</label>
                            <input type="text" name="productName" id="productName" placeholder="product name" value={formData.productName} onChange={handleOnchange}/>
                        </div>
                     
                        <div className="input-group mb-3">
                            <label htmlFor="productPrice">price</label>
                            <input type="text" name="productPrice" id="productPrice" placeholder="product price" value={formData.productPrice} onChange={handleOnchange}/>
                        </div>


                        <div className="input-group mb-3">
                            <label htmlFor="productImage">image</label>
                            <input type="text" name="productImage" id="productImage" placeholder="product image link" value={formData.productImage} onChange={handleOnchange}/>
                        </div>


                        <div className="input-group mb-3">
                            <label htmlFor="productType">ProductType</label>
                            <select className="custom-select" name="productType" id="inputGroupSelect01" value={formData.productType} onChange={handleOnchange}>
                                <option value="phone">phone</option>
                                <option value="pc">pc</option>
                                <option value="screen">screen</option>
                            </select>
                        </div>

                        <div className="input-group mb-3">
                            <label htmlFor="productDescription">description</label>
                            <textarea name="productDescription" id="productDescription" placeholder="product description" value={formData.productDescription} onChange={handleOnchange}></textarea>
                        </div>
                        


                        <div className="footer">

                            <button type="submit" onClick={handleOnSubmit} style={{backgroundColor: "rgb(40, 83, 241)"}}>Create</button>
                            <button onClick={handleOnSubmit} style={{backgroundColor: "green"}}>Update</button>

                        </div>
                    </form>


            </div>

            <Table data={productDetail} handleSetValue={handleSetValue}/>
        </>
    )
}

export default Productinfo