<template>
  <div id="app" :class="{'modal-open': isDataSetsPage}">
    <main class="l-main">
      <router-view></router-view>
    </main>
  </div>
</template>

<style></style>

<script>
import BannerComponent from 'components/Banner';

export default {
  name: 'app',
  created() {
    // Actions for hydrating store
    // this.$store.dispatch('setTimeline');
    this.$store.dispatch('getWaterRiskLayers');
    this.$store.dispatch('getWaterBasins');
  },
  mounted() {
    this.bannerVisibility = !sessionStorage.getItem(this.bannerCookie);
  },
  data() {
    return {
      bannerVisibility: true,
      bannerCookie: 'data4sdg-beta',
    };
  },
  computed: {
    location() {
      const computedLocation = {};
      computedLocation.home = this.$route.path === '/';
      computedLocation.map = this.$route.path === '/map';

      return computedLocation;
    },
    isExamplePage() {
      return this.$route.path.startsWith('/examples/');
    },
    isAboutPage() {
      return this.$route.path.startsWith('/about');
    },
    isDataSetsPage() {
      return this.$route.params.dataset;
    }
  },
  methods: {
    hideBanner() {
      sessionStorage.setItem(this.bannerCookie, 'true');
      this.bannerVisibility = false;
    },
  },
  components: {
    BannerComponent,
  },
};

</script>
