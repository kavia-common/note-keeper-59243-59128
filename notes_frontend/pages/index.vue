<template>
  <section>
    <div class="flex items-center justify-between mb-6">
      <h1 class="text-xl font-bold">All Notes</h1>
      <NuxtLink class="btn btn-primary" to="/notes/new">+ New Note</NuxtLink>
    </div>

    <div v-if="pending" class="card">Loading notes...</div>
    <div v-else>
      <div v-if="errorMsg" class="card" style="border-color:#dc2626;color:#dc2626">
        {{ errorMsg }}
      </div>

      <div v-if="notes.length === 0" class="card">
        <p>No notes yet. Create your first one!</p>
      </div>

      <div v-else class="list">
        <article v-for="n in notes" :key="n.id" class="card note-item">
          <div class="flex items-center justify-between">
            <h2 class="font-bold" style="margin:0">{{ n.title || '(Untitled)' }}</h2>
            <span class="badge">#{{ n.id }}</span>
          </div>
          <p class="text-gray-700" style="white-space:pre-line;max-height:6rem;overflow:hidden">{{ n.content }}</p>
          <div class="flex items-center gap-2">
            <NuxtLink class="btn btn-outline" :to="`/notes/${n.id}`">View</NuxtLink>
            <NuxtLink class="btn btn-outline" :to="`/notes/${n.id}/edit`">Edit</NuxtLink>
            <button class="btn btn-danger" @click="onDelete(n.id)" :disabled="deletingId === n.id">
              <span v-if="deletingId === n.id">Deleting...</span>
              <span v-else>Delete</span>
            </button>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Note } from '~/composables/useNotesApi';
const api = useNotesApi();

const notes = ref<Note[]>([]);
const pending = ref(true);
const deletingId = ref<string | null>(null);
const errorMsg = ref('');

async function load() {
  pending.value = true;
  errorMsg.value = '';
  try {
    notes.value = await api.listNotes();
  } catch (e: any) {
    errorMsg.value = e?.message || 'Failed to load notes.';
  } finally {
    pending.value = false;
  }
}

async function onDelete(id: string) {
  if (!confirm('Delete this note? This action cannot be undone.')) return;
  deletingId.value = id;
  try {
    await api.deleteNote(id);
    notes.value = notes.value.filter(n => n.id !== id);
  } catch (e: any) {
    alert(e?.message || 'Failed to delete note.');
  } finally {
    deletingId.value = null;
  }
}

onMounted(load);
</script>
