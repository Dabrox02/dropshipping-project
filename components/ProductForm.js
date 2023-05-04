import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";

export default function ProductForm({
  _id,
  title: existingTitle,
  description: existingDescription,
  price: existingPrice,
}) {
  const [title, setTitle] = useState(existingTitle || "");
  const [description, setDescription] = useState(existingDescription || "");
  const [price, setPrice] = useState(existingPrice || "");
  const [goToProducts, setGoToProducts] = useState(false);
  const router = useRouter();

  async function createProduct(ev) {
    ev.preventDefault();
    const data = { title, description, price };
    if (_id) {
      await axios.put("/api/products", { ...data, _id });
    } else {
      await axios.post("/api/products", data);
    }
    setGoToProducts(true);
  }

  if (goToProducts) {
    router.push("/products");
  }

  return (
    <form onSubmit={createProduct}>
      <label>Nombre Producto</label>
      <input
        type="text"
        placeholder="Nombre del Producto"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label>Descripcion Producto</label>
      <textarea
        placeholder="Descripcion"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <label>Precio Producto</label>
      <input
        type="text"
        placeholder="Precio"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button className="btn-primary" type="submit">
        Guardar
      </button>
    </form>
  );
}
