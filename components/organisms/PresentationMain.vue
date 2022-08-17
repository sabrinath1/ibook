<template>
  <div class="presentation">
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quibusdam,
      placeat possimus corporis provident ab consequatur ad ipsam amet
      voluptatum odio facere, unde quasi natus, autem nam laudantium illum iure.
    </p>
    <img src="@/assets/img/presentation.svg" alt="Apresentação iBook" />
  </div>
</template>

<style lang="scss" scoped>
.presentation {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
  align-items: center;
  @include screen('small', 'medium') {
    grid-template-columns: 1fr;
  }
  p {
    line-height: 26px;
  }
  img {
    max-width: 100%;
  }
}
</style>
