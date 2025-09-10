<template>
  <section class="max-w-2xl mx-auto">
    <h1 class="text-xl font-bold mb-4">Create Note</h1>

    <form class="card" @submit.prevent="onSubmit">
      <div class="mb-4">
        <label class="label" for="title">Title</label>
        <input id="title" v-model="title" type="text" class="input" placeholder="Note title" required />
      </div>

      <div class="mb-4">
        <label class="label" for="content">Content</label>
        <textarea id="content" v-model="content" class="textarea" placeholder="Write your note..." required />
      </div>

      <div class="flex items-center gap-2">
        <button class="btn btn-primary" type="submit" :disabled="submitting">
          <span v-if="submitting">Creating...</span>
          <span v-else>Create</span>
        </button>
        <NuxtLink class="btn btn-outline" to="/">Cancel</NuxtLink>
      </div>
      <p v-if="errorMsg" class="helper" style="color:#dc2626">{{ errorMsg }}</p>
    </form>
  </section>
</template>

<script setup lang="ts">
const api = useNotesApi();
const router = useRouter();

const title = ref('');
const content = ref('');
const submitting = ref(false);
const errorMsg = ref('');

async function onSubmit() {
  submitting.value = true;
  errorMsg.value = '';
  try {
    const note = await api.createNote({ title: title.value.trim(), content: content.value.trim() });
    router.push(`/notes/${note.id}`);
  } catch (e: any) {
    errorMsg.value = e?.message || 'Failed to create note.';
  } finally {
    submitting.value = false;
  }
}
</script>

<style scoped>
.mb-4{margin-bottom:1rem}
</style>
