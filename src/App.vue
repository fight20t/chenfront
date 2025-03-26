<template>
  <div class="container">
    <SearchBar @on-search="handleSearch" />
    <ProductList :products="products" />
    <Pagination 
      :currentPage="page" 
      :totalPages="totalPages" 
      @page-change="handlePageChange" 
    />
  </div>
</template>

<script>
import axios from 'axios'
import SearchBar from './components/SearchBar.vue'
import ProductList from './components/ProductList.vue'
import Pagination from './components/Pagination.vue'

export default {
  name: 'App',
  components: {
    SearchBar,
    ProductList,
    Pagination
  },
  data() {
    return {
      products: [],
      keyword: '',
      page: 1,
      totalPages: 1
    }
  },
  watch: {
    keyword() {
      this.fetchProducts()
    },
    page() {
      this.fetchProducts()
    }
  },
  methods: {
    handleSearch(newKeyword) {
      this.keyword = newKeyword
      this.page = 1 // 搜索时重置页码
    },
    handlePageChange(newPage) {
      this.page = newPage
    },
    fetchProducts() {
      // 请根据你的后端 API 接口修改 URL
      axios.get(`/api/products?keyword=${this.keyword}&page=${this.page}`)
      .then(response => {
        this.products = response.data.products
        this.totalPages = response.data.totalPages
      })
      .catch(error => {
        console.error('获取商品数据失败:', error)
      })
    }
  },
  mounted() {
    this.fetchProducts()
  }
}
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}
</style>