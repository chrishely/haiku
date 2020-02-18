const phraseOneArray = [
	{
		phraseOne : `As she drips red wine. `
	},
	{
		phraseOne : `At once her hand leapt. `
	},
	{
		phraseOne : `The void within thoughts. `
	},
	{
		phraseOne : `To treat enemies. `
	},
	{
		phraseOne : `Yesterday was cold. `
	},
	{
		phraseOne : `Break all before you. `
	}
];

const phraseTwoArray = [
	{
		phraseTwo : ` An ode to forgotten joy.`
	},
	{
		phraseTwo : ` Of painted fingernails broken.`
	},
	{
		phraseTwo : ` An unholy curmudgeon.`
	},
	{
		phraseTwo : ` untethered ideology.`
	},
	{
		phraseTwo : ` Honey made from human bones.`
	},
	{
		phraseTwo : ` Separated fingers broken.`
	}
];
const phraseThreeArray = [
	{
		phraseThree : ` Pregnant with white blood.`
	},
	{
		phraseThree : ` Distaste for our kind.`
	},
	{
		phraseThree : ` All weep unending.`
	},
	{
		phraseThree : ` Wine into my womb.`
	},
	{
		phraseThree : ` A bleak nuance apart.`
	},
	{
		phraseThree : ` After the blood moon.`
	}
];

const poemBtn = document.querySelector('.poemBtn');
const poetryGen = document.querySelector('.poetryGen');
const poetryGenTwo = document.querySelector('.poetryGenTwo');
const poetryGenThree = document.querySelector('.poetryGenThree');
const phraseOne = document.querySelector('.phraseOne');
const phraseTwo = document.querySelector('.phraseTwo');
const phraseThree = document.querySelector('.phraseThree');

poemBtn.addEventListener('click', displayphraseStart);

function displayphraseStart() {
	let number = Math.floor(Math.random() * phraseOneArray.length);
	let numberTwo = Math.floor(Math.random() * phraseTwoArray.length);
	let numberThree = Math.floor(Math.random() * phraseThreeArray.length);
	poetryGen.innerHTML = phraseOneArray[number].phraseOne;
	poetryGenTwo.innerHTML = phraseTwoArray[numberTwo].phraseTwo;
	poetryGenThree.innerHTML = phraseThreeArray[numberThree].phraseThree;
}
