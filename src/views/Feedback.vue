<template>
  <div>
    <FeedBackForm></FeedBackForm>
  </div>
</template>
<script>
export default{
  name: 'Feedback',
  components: {
    FeedBackForm: () => import('../components/Feedback/Feedback-success.vue'),
  },
};
</script>
