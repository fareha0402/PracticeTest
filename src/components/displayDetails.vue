<template>
  <div>
    <h1>Display Details</h1>
    <table>
        <tr v-for="item in postDetails" :key="item.id">
            <td>{{item.userId}}</td>
            <td>{{item.id}}</td>
            <td>{{item.title}}</td>
            <td>{{item.body}}</td>
        </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "DisplayDetails",
  data() {
    return {
      postDetails: [],
    };
  },

  created() {
      let url = 'https://jsonplaceholder.typicode.com/posts/1' + this.$route.query.postId + '/comments';
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        this.postDetails = json;
        console.log(this.postDetails);
      });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  display: flex;
  flex-direction: column;
}
.alignEle {
  margin-top: 10px;
  padding: 10px 18px;
}
</style>
