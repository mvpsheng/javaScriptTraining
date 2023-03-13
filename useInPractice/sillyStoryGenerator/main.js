const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day."
const insertX = ["Willy the Goblin", "Big Daddy","Father Christmas"]
const insertY = ["the soup kitchen", "Disneyland", "the White House"]
const insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"]

randomize.addEventListener('click', result);

function result() {

    const newStory = storyText;
    const xItem = randomValueFromArray(insertX)
    const yItem = randomValueFromArray(insertY)
    const zItem = randomValueFromArray(insertZ)
    console.log(xItem, yItem, zItem);
    let rep1 = newStory.replace(":insertx:", xItem)
    const rep2 = rep1.replace(":inserty:", yItem)
    let rep3 = rep2.replace(":insertz:", zItem)
    rep1 = rep3.replace(":insertx:", xItem)
    console.log(rep1);
  if(customName.value !== '') {
    const name = customName.value;
    console.log('changename', name);
    rep1 = rep1.replace('Bob', name)
  }
  let rep4 = rep1;
  let rep5 = rep1;
  if(document.getElementById("uk").checked) {
    const weight = Math.round(300);
    const temperature =  Math.round(94);
    rep4 = rep3.replace("fahrenheit", "centigrade")
    rep5 = rep4.replace("pounds", "stone")
  }

  story.textContent = rep5;
  story.style.visibility = 'visible';
}
