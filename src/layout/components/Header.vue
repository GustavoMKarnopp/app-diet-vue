<template>
  <div class="Headers">
    <!-- <div>DIET ROCKETVUE</div> -->
    <AvataHeader></AvataHeader>
  </div>
</template>
<script>
export default {
  name: 'Headers',
  data() {},
  components: {
    // eslint-disable-next-line import/extensions
    AvataHeader: () => import('../../components/AvatarHeader/Avatar-header.vue'),
  },
};
</script>
<style>
  .Headers{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
</style>
