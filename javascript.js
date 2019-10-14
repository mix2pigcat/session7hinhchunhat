function submit() {
    var a=parseInt(document.getElementById('a').value);
    let result = new Conver();
    alert("chuyen tu M-F:  "+result.out(a));
    alert("Chuyen tu M-K: " +result.out2(a));
}
function Conver() {
   this.out =function (a) {
       if ( a >= 0) {
           let result =(a/0.305);
           return result;
       } else {
           alert('Nhap lai so')
   }
   };
    this.out2 =function (a) {
    if ( a > 0) {
       let result =(a*3.279);
       return result;
    } else {
        alert('Nhap lai so')
    }
};
}
