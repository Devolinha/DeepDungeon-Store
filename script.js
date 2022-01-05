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