let switchMode = document.getElementById("switchMode");
switchMode.onclick=function(){
    event.preventDefault();
    let theme = document.getElementById("theme")
    if(theme.getAttribute("href") == "/style/style-light.css"){
        theme.href="/style/style-dark.css"
    }else{
        theme.href="/style/style-light.css"
    }
}