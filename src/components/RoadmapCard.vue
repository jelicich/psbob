<template>
  <div class="main-box-container">
    <div class="box-container">
      <img
        src="https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <h3>Haruki Kurogane</h3>

      <p>
        Haruki Kurogane is a mysterious and enigmatic character who possesses
        unparalleled skill in martial arts and a deep connection to the ancient
        arts of swordsmanship. Despite their formidable abilities, Haruki often
        prefers to keep to themselves, shrouded in secrecy and rarely revealing
        their true intentions.
      </p>

      <h6>Expand</h6>
    </div>
  </div>
</template>
<script>
export default {
  name: "RoadmapCard",
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Anton&family=Coiny&family=Jost&family=Niconne&family=Oswald&family=Playfair+Display&family=Poppins:wght@400;600&family=Quicksand:wght@300&display=swap");

* {
  font-family: "Anton", sans-serif;
}
.main-box-container {
  width: 100%;
  height: 100vh;
  min-height: 380px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

h3 {
  color: #fff;
  font-weight: 400;
  font-style: normal;
  font-size: 40px;
  margin: 10px 0;
}

img {
  width: 100%;
  height: 100%;
  position: absolute;
  transition-duration: 500ms;
  top: 0;
  left: 0;
  z-index: -4;
}

.box-container:hover img {
  opacity: 0;
  width: 400%;
  height: 400%;
}

.box-container {
  position: relative;
  z-index: 11;
  padding: 20px;
  width: 290px;
  height: 390px;
  background: #9e1d22;
  background-size: cover;
  padding: 20px;
  border-radius: 20px;
  transition-duration: 500ms;
  overflow: hidden;
  box-shadow: 1px 1px 60px 0px black;
}

.box-container:hover {
  background-size: 1500px;
}

.box-container p {
  transform: translate(500px, 0px);
  transition-duration: 700ms;
  color: #ffff;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
}

.box-container:hover {
  scale: 1.05;
}

.box-container:hover p {
  transform: translate(0px, 0px);
}

h6 {
  display: inline-block;
  background: #fff;
  margin: 10px 0px;
  z-index: 11;
  font-size: 18px;
  padding: 10px 30px;
  transform: translate(0px, 300px);
  transition-duration: 500ms;
}

.box-container:hover h6 {
  transform: translate(0px, 0px);
}
</style>