$("#contact-form").submit(function(event){
    event.preventDefault()
    sendForm();
})
function sendForm(){
    var name = $("#nombre").val();
    var empresa = $("#empresa").val();
    var email =  $("#correo").val();
    var phone = $("#telefono").val();
    var selected = [];
    $(":checkbox[name=contact]").each(function() {
        if (this.checked) {
            // agregas cada elemento.
            selected.push($(this).val());
        }
    });
    
    $.ajax({
        type: "POST",
        url: "controller/sendmail.php",
        data: "nombre=" + name +"&empresa=" + empresa + "&correo=" + email + "&telefono="+phone+ "&contact="+selected   
    }).done(function(){
        document.getElementById("contact-form").reset();
        $( "#msgsubmit" ).removeClass("hidden");
    });
}
/* function(data){
        var datas = JSON.stringify(data)
            if ( datas.success == true){
                document.getElementById("contact").reset();
                formSuccess();
            }
    });*/
function formSuccess(){
    document.getElementById("contact").reset();
    $( "#msgsubmit" ).removeClass("hidden");
}
