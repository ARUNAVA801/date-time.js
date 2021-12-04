
    
    <div id="intro">
        <h1>dada  <em> </em>  </h1>
        <h1> o ma , KOTA BAJE ? </h1>
    </div>
    <script>
        function setText() {
        var a = document.getElementById("intro");
        var arr = a.childNodes;
       for(var x=0;x < arr.length;x++) {
            arr[x].innerHTML = "<h1> MA : </h1>";
       }   
        
    }
      
    setTimeout(setText, 3000);
</script>
    <script>
        
    function setDate() {
        
       var d = new Date(); 
     var hour = d.getHours();
     var minutes = d.getMinutes();
     var secs = d.getSeconds();
     var milisecs = d.getMilliseconds();
     document.body.innerHTML = hour +":"+minutes+":"+secs ;
     
     
    }

    
    setInterval(setDate, 4000);
    
        </script>
    
