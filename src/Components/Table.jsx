import { useEffect, useState } from "react";

const Table = (props) => {
    const [newProduct, setNewProduct] = useState (props.data)
    
    useEffect(() => {
        setNewProduct(props.data)
    }, [props.data])

    const onTrash = (id) => {
        setNewProduct(()=>[
            ...newProduct,
            newProduct[id] = ""
                                
        ])
    }
    const getProduct = (key) => {
        props.handleSetValue(newProduct[key])
    }
  return (
    <>
      <table className="table">
        <thead>
            <tr className="header">
            <th>id</th>
            <th>image</th>
            <th>name</th>
            <th>price</th>
            <th>description</th>
            <th>type</th>
            <th>action</th>
            </tr>
        </thead>
        <tbody>
        {newProduct.map((product, index) => {
            if(product.productId){
                return(
                    <tr key={product.productId}>
                        <td>{product.productId}</td>
                        <td>{product.productImage}</td>
                        <td>{product.productName}</td>
                        <td>{product.productPrice}</td>
                        <td>{product.productDescription}</td>
                        <td>{product.productType}</td>
                        <td className="btn-col-7">
                            <button onClick={() => onTrash(index)} style={{backgroundColor: "rgb(255, 77, 77)"}}><i className="fa-solid fa-trash-can"></i></button>
                            <button onClick={() => getProduct(index)} style={{backgroundColor: "rgb(40, 83, 241)"}}><i className="fa-solid fa-pen-to-square"></i></button>
                        </td>
                    </tr>
                )
            }})}
            
        </tbody>
      </table>
    </>
  );
};

export default Table;
