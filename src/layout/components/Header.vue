<template>
  <div class="Headers">
    <AvataHeader></AvataHeader>
  </div>
</template>
<script>
export default {
  name: 'Headers',
  components: {
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
    margin: 30px 0px;
  }
</style>
