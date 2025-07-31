<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Engagement Invitation</title>
  <link rel="stylesheet" href="style.css" />
  <link href="https://fonts.googleapis.com/css2?family=Parisienne&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Almendra:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet">
  </head>
<body>
  <!-- Page open count display - can be removed when going live -->
  <div id="pageOpenCountDisplay" style="position: fixed; top: 5px; left: 5px; background: rgba(0,0,0,0.6); color: white; font-size: 14px; font-weight: bold; padding: 2px 6px; border-radius: 8px; z-index: 1000; user-select: none;">
    0
  </div>

  <div id="scene1">
    <div id="backgroundImage"></div>
    <img id="initials" src="GA.png" alt="G ♥ A" />

    <div id="heartWrapper">
      <div id="hint"><br>Tap the heart to see magic</div>
      <img id="leftHeart" src="left-heart.svg" alt="Left Heart" />
      <img id="rightHeart" src="right-heart.svg" alt="Right Heart" />
    </div>
  </div>

  <audio id="bgm" src="song.mp3" preload="auto"></audio>
  <script src="script.js"></script>
</body>
</html>
