<template>
  <div class="min-h-screen bg-gray-100 text-gray-900">
    <NuxtRouteAnnouncer />

    <header class="bg-indigo-600 text-white">
      <nav class="container mx-auto px-4 py-4 flex items-center justify-between">
        <div class="flex items-center gap-3">
          <span class="text-xl font-bold">Note Keeper</span>
        </div>
        <div class="flex items-center gap-4">
          <NuxtLink to="/" class="hover:underline">Home</NuxtLink>
          <NuxtLink to="/notes/new" class="inline-flex items-center px-3 py-1 rounded bg-white text-indigo-700 font-medium hover:bg-indigo-50">
            + New Note
          </NuxtLink>
        </div>
      </nav>
    </header>

    <main class="container mx-auto px-4 py-8">
      <NuxtPage />
    </main>

    <footer class="container mx-auto px-4 py-6 text-sm text-gray-500">
      Built with Nuxt 3
    </footer>
  </div>
</template>

<script setup lang="ts">
/**
 * Root application shell holds header, main content (NuxtPage) and footer.
 * Styling is basic utility CSS (defined in assets/css/tailwind-lite.css).
 */
</script>

<style>
/* Minimal utility-style CSS for decent UX without external deps */
:root {
  --indigo-50:#eef2ff; --indigo-600:#4f46e5; --indigo-700:#4338ca;
  --gray-50:#f9fafb; --gray-100:#f3f4f6; --gray-200:#e5e7eb; --gray-300:#d1d5db; --gray-500:#6b7280; --gray-700:#374151; --gray-900:#111827;
  --white:#ffffff; --red-600:#dc2626; --green-600:#16a34a; --yellow-600:#ca8a04;
}
*{box-sizing:border-box}
html,body,#__nuxt{height:100%}
body{margin:0;font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif}
.container{max-width:960px}
.bg-gray-100{background:var(--gray-100)}
.text-gray-900{color:var(--gray-900)}
.bg-indigo-600{background:var(--indigo-600)}
.text-white{color:var(--white)}
.text-indigo-700{color:var(--indigo-700)}
.bg-white{background:var(--white)}
.bg-indigo-50{background:var(--indigo-50)}
.hover\:bg-indigo-50:hover{background:var(--indigo-50)}
.hover\:underline:hover{text-decoration:underline}
.font-bold{font-weight:700}
.font-medium{font-weight:500}
.text-xl{font-size:1.25rem;line-height:1.75rem}
.text-sm{font-size:.875rem}
.container{margin-left:auto;margin-right:auto}
.mx-auto{margin-left:auto;margin-right:auto}
.px-4{padding-left:1rem;padding-right:1rem}
.py-4{padding-top:1rem;padding-bottom:1rem}
.py-6{padding-top:1.5rem;padding-bottom:1.5rem}
.py-8{padding-top:2rem;padding-bottom:2rem}
.min-h-screen{min-height:100vh}
.flex{display:flex}
.items-center{align-items:center}
.justify-between{justify-content:space-between}
.gap-3{gap:.75rem}
.gap-4{gap:1rem}
.inline-flex{display:inline-flex}
.px-3{padding-left:.75rem;padding-right:.75rem}
.py-1{padding-top:.25rem;padding-bottom:.25rem}
.rounded{border-radius:.375rem}
.rounded-md{border-radius:.5rem}
.rounded-lg{border-radius:.75rem}
.shadow{box-shadow:0 1px 3px rgba(0,0,0,.1)}
.border{border:1px solid var(--gray-200)}
.border-gray-200{border-color:var(--gray-200)}
.border-gray-300{border-color:var(--gray-300)}
.text-gray-500{color:var(--gray-500)}
.text-gray-700{color:var(--gray-700)}
.bg-gray-50{background:var(--gray-50)}
button{cursor:pointer}
a{color:inherit;text-decoration:none}
.card{background:var(--white);border:1px solid var(--gray-200);border-radius:.5rem;padding:1rem}
.btn{display:inline-flex;align-items:center;gap:.375rem;padding:.375rem .75rem;border-radius:.375rem;border:1px solid transparent}
.btn-primary{background:var(--indigo-600);color:var(--white)}
.btn-outline{background:var(--white);border-color:var(--gray-300);color:var(--gray-700)}
.btn-danger{background:var(--red-600);color:var(--white)}
.btn-warning{background:var(--yellow-600);color:var(--white)}
.btn-success{background:var(--green-600);color:var(--white)}
.input, .textarea{width:100%;border:1px solid var(--gray-300);border-radius:.5rem;padding:.5rem .75rem;background:var(--white)}
.textarea{min-height:160px;resize:vertical}
.label{display:block;margin-bottom:.5rem;font-weight:600}
.helper{font-size:.875rem;color:var(--gray-500)}
.list{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:1rem}
.note-item{display:flex;flex-direction:column;gap:.5rem}
.badge{font-size:.75rem;padding:.125rem .375rem;border-radius:.25rem;background:var(--gray-50);border:1px solid var(--gray-200);color:var(--gray-700)}
hr{border:0;border-top:1px solid var(--gray-200);margin:1rem 0}
</style>
