<?php
  $slogans = [
    'Vulkan lives',
    'The flesh is weak',
    'The Doom of Eldanesh',
    'No all who wander are lost',
    'West of Arkham...',
    'It wouldn\'t be the same without them',
    'Hatred outlives the hateful',
    'Breathe deep the gathering gloom',
    'Oh my God, its full of stars',
    'One amoung the Fence',
    'Gabba Gabba Hey',
  ];

  $index = array_rand($slogans, 1);
?>


      <footer>
        <div id="copyright">&copy; Eric Poole 2015 - <?= date("Y") ?></div>
        <div id="slogan"><?= $slogans[$index] ?></div>
      </footer>
    </main>
</body>
