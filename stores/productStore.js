import { makeAutoObservable } from "mobx";
import { instance } from "./instance";

class ProductStore {
  products = [];

  constructor() {
    makeAutoObservable(this);
  }

  getProducts = async () => {
    const res = await instance.get("/products");
    this.products = res.data.payload;
  };
}

const productStore = new ProductStore();
productStore.getProducts();
export default productStore;
