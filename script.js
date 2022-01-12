const bottoni = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

let outptHtml = document.querySelector(".output1")

bottoni.forEach((element) => {
    outptHtml.innerHTML += `
        <div class="bottone">
            <i class="${element.family} ${element.prefix}${element.name}  ${element.color} ${element.type}"></i>
            <div>${element.name}</div>
        </div>
    `
})



const elementoSel = document.getElementById("tipo-select")

elementoSel.addEventListener('change', (scelta) => {
    outptHtml.innerHTML = ``
    let newList = bottoni.filter(function(bottone){
        let tipo = bottoni.typeì
        if (scelta.target.value === 'all') {
            return bottoni;
        } else if (scelta.target.value === 'animal'){
            return bottone.type === 'animal';
        }else if (scelta.target.value === 'vegetable'){
            return bottone.type === 'vegetable';
        }else if (scelta.target.value === 'user'){
            return bottone.type === 'user';
        }
    })
    console.log(newList)
    newList.forEach((element) => {
        outptHtml.innerHTML += `
            <div class="bottone">
                <i class="${element.family} ${element.prefix}${element.name}  ${element.color} ${element.type}"></i>
                <div>${element.name}</div>
            </div>
        `
    })
})











