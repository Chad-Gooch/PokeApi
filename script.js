const baseURL = 'https://pokeapi.co/api/v2/';
let url;

const first = document.getElementById('kindOne');
const second = document.getElementById('kindTwo');
const button = document.querySelector('#check');
const pokeName = document.getElementById('pokemonName');
const weakCards = document.getElementById('weaknesses');
const pokeSprite = document.getElementById('examples');
const super4times = document.querySelector('#super4');
const super2times = document.querySelector('#super2');
const halfDamage = document.querySelector('#half');
const quarterDamage = document.querySelector('#quarter');
const noneDam = document.querySelector('#noneDamage');
let img = document.createElement('img');
let img2 = document.createElement('img');
let selectType = document.createElement('h3');
let Normal = 6;
let Fire = 6;
let Water = 6;
let Electric = 6;
let Grass = 6;
let Ice = 6;
let Fighting = 6;
let Poison = 6;
let Ground = 6;
let Flying = 6;
let Psychic = 6;
let Bug = 6;
let Rock = 6;
let Ghost = 6;
let Dark = 6;
let Dragon = 6;
let Steel = 6;
let Fairy = 6;


button.addEventListener('click', fetchResults);
pokeName.addEventListener('keypress', function (e) { if (e.key === 'Enter')
        fetchResults()
});


function fetchResults(e) {
    let one = first.value;
    let two = second.value;
    let three = pokeName.value;
    let sprite = '';
    let sprite2 ='';
    
    console.log(one, two, three.toLowerCase());

    while (super4times.firstChild) {
        super4times.removeChild(super4times.firstChild);
    };
    while (super2times.firstChild) {
        super2times.removeChild(super2times.firstChild);
    };
    while (halfDamage.firstChild) {
        halfDamage.removeChild(halfDamage.firstChild);
    };
    while (quarterDamage.firstChild) {
        quarterDamage.removeChild(quarterDamage.firstChild);
    };
    while (noneDam.firstChild) {
        noneDam.removeChild(noneDam.firstChild);
    };
    while (pokeSprite.firstChild) {
        pokeSprite.removeChild(pokeSprite.firstChild);
    };
    Normal = 6;
    Fire = 6;
    Water = 6;
    Electric = 6;
    Grass = 6;
    Ice = 6;
    Fighting = 6;
    Poison = 6;
    Ground = 6;
    Flying = 6;
    Psychic = 6;
    Bug = 6;
    Rock = 6;
    Ghost = 6;
    Dark = 6;
    Dragon = 6;
    Steel = 6;
    Fairy = 6;
        
    if (three !== '') {
        url=baseURL+'pokemon/'+three.toLowerCase();
        console.log(url)
        fetch(url)
            .then(function (result) {
                return result.json();
            })
            .then(function (json){
                console.log(json);
                if (json.types.length > 1) {
                    return one=json.types[0].type.name, two=json.types[1].type.name, sprite=json.sprites.front_default, sprite2=json.sprites.front_shiny;
                } else {
                    return one=json.types[0].type.name, two='', sprite=json.sprites.front_default, sprite2=json.sprites.front_shiny;
                }
            })
            .then(function (stuff){
                img.src = sprite
                img.alt = three
                img2.src = sprite2
                img2.alt = `shiny ${three}`
                selectType.textContent = `${one}       ${two}`
                pokeSprite.appendChild(img)
                pokeSprite.appendChild(img2)
                pokeSprite.appendChild(selectType)
                weaknessCheck(one, two)
            })
    } else {
        weaknessCheck(first.value,second.value)
    }
}

function weaknessCheck(typeOne, typeTwo) {
    url=baseURL+'type/'+typeOne
    fetch(url)
        .then(function (result) {
            return result.json();
        })
        .then(function (json){
            double = json.damage_relations.double_damage_from;
            half = json.damage_relations.half_damage_from;
            noDamage = json.damage_relations.no_damage_from;
            for (let i = 0; i < double.length; i++) { 
                if (double[i].name=='normal') {Normal++};
                if (double[i].name=='fire') {Fire++};
                if (double[i].name=='water') {Water++};
                if (double[i].name=='electric') {Electric++};
                if (double[i].name=='grass') {Grass++};
                if (double[i].name=='ice') {Ice++};
                if (double[i].name=='fighting') {Fighting++};
                if (double[i].name=='poison') {Poison++};
                if (double[i].name=='ground') {Ground++};
                if (double[i].name=='flying') {Flying++};
                if (double[i].name=='psychic') {Psychic++};
                if (double[i].name=='bug') {Bug++};
                if (double[i].name=='rock') {Rock++};
                if (double[i].name=='ghost') {Ghost++};
                if (double[i].name=='dark') {Dark++};
                if (double[i].name=='dragon') {Dragon++};
                if (double[i].name=='steel') {Steel++};
                if (double[i].name=='fairy') {Fairy++};
            }
            for (let i = 0; i < half.length; i++) { 
                if (half[i].name=='normal') {Normal--};
                if (half[i].name=='fire') {Fire--};
                if (half[i].name=='water') {Water--};
                if (half[i].name=='electric') {Electric--};
                if (half[i].name=='grass') {Grass--};
                if (half[i].name=='ice') {Ice--};
                if (half[i].name=='fighting') {Fighting--};
                if (half[i].name=='poison') {Poison--};
                if (half[i].name=='ground') {Ground--};
                if (half[i].name=='flying') {Flying--};
                if (half[i].name=='psychic') {Psychic--};
                if (half[i].name=='bug') {Bug--};
                if (half[i].name=='rock') {Rock--};
                if (half[i].name=='ghost') {Ghost--};
                if (half[i].name=='dark') {Dark--};
                if (half[i].name=='dragon') {Dragon--};
                if (half[i].name=='steel') {Steel--};
                if (half[i].name=='fairy') {Fairy--};
            }
            for (let i = 0; i < noDamage.length; i++) { 
                if (noDamage[i].name=='normal') {Normal-=6};
                if (noDamage[i].name=='fire') {Fire-=6};
                if (noDamage[i].name=='water') {Water-=6};
                if (noDamage[i].name=='electric') {Electric-=6};
                if (noDamage[i].name=='grass') {Grass-=6};
                if (noDamage[i].name=='ice') {Ice-=6};
                if (noDamage[i].name=='fighting') {Fighting-=6};
                if (noDamage[i].name=='poison') {Poison-=6};
                if (noDamage[i].name=='ground') {Ground-=6};
                if (noDamage[i].name=='flying') {Flying-=6};
                if (noDamage[i].name=='psychic') {Psychic-=6};
                if (noDamage[i].name=='bug') {Bug-=6};
                if (noDamage[i].name=='rock') {Rock-=6};
                if (noDamage[i].name=='ghost') {Ghost-=6};
                if (noDamage[i].name=='dark') {Dark-=6};
                if (noDamage[i].name=='dragon') {Dragon-=6};
                if (noDamage[i].name=='steel') {Steel-=6};
                if (noDamage[i].name=='fairy') {Fairy-=6};
            }    
        })
        .then(function(second){
            if (typeTwo !== '') {
                urlTwo=baseURL+'type/'+typeTwo;
                        fetch(urlTwo)
                            .then(function (resultTwo) {
                                return resultTwo.json();
                            })
                            .then(function (jsonTwo){
                                doubleTwo = jsonTwo.damage_relations.double_damage_from;
                                halfTwo = jsonTwo.damage_relations.half_damage_from;
                                noDamageTwo = jsonTwo.damage_relations.no_damage_from;
                                for (let i = 0; i < doubleTwo.length; i++) { 
                                    if (doubleTwo[i].name=='normal') {Normal++};
                                    if (doubleTwo[i].name=='fire') {Fire++};
                                    if (doubleTwo[i].name=='water') {Water++};
                                    if (doubleTwo[i].name=='electric') {Electric++};
                                    if (doubleTwo[i].name=='grass') {Grass++};
                                    if (doubleTwo[i].name=='ice') {Ice++};
                                    if (doubleTwo[i].name=='fighting') {Fighting++};
                                    if (doubleTwo[i].name=='poison') {Poison++};
                                    if (doubleTwo[i].name=='ground') {Ground++};
                                    if (doubleTwo[i].name=='flying') {Flying++};
                                    if (doubleTwo[i].name=='psychic') {Psychic++};
                                    if (doubleTwo[i].name=='bug') {Bug++};
                                    if (doubleTwo[i].name=='rock') {Rock++};
                                    if (doubleTwo[i].name=='ghost') {Ghost++};
                                    if (doubleTwo[i].name=='dark') {Dark++};
                                    if (doubleTwo[i].name=='dragon') {Dragon++};
                                    if (doubleTwo[i].name=='steel') {Steel++};
                                    if (doubleTwo[i].name=='fairy') {Fairy++};
                                }
                                for (let i = 0; i < halfTwo.length; i++) { 
                                    if (halfTwo[i].name=='normal') {Normal--};
                                    if (halfTwo[i].name=='fire') {Fire--};
                                    if (halfTwo[i].name=='water') {Water--};
                                    if (halfTwo[i].name=='electric') {Electric--};
                                    if (halfTwo[i].name=='grass') {Grass--};
                                    if (halfTwo[i].name=='ice') {Ice--};
                                    if (halfTwo[i].name=='fighting') {Fighting--};
                                    if (halfTwo[i].name=='poison') {Poison--};
                                    if (halfTwo[i].name=='ground') {Ground--};
                                    if (halfTwo[i].name=='flying') {Flying--};
                                    if (halfTwo[i].name=='psychic') {Psychic--};
                                    if (halfTwo[i].name=='bug') {Bug--};
                                    if (halfTwo[i].name=='rock') {Rock--};
                                    if (halfTwo[i].name=='ghost') {Ghost--};
                                    if (halfTwo[i].name=='dark') {Dark--};
                                    if (halfTwo[i].name=='dragon') {Dragon--};
                                    if (halfTwo[i].name=='steel') {Steel--};
                                    if (halfTwo[i].name=='fairy') {Fairy--};
                                }
                                for (let i = 0; i < noDamageTwo.length; i++) { 
                                    if (noDamageTwo[i].name=='normal') {Normal-=6};
                                    if (noDamageTwo[i].name=='fire') {Fire-=6};
                                    if (noDamageTwo[i].name=='water') {Water-=6};
                                    if (noDamageTwo[i].name=='electric') {Electric-=6};
                                    if (noDamageTwo[i].name=='grass') {Grass-=6};
                                    if (noDamageTwo[i].name=='ice') {Ice-=6};
                                    if (noDamageTwo[i].name=='fighting') {Fighting-=6};
                                    if (noDamageTwo[i].name=='poison') {Poison-=6};
                                    if (noDamageTwo[i].name=='ground') {Ground-=6};
                                    if (noDamageTwo[i].name=='flying') {Flying-=6};
                                    if (noDamageTwo[i].name=='psychic') {Psychic-=6};
                                    if (noDamageTwo[i].name=='bug') {Bug-=6};
                                    if (noDamageTwo[i].name=='rock') {Rock-=6};
                                    if (noDamageTwo[i].name=='ghost') {Ghost-=6};
                                    if (noDamageTwo[i].name=='dark') {Dark-=6};
                                    if (noDamageTwo[i].name=='dragon') {Dragon-=6};
                                    if (noDamageTwo[i].name=='steel') {Steel-=6};
                                    if (noDamageTwo[i].name=='fairy') {Fairy-=6};
                                }
                                let weakArray =[
                                    {name:'Normal', value:Normal},
                                    {name:'Fire', value:Fire},
                                    {name:'Water', value:Water},
                                    {name:'Electric', value:Electric},
                                    {name:'Grass', value:Grass},
                                    {name:'Ice', value:Ice},
                                    {name:'Fighting', value:Fighting},
                                    {name:'Poison', value:Poison},
                                    {name:'Ground', value:Ground},
                                    {name:'Flying', value:Flying},
                                    {name:'Psychic', value:Psychic},
                                    {name:'Bug', value:Bug},
                                    {name:'Rock', value:Rock},
                                    {name:'Ghost', value:Ghost},
                                    {name:'Dark', value:Dark},
                                    {name:'Dragon', value:Dragon},
                                    {name:'Steel', value:Steel},
                                    {name:'Fairy', value:Fairy},
                                ]
                                console.log(weakArray)
                                weaknessCard(weakArray)    
                            })
            } else {
                let weakArray =[
                    {name:'Normal', value:Normal},
                    {name:'Fire', value:Fire},
                    {name:'Water', value:Water},
                    {name:'Electric', value:Electric},
                    {name:'Grass', value:Grass},
                    {name:'Ice', value:Ice},
                    {name:'Fighting', value:Fighting},
                    {name:'Poison', value:Poison},
                    {name:'Ground', value:Ground},
                    {name:'Flying', value:Flying},
                    {name:'Psychic', value:Psychic},
                    {name:'Bug', value:Bug},
                    {name:'Rock', value:Rock},
                    {name:'Ghost', value:Ghost},
                    {name:'Dark', value:Dark},
                    {name:'Dragon', value:Dragon},
                    {name:'Steel', value:Steel},
                    {name:'Fairy', value:Fairy},
                ]
                console.log(weakArray)
                weaknessCard(weakArray)    
            }
        })
}
function invalidName(error) {
    console.log('error:', error);
    img.src = './assets/poak.png';
    img.alt = 'Professor Oak';
    img.textContent ='The provided input is not a pokemon.  Please clear Pokemon Name: and try again'
}

function weaknessCard(weakArray) {
    let para = document.createElement('p');

    for( let i = 0; i < weakArray.length; i++) {
        if (weakArray[i].value === 8){
            console.log('x4',weakArray[i].name)
            let para = document.createElement('li')
            para.textContent = weakArray[i].name;
            super4times.appendChild(para);            
        } else if (weakArray[i].value === 7){
            console.log('x2',weakArray[i].name);
            let para = document.createElement('li')
            para.textContent = weakArray[i].name;
            super2times.appendChild(para);
        }
        else if (weakArray[i].value === 5){
            console.log('x.5',weakArray[i].name);
            let para = document.createElement('li')
            para.textContent = weakArray[i].name;
            halfDamage.appendChild(para);
        }
        else if (weakArray[i].value === 4){
            console.log('x.25',weakArray[i].name);
            let para = document.createElement('li')
            para.textContent = weakArray[i].name;
            quarterDamage.appendChild(para);
        }
        else if (weakArray[i].value < 4){
            console.log('x0',weakArray[i].name);
            let para = document.createElement('li');
            para.textContent = weakArray[i].name;
            noneDam.appendChild(para);
        }
    }
}
