import itemView from "../view/itemView.js";

export default class itemViewList {
  constructor(itemModelList) {
    this.itemModelList = itemModelList;
    this.addController = null;
    this.delController = null;
    this.addButton = document
      .querySelector("#add")
      .addEventListener("click", () => {
        const name = document.querySelector("#name").value;
        let adress = document.querySelector("#adress").value;
        const tel = document.querySelector("#tel").value.toString();
        if (name != "" && tel != "" && (tel.length == 12 || tel.length == 10)) {
          if (adress == "") {
            adress = "Адресс не указан";
          }
          if (+tel) {
            this.addController(name, tel, adress);
          } else {
            alert(
              "Неверный формат! Номер телефона должен содержать только цифры"
            );
          }
        } else {
          alert(
            `Неверный формат! Обязательно введите имя и номер длинной 10 или 12 цифр!`
          );
        }
      });
    this.delButton = document
      .querySelector("#delete")
      .addEventListener("click", () => {
        this.delController();
      });
    document.querySelector(".main-app").addEventListener("click", (e) => {
      if (e.target.parentNode.classList.value == "item") {
        const index = this.itemModelList.items.findIndex(
          (item) => item.id == e.target.parentNode.id
        );
        // console.log(!this.itemModelList.items[index].chosed);
        const chosed = !this.itemModelList.items[index].chosed;
        this.itemModelList.items[index].chosed = chosed;
      }
    });
  }
  setAddController(add) {
    this.addController = add;
  }
  setDelController(del) {
    this.delController = del;
  }

  toHtml() {
    const items = this.itemModelList.items
      .map((item) => {
        const ItemView = new itemView(item);
        return ItemView.toHtml();
      })
      .join("");
    document.querySelector(".main-app").innerHTML = ` <table>
      <tr>
          <th>Имя</th>
          <th>Адрес</th>
          <th>Номер телефона</th>
      </tr>
      ${items}

  </table>`;
  }
}
