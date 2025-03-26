<template>
  <div class="product-list">
    <div v-if="products.length === 0">
      没有查询到相关商品
    </div>
    <div v-else class="product-item" v-for="product in products" :key="product.id">
      <img :src="product.imageUrl" :alt="product.name" />
      <h3>{{ product.name }}</h3>
      <p>价格: ¥{{ product.price }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductList',
  props: {
    products: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.product-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.product-item {
  border: 1px solid #ddd;
  padding: 10px;
  width: calc(25% - 20px);
  box-sizing: border-box;
}

.product-item img {
  max-width: 100%;
  height: auto;
}
</style>