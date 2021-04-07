$(function () {
////    $("#beolvas").on("click", kiir);
//
//    $("#beolvas").on("click", beolvas);
//    $("#kuld").on("click", abBeir);
//    $("article").delegate(".torol", "click", adatTorol);
////    $("article").delegate(".szerkeszt", "click", adatSzerkeszt);
////    $("#megse").on("click", adatMegse);
//    $("#modosit").on("click", adatModosit);

    beolvas();
    

});
var okjdolg=[];
function beolvas() {

    $.ajax({
        type: "POST",
        url: "feldolgoz.php",
        success: function (result) {
            console.log(result);
//            if(result==null){
                okjdolg = JSON.parse(result);
                console.log(okjdolg);
                kiir();
//            }
           
        },
        error: function () {
            alert("Hiba az adatok betöltésekor!");
        }
    });
    
}
// function kiir(adatok) {
//     console.log("valami");
//        var txt = "<li><h1>todo</h1><p>datum</p><p class='torles'>törlés</p><p class='kesz'>pipa</p></li>";
//        for (var adat in adatok) {
//            txt.replace("todo",adat["todo"]);
//            txt.replace("datum",adat["datum"]);
//        }
//        $("#lista").innerHTML=txt;
//        console.log(txt);
//         $("article").append(txt);
//    }

function kiir() {
    console.log("valami");
    $(".terulet").empty();
     var elemek = "<ul>";
    for (var i = 0; i < okjdolg.length; i++) {

         elemek += "<li>" + okjdolg[i].todo + "</li><li>" + okjdolg[i].datum + "</li><li><img src=\"../../OkjDolgozat/kuka.png\" id='"

                 + okjdolg[i].ID + "' alt=\"\" class='torol'/></li><li><img src=\"../../OkjDolgozat/pipa.png\" id='" + okjdolg[i].ID + "' alt=\"\" class='modosit'/></li>";
     }
 
    elemek += "</ul><br>";
    

   $(".terulet").append(elemek);

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
            alert("Hiba az adatok betöltésekor!");
        }
    });

   
}

function adatModosit() {
    var editTodo = {
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
            alert("Hiba az adatok módosításakor!");
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
            alert("Hiba az adatok törlésekor!");
        }
    });
}
