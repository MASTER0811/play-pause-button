# Usage

## Add A Button

* Only Using This Element `<music-btn>`

```html
<!-- You must add "play" text -->
<music-btn>Play</music-btn>
```

#### AND

* Add `<script>` tag in your `<body>` Element
* Add a function `musicmode()`, Exp:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exp File</title>
</head>
<body>
    <script src="https://cdn.jsdelivr.net/gh/MASTER0811/play-pause-button/main.js"></script>
    <script>
        musicmode()
    </script>
</body>
</html>
```

## About the Function

![](https://raw.githubusercontent.com/MASTER0811/play-pause-button/main/function.png)

1. Add `Music link` in the `First`

```javascript
 musicmode("./music.mp3")
```

&#x20;2\. Add `Volume` in the `Second`

```javascript
 musicmode("./music.mp3", 0.5)
```

&#x20;3\. Add Loop in the Third&#x20;

```javascript
 musicmode("./music.mp3", 0.5, true)
```

{% hint style="danger" %}
Notice: If you don't want let music loop, you can without any text.
{% endhint %}

## About the Button `<music-btn>`

* You can design using `.style` class Exp:

```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');
music-btn.style{
    padding: 10px 30px;
    background: lightblue;
    font-size: 18px;
    font-family: 'Poppins',sans-serif;
    font-weight: bold;
}
```
