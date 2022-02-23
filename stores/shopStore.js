import { makeAutoObservable } from "mobx";
import { instance } from "./instance";

class ShopStore {
  shops = [];

  constructor() {
    makeAutoObservable(this);
  }

  getShops = async () => {
    const res = await instance.get("/shops");
    console.log("hello", res);
    this.shops = res.data.payload;
  };
}

const shopStore = new ShopStore();
shopStore.getShops();
export default shopStore;
