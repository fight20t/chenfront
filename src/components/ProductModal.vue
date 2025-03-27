<template>
  <div class="modal-overlay" @click.self="close">
    <div class="modal-content">
      <!-- 左侧图片区 -->
      <div class="modal-image">
        <img :src="product.imageUrl" alt="Product Image" />
      </div>
      <!-- 右侧详情区 -->
      <div class="modal-details">
        <div class="name-price-container">
          <div class="detail-row header-row">
            <span class="detail-name">Name: {{ product.name }}</span>
            <span class="detail-price">￥: {{ product.price }}</span>
          </div>
        </div>
        <div class="description-container">
          <div class="detail-row description-row">
            <span>产品介绍:</span>
            <p>{{ product.description }}</p>
          </div>
        </div>
        <div class="button-box">
          <div class="button-left" @click="buyNow">Buy Now</div>
          <div class="button-right" @click="addToCart">Add to Cart</div>
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
    },
  },
  methods: {
    close() {
      this.$emit("close");
    },
    buyNow() {
      // 产品购买逻辑，此处仅提示示例
      alert("Buy Now clicked!");
    },
    addToCart() {
      // 添加购物车逻辑，此处仅提示示例
      alert("Add to Cart clicked!");
    },
  },
};
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

/* 具体界面位置及尺寸按照要求调整 */
.modal-content {
  position: absolute;
  left: 147px;
  top: 141px;
  width: 1160px;
  height: 753px;
  background-color: #fff;
  display: flex;
  box-shadow: 0 2px 10px rgba(0,0,0,0.3);
  border-radius: 8px;
  opacity: 1;
  overflow: hidden;
}

/* 左侧图片区 */
.modal-image {
  position: absolute;
  left: 87px;
  top: 94px;
  right: 753px;
  bottom: 306px;
}

.modal-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* 右侧详情区 */
.modal-details {
  width: 60%;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.name-price-container {
  position: absolute;
  left: 438px;
  top: 108px;
  right: 124px;
  bottom: 510px;
  border: none; 
  padding: 10px; 
}

.description-container {
  position: absolute;
  left: 385px;
  top: 190px;
  right: 111px;
  bottom: 403px;
  border: none; 
  padding: 10px; 
}

.detail-row {
  margin-bottom: 20px;
}

.header-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 22px;
  font-weight: bold;
  color: #333;
}

.description-row {
  flex-grow: 1;
  font-size: 18px;
  color: #666;
  line-height: 1.5;
}

.description-row span,
.description-row p {
  color: gray;
}

.button-box {
  position: absolute;
  left: 128px;
  right: 169px;
  top: 583px;
  bottom: 87px;
  width: 863px;
  height: 83px;
  border: 1px solid #ccc; /* 可根据需要调整边框样式 */
  display: flex;
}

.button-left,
.button-right {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.button-row {
  text-align: right;
}

.button-row button {
  padding: 10px 20px;
  font-size: 18px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 15px;
  transition: background-color 0.3s;
}

.btn-buy {
  background-color: #ff6b6b;
  color: #fff;
}

.btn-buy:hover {
  background-color: #ff5252;
}

.btn-cart {
  background-color: #4caf50;
  color: #fff;
}

.btn-cart:hover {
  background-color: #43a047;
}
</style>    