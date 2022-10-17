<!-- PHP-Datei einbinden -->
<?php
    include 'file.php';
?>

<!-- Variable initialisieren -->
<?php
    $variable = 1;
?>

<!-- HTML kann wie normal geschrieben werden -->
<!DOCTYPE html>
<head>
    <!-- ... -->
</head>
<body>
    <!-- innerhalb von HTML soll eine php-Funk aufgerufen werden -->
    <select>
        <?php
            include "file.php";
        ?>
    </select>
</body>
</html>

<!-- Datenbankverbindung (MySQL) -->
<?php
    define('DB_SERVER', 'localhost');
    define('DB_USERNAME', 'root');
    define('DB_PASSWORD', '');
    define('DB_NAME', 'DBname');
    //Tabellensql
    $link = mysqli_connect(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME);

    // Check connection 
    if (!$link) { 
        die("Connection failed: " . mysqli_connect_error()); 
    }

?>

<!-- SQL Statement auf DB ausführen -->
<?php
    $query = "SELECT id FROM tableName
    WHERE content = '...'";
    $result = mysqli_query($link, $query);
    if(mysqli_num_rows($result) > 0){ 
        while($row = $result->fetch_assoc()){  
            echo '<option value="'.$row['id'].'">'.$row['table_name'].'</option>'; 
        } 
    }else{ 
        echo '<option value=""table not available</option>'; 
    } 
?>
