<?php snippet('header') ?>

      <header>
        <h1>Eric Poole</h1>
        <h4>{ Full Stack Engineer }</h4>
      </header>

      <div class="content">
        <section class="split">
          <article>
            <?= $page->split_left() ?>
          </article>
  
          <article>
              <?= $page->split_right() ?>
          </article>
        </section>
        
        <?php snippet('repos') ?>
      </div>

<?php snippet('footer') ?>