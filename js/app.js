const lootArray = {common: ['sword', 'pyke', 'bow'], uncommon: ['great axe', 'fiery blade', 'poison spear'], rare: ["Thor's hammer", 'Zeus thunderbolt'], 'ultra rare': ['The Devils Chalice', "God's curse"]}; //common, uncommon, rare, ultrarare

function itemSort(){// returns an array with the item sorted and its rarity: [item, rarity]
    let rarity;
    let probability = Math.random()*100;
    console.log(probability);
    if(probability < 90){
        console.log('common');
        rarity = 'common';
    }else if(probability < 99){
        console.log('uncommon');
        rarity = 'uncommon';
    }else if( probability < 99.9){
        console.log('rare');
        rarity = 'rare';
    }else{
        console.log('ultra rare');
        rarity = 'ultra rare';
    }

    const item = lootArray[rarity][Math.floor(Math.random()* lootArray[rarity].length)]
    console.log(lootArray[rarity][Math.floor(Math.random()* lootArray[rarity].length)]);

    return [item, rarity];
}

function openChest(){
    let chestImage = document.getElementsByClassName('image')[0];
    let animation = setInterval(frame, 60);
    let i=1;
    
    function frame() {
        if (i>5) {
            clearInterval(animation);
        } else {
            chestImage.src = `./images/Sprite0${i}-Chest.png`;
            i++;
        }
    };

    let audio = new Audio('./music/open_chest.wav');
    audio.play();
}

const clickListener = () => {
    const sortedArray = itemSort();
    const item = sortedArray[0];
    const rarity = sortedArray[1];
    
    openChest();
    
    document.getElementById('chest').removeEventListener('click', clickListener);

    //document.getElementById('chest').innerHTML = '<p class = "weapon">'+item+'</p>' + '\n' + '<p class= "rarity">'+rarity+'</p>';
    
    //let audio = new Audio('./music/find_item.wav');
    //audio.play();
};


Document.onload = function(){
    document.getElementById('chest').addEventListener('click', clickListener);
};

Document.onload();