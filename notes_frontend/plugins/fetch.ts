export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('app:created', () => {
    // Hook into fetch errors for basic logging; real apps can add Sentry here.
    onResponseError((ctx) => {
      // eslint-disable-next-line no-console
      console.error('API Error:', ctx.response?.status, ctx.response?.statusText, ctx.response?._data);
    });
  });
});
