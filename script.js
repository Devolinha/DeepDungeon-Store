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


//Tentativa de JSON

let data ='{"items":['+
     '{"nome":"Healt Potion","price":1000,"efeito": "Heals the targert"},'+
     '{"nome":"Green Potion","price":3000,"efeito": "Poison the targert"},'+
     '{"nome":"Mana Potion","price":2000,"efeito": "Restore users mana"},'+
     '{"nome":"Pink Potion","price":5000,"efeito": "Make the user fall in love with you"},'+
     '{"nome":"Yellow Potion","price":10000,"efeito": "Restore to user armor"}'+
']}'

let c_json=JSON.parse(data)

console.log(c_json.items[2].price)


//Migué pra funcionar
function main1F(data){
    const img = document.getElementById("item-image")
    img.src = "Items/mana_potion.png"
    document.getElementById("item-name").innerHTML = "Mana Potion"
    document.getElementById("item-effect").innerHTML = "Restore users mana"
    document.getElementById("item-price").innerHTML = "$20,00"
}
function main2F(){
    const img = document.getElementById("item-image")
    img.src = "Items/pink_potion.png"
    document.getElementById("item-name").innerHTML = "Pink Potion"
    document.getElementById("item-effect").innerHTML = "Make the user fall in love with you"
    document.getElementById("item-price").innerHTML = "$50,00"
}
function main3F(){
    const img = document.getElementById("item-image")
    img.src = "Items/green_potion.png"
    document.getElementById("item-name").innerHTML = "Green Potion"
    document.getElementById("item-effect").innerHTML = "Poison the target"
    document.getElementById("item-price").innerHTML = "$50,00"
}
function main4F(){
    const img = document.getElementById("item-image")
    img.src = "Items/health_potion.png"
    document.getElementById("item-name").innerHTML = "Health Potion"
    document.getElementById("item-effect").innerHTML = "Heal the target"
    document.getElementById("item-price").innerHTML = "$10,00"
}



function last1F(){
    const img = document.getElementById("item-image")
    img.src = "Items/ice_axe.png"
    document.getElementById("item-name").innerHTML = "Ice Axe"
    document.getElementById("item-effect").innerHTML = "Freezes the injured target"
    document.getElementById("item-price").innerHTML = "$200,00"
}
function last2F(){
    const img = document.getElementById("item-image")
    img.src = "Items/lava_sword.png"
    document.getElementById("item-name").innerHTML = "Lava Sword"
    document.getElementById("item-effect").innerHTML = "Causes severe burns to injured target"
    document.getElementById("item-price").innerHTML = "$160,00"
}
function last3F(){
    const img = document.getElementById("item-image")
    img.src = "Items/wood_book.png"
    document.getElementById("item-name").innerHTML = "Wood Book"
    document.getElementById("item-effect").innerHTML = "Gives the user the powers of nature"
    document.getElementById("item-price").innerHTML = "$500,00"
}
function last4F(){
    const img = document.getElementById("item-image")
    img.src = "Items/yellow_potion.png"
    document.getElementById("item-name").innerHTML = "Yellow Potion"
    document.getElementById("item-effect").innerHTML = "Restore to user armor"
    document.getElementById("item-price").innerHTML = "$30,00"
}
function last5F(){
    const img = document.getElementById("item-image")
    img.src = "Items/lava_book.png"
    document.getElementById("item-name").innerHTML = "Lava Book"
    document.getElementById("item-effect").innerHTML = "Grants user the primordial powers of Earth"
    document.getElementById("item-price").innerHTML = "$600,00"
}
function last6F(){
    const img = document.getElementById("item-image")
    img.src = "Items/pink_potion.png"
    document.getElementById("item-name").innerHTML = "Pink Potion"
    document.getElementById("item-effect").innerHTML = "Make the user fall in love with you"
    document.getElementById("item-price").innerHTML = "$50,00"
}
function last7F(){
    const img = document.getElementById("item-image")
    img.src = "Items/mana_potion.png"
    document.getElementById("item-name").innerHTML = "Mana Potion"
    document.getElementById("item-effect").innerHTML = "Restore users mana"
    document.getElementById("item-price").innerHTML = "$20,00"
}
function last8F(){
    const img = document.getElementById("item-image")
    img.src = "Items/health_potion.png"
    document.getElementById("item-name").innerHTML = "Health Potion"
    document.getElementById("item-effect").innerHTML = "Heal the target"
    document.getElementById("item-price").innerHTML = "$10,00"
}




