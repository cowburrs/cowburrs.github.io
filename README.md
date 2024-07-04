<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body> 
    <p>Hey cutie i love you <3</p>
        <script>
            function showTime() {
            document.getElementById('currentTime').innerHTML = new Date().toUTCString();
            }
            showTime();
            setInterval(function () {
                showTime();
            }, 1000);
        </script>
</body>
</html>
