// Full HTML and JavaScript program as a string
const programText = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cookie Clicker Game</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin: 20px;
        }
        canvas {
            cursor: pointer;
            display: block;
            margin: 20px auto;
        }
        #counter {
            font-size: 24px;
            margin-top: 10px;
        }
        #message {
            font-size: 30px;
            color: green;
            font-weight: bold;
            margin-top: 20px;
        }
        #restartButton {
            display: none;
            margin-top: 20px;
            padding: 10px 20px;
            font-size: 18px;
            background-color: #4caf50;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
        #restartButton:hover {
            background-color: #45a049;
        }
    </style>
</head>
<body>
    <h1>Cookie Clicker</h1>
    <canvas id="cookieCanvas" width="400" height="400"></canvas>
    <div id="counter">Cookies: 0</div>
    <div id="message"></div>
    <button id="restartButton">Restart Game</button>

    <script>
        const canvas = document.getElementById('cookieCanvas');
        const ctx = canvas.getContext('2d');
        const counter = document.getElementById('counter');
        const message = document.getElementById('message');
        const restartButton = document.getElementById('restartButton');

        let cookieCount = 0;
        const winThreshold = 20;

        function drawCookieBase() {
            ctx.fillStyle = '#d2a679';
            ctx.beginPath();
            ctx.arc(200, 200, 100, 0, Math.PI * 2);
            ctx.fill();
            ctx.closePath();
        }

        function drawChocolateChips() {
            ctx.fillStyle = '#4d2e0b';
            const chips = [
                { x: 170, y: 150, size: 10 },
                { x: 230, y: 170, size: 12 },
                { x: 200, y: 220, size: 8 },
                { x: 160, y: 240, size: 10 },
                { x: 250, y: 240, size: 9 }
            ];
            chips.forEach(chip => {
                ctx.beginPath();
                ctx.arc(chip.x, chip.y, chip.size, 0, Math.PI * 2);
                ctx.fill();
                ctx.closePath();
            });
        }

        function drawCookie() {
            drawCookieBase();
            drawChocolateChips();
        }

        canvas.addEventListener('click', () => {
            if (cookieCount < winThreshold) {
                cookieCount++;
                counter.textContent = \`Cookies: \${cookieCount}\`;

                if (cookieCount === winThreshold) {
                    message.textContent = "You Win! 🎉";
                    canvas.style.pointerEvents = 'none';
                    restartButton.style.display = 'inline-block';
                }
            }
        });

        restartButton.addEventListener('click', () => {
            cookieCount = 0;
            counter.textContent = \`Cookies: 0\`;
            message.textContent = '';
            canvas.style.pointerEvents = 'auto';
            restartButton.style.display = 'none';

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawCookie();
        });

        drawCookie();
    </script>
</body>
</html>
`;

// Generate the QR Code
const qrCodeElement = document.getElementById('qrcode');
new QRCode(qrCodeElement, {
    text: programText,
    width: 300,
    height: 300,
    correctLevel: QRCode.CorrectLevel.H
});
