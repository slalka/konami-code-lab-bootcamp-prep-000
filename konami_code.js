const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]


function init() {
  let i = 0
  document.addEventListener('keydown', handler)
  // Write your JavaScript code inside the init() function
function handler(e){
  console.log(e.detail||e.which)
  if(parseInt(e.detail || e.which) == code[i]){
    i++
  }
  else{i=0}

  if(i == code.length){
    alert('Congratulations!');
  }


}
}
