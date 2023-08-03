// const result="";
// alert(document.getElementById('outputbox').value)
function insert(a) {
    // alert(a);
    document.getElementById("outputbox").value += a;
    // result+=a;
  }
  
  function calc() {
    result = eval(document.getElementById("outputbox").value);
    document.getElementById("outputbox").value = result;
  }
  
  function clr() {
    document.getElementById("outputbox").value = "";
  }
  var input = document.getElementById("outputbox");
  input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("Equal").click();
    }
  });
  