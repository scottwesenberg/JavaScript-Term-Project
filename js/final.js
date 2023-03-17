const container = document.querySelector('.image-container');
const images = container.querySelectorAll('img');
images.forEach(img => {
  img.addEventListener('mouseenter', () => {
    img.style.filter = 'none';
  });

  img.addEventListener('mouseleave', () => {
    img.style.filter = 'blur(5px)';
  });
});

document.getElementById("opcButton").addEventListener("click",function(){
  var xreq = new XMLHttpRequest();   // Create XMLHttpRequest object
  xreq.onload = function() {                       
    if(xreq.status === 200) {      
      responseObject = JSON.parse(xreq.responseText);
      array=responseObject.characters;
      processItem(array);
    }
  };
  xreq.open('GET', 'opc.json', true);        
  xreq.send(null);                                 
  });
  
  function processItem(array){
      var newContent = '';
      for (var i = 0; i < array.length; i++) { 
        newContent += '<p>Name:  ' + array[i].name + '<br>';
        newContent += 'Age: ' + array[i].age + '<br>';
        newContent += 'Position: ' + array[i].position + '<br>';
        newContent += 'Bounty: ' + array[i].bounty + '<br>';
        newContent += 'Description: ' + array[i].description + '</p>';
        newContent += '<hr>';
      }
  
      document.getElementById('content').innerHTML = newContent;
}

document.getElementById("opPuzzle").addEventListener("click",function(){
  var xreq = new XMLHttpRequest();   
  xreq.open("GET", "puzzle.html", true);
  xreq.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("content").innerHTML = this.responseText;
    }
  };
  xreq.send();
});

document.getElementById("storyButton").addEventListener("click",function(){
  var xreq = new XMLHttpRequest();   
  xreq.open("GET", "story.html", true);
  xreq.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("content").innerHTML = this.responseText;
    }
  };
  xreq.send();
});

