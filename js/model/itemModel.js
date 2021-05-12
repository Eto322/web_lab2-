export default class itemModel {
  constructor(name, tel, adress) {
    this.id = Math.round(Math.random() * 10000).toString();
    this.tel = tel;
    this.name = name;
    this.adress = adress;
    this.chosed = false;
    this.onChangeCallBack = null;
    return this.onModelChange();
  }

  onModelChange() {
    let handler = {
      set: (obj, prop, val) => {
        obj[prop] = val;
        if (this.onChangeCallBack) this.onChangeCallBack();
        return true;
      },
    };
    return new Proxy(this, handler);
  }
}
