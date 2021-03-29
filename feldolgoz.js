$(function () {
//    $("#beolvas").on("click", kiir);

    $("#beolvas").on("click", beolvas);
    $("#kuld").on("click", abBeir);
    $("article").delegate(".torol", "click", adatTorol);
//    $("article").delegate(".szerkeszt", "click", adatSzerkeszt);
//    $("#megse").on("click", adatMegse);
    $("#modosit").on("click", adatModosit);

});

function adatModosit(){
    var editTodo={
        ID: $("#id").val(),
        todo: $("#todo").val(),
        datum: $("#datum").val(),
        allapot: $("#allapot").val()
    };
    
    console.log("Módosít");
    console.log(editTodo);
     $.ajax({
        type: "PUT",
        url: "modosit.php",
        data: editTodo,
        success: function () {
            beolvas();
            kiir();
        },
        error: function () {
            alert("Hiba az adatok módosításakor!")
        }
    });
}
function adatTorol() {
    var aktelem = $(this).closest("div");
    var id = $(this).attr("id");
    console.log("Törlés ******************" + id);
    $.ajax({
        type: "DELETE",
        url: "torol.php?ID=" + id,
        success: function () {
            console.log("törlés");
           
            aktelem.remove();

        },
        error: function () {
            alert("Hiba az adatok törlésekor!")
        }
    });
}
function beolvas() {

    $.ajax({
        type: "GET",
        url: "feldolgoz.php",
        success: function (result) {
            console.log(result);
            okjdolg = JSON.parse(result);
            console.log(okjdolg);
            kiir();
        },
        error: function () {
            alert("Hiba az adatok betöltésekor!")
        }
    });

}
function abBeir() {
    var todo = {
        todo: $("#todo").val(),
        datum: $("#datum").val(),
        alapot: $("#allapot").val()
    };

    $.ajax({
        type: "POST",
        url: "index.php",
        data: todo,
        success: function (ujTodo) {
            console.log(ujTodo);
            okjdolg.push(JSON.parse(ujTodo));
            console.log(okjdolg);
            kiir();
        },
        error: function () {
            alert("Hiba az adatok betöltésekor!")
        }
    });

}