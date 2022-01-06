// JS para o menu responsivo

var MenuItems =  document.getElementById("MenuItems");

MenuItems.style.maxHeight = "0px";

function menutoggle(){
    if(MenuItems.style.maxHeight == "0px")
    {
        MenuItems.style.maxHeight = "200px"
    }
    else
    {
        MenuItems.style.maxHeight = "0px"
    }
}

//modal iniciar
function iniciaModal(modalID) {
    const modal = document.getElementById(modalID);
    if(modal){
        modal.classList.add('show');
        modal.addEventListener('click', (e) => {
        if(e.target.id == modalID || e.target.className == 'button-close' ){
            modal.classList.remove('show')
        }
    });
    }
    
}

const item = document.getElementsByClassName ('item-img');
console.log(item)
for (var i = 0; i< item.length; i++){
item[i].addEventListener('click', function(){
    console.log('inicia')
    iniciaModal('item-modal');
});
}


//Modal infos

const data = 
[
    {
      "itemName": "pogao 1",
      "use": "deixa roxo",
      "ingredients": ["tal1","tal2","tal3"],
      "price": 10.00
    },
    {
      "itemName": "podao 2",
      "use": "roxa",
      "ingredients": ["1","2","3"],
      "price": 12.00
     }
];

const name = document.getElementsByClassName ("subtitulo");
const price = document.getElementsByClassName ('item-price');
const descrição = document.getElementsByClassName ('item-effect');

console.log(name,price,descrição);