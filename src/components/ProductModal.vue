<template>
  <div class="modal-overlay" @click.self="close">
    <div class="modal-content">
      <div class="modal-left">
        <img :src="product.imageUrl" alt="product image" />
      </div>
      <div class="modal-right">
        <div class="product-info">
          <p>Name: {{ product.name }} ￥:{{ product.price }}</p>
          <p>产品介绍: {{ product.description }}</p>
        </div>
        <div class="modal-buttons">
          <button @click="buyNow">Buy Now</button>
          <button @click="addToCart">Add to Cart</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductModal",
  props: {
    product: {
      type: Object,
      required: true,
    }
  },
  methods: {
    close() {
      this.$emit("close");
    },
    buyNow() {
      // 实现 Buy Now 的逻辑
      alert("Buy Now clicked!");
    },
    addToCart() {
      // 实现 Add to Cart 的逻辑
      alert("Add to Cart clicked!");
    }
  }
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
}

.modal-content {
  position: absolute;
  left: 147px;
  top: 141px;
  width: 1160px;
  height: 753px;
  opacity: 1;
  background: #fff;
  display: flex;
}

.modal-left {
  width: 40%;
  height: 100%;
}

.modal-left img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.modal-right {
  width: 60%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.product-info p {
  margin: 10px 0;
  font-size: 18px;
}

.modal-buttons {
  text-align: right;
}

.modal-buttons button {
  margin-left: 10px;
  padding: 8px 16px;
  font-size: 16px;
}
</style>