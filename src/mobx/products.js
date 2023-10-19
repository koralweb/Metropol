import {action, makeObservable, observable} from 'mobx';
import tovarList from '../data/tovarList';

class Product {
  list = tovarList;

  constructor() {
    makeObservable(this, {
      list: observable,
      addProduct: action,
      removeProduct: action,
      clearAllProducts: action
    });
  }
  addProduct(id, cnt) {
    this.list.find(el => el.id === id).count = cnt;
    this.list.find(el => el.id === id).added = true;
  }

  removeProduct(id) {
    this.list.find(el => el.id === id).added = false;
  }

  clearAllProducts(){
    this.list.forEach(el => el.added = false)
  }
}

const products = new Product();

export default products;
