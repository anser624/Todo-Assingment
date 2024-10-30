var idnum = 1;

function btn(id) {
  var inputValue = document.getElementById("input");

  var divparent = document.getElementById("div");

  var elemnet = document.createElement("div");

  elemnet.setAttribute("id",idnum);

  elemnet.setAttribute("class",'div-items')
  elemnet.innerHTML = `<p>${inputValue.value}</p> <button onclick="delitem(${idnum})">delete item</button>
    <button onclick="additem(${idnum})">Add item</button>`;

  divparent.appendChild(elemnet);

  idnum = idnum + 1;
}

function delitem(idnum) {

    var delitem = document.getElementById(idnum);

    var parent = delitem.parentNode;

    parent.removeChild(delitem);


}
function additem(idnum){

    var input = document.getElementById('input')

    var updateItem = document.getElementById(idnum);

    updateItem.innerHTML = `<p>${input.value}</p><button onclick="delitem(${idnum})">delete item</button>
    <button onclick="additem(${idnum})">Add item</button>`

}