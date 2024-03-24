<template>
  <div>
    <FeedBackForm></FeedBackForm>
  </div>
</template>
<script>
export default{
  name: 'Feedback',
  components: {
    // eslint-disable-next-line import/extensions
    FeedBackForm: () => import('../components/Feedback/Feedback-success.vue'),
  },
};
</script>
