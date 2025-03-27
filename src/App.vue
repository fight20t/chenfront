<template>
  <div class="container">
    <SearchBar @on-search="handleSearch" />
    <ProductList :products="products" />
    <!-- 显示当前页码 -->
    <div class="page-info">
      <span>当前页码：{{ page }}</span>
    </div>
    
    <!-- 显示每页显示数量 -->
    <div class="limit-info">
      <span>每页显示数量：{{ limit }}</span>
    </div>
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
      // 用模拟数据填充 products 数组
      products: [
        {
          id: 1,
          name: "示例商品 1",
          description: "这是一个示例商品。",
          price: 99.9,
          imageUrl: "https://tse4-mm.cn.bing.net/th/id/OIP-C.Uml0Hq_D3cM1W7_C_2ptWwHaJ4?rs=1&pid=ImgDetMain"
        },
        {
          id: 2,
          name: "示例商品 2",
          description: "这是另一个示例商品。",
          price: 149.9,
          imageUrl: "https://imgservice.suning.cn/uimg1/b2c/image/_g6Xm7MgaE0Hbn5zC_rnCw.png"
        }
      ],
      keyword: '',
      page: 1,
      totalPages: 1,
      limit: 10  // 每页显示数量，默认值为 10
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
          axios.get('/api/products', {
      params: {
        keyword: this.keyword, // 搜索关键字（若为空则传空字符串或不传）
        page: this.page,       // 当前页码
        limit: this.limit      // 每页显示数量
      },
      headers: {
         Authorization: process.env.VUE_APP_AUTH_TOKEN
      }
    })
    .then(response => {
      // 请求成功后的处理逻辑
      this.products = response.data.data.results;
      // 根据返回的数据格式获取总条数或总页数
    })
    .catch(error => {
      console.error('获取商品数据失败:', error);
    });   


      
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