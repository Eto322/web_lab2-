import itemModelList from "./model/itemModelList.js";
import itemViewList from "./view/itemViewList.js";

import controller from "./controller/controller.js";

const ItemModelList = new itemModelList();
const ItemViewList = new itemViewList(ItemModelList);

const Controller = new controller(ItemModelList, ItemViewList);
