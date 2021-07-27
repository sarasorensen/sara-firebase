<template>
  <div>
    <base-textwrap> <h2>Latest Articles</h2></base-textwrap>
    <base-wrap>
      <base-card
        ><img
          class="card-img"
          src="../../../assets/images/monstera-6136185_1920.jpg"
        />
        <hr />
        <p>Up your humidity, and see significant changes in plant growth</p>

        <router-link to="/products">See More</router-link>
      </base-card>
      <base-card
        ><img
          class="card-img"
          src="../../../assets/images/monstera-deliciosa-2208083_1920.jpg"
        />
        <hr />
        <p>Indirect light? Huh? Learn more about lighting in your home</p>
        <router-link to="/products">See More</router-link>
      </base-card>
      <base-card
        ><img
          class="card-img"
          src="../../../assets/images/monstera-plant-6106858_1920.jpg"
        />
        <hr />
        <p>
          All the info you need to grow a big fenestrated Monstera Deliciosa
        </p>
        <router-link to="/products">See More</router-link>
      </base-card>
    </base-wrap>
  </div>
</template>

<style scoped>
.card-img {
  width: 100%;
  height: 45vh;
}

@media only screen and (min-width: 300px) and (max-width: 700px) {
  .card-img {
    width: 100%;
    height: 60vh;
  }
}
</style>
