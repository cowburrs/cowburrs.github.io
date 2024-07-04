
            function showTime() {
            document.getElementById('currentTime').innerHTML = new Date().toUTCString();
            }
            showTime();
            setInterval(function () {
                showTime();
            }, 1000);
            console.log(`Hello! I am an alert box!!`);

