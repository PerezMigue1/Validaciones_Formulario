function confirma(){
    pa=document.getElementById("contraseña1").value
    pb=document.getElementById("contraseña2").value

    if(pa!=pb){
        alert("Los passwords no coinciden")
        return
    }

}
