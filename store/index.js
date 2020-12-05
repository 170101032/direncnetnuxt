import * as api from "@/store/api.js";

export const state = () => ({
  carousel: [],
  sidebar: [],
  products: [],
  cart: [],
  productDetails: {
    name: null,
    brand: null,
    code: null,
    price: null,
    imgages: [],
    comments: [],
    similarProducts: []
  }
});

export const getters = {
  getCarousel: state => state.carousel,
  getSidebar: state => state.sidebar,
  getProducts: state => state.products,
  getProductDetails: state => state.productDetails,
  getCart: state => state.cart,
};

export const mutations = {
  setCarousel: (state, payload) => (state.carousel = payload),
  setSidebar: (state, payload) => (state.sidebar = payload),
  setProducts: (state, payload) => (state.products = payload),
  setProductDetails: (state, payload) => (state.productDetails = payload),
  setCart: (state, payload) => (state.cart = payload),
};

export const actions = {
  fillCarousel(state) {
    state.commit("setCarousel", api.selectCarousel());
  },
  fillSidebar(state) {
    state.commit("setSidebar", api.selectSidebar());
  },
  fillProducts(state) {
    state.commit("setProducts", api.selectProducts());
  },
  fillProductDetails(state) {
    state.commit("setProductDetails", api.selectProductDetails());
  }
};

/*


this.watch(
        () => state.getters.getMaterialSelected,
        () => state.dispatch("selectMaterial")
      );*/
