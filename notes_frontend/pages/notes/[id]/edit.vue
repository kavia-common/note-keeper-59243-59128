<template>
  <section class="max-w-2xl mx-auto">
    <div class="flex items-center justify-between mb-4">
      <h1 class="text-xl font-bold">Edit Note</h1>
      <NuxtLink class="btn btn-outline" :to="`/notes/${id}`">Back to Note</NuxtLink>
    </div>

    <div v-if="loading" class="card">Loading note...</div>
    <div v-else class="card">
      <form @submit.prevent="onSubmit">
        <div class="mb-4">
          <label class="label" for="title">Title</label>
          <input id="title" v-model="title" type="text" class="input" required />
        </div>

        <div class="mb-4">
          <label class="label" for="content">Content</label>
          <textarea id="content" v-model="content" class="textarea" required />
        </div>

        <div class="flex items-center gap-2">
          <button class="btn btn-primary" type="submit" :disabled="submitting">
            <span v-if="submitting">Saving...</span>
            <span v-else>Save</span>
          </button>
          <NuxtLink class="btn btn-outline" :to="`/notes/${id}`">Cancel</NuxtLink>
        </div>

        <p v-if="errorMsg" class="helper" style="color:#dc2626">{{ errorMsg }}</p>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
const api = useNotesApi();
const route = useRoute();
const router = useRouter();

const id = route.params.id as string;
const title = ref('');
const content = ref('');
const loading = ref(true);
const submitting = ref(false);
const errorMsg = ref('');

async function load() {
  loading.value = true;
  errorMsg.value = '';
  try {
    const n = await api.getNote(id);
    title.value = n.title || '';
    content.value = n.content || '';
  } catch (e: any) {
    errorMsg.value = e?.message || 'Failed to load note.';
  } finally {
    loading.value = false;
  }
}

async function onSubmit() {
  submitting.value = true;
  errorMsg.value = '';
  try {
    await api.updateNote(id, { title: title.value.trim(), content: content.value.trim() });
    router.push(`/notes/${id}`);
  } catch (e: any) {
    errorMsg.value = e?.message || 'Failed to save note.';
  } finally {
    submitting.value = false;
  }
}

onMounted(load);
</script>

<style scoped>
.mb-4{margin-bottom:1rem}
</style>
