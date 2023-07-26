function scuberGreetingForFeet(arguement){
  if (arguement <= 400) {
    return "This one is on me!"
  } else if (arguement > 400 && arguement < 2000) {
    return "That will be twenty bucks."
  } else if (arguement > 2000 && arguement <2500) {
    return "I will gladly take your thirty bucks."
  } else if (arguement > 2500) {
    return "No can do."
  }
}

function ternaryCheckCity(chosenCity) {
  const city = 'NYC'
  // Create a variable called checkCity that has the string we want to return.
  return chosenCity === city ? 'Ok, sounds good.' : 'No go.'
}
ternaryCheckCity()

function switchOnCharmFromTip(amount){
  switch(amount) {
    case 'generous': 
      return "Thank you so much."
      break
    case 'not as generous':
      return "Thank you."
      break
    default:
      return "Bye."
  }
}