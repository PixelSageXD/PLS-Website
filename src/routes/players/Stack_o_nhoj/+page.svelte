<div class="player-profile">
  <img src="/players/Stack_o_nhoj.png" alt="John" class="profile-img" />

  <div class="profile-info">
    <h2 class="bungee text-2xl">John</h2>
    <p>Username: Stack_o_nhoj</p>
    <p>Former Name(s): NexoJohn</p>
    <p>Pronouns: he/him</p>
    <p>Season(s): All</p>
  </div>
</div>

<br> <br>
<h2 class="bungee text-3xl" style="text-align: center">Other Skins</h2>
<div class="skin-list">
  <figure class="skin">
    <img src="/players/thirdlife/Stack_o_nhoj.png" alt="third life skin">
    <figcaption style="margin-top: 0.5rem">Third Life</figcaption>
  </figure>
  <figure class="skin">
    <img src="/players/lastlife/Stack_o_nhoj.png" alt="last life skin">
    <figcaption style="margin-top: 0.5rem">Last Life</figcaption>
  </figure>
  <figure class="skin">
    <img src="/players/doublelife/Stack_o_nhoj.png" alt="double life skin">
    <figcaption style="margin-top: 0.5rem">Double Life</figcaption>
  </figure>
  <figure class="skin">
    <img src="/players/limitedlife/Stack_o_nhoj.png" alt="limited life skin">
    <figcaption style="margin-top: 0.5rem">Limited Life</figcaption>
  </figure>
  <figure class="skin">
    <img src="/players/slmini/Stack_o_nhoj.png" alt="sl mini skin">
    <figcaption style="margin-top: 0.5rem">SL Mini-Season</figcaption>
  </figure>
</div>

<style>
  .player-profile {
    display: flex;
    align-items: center;
    gap: 2rem;
    padding: 2rem;
    max-width: 700px;
    margin: auto;
    flex-wrap: wrap;
    background-color: #21212a;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  }

  .skin-list {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fit, minmax(175px, 1fr));
    gap: 1rem;
    padding: 2rem;
    margin: 0 auto;
    max-width: 75%; /* 15% x number of extra skins (16% if one) */
    text-align: center;
    margin-top: 0.5rem;
    background-color: #23232f;
    box-shadow: 0 0 30px rgba(27, 22, 48, 0.3);
  }

  .season-info {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    padding: 2rem;
    margin: 2rem;
    margin-top: 2rem;
    flex-direction: column;
    align-items: flex-start;
    background-color: #23232f;
    box-shadow: 0 0 30px rgba(27, 22, 48, 0.3);
  }

  .bullet-list {
    padding-left:2.5rem;
    color: white;
    list-style-type: disc;
  }

  .skin {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .skin img {
    width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: 5px;
  }

  .profile-img {
    width: 200px;
    height: auto;
    border-radius: 8px;
    object-fit: cover;
  }

  .profile-info {
    flex: 1;
    color: #fff;
  }

  .profile-info h2 {
    margin-bottom: 0.5rem;
    color: #ff6464;
  }

  .profile-info p {
    margin: 0.2rem 0;
  }
</style>