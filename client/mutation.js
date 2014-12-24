var target = document.querySelector('html');
var socket = io();
// create an observer instance
var observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    	socket.emit('content', getContents());
  });    
});
 
// configuration of the observer:
var config = { attributes: true, childList: true, characterData: true, subtree:true };
 
// pass in the target node, as well as the observer options
observer.observe(target, config);
 
// later, you can stop observing

//observer.disconnect();

//emit socket for the first time:

socket.emit('content', getContents());