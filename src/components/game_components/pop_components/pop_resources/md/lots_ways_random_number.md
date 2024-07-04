[JavaScript](https://css-tricks.com/tag/javascript/) [math](https://css-tricks.com/tag/math/) [random](https://css-tricks.com/tag/random/)

# Lots of Ways to Use Math.random() in JavaScript

[![Avatar of Jwahir Sundai](https://css-tricks.com/wp-content/uploads/2020/11/2m3kcqcZ7sl5xgLJtoXh0bw-80x80.jpeg)](https://css-tricks.com/author/jwahirksundai/)

[Jwahir Sundai](https://css-tricks.com/author/jwahirksundai/) on Nov 30, 2020

DigitalOcean provides cloud products for every stage of your journey. Get started with [$200 in free credit!](https://try.digitalocean.com/css-tricks/?utm_medium=content_acq&utm_source=css-tricks&utm_campaign=global_brand_ad_en&utm_content=conversion_prearticle_everystage)

`Math.random()` is an API in JavaScript. It is a function that gives you a random number. The number returned will be between 0 (inclusive, as in, it’s possible for an actual 0 to be returned) and 1 (exclusive, as in, it’s not possible for an actual 1 to be returned).

```javascript
Math.random(); // returns a random number lower than 1
```

This is incredibly useful for gaming, animations, randomized data, generative art, random text generation, and more! It can be used for web development, mobile applications, computer programs, and video games.

CodePen Embed Fallback

[https://codepen.io/jsundai/pen/vYKxNZp](https://codepen.io/jsundai/pen/vYKxNZp)

```html
<p>Random number between 0 and 1.</p>
<button onclick="myFunction()">Try It</button>
<p id="randomnumber"></p>
<script>
    function myFunction() {
        document.getElementById('randomnumber').innerHTML = Math.random();
    }
</script>

<p>Random integer between 1 and 10 (both included).</p>
<button
    onclick="document.getElementById('demo').innerHTML = getRndInteger(1,10)"
>
    Try It
</button>
<p id="demo"></p>
<script>
    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
</script>

<!-- reference: w3schools -->
```

```css
button {
    padding: 6px 8px;
    color: gray;
    font-family: 'arial';
    text-align: center;
    margin: auto;
}
```

Whenever we need randomization in our work, we can use this function! Let’s look at eight different ways we can use it. These examples are all from different authors doing something interesting with this API.

### [Animation](https://css-tricks.com/lots-of-ways-to-use-math-random-in-javascript/#aa-animation)

CodePen Embed Fallback

```javascript
var w = (c.width = window.innerWidth),
    h = (c.height = window.innerHeight),
    ctx = c.getContext('2d'),
    opts = {
        len: 20,
        count: 50,
        baseTime: 10,
        addedTime: 10,
        dieChance: 0.05,
        spawnChance: 1,
        sparkChance: 0.1,
        sparkDist: 10,
        sparkSize: 2,

        color: 'hsl(hue,100%,light%)',
        baseLight: 50,
        addedLight: 10, // [50-10,50+10]
        shadowToTimePropMult: 6,
        baseLightInputMultiplier: 0.01,
        addedLightInputMultiplier: 0.02,

        cx: w / 2,
        cy: h / 2,
        repaintAlpha: 0.04,
        hueChange: 0.1
    },
    tick = 0,
    lines = [],
    dieX = w / 2 / opts.len,
    dieY = h / 2 / opts.len,
    baseRad = (Math.PI * 2) / 6;

ctx.fillStyle = 'black';
ctx.fillRect(0, 0, w, h);

function loop() {
    window.requestAnimationFrame(loop);

    ++tick;

    ctx.globalCompositeOperation = 'source-over';
    ctx.shadowBlur = 0;
    ctx.fillStyle = 'rgba(0,0,0,alp)'.replace('alp', opts.repaintAlpha);
    ctx.fillRect(0, 0, w, h);
    ctx.globalCompositeOperation = 'lighter';

    if (lines.length < opts.count && Math.random() < opts.spawnChance)
        lines.push(new Line());

    lines.map(function (line) {
        line.step();
    });
}
function Line() {
    this.reset();
}
Line.prototype.reset = function () {
    this.x = 0;
    this.y = 0;
    this.addedX = 0;
    this.addedY = 0;

    this.rad = 0;

    this.lightInputMultiplier =
        opts.baseLightInputMultiplier +
        opts.addedLightInputMultiplier * Math.random();

    this.color = opts.color.replace('hue', tick * opts.hueChange);
    this.cumulativeTime = 0;

    this.beginPhase();
};
Line.prototype.beginPhase = function () {
    this.x += this.addedX;
    this.y += this.addedY;

    this.time = 0;
    this.targetTime = (opts.baseTime + opts.addedTime * Math.random()) | 0;

    this.rad += baseRad * (Math.random() < 0.5 ? 1 : -1);
    this.addedX = Math.cos(this.rad);
    this.addedY = Math.sin(this.rad);

    if (
        Math.random() < opts.dieChance ||
        this.x > dieX ||
        this.x < -dieX ||
        this.y > dieY ||
        this.y < -dieY
    )
        this.reset();
};
Line.prototype.step = function () {
    ++this.time;
    ++this.cumulativeTime;

    if (this.time >= this.targetTime) this.beginPhase();

    var prop = this.time / this.targetTime,
        wave = Math.sin((prop * Math.PI) / 2),
        x = this.addedX * wave,
        y = this.addedY * wave;

    ctx.shadowBlur = prop * opts.shadowToTimePropMult;
    ctx.fillStyle = ctx.shadowColor = this.color.replace(
        'light',
        opts.baseLight +
            opts.addedLight *
                Math.sin(this.cumulativeTime * this.lightInputMultiplier)
    );
    ctx.fillRect(
        opts.cx + (this.x + x) * opts.len,
        opts.cy + (this.y + y) * opts.len,
        2,
        2
    );

    if (Math.random() < opts.sparkChance)
        ctx.fillRect(
            opts.cx +
                (this.x + x) * opts.len +
                Math.random() *
                    opts.sparkDist *
                    (Math.random() < 0.5 ? 1 : -1) -
                opts.sparkSize / 2,
            opts.cy +
                (this.y + y) * opts.len +
                Math.random() *
                    opts.sparkDist *
                    (Math.random() < 0.5 ? 1 : -1) -
                opts.sparkSize / 2,
            opts.sparkSize,
            opts.sparkSize
        );
};
loop();

window.addEventListener('resize', function () {
    w = c.width = window.innerWidth;
    h = c.height = window.innerHeight;
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, w, h);

    opts.cx = w / 2;
    opts.cy = h / 2;

    dieX = w / 2 / opts.len;
    dieY = h / 2 / opts.len;
});
```

```html
<canvas id="c"></canvas>
```

```css
canvas {
    position: absolute;
    top: 0;
    left: 0;
}
```

To spawn an object and animate it, we use `Math.random`. The neon lines form spontaneous hexagons but randomization is also in its generative sparks.

### [Computer-generated music](https://css-tricks.com/lots-of-ways-to-use-math-random-in-javascript/#aa-computer-generated-music)

CodePen Embed Fallback

This program takes the traditional melody of [“Auld Lang Syne”](https://en.wikipedia.org/wiki/Auld_Lang_Syne) and plays random notes from it in piano. A change package is created from the count data and a random number is generated to select a value. The octave is also randomly selected.

### [Display a random image](https://css-tricks.com/lots-of-ways-to-use-math-random-in-javascript/#aa-display-a-random-image)

CodePen Embed Fallback

```javascript
const imageArray = [
    'https://images.unsplash.com/photo-1508185159346-bb1c5e93ebb4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=55cf14db6ed80a0410e229368963e9d8&auto=format&fit=crop&w=1900&q=80',
    'https://images.unsplash.com/photo-1495480393121-409eb65c7fbe?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=05ea43dbe96aba57d48b792c93752068&auto=format&fit=crop&w=1351&q=80',
    'https://images.unsplash.com/photo-1501611724492-c09bebdba1ac?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ebdb0480ffed49bd075fd85c54dd3317&auto=format&fit=crop&w=1491&q=80',
    'https://images.unsplash.com/photo-1417106338293-88a3c25ea0be?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d1565ecb73a2b38784db60c3b68ab3b8&auto=format&fit=crop&w=1352&q=80',
    'https://images.unsplash.com/photo-1500520198921-6d4704f98092?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ac4bc726064d0be43ba92476ccae1a75&auto=format&fit=crop&w=1225&q=80',
    'https://images.unsplash.com/photo-1504966981333-1ac8809be1ca?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9a1325446cbf9b56f6ee549623a50696&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1437075130536-230e17c888b5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ff573beba18e5bf45eb0cccaa2c862b3&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1515002246390-7bf7e8f87b54?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1eac0f70640261e09152340f13b79144&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1506057278219-795838d4c2dd?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f68d8d7b0223cd906ea8cac13421881d&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1488402410361-05152fa654d3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5266aadc96d5b5b23996e7120d3190a8&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1475598322381-f1b499717dda?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=cb49f991ce8dd947b45ccd1bd905ec8c&auto=format&fit=crop&w=1355&q=80',
    'https://images.unsplash.com/photo-1501949997128-2fdb9f6428f1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=951ee200e732c9b8c4ea0a7372ca9d27&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1494783367193-149034c05e8f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a98c0f9a6c602e964e6533de413d59ba&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1476547362848-ed2a9f99cd29?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5b4647c9e25267c25866936c916e4aa8&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1506017669510-0bcbe8003d70?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9403f5d4ac23a5726bfc3c8308b31c01&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1489447068241-b3490214e879?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a85cb0d68de38ae2aa00d8a9663a320a&auto=format&fit=crop&w=1350&q=80'
];

const image = document.querySelector('img');
const button = document.querySelector('button');

window.onload = () => generateRandomPicture(imageArray);

button.addEventListener('click', () => generateRandomPicture(imageArray));

function generateRandomPicture(array) {
    let randomNum = Math.floor(Math.random() * array.length);
    image.setAttribute('src', array[randomNum]);
}
```

```html
<html>
    <head>
        <title>Random Picture Generator</title>
        <link rel="stylesheet" href="assets/stylesheets/app.css" />
    </head>
    <body>
        <header class="flex">
            <h1>Random Picture Generator</h1>
            <button>Generate Random Picture</button>
        </header>
        <section class="flex">
            <img src="" />
        </section>
        <script src="assets/scripts/app.js"></script>
    </body>
</html>
```

```css
html,
body {
    margin: 0;
    height: 100%;
    width: 100%;
}

header {
    width: 100%;
    padding-bottom: 25px;
    flex-direction: column;
}

img {
    width: 70%;
}

.flex {
    display: flex;
    justify-content: center;
    align-items: center;
}
```

Images are stored in an array. A number is generated and multiplied by the number of images in the array via `array.length`. Then `Math.floor` rounds the value to a round number and sets the image src in the HTML when the page is loaded or the button is clicked.

### [Random background color](https://css-tricks.com/lots-of-ways-to-use-math-random-in-javascript/#aa-random-background-color)

CodePen Embed Fallback

This is where the magic happens:

```javascript
const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
```

The first line of code randomly shuffles the array and the second line returns a random umber between 0 and 10. In the example of a random color background, the range of colors and specifics such as hues, saturations, and shades can be set.

For another method for generating a random hex color, check out [this article](https://css-tricks.com/snippets/javascript/random-hex-color/) by Chris Coyer.

### [Generative art](https://css-tricks.com/lots-of-ways-to-use-math-random-in-javascript/#aa-generative-art)

CodePen Embed Fallback

```javascript
window.addEventListener('load', windowLoadHandler, false);

//for debug messages while testing code
var Debugger = function () {};
Debugger.log = function (message) {
    try {
        console.log(message);
    } catch (exception) {
        return;
    }
};

function windowLoadHandler() {
    canvasApp();
}

function canvasSupport() {
    return Modernizr.canvas;
}

function canvasApp() {
    if (!canvasSupport()) {
        return;
    }

    var displayCanvas = document.getElementById('displayCanvas');
    var context = displayCanvas.getContext('2d');
    var displayWidth = displayCanvas.width;
    var displayHeight = displayCanvas.height;

    //off screen canvas used only when exporting image
    var exportCanvas = document.createElement('canvas');
    exportCanvas.width = displayWidth;
    exportCanvas.height = displayHeight;
    var exportCanvasContext = exportCanvas.getContext('2d');

    //var exportImage = document.createElement('img');

    //buttons
    var btnExport = document.getElementById('btnExport');
    btnExport.addEventListener('click', exportPressed, false);

    var btnRegenerate = document.getElementById('btnRegenerate');
    btnRegenerate.addEventListener('click', regeneratePressed, false);

    var numCircles;
    var maxMaxRad;
    var minMaxRad;
    var minRadFactor;
    var circles;
    var iterations;
    var numPoints;
    var timer;
    var drawsPerFrame;
    var drawCount;
    var bgColor, urlColor;
    var lineWidth;
    var colorParamArray;
    var colorArray;
    var dataLists;
    var minX, maxX, minY, maxY;
    var xSpace, ySpace;
    var lineNumber;
    var twistAmount;
    var fullTurn;
    var lineAlpha;
    var maxColorValue;
    var minColorValue;

    init();

    function init() {
        numCircles = 15; //35
        maxMaxRad = 200;
        minMaxRad = 200;
        minRadFactor = 0;
        iterations = 11;
        numPoints = Math.pow(2, iterations) + 1;
        drawsPerFrame = 4;

        fullTurn = (Math.PI * 2 * numPoints) / (1 + numPoints);

        minX = -maxMaxRad;
        maxX = displayWidth + maxMaxRad;
        minY = displayHeight / 2 - 50;
        maxY = displayHeight / 2 + 50;

        twistAmount = 0.67 * Math.PI * 2;

        stepsPerSegment = Math.floor(800 / numCircles);

        maxColorValue = 100;
        minColorValue = 20;
        lineAlpha = 0.1;

        bgColor = '#000000';
        urlColor = '#333333';

        lineWidth = 1.01;

        startGenerate();
    }

    function startGenerate() {
        drawCount = 0;
        context.setTransform(1, 0, 0, 1, 0, 0);

        context.clearRect(0, 0, displayWidth, displayHeight);

        setCircles();

        colorArray = setColorList(iterations);

        lineNumber = 0;

        if (timer) {
            clearInterval(timer);
        }
        timer = setInterval(onTimer, 1000 / 60);
    }

    function setColorList(iter) {
        var r0, g0, b0;
        var r1, g1, b1;
        var r2, g2, b2;
        var param;
        var colorArray;
        var lastColorObject;
        var i, len;

        var maxComponentDistance = 32;
        var maxComponentFactor = 0.5;

        r0 = minColorValue + Math.random() * (maxColorValue - minColorValue);
        g0 = minColorValue + Math.random() * (maxColorValue - minColorValue);
        b0 = minColorValue + Math.random() * (maxColorValue - minColorValue);

        r1 = minColorValue + Math.random() * (maxColorValue - minColorValue);
        g1 = minColorValue + Math.random() * (maxColorValue - minColorValue);
        b1 = minColorValue + Math.random() * (maxColorValue - minColorValue);

        /*
    //can also set colors explicitly here if you like.
    r1 = 90;
    g1 = 60;
    b1 = 20;
    
    r0 = 30;
    g0 = 77;
    b0 = 66;
    */

        a = lineAlpha;

        var colorParamArray = setLinePoints(iter);
        colorArray = [];

        len = colorParamArray.length;

        for (i = 0; i < len; i++) {
            param = colorParamArray[i];

            r = Math.floor(r0 + param * (r1 - r0));
            g = Math.floor(g0 + param * (g1 - g0));
            b = Math.floor(b0 + param * (b1 - b0));

            var newColor = 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';

            colorArray.push(newColor);
        }

        return colorArray;
    }

    function setCircles() {
        var i;
        var r, g, b, a;
        var grad;

        circles = [];

        for (i = 0; i < numCircles; i++) {
            maxR = minMaxRad + Math.random() * (maxMaxRad - minMaxRad);
            minR = minRadFactor * maxR;

            var newCircle = {
                centerX: minX + (i / (numCircles - 1)) * (maxX - minX),
                centerY: minY + (i / (numCircles - 1)) * (maxY - minY),
                //centerY: minY + Math.random()*(maxY - minY),
                maxRad: maxR,
                minRad: minR,
                phase: (i / (numCircles - 1)) * twistAmount,
                pointArray: setLinePoints(iterations)
            };
            circles.push(newCircle);
        }
    }

    function onTimer() {
        var i;
        var cosTheta, sinTheta;
        var theta;

        var numCircles = circles.length;

        var linParam;
        var cosParam;
        var centerX, centerY;
        var xSqueeze = 0.75;
        var x0, y0;
        var rad, rad0, rad1;
        var phase, phase0, phase1;

        for (var k = 0; k < drawsPerFrame; k++) {
            theta = (lineNumber / (numPoints - 1)) * fullTurn;

            context.globalCompositeOperation = 'lighter';

            context.lineJoin = 'miter';

            context.strokeStyle = colorArray[lineNumber];
            context.lineWidth = lineWidth;
            context.beginPath();

            //move to first point
            centerX = circles[0].centerX;
            centerY = circles[0].centerY;
            rad =
                circles[0].minRad +
                circles[0].pointArray[lineNumber] *
                    (circles[0].maxRad - circles[0].minRad);
            phase = circles[0].phase;
            x0 = centerX + xSqueeze * rad * Math.cos(theta + phase);
            y0 = centerY + rad * Math.sin(theta + phase);
            context.moveTo(x0, y0);

            for (i = 0; i < numCircles - 1; i++) {
                //draw between i and i+1 circle
                rad0 =
                    circles[i].minRad +
                    circles[i].pointArray[lineNumber] *
                        (circles[i].maxRad - circles[i].minRad);
                rad1 =
                    circles[i + 1].minRad +
                    circles[i + 1].pointArray[lineNumber] *
                        (circles[i + 1].maxRad - circles[i + 1].minRad);
                phase0 = circles[i].phase;
                phase1 = circles[i + 1].phase;

                for (j = 0; j < stepsPerSegment; j++) {
                    linParam = j / (stepsPerSegment - 1);
                    cosParam = 0.5 - 0.5 * Math.cos(linParam * Math.PI);

                    //interpolate center
                    centerX =
                        circles[i].centerX +
                        linParam *
                            (circles[i + 1].centerX - circles[i].centerX);
                    centerY =
                        circles[i].centerY +
                        cosParam *
                            (circles[i + 1].centerY - circles[i].centerY);

                    //interpolate radius
                    rad = rad0 + cosParam * (rad1 - rad0);

                    //interpolate phase
                    phase = phase0 + cosParam * (phase1 - phase0);

                    x0 = centerX + xSqueeze * rad * Math.cos(theta + phase);
                    y0 = centerY + rad * Math.sin(theta + phase);

                    context.lineTo(x0, y0);
                }
            }

            context.stroke();

            lineNumber++;
            if (lineNumber > numPoints - 1) {
                clearInterval(timer);
                timer = null;
                break;
            }
        }
    }

    //Here is the function that defines a noisy (but not wildly varying) data set which we will use to draw the curves.
    //We first define the points in a linked list, but then store the values in an array.
    function setLinePoints(iterations) {
        var pointList = {};
        var pointArray = [];
        pointList.first = { x: 0, y: 1 };
        var lastPoint = { x: 1, y: 1 };
        var minY = 1;
        var maxY = 1;
        var point;
        var nextPoint;
        var dx, newX, newY;
        var ratio;

        var minRatio = 0.5;

        pointList.first.next = lastPoint;
        for (var i = 0; i < iterations; i++) {
            point = pointList.first;
            while (point.next != null) {
                nextPoint = point.next;

                dx = nextPoint.x - point.x;
                newX = 0.5 * (point.x + nextPoint.x);
                newY = 0.5 * (point.y + nextPoint.y);
                newY += dx * (Math.random() * 2 - 1);

                var newPoint = { x: newX, y: newY };

                //min, max
                if (newY < minY) {
                    minY = newY;
                } else if (newY > maxY) {
                    maxY = newY;
                }

                //put between points
                newPoint.next = nextPoint;
                point.next = newPoint;

                point = nextPoint;
            }
        }

        //normalize to values between 0 and 1
        //Also store y values in array here.
        if (maxY != minY) {
            var normalizeRate = 1 / (maxY - minY);
            point = pointList.first;
            while (point != null) {
                point.y = normalizeRate * (point.y - minY);
                pointArray.push(point.y);
                point = point.next;
            }
        }
        //unlikely that max = min, but could happen if using zero iterations. In this case, set all points equal to 1.
        else {
            point = pointList.first;
            while (point != null) {
                point.y = 1;
                pointArray.push(point.y);
                point = point.next;
            }
        }

        return pointArray;
    }

    function exportPressed(evt) {
        //background - otherwise background will be transparent.
        exportCanvasContext.fillStyle = bgColor;
        exportCanvasContext.fillRect(0, 0, displayWidth, displayHeight);

        //draw
        exportCanvasContext.drawImage(
            displayCanvas,
            0,
            0,
            displayWidth,
            displayHeight,
            0,
            0,
            displayWidth,
            displayHeight
        );

        //add printed url to image
        exportCanvasContext.fillStyle = urlColor;
        exportCanvasContext.font =
            'bold italic 16px Helvetica, Arial, sans-serif';
        exportCanvasContext.textBaseline = 'top';
        var metrics = exportCanvasContext.measureText('rectangleworld.com');
        exportCanvasContext.fillText(
            'rectangleworld.com',
            displayWidth - metrics.width - 10,
            5
        );

        //we will open a new window with the image contained within:
        //retrieve canvas image as data URL:
        var dataURL = exportCanvas.toDataURL('image/png');
        //open a new window of appropriate size to hold the image:
        var imageWindow = window.open(
            '',
            'fractalLineImage',
            'left=0,top=0,width=' +
                displayWidth +
                ',height=' +
                displayHeight +
                ',toolbar=0,resizable=0'
        );
        //write some html into the new window, creating an empty image:
        imageWindow.document.write('<title>Export Image</title>');
        imageWindow.document.write(
            "<img id='exportImage'" +
                " alt=''" +
                " height='" +
                displayHeight +
                "'" +
                " width='" +
                displayWidth +
                "'" +
                " style='position:absolute;left:0;top:0'/>"
        );
        imageWindow.document.close();
        //copy the image into the empty img in the newly opened window:
        var exportImage = imageWindow.document.getElementById('exportImage');
        exportImage.src = dataURL;
    }

    function regeneratePressed(evt) {
        startGenerate();
    }
}
```

```html
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <title>HTML5 Canvas Generative Art</title>

        <style type="text/css"></style>
    </head>
    <body>
        <div id="container">
            <canvas id="displayCanvas" width="1024px" height="576px">
                Your browser does not support HTML5 canvas.
            </canvas>
            <form>
                <p id="caption">
                    HTML5 Canvas - Morphing Fractal Curves, version 2.
                    <input
                        type="button"
                        ,
                        id="btnRegenerate"
                        value="regenerate"
                    />
                    <input
                        type="button"
                        ,
                        id="btnExport"
                        value="export image (png)"
                    />
                    <br /><a href="http://www.rectangleworld.com"
                        >rectangleworld.com</a
                    >
                </p>
            </form>
        </div>
    </body>
</html>
```

```css
body {
    background-color: #000000;
    color: #333333;
}
h4 {
    font-family: sans-serif;
    color: #333333;
    font-size: 16px;
}
h3 {
    font-family: sans-serif;
    color: #333333;
}
p {
    font-family: sans-serif;
    color: #333333;
    font-size: 14px;
}
#caption {
    position: absolute;
    width: 1024px;
    text-align: center;
    top: 520px;
    z-index: 1;
}
a {
    font-family: sans-serif;
    color: #d15423;
    text-decoration: none;
}
canvas {
}
#displayCanvas {
    position: absolute;
    top: 10px;
    z-index: 0;
}
div {
}
#container {
    width: 1024px;
    height: 576px;
    margin: auto;
}
```

In this morphing fractal curve, Math.random is used twice to set the colors for the gradient and once more for the max radius of the curves. This is a great way to construct an entirely new appearance with every iteration!

### [Word generator](https://css-tricks.com/lots-of-ways-to-use-math-random-in-javascript/#aa-word-generator)

CodePen Embed Fallback

We replace the header with a randomly selected word from an array using `Math.random`:

```javascript
var word = words[Math.floor(Math.random() * words.length)] + '!';
```

This is a lot like the random image example — the perfect sort of practice for beginners!

### [API key generator](https://css-tricks.com/lots-of-ways-to-use-math-random-in-javascript/#aa-api-key-generator)

CodePen Embed Fallback

```javascript
/**
 * Function to produce UUID.
 * See: http://stackoverflow.com/a/8809472
 */
function generateUUID()
{
  var d = new Date().getTime();

  if( window.performance && typeof window.performance.now === "function" )
  {
    d += performance.now();
  }

  var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c)
  {
    var r = (d + Math.random()*16)%16 | 0;
    d = Math.floor(d/16);
    return (c=='x' ? r : (r&0x3|0x8)).toString(16);
  });
```

```html
<div class="wrapper">
    <button class="form-control" id="keygen">Generate API Key</button>

    <input
        class="form-control"
        id="apikey"
        type="text"
        value=""
        placeholder="Click on the button to generate a new API key ..."
    />
</div>
```

```css
body {
    text-align: center;
    background: #f1f1f1;
}

.wrapper {
    padding-top: 60px;
}

button.form-control {
    background: #f7f7f7 none repeat scroll 0 0;
    border-color: #ccc;
    box-shadow: 0 1px 0 #ccc;
    color: #555;
    vertical-align: top;
    border-radius: 3px;
    border-style: solid;
    border-width: 1px;
    box-sizing: border-box;
    cursor: pointer;
    display: inline-block;
    font-size: 13px;
    height: 28px;
    line-height: 26px;
    margin: 0;
    padding: 0 10px 1px;
    text-decoration: none;
    white-space: nowrap;
}

input.form-control {
    background-color: #fff;
    border: 1px solid #ddd;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07) inset;
    color: #32373c;
    outline: 0 none;
    transition: border-color 50ms ease-in-out 0s;
    margin: 1px;
    padding: 3px 5px;
    border-radius: 0;
    font-size: 14px;
    font-family: inherit;
    font-weight: inherit;
    box-sizing: border-box;
    color: #444;
    font-family: 'Open Sans', sans-serif;
    line-height: 1.4em;
    width: 310px;
}
```

Here’s a super real-world practical use case for random numbers! The demo generates 16 random numbers to create a universally unique identifier (UUID) that can be used as a key that provides access to an API.

### [Text scramble](https://css-tricks.com/lots-of-ways-to-use-math-random-in-javascript/#aa-text-scramble)

CodePen Embed Fallback

A few phrases are stored and displayed in sequence, separated by an animation that appears to scramble the letters with random characters between phrases that are selected by Math.random.

### [Rock Paper Scissors](https://css-tricks.com/lots-of-ways-to-use-math-random-in-javascript/#aa-rock-paper-scissors)

CodePen Embed Fallback

In this childhood classic game of Rock Paper Scissors, Math.random is used to generate a randomized move for the computer playing as the opponent. It makes a pick from the three available moves.

### [Strong Password Generator](https://css-tricks.com/lots-of-ways-to-use-math-random-in-javascript/#aa-strong-password-generator)

CodePen Embed Fallback

```typescript
new Vue({
    el: '#app',
    data() {
        return {
            password: '',
            copied: false,
            settings: {
                maxLength: 64,
                maxDigits: 10,
                maxSymbols: 10,
                length: 12,
                digits: 4,
                symbols: 2,
                ambiguous: true
            }
        };
    },
    computed: {
        lengthThumbPosition: function () {
            return (
                ((this.settings.length - 6) / (this.settings.maxLength - 6)) *
                100
            );
        },
        digitsThumbPosition: function () {
            return (
                ((this.settings.digits - 0) / (this.settings.maxDigits - 0)) *
                100
            );
        },
        symbolsThumbPosition: function () {
            return (
                ((this.settings.symbols - 0) / (this.settings.maxSymbols - 0)) *
                100
            );
        },
        strength: function () {
            var count = {
                excess: 0,
                upperCase: 0,
                numbers: 0,
                symbols: 0
            };

            var weight = {
                excess: 3,
                upperCase: 4,
                numbers: 5,
                symbols: 5,
                combo: 0,
                flatLower: 0,
                flatNumber: 0
            };

            var strength = {
                text: '',
                score: 0
            };

            var baseScore = 30;

            for (i = 0; i < this.password.length; i++) {
                if (this.password.charAt(i).match(/[A-Z]/g)) {
                    count.upperCase++;
                }
                if (this.password.charAt(i).match(/[0-9]/g)) {
                    count.numbers++;
                }
                if (
                    this.password.charAt(i).match(/(.*[!,@,#,$,%,^,&,*,?,_,~])/)
                ) {
                    count.symbols++;
                }
            }

            count.excess = this.password.length - 6;

            if (count.upperCase && count.numbers && count.symbols) {
                weight.combo = 25;
            } else if (
                (count.upperCase && count.numbers) ||
                (count.upperCase && count.symbols) ||
                (count.numbers && count.symbols)
            ) {
                weight.combo = 15;
            }

            if (this.password.match(/^[\sa-z]+$/)) {
                weight.flatLower = -30;
            }

            if (this.password.match(/^[\s0-9]+$/)) {
                weight.flatNumber = -50;
            }

            var score =
                baseScore +
                count.excess * weight.excess +
                count.upperCase * weight.upperCase +
                count.numbers * weight.numbers +
                count.symbols * weight.symbols +
                weight.combo +
                weight.flatLower +
                weight.flatNumber;

            if (score < 30) {
                strength.text = 'weak';
                strength.score = 10;
                return strength;
            } else if (score >= 30 && score < 75) {
                strength.text = 'average';
                strength.score = 40;
                return strength;
            } else if (score >= 75 && score < 150) {
                strength.text = 'strong';
                strength.score = 75;
                return strength;
            } else {
                strength.text = 'secure';
                strength.score = 100;
                return strength;
            }
        }
    },
    mounted() {
        this.generatePassword();
    },
    watch: {
        settings: {
            handler: function () {
                this.generatePassword();
            },
            deep: true
        }
    },
    methods: {
        // copy password to clipboard
        copyToClipboard() {
            // we should create a textarea, put the password inside it, select it and finally copy it
            var copyElement = document.createElement('textarea');
            copyElement.style.opacity = '0';
            copyElement.style.position = 'fixed';
            copyElement.textContent = this.password;
            var body = document.getElementsByTagName('body')[0];
            body.appendChild(copyElement);
            copyElement.select();
            document.execCommand('copy');
            body.removeChild(copyElement);

            this.copied = true;
            // reset this.copied
            setTimeout(() => {
                this.copied = false;
            }, 750);
        },
        // generate the password
        generatePassword() {
            var lettersSetArray = [
                'a',
                'b',
                'c',
                'd',
                'e',
                'f',
                'g',
                'h',
                'i',
                'j',
                'k',
                'l',
                'm',
                'n',
                'o',
                'p',
                'q',
                'r',
                's',
                't',
                'u',
                'v',
                'w',
                'x',
                'y',
                'z'
            ];
            var symbolsSetArray = [
                '=',
                '+',
                '-',
                '^',
                '?',
                '!',
                '%',
                '&',
                '*',
                '$',
                '#',
                '^',
                '@',
                '|'
            ];
            //var ambiguousSetArray = ["(",")","{","}","[","]","(",")","/","~",";",":",".","<",">"];
            var passwordArray = [];
            var digitsArray = [];
            var digitsPositionArray = [];

            // first, fill the password array with letters, uppercase and lowecase
            for (var i = 0; i < this.settings.length; i++) {
                // get an array for all indexes of the password array
                digitsPositionArray.push(i);

                var upperCase = Math.round(Math.random() * 1);
                if (upperCase === 0) {
                    passwordArray[i] =
                        lettersSetArray[
                            Math.floor(Math.random() * lettersSetArray.length)
                        ].toUpperCase();
                } else {
                    passwordArray[i] =
                        lettersSetArray[
                            Math.floor(Math.random() * lettersSetArray.length)
                        ];
                }
            }

            // Add digits to password
            for (i = 0; i < this.settings.digits; i++) {
                digit = Math.round(Math.random() * 9);
                numberIndex =
                    digitsPositionArray[
                        Math.floor(Math.random() * digitsPositionArray.length)
                    ];

                passwordArray[numberIndex] = digit;

                /* remove position from digitsPositionArray so we make sure to the have the exact number of digits in our password
        since without this step, numbers may override other numbers */

                var j = digitsPositionArray.indexOf(numberIndex);
                if (i != -1) {
                    digitsPositionArray.splice(j, 1);
                }
            }

            // add special characters "symbols"
            for (i = 0; i < this.settings.symbols; i++) {
                var symbol =
                    symbolsSetArray[
                        Math.floor(Math.random() * symbolsSetArray.length)
                    ];
                var symbolIndex =
                    digitsPositionArray[
                        Math.floor(Math.random() * digitsPositionArray.length)
                    ];

                passwordArray[symbolIndex] = symbol;

                /* remove position from digitsPositionArray so we make sure to the have the exact number of digits in our password
        since without this step, numbers may override other numbers */

                var j = digitsPositionArray.indexOf(symbolIndex);
                if (i != -1) {
                    digitsPositionArray.splice(j, 1);
                }
            }
            this.password = passwordArray.join('');
        }
    }
});
```

```html
<div id="app">
    <section class="wrapper">
        <h1>The Password Genie</h1>
        <div class="password-box">
            <span id="password" class="password" v-on:click="copyToClipboard"
                >{{ password }}</span
            >
            <span
                class="regenerate-password"
                v-on:click="generatePassword"
            ></span>
            <span class="copy-password" v-on:click="copyToClipboard"></span>
            <span class="tooltip" v-if="copied"
                >Password copied successfuly!</span
            >
        </div>
        <form @keydown.enter.prevent="">
            <div class="field-wrap">
                <label>Strength</label>
                <span class="range-value">{{strength.text}}</span>
                <div
                    class="range-slider_wrapper slider-strength"
                    v-bind:class="strength.text"
                >
                    <span
                        class="slider-bar"
                        v-bind:style="{ width: strength.score + '%' }"
                    ></span>
                    <input
                        type="range"
                        class="range-slider"
                        min="0"
                        max="100"
                        v-model="strength.score"
                        disabled
                    />
                </div>
            </div>
            <div class="seperator"></div>
            <div class="field-wrap">
                <label>Length</label>
                <span class="range-value">{{settings.length}}</span>
                <div class="range-slider_wrapper">
                    <span
                        class="slider-bar"
                        v-bind:style="{ width: lengthThumbPosition + '%' }"
                    ></span>
                    <input
                        type="range"
                        class="range-slider"
                        min="6"
                        v-bind:max="settings.maxLength"
                        v-model="settings.length"
                    />
                </div>
            </div>
            <div class="field-wrap">
                <label>Digits</label>
                <span class="range-value">{{settings.digits}}</span>
                <div class="range-slider_wrapper">
                    <span
                        class="slider-bar"
                        v-bind:style="{ width: digitsThumbPosition + '%' }"
                    ></span>
                    <input
                        type="range"
                        class="range-slider"
                        min="0"
                        v-bind:max="settings.maxDigits"
                        v-model="settings.digits"
                    />
                </div>
            </div>
            <div class="field-wrap">
                <label>Symbols</label>
                <span class="range-value">{{settings.symbols}}</span>
                <div class="range-slider_wrapper">
                    <span
                        class="slider-bar"
                        v-bind:style="{ width: symbolsThumbPosition + '%' }"
                    ></span>
                    <input
                        type="range"
                        class="range-slider"
                        min="0"
                        v-bind:max="settings.maxSymbols"
                        v-model="settings.symbols"
                    />
                </div>
            </div>
        </form>
    </section>
</div>
```

```scss
$blue: #3fa4f4;
$purple: #6e77f7;
$peach: #fc8680;
$pink: #ef5081;
$green: #8bc34a;
$dark-green: #4caf50;
$red: #ff6666;
$orange: #ff9800;

$wrapper-bg: #f4f7fc;
$wrapper-width: 400px;

* {
    box-sizing: border-box;
}

body {
    font-size: 15px;
    font-family: Tahoma, Verdana, Segoe, sans-serif;
    color: #444;
    background-color: #fefefe;
    background-image: linear-gradient(-45deg, #018bfd 0%, #3f51b5 100%);
    background-repeat: no-repeat;
    background-size: cover;
    padding: 0 20px;
    margin: 0;
    min-height: 100vh;
    position: relative;
}

.header {
    padding: 2em 0;
    text-align: center;

    .title {
        font-size: 1.2em;
        font-weight: bold;
        color: #fff;

        img {
            width: 12px;
            margin: 0 2px 2px;
            vertical-align: bottom;
        }
    }
}

.wrapper {
    width: $wrapper-width;
    max-width: 100%;
    min-height: 400px;
    margin: 40px auto;
    position: relative;
    border: 1px solid #eee;
    border-radius: 3px;
    padding: 40px 20px;
    font-size: 0.85em;
    -webkit-box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.05);
    box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.05);
    background-color: $wrapper-bg;
    position: relative;
    transition: all ease-in 0.25s;
}

h1 {
    text-align: center;
    margin: 0 0 40px;
}
.field-wrap {
    margin-bottom: 20px;
}

form {
    overflow: overlay;
    margin-top: 30px;
}

label {
    display: inline-block;
    min-width: 20%;
}

.range-slider_wrapper {
    position: relative;
    width: 100%;
    margin: 10px 0 30px;
}

.range-slider {
    -webkit-appearance: none;
    appearance: none;
    background: lighten($blue, 20%);
    width: 100%;
    border-radius: 3px;
    vertical-align: bottom;
    margin: 0;
    height: 6px;
    cursor: pointer;
    transition: all ease-in 0.25s;
}

.range-slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    border-radius: 0;
    border: 0;
    position: relative;
    width: 4px;
    height: 15px;
    background-color: darken($blue, 5%);
}
.range-slider::-moz-range-thumb {
    -moz-appearance: none;
    appearance: none;
    border-radius: 0;
    border: 0;
    position: relative;
    width: 4px;
    height: 15px;
    background-color: darken($blue, 5%);
}

.range-slider {
    &:focus {
        outline: none;
    }

    &:hover,
    &:active {
        &::-webkit-slider-thumb {
            top: 0px;
        }
    }
}

::-moz-range-track {
    background: transparent;
    border: 0;
}
input::-moz-focus-inner,
input::-moz-focus-outer {
    border: 0;
}

.range-value {
    text-transform: capitalize;
    float: right;
    vertical-align: bottom;
    min-width: 30px;
    display: inline-block;
    text-align: center;
    border-radius: 3px;
    font-size: 0.9em;
}

.slider-bar {
    position: absolute;
    height: 6px;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
    background: $blue;
    left: 0;
    bottom: 0;
    pointer-events: none;
}

.slider {
    &-strength {
        .range-slider {
            cursor: default;
        }

        .slider-bar {
            border-radius: 3px;
            transition: all ease-in 0.25s;
        }
        .range-slider::-webkit-slider-thumb {
            background-color: transparent;
        }
        .range-slider::-moz-range-thumb {
            background-color: transparent;
        }

        &.weak {
            .range-slider {
                background-color: lighten($red, 30%);
            }
            .slider-bar,
            .slider-bar:after {
                background-color: $red;
            }
        }

        &.average {
            .range-slider {
                background-color: lighten($orange, 30%);
            }
            .slider-bar,
            .slider-bar:after {
                background-color: $orange;
            }
        }

        &.strong {
            .range-slider {
                background-color: lighten($green, 30%);
            }
            .slider-bar,
            .slider-bar:after {
                background-color: $green;
            }
        }

        &.secure {
            .range-slider {
                background-color: lighten($green, 30%);
            }
            .slider-bar,
            .slider-bar:after {
                background-color: $green;
            }
        }
    }
}

.password-box {
    width: 100%;
    min-height: 80px;
    margin-bottom: 40px;
    position: relative;
    text-align: center;
    border-radius: 3px;
    background: #fff;
    letter-spacing: 2px;
    transition: all ease-in 0.3s;
    border: 1px solid rgb(189, 204, 230);

    .password {
        width: 70%;
        padding: 1.5em 1em;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        word-wrap: break-word;
    }
}

.regenerate-password,
.copy-password {
    width: 44px;
    height: 50%;
    position: absolute;
    right: 0;
    transition: all ease-in 0.25s;

    &:hover {
        opacity: 0.8;
    }
}

.regenerate-password {
    top: 0;
    background-color: #fff;
    background-image: url('https://nourabusoud.github.io/password-genie/images/regenerate.svg');
    background-size: 40%;
    background-position: center center;
    background-repeat: no-repeat;
    transition: all ease-in 0.25s;
    cursor: pointer;

    &:hover {
        background-color: #fff;
    }
}

.copy-password {
    bottom: 0;
    background-color: #fff;
    background-image: url('https://nourabusoud.github.io/password-genie/images/copy-full.svg');
    background-size: 50%;
    background-position: center center;
    background-repeat: no-repeat;
    transition: all ease-in 0.25s;
    cursor: pointer;

    &:hover {
        background-color: #fff;
    }
}

.tooltip {
    font-size: 0.8em;
    display: block;
    text-align: center;
    padding: 0.5em;
    border-radius: 3px;
    position: absolute;
    bottom: -35px;
    left: 50%;
    transform: translateX(-50%);
}

.seperator {
    width: 100%;
    height: 3px;
    background-color: #fff;
    margin: 60px 0 40px;
}

/* Footer */
footer {
    width: 100%;
    text-align: center;
    color: #fff;
}

footer a {
    color: #fff;
}

.github-links {
    margin-bottom: 30px;
}

// fix for copy text
textarea,
textarea:focus {
    font-size: 16px;
}
```

This password generator uses Math.random to get a password array filled with uppercase and lowercase letters then adds random digits to the generated password. This is another great practical example!

### [A couple of notes…](https://css-tricks.com/lots-of-ways-to-use-math-random-in-javascript/#aa-a-couple-of-notes)

It’s possible you have questions after seeing Math.random in these examples. There are a couple I see come up often…

#### [Is `Math.random()` really random?](https://css-tricks.com/lots-of-ways-to-use-math-random-in-javascript/#aa-is-math-random-really-random)

Not exactly. Math.random() returns a pseudo-random number. This algorithm is called a pseudo-random number generator (or PRNG). This means its randomization can be reproduced under certain circumstances.

The randomization is based on the algorithm [`xorshift128+`](https://en.wikipedia.org/wiki/Xoroshiro128+), which is likely running on your browser.

So, it’s random-ish.

#### [**How do you handle repeated values?**](https://css-tricks.com/lots-of-ways-to-use-math-random-in-javascript/#aa-how-do-you-handle-repeated-values)

There are many methods to achieve unique values without repetition. The Fisher-Yates is one great way to prevent getting the same number twice by shuffling the sequence. Math.random will select a value from the shuffled array of a finite sequence demonstrated by the code snippet below.

```javascript
function shuffle(array) {
    var i = 0,
        j = 0,
        temp = null;

    for (i = array.length - 1; i > 0; i -= 1) {
        j = Math.floor(Math.random() * (i + 1));
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}
```

#### [Is `Math.random()` the same as WebCrypto?](https://css-tricks.com/lots-of-ways-to-use-math-random-in-javascript/#aa-is-math-random-the-same-as-webcrypto)

As you’ve seen from this article, Math.random() is awesome! However, if you dealing with sensitive applications and need a more secure method of randomization, I’d recommend WebCrypto. Reasons you may want to use WebCrypto include temporary verification codes, random password generation, randomized lottery numbers, etc.

If you need randomization for the purposes of cybersecurity, cryptography, or statistics ,  use the function `window.crypto.getRandomValues` and check out Mozilla’s documentation on the [WebCrypto API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API).

[![Deploy 2024 - Build your vision on the Developer Cloud.](https://css-tricks.com/wp-content/uploads/2024/06/do-config-2024.png)](https://do.co/deploy24)

[DO Deploy is back on July 9th! Join us and catch the latest DigitalOcean updates from experts and connect with an amazing tech community.](https://do.co/deploy24)

[![Ad for monday dev](https://static4.buysellads.net/uu/7/149579/1714577227-CSS_tricks_sidebar_Accelerate_TRY.png)](https://srv.buysellads.com/ads/click/x/GTND427JF6ADE53WC6SLYKQUCVYDV23JCWAD5Z3JCA7DTK7ICKAI627KC6SICKJNCKBIVK3LCWSILKJLC6SD5KJKC6SI45Q7CVYIKK3EHJNCLSIZ)

Sponsored [Bring products to market faster, delivering impact from strategy to launch.](https://srv.buysellads.com/ads/click/x/GTND427JF6ADE53WC6SLYKQUCVYDV23JCWAD5Z3JCA7DTK7ICKAI627KC6SICKJNCKBIVK3LCWSILKJLC6SD5KJKC6SI45Q7CVYIKK3EHJNCLSIZ)

![](https://ad.doubleclick.net/ddm/trackimp/N728909.3091281BUYSELLADS/B28860815.393481061;dc_trk_aid=585155925;dc_trk_cid=215388630;ord=[timestamp];dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;gdpr=$;gdpr_consent=$;ltd=;dc_tdv=1?)

[![Ad for Toddle](https://static4.buysellads.net/uu/7/151317/1719331856-Squirrel_600x600.jpg)](https://srv.buysellads.com/ads/click/x/GTND427JF6ADE53WC6SLYKQUCVYDVKJYCTAIEZ3JCA7DTK7LCYBI5KJKC6SICKJNCKBIVK3LCWSILKJLC6SD5KJKC6SI45Q7CVYIKK3EHJNCLSIZ)

Sponsored [The programming collaboration platform for designers and engineers.](https://srv.buysellads.com/ads/click/x/GTND427JF6ADE53WC6SLYKQUCVYDVKJYCTAIEZ3JCA7DTK7LCYBI5KJKC6SICKJNCKBIVK3LCWSILKJLC6SD5KJKC6SI45Q7CVYIKK3EHJNCLSIZ)

[![ads via Carbon](https://srv.carbonads.net/static/30242/4f7f59796c5dda8f5dfc63a40583dfde7cebb050)](https://srv.carbonads.net/ads/click/x/GTND427JF6AIP27NC6SLYKQUC6AILK3LCYBD4Z3JCA7DT2QECWSIK53KC6SICKJNCKBIVK3LCWSILKJJFT7DL5QKC6SI45Q7CVADEK3EHJNCLSIZ)[Design and Development tips in your inbox. Every weekday.](https://srv.carbonads.net/ads/click/x/GTND427JF6AIP27NC6SLYKQUC6AILK3LCYBD4Z3JCA7DT2QECWSIK53KC6SICKJNCKBIVK3LCWSILKJJFT7DL5QKC6SI45Q7CVADEK3EHJNCLSIZ) [ads via Carbon](http://carbonads.net/?utm_source=csstrickscom&utm_medium=ad_via_link&utm_campaign=in_unit&utm_term=carbon)

![ads via Carbon](https://segment.prod.bidr.io/associate-segment?buzz_key=dsp&segment_key=dsp-19102)![ads via Carbon](https://secure.adnxs.com/seg?add=37012073&t=2)

_Psst!_ Create a DigitalOcean account and get [$200 in free credit](https://try.digitalocean.com/css-tricks/?utm_medium=content_acq&utm_source=css-tricks&utm_campaign=global_brand_ad_en&utm_content=conversion_postarticle_psst) for cloud-based hosting and services.

## Comments

1. Vishal

    [Permalink to comment#](https://css-tricks.com/lots-of-ways-to-use-math-random-in-javascript/#comment-1765536) November 30, 2020

    I really loved the way you present the function and it’s use with source code.

    - Jwahir Sundai
      [Permalink to comment#](https://css-tricks.com/lots-of-ways-to-use-math-random-in-javascript/#comment-1766363) December 23, 2020
      Thank you so much! I’m glad you enjoyed it!

2. ZOD

    [Permalink to comment#](https://css-tricks.com/lots-of-ways-to-use-math-random-in-javascript/#comment-1765550) December 1, 2020

    Never thought that JS really this much powerful.  
    And really loved your work!

    - Jwahir Sundai
      [Permalink to comment#](https://css-tricks.com/lots-of-ways-to-use-math-random-in-javascript/#comment-1766364) December 23, 2020
      Yes, it’s truly amazing! I’m glad you liked it!

3. alisafrost33

    [Permalink to comment#](https://css-tricks.com/lots-of-ways-to-use-math-random-in-javascript/#comment-1765552) December 1, 2020

    All looks really simple. Your explanation is perfect.

    - Jwahir Sundai
      [Permalink to comment#](https://css-tricks.com/lots-of-ways-to-use-math-random-in-javascript/#comment-1766365) December 23, 2020
      Thank you!

4. David

    [Permalink to comment#](https://css-tricks.com/lots-of-ways-to-use-math-random-in-javascript/#comment-1765579) December 1, 2020

    Awesome writeup. Since you mentioned my random color thingy, it motivated me to work on it a bit more: [https://farbvelo.elastiq.ch/](https://farbvelo.elastiq.ch/)

    - Jwahir Sundai
      [Permalink to comment#](https://css-tricks.com/lots-of-ways-to-use-math-random-in-javascript/#comment-1766367) December 23, 2020
      Thank you, David! I’m a fan of work so I’m really happy to hear that!

5. #faro

    [Permalink to comment#](https://css-tricks.com/lots-of-ways-to-use-math-random-in-javascript/#comment-1765602) December 2, 2020

    I really enjoyed reading your article. Bravo!

    - Jwahir Sundai
      [Permalink to comment#](https://css-tricks.com/lots-of-ways-to-use-math-random-in-javascript/#comment-1766368) December 23, 2020
      Thank you so much!

6. Victoria

    [Permalink to comment#](https://css-tricks.com/lots-of-ways-to-use-math-random-in-javascript/#comment-1766335) December 22, 2020

    This whole article saved my life. The ‘random not being so random’ was the only thing standing between me and a great project. I’m eternally grateful to you.

7. Alfred Alva

    [Permalink to comment#](https://css-tricks.com/lots-of-ways-to-use-math-random-in-javascript/#comment-1797516) October 23, 2022

    Is it possible to use a HTML several category buttons on a webpage and use one math random per category button?

This comment thread is closed. If you have important information to share, please [contact us](https://css-tricks.com/contact/).

[](https://css-tricks.com/random-numbers-css/?relatedposts_hit=1&relatedposts_origin=326055&relatedposts_position=0 'Random Numbers in CSS')

#### [Random Numbers in CSS](https://css-tricks.com/random-numbers-css/?relatedposts_hit=1&relatedposts_origin=326055&relatedposts_position=0 'Random Numbers in CSS')

I stumbled into an interesting problem the other day. I wanted to animate an element with a random animation-duration. This was the non-randomized starting point: See the Pen Random numbers CSS #1 by Robin Rendle (@robinrendle) on CodePen. This is the CSS I wrote to make the animation: @keyframes flicker…

January 11, 2017

[![](https://i0.wp.com/css-tricks.com/wp-content/uploads/2020/03/sparkles.png?fit=1200%2C600&ssl=1&resize=350%2C200)](https://css-tricks.com/playing-with-particles-using-the-web-animations-api/?relatedposts_hit=1&relatedposts_origin=326055&relatedposts_position=1 'Playing With Particles Using the Web Animations API')

#### [Playing With Particles Using the Web Animations API](https://css-tricks.com/playing-with-particles-using-the-web-animations-api/?relatedposts_hit=1&relatedposts_origin=326055&relatedposts_position=1 'Playing With Particles Using the Web Animations API')

When it comes to motion and animations, there is probably nothing I love more than particles. This is why every time I explore new technologies I always end up creating demos with as many particles as I can. In this post, we'll make even more particle magic using the Web…
