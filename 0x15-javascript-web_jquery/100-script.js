<!DOCTYPE html>
<html>
<head>
    <script>
        // Function to update the text color of the <header> element
        function updateHeaderTextColor() {
            var headerElement = document.querySelector('header');
            headerElement.style.color = '#FF0000';
        }
    </script>
</head>
<body>
    <header>This is a header</header>
    <button onclick="updateHeaderTextColor()">Change Header Text Color</button>
</body>
</html>
