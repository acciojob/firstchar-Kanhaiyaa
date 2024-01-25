function firstChar(text) {
  
 
  text=text.trim()
  if (text.length==0) 
    return ""
    return text.charAt(0)
  
}



const text = prompt("Enter text:");
alert(firstChar(text));