<?php
if($_POST['message']) {
    mail('nicolas.valenzuela0929@gmail.com', 'Test of site Email', $_POST['message']);
    header('Location: index.html');
}
?>