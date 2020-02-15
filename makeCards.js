var makeCards = () => {
  var allPs = document.querySelectorAll("p");
  var chapterArray = [];

allPs.forEach((item)=>{
chapterArray.push('word')
chapterArray.push('\t')
chapterArray.push(item.innerText)
chapterArray.push('\n')
})

chapterArray.join("")

var mytext = chapterArray.join("")

var canceledText = mytext.replace(/</g, "{")

var canceledText2 = canceledText.replace(/>/g, "}")

var canceledText3 = canceledText2.replace(/getHostbyName/g, "getHostbyNameGame")
  return canceledText3
}
