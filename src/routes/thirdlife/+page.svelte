<script>
    import {TeamCard, PlayerCard} from '$lib'
</script>

<div class="text-center logo mb-10">
    <img src="third_life_white.svg" class="size-1/5 m-auto">
  </div>
  <br>
  <div class="info">
  <h2 class="text-4xl">
    <strong>Info:</strong>
  </h2>
  <h2 class="text-xl">Start Date: 24th Feb 2024</h2>
  <h2 class="text-xl">End Date: N/A</h2>
  </div>

  <div class="playerGrid m-10">
    <PlayerCard player="PixelSageXD" nickname="Pixel" lives={3}></PlayerCard>
    <PlayerCard player="FeebleBrush162" nickname="Ben" lives={3}></PlayerCard>
    <PlayerCard player="NexoJohn" nickname="John" lives={3}></PlayerCard>
    <PlayerCard player="Tofu_Beans" nickname="Daniella" lives={3}></PlayerCard>
    <PlayerCard player="oblivizin" nickname="Nick" lives={3}></PlayerCard>
    <PlayerCard player="SaviMatteo2810" nickname="Savi" lives={3}></PlayerCard>
    <PlayerCard player="Sherbiscute" nickname="Rei" lives={3}></PlayerCard>
    <PlayerCard player="RtxEric" nickname="Eric" lives={3}></PlayerCard>
    <PlayerCard player="wolfiegames101" nickname="Wolfie" lives={4}></PlayerCard>
    <PlayerCard player="Bosph" nickname="Bosph" lives={4}></PlayerCard>
    <PlayerCard player="FrostyBoi61" nickname="Alena" lives={0}></PlayerCard>
    <PlayerCard player="Daedreamerz" nickname="Luna" lives={3}></PlayerCard>
    <PlayerCard player="_just_Andi_" nickname="Andy" lives={3}></PlayerCard>
  </div>

  <div class="teams">
    <TeamCard teamName="The Transformers">
      <PlayerCard player="Tofu_Beans" nickname="Daniella" lives={3}></PlayerCard>
      <PlayerCard player="oblivizin" nickname="Nick" lives={3}></PlayerCard>
    </TeamCard>

    <TeamCard teamName="The Introverts">
      <PlayerCard player="wolfiegames101" nickname="Wolfie" lives={4}></PlayerCard>
      <PlayerCard player="RtxEric" nickname="Eric" lives={3}></PlayerCard>
      <PlayerCard player="Sherbiscute" nickname="Rei" lives={3}></PlayerCard>
      <PlayerCard player="SaviMatteo2810" nickname="Savi" lives={3}></PlayerCard>
    </TeamCard>

    <TeamCard teamName="Last Minute Alliance">
      <PlayerCard player="FrostyBoi61" nickname="Alena" lives={0}></PlayerCard>
      <PlayerCard player="Daedreamerz" nickname="Luna" lives={3}></PlayerCard>
      <PlayerCard player="_just_Andi_" nickname="Andy" lives={3}></PlayerCard>
    </TeamCard>

    <TeamCard teamName="The Businessmen">
      <PlayerCard player="PixelSageXD" nickname="Pixel" lives={3}></PlayerCard>
      <PlayerCard player="FeebleBrush162" nickname="Ben" lives={3}></PlayerCard>
      <PlayerCard player="NexoJohn" nickname="John" lives={3}></PlayerCard>
    </TeamCard>
  </div>