<template>
  <div>
    <ClientOnly>
      <div />
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
// Redirect /notes to home listing
const router = useRouter();
onMounted(() => {
  router.replace('/');
});
</script>
