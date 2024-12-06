// scuberGreetingForFeet() function
function scuberGreetingForFeet(Value) {
  if (Value <= 400) {
    return "This one is on me!";
  } else if (Value >=401  && Value <= 2000) {
    return "That will be twenty bucks.";
  } else if (Value > 2000 && Value <= 2500) {
    return "I will gladly take your thirty bucks.";
  } else if (Value > 2500) {
    return "No can do.";
  }
}

// ternaryCheckCity() function
function ternaryCheckCity(city) {
  return city === "NYC" ? "Ok, sounds good." : "No go.";
}

// switchOnCharmFromTip() function
function switchOnCharmFromTip(tip) {
  switch (tip) {
    case "generous":
      return "Thank you so much.";
    case "not as generous":
      return "Thank you.";
    default:
      return "Bye.";
  }
}


