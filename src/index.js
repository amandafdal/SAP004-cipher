import cipher from './cipher.js';

document.getElementById("encode").addEventListener("click", function(event){

  event.preventDefault();

  let textInput=document.getElementById("textinput").value.toUpperCase();
  let offsetNumber=Number(document.getElementById("offset").value);

  let output= cipher.encode(offsetNumber, textInput);
  document.getElementById("textoutput").innerHTML= output;

});

document.getElementById("decode").addEventListener("click", function(event){

  event.preventDefault();

  let textInput=document.getElementById("textinput").value.toUpperCase();
  let offsetNumber=Number(document.getElementById("offset").value);

  let output= cipher.decode(offsetNumber, textInput);
  document.getElementById("textoutput").innerHTML= output;
});
