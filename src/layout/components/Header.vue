<template>
  <div class="Headers">
    <AvataHeader></AvataHeader>
  </div>
</template>
<script>
export default {
  name: 'Headers',
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
