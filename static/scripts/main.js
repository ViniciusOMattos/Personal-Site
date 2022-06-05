function htmlPull(url){
    const ajax = new XMLHttpRequest();
    ajax.onload = function(){
        document.getElementById("content-id").innerHTML = this.responseText;
    }
    ajax.open("GET", url);
    ajax.send();
}
