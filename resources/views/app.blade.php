<!DOCTYPE html>
<html>
<head lang="en">
    <title>Color-My-ZSH</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="css/app.css">
</head>
<body>

<main id="app">
    <div class="container">
        <h1 class="brand"><a v-link="{ path: '/' }">Color-My-ZSH</a></h1>
        <router-view></router-view>
    </div>
</main>

<footer>
    <div class="container">
        <p>
            Copyright (c) 2015 <a href="http://igor-randjelovic.com" target="_blank">Igor Randjelovic</a>
            Released under the MIT license
        </p>
    </div>
</footer>

<script src="js/app.js"></script>
</body>
</html>
