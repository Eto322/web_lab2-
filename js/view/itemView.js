export default class itemView {
  constructor(itemModel) {
    this.itemModel = itemModel;
  }

  toHtml() {
    let color;
    if (this.itemModel.chosed) {
      color = "background-color: rgb(218, 128, 128)";
    }
    return `<tr id="${this.itemModel.id}" class="item" style="${color}">
      <td>${this.itemModel.name}</td>
      <td>${this.itemModel.adress}</td>
      <td>${this.itemModel.tel}</td>
  </tr>`;
  }
}
