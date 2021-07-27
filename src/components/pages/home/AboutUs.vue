<template>
  <div class="box">
    <div class="column">
      <img
        class="card-img"
        src="../../../assets/images/philodendron-gloriosum-573531_1920.jpg"
      />
    </div>
    <div class="column-2">
      <base-textwrap>
        <h2>About</h2>
      </base-textwrap>
      <div class="column-2__text">
        <p>
          We're a small team of women located in Norway, aiming to do big
          things. As the world grows bigger, so does our company (and plants).
          We always want to do more, and do better.
        </p>
        <p>
          Although we are a women based company for now, we would always love to
          expand our horizon! Interested in a job? Don't hesitate, contact us
          directly by
          <router-link to="/contact" class="logo-footer"
            >clicking here.</router-link
          >
        </p>

        <p>
          We produce and launch everything locally, as we want to be as
          environmentally friendly as possible. Because of this, we don't hold a
          big stock of products all the time to ensure that nothing goes to
          waste.
        </p>
        <p>Stay tuned for plant launches by siging up to our newsletter:</p>
        <router-link to="/contact" class="logo-footer"
          >Sign Up Fix me</router-link
        >
        <h3>- The plant Team</h3>
      </div>
    </div>
  </div>
</template>

<style scoped>
.box {
  width: 100%;
  display: flex;
  flex-direction: row;
}
.column {
  width: 50%;
  background-color: #fbfbfb;
}
.card-img {
  width: 100%;
  height: 100%;
}
.column-2 {
  width: 50%;
  justify-content: center;
  background-color: #fbfbfb;
}
.column-2__text {
  padding: 1em;
  text-align: left;
}

@media only screen and (min-width: 700px) and (max-width: 950px) {
  .box {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .column {
    width: 100%;
  }
  .column-2 {
    width: 100%;
  }
}

@media only screen and (min-width: 300px) and (max-width: 700px) {
  .box {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .column {
    width: 100%;
  }
  .column-2 {
    width: 100%;
  }
}
</style>
