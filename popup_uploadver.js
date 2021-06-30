window.onload = function(){

  var s = document.getElementById("search") ;
  var c = document.getElementById("copy") ;


  s.oninput = function(){
    // alert(this.value.slice(4))
    if(isNaN(this.value)){
      for(var i in data){
        if(this.value == data[i].name){document.getElementById("search").value=data[i].num;document.getElementById("search").select();break;}
      }
    }
    else{
      if(this.value.length==3 && this.value != '081' ){
        for(var i in data){
          if(this.value == data[i].num.slice(4)){document.getElementById("search").value=data[i].name;document.getElementById("search").select();break;}
        }
      }
      else{
        for(var i in data){
          if(this.value == data[i].num){document.getElementById("search").value=data[i].name;document.getElementById("search").select();break;}
        }
      }
    };

  };

  c.addEventListener('click', function() {
    document.getElementById("search").focus();
    document.getElementById("search").select();
    document.execCommand('copy');
  } );

};




var data = [
{"name":"陳暐誠","num":"0816065"}
]
