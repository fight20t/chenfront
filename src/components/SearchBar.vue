<template>
  <form @submit.prevent="onSubmit">
    <input 
      type="text" 
      v-model="input" 
      placeholder="请输入商品关键字"
    />
    <button type="submit">搜索</button>
  </form>
</template>

<script>
export default {
  name: 'SearchBar',
  data() {
    return {
      input: ''
    }
  },
  methods: {
    onSubmit() {
      this.$emit('on-search', this.input)
    }
  }
}
</script>

<style scoped>
form {
  display: flex;
  margin-bottom: 20px;
}

input {
  flex: 1;
  padding: 8px;
  font-size: 16px;
}

button {
  padding: 8px 16px;
  font-size: 16px;
  margin-left: 10px;
}
</style>