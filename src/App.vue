<template>
  <div>
    <div id="page-top">
      <WrapperComponentIndex />

      <ScrollComponent />

      <LogoutComponent />
    </div>
  </div>
</template>

<script>
import ScrollComponent from "./Components/ScrollComponent.vue";
import WrapperComponentIndex from "./components/ContentWrapper/WrapperComponentIndex.vue";
import LogoutComponent from "./Components/LogoutComponent.vue";
export default {
  components: {
    ScrollComponent,
    WrapperComponentIndex,
    LogoutComponent,
  },
};
</script>
