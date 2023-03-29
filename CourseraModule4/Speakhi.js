
(function(window) {

    
    var hiSpeaker = {};
  
    
    var speakWord = "Hello";
  
    
    hiSpeaker.speak = function (name) {
      console.log(speakWord + " " + name);
    }
  
    
    window.hiSpeaker = hiSpeaker;
  
  })(window);