function myFunction() {
  var body = DocumentApp.getActiveDocument().getBody();
  var paragraphs = body.getParagraphs();
  for (var i=0; i<paragraphs.length; i++) {
    var text = paragraphs[i].getText();
    paragraphs[i].replaceText(".*", 
       text.replace(/([^\sa-zA-Z0-9、，（）\/「」：。.,\n\-])([a-zA-Z0-9])/gi, "$1 $2")
           .replace(/([a-zA-Z0-9])([^\sa-zA-Z0-9、，（）\/「」：。.,\n\-])/gi, "$1 $2"))
  }
}

function onOpen() {
  var ui = DocumentApp.getUi();
  // Or DocumentApp or FormApp.
  ui.createMenu('Custom Menu')
      .addItem('Space!', 'myFunction')
      .addToUi();
}
