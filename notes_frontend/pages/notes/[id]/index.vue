<template>
  <section class="max-w-3xl mx-auto">
    <div class="flex items-center justify-between mb-4">
      <NuxtLink class="btn btn-outline" to="/">← Back</NuxtLink>
      <div class="flex items-center gap-2">
        <NuxtLink class="btn btn-outline" :to="`/notes/${id}/edit`">Edit</NuxtLink>
        <button class="btn btn-danger" @click="onDelete" :disabled="deleting">
          <span v-if="deleting">Deleting...</span>
          <span v-else>Delete</span>
        </button>
      </div>
    </div>

    <div v-if="loading" class="card">Loading note...</div>
    <article v-else class="card">
      <h1 class="text-xl font-bold" style="margin:0">{{ note?.title || '(Untitled)' }}</h1>
      <p class="helper">ID: <span class="badge">{{ note?.id }}</span></p>
      <hr />
      <div class="text-gray-700" style="white-space:pre-line">{{ note?.content }}</div>
    </article>

    <p v-if="errorMsg" class="helper" style="color:#dc2626">{{ errorMsg }}</p>
  </section>
</template>

<script setup lang="ts">
import type { Note } from '~/composables/useNotesApi';

const api = useNotesApi();
const route = useRoute();
const router = useRouter();

const id = route.params.id as string;
const note = ref<Note | null>(null);
const loading = ref(true);
const errorMsg = ref('');
const deleting = ref(false);

async function load() {
  loading.value = true;
  errorMsg.value = '';
  try {
    note.value = await api.getNote(id);
  } catch (e: any) {
    errorMsg.value = e?.message || 'Failed to load note.';
  } finally {
    loading.value = false;
  }
}

async function onDelete() {
  if (!confirm('Delete this note?')) return;
  deleting.value = true;
  try {
    await api.deleteNote(id);
    router.push('/');
  } catch (e: any) {
    alert(e?.message || 'Failed to delete note.');
  } finally {
    deleting.value = false;
  }
}

onMounted(load);
</script>
