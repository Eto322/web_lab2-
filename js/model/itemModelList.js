export default class itemModelList {
  constructor() {
    this.items = [];
    this.onChangeCallBack = null;
  }
  add(item) {
    item.onChangeCallBack = this.onChangeCallBack;
    this.items.push(item);
  }
  delete() {
    // const index = this.items.findIndex((item) => item.id == itemID);
    // this.items.splice(index, 1);
    // this.items.forEach((item, i) => {
    //   if (item.chosed) {
    //     this.items.splice(i, 1);

    //   }
    let i = 0;
    while (i != this.items.length) {
      if (this.items[i].chosed) {
        this.items.splice(i, 1);
        i--;
      }
      i++;
    }
  }
  setOnChangeCallback(funcCallback) {
    this.onChangeCallBack = funcCallback;
  }
}
