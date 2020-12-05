<template>
    <div class="columns is-multiline p-1">
        <div class="column is-12">
            <div class="column is-2 p-2 showcase-title">
                Vitrin Urunleri
            </div>
        </div>
        <div class="column is-3" v-for="(item, i) of items" :key="i">
            <a href="/ProductPage">
                <div class="columns is-multiline carditem">
                    <div class="column is-12">
                        <img :src="require('@/assets/products/' + item.img)" />
                    </div>
                    <div class="column is-12">
                        <div class="column is-12 cardbox">{{ item.title }}</div>
                        <div class="column is-12 cardprice">{{ item.price }} TL <span class="kdv"> + KDV</span></div>
                        <div @click="cartmodalActive = true" class="column is-12 cardadd">
                            <img src="@/assets/sidebar/plus_passive.png" />Sepete Ekle
                        </div>
                    </div>
                </div>
            </a>
        </div>
        <b-modal v-model="cartmodalActive" has-modal-card trap-focus :destroy-on-hide="false" aria-role="dialog" aria-modal>
            <CartModal />
        </b-modal>
    </div>
</template>

<script>
import CartModal from "@/components/Cart/CartModal.vue";

export default {
    name: "ShowcaseMain",
    components: {
        CartModal,
    },
    data() {
        return {
            cartmodalActive: false,
            items: [],
        };
    },
    created() {
        this.$store.dispatch("fillProducts");
        this.items = this.$store.getters.getProducts;
    },
};
</script>

<style>
.showcase-title {
    color: #0aa2ee;
    font-size: 18px;
    text-align: center;
    border-bottom: 2px solid #0aa2ee;
}
.carditem {
    margin: 1px;
    text-align: center;
}
.carditem img {
    height: 220px;
    width: auto;
}
.carditem:hover {
    border: 1px solid #0aa2ee;
}
.cardbox {
    height: 57px;
    background-color: #fafafa;
    font-size: 16px;
    color: #021e2c;
    overflow: hidden;
    text-overflow: ellipsis;
}
.cardprice {
    height: 30px;
    background-color: #fafafa;
    font-size: 21px;
    color: #018cd1;
    font-weight: 700;
}
.kdv {
    font-size: 17px;
    font-weight: 700;
    color: #023650;
}
.cardadd {
    height: 35px;
    line-height: 35px;
    background-color: #fafafa;
    text-transform: uppercase;
    color: #0aa2ee;
    font-size: 16px;
    font-weight: 700;
    border-top: 2px solid #0aa2ee;
}
.cardadd img {
    margin-right: 2px;
    height: 16px;
    width: 16px;
    vertical-align: text-top;
}
.carditem:hover .cardadd {
    color: #fff;
    background-color: #0aa2ee;
}
</style>
