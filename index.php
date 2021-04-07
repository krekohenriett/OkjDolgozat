<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <meta charset="UTF-8">
        
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
     <script src="https://cdnjs.cloudflare.com/ajax/libs/mustache.js/2.3.0/mustache.min.js"></script>

        <link href="stilus.css" rel="stylesheet" type="text/css"/>
        
        <script src="feldolgoz.js" type="text/javascript"></script>
        <title>Krekó Henriett</title>
    </head>
    <body>
                       
        <header>Teendők</header>
          <main>
            <article>
                <form class="urlap">
                    <label for="todo">TODO lista:</label><br>
                    <input type="text" id="todo" name="todo">
                    <input type="date" id="datum" name="datum">
                    <input type="button" id="add" name="add" value="Add">
                    <!--<p id="javaslat"></p>-->
<!--                    <div id="legordulo">                        
                    </div>-->
                </form>
                <ul id="lista"></ul>
                <div class="terulet"></div>
<!--                <article>
                    <p id="javaslat"></p>
                </article>-->
            </article>
        </main>
        <footer>Krekó Henriett</footer>
        
        <?php
//        require './MySqlDB.php';
//$mySql = new MySqlDB();
//$todo = $_POST["todo"];
//$datum = $_POST["datum"];
//$allapot = $_POST["allapot"];
//
//$mySql->ujRekord("okjdolg", "(todo,datum,allapot)", "('$todo','$datum','$allapot')");
////print_r($_POST);
//echo json_encode($_POST);
//        ?>
    </body>
</html>
