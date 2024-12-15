import { ref } from 'vue';
import { defineStore } from 'pinia';
import { UserStore, UserPopupPayload as UPP } from './user.interface';
import { defaultPopup, mss } from './defaults';
import { useRouter } from 'vue-router';

export const useUserStore = defineStore('user', (): UserStore => {
  /**
   * @implements states
   */
  const isCompleted = ref();
  const loading = ref(true);
  const popup = ref(defaultPopup());
  const router = useRouter();
  /**
   * @implements helpers
   */
  function toggleFilter() {
    switch (isCompleted.value) {
      case true:
        isCompleted.value = false;
        break;
      case false:
        isCompleted.value = undefined;
        break;
      case undefined:
        isCompleted.value = true;
        break;
    }
    updateRouter();
  }

  function updateRouter() {
    const query: any = {};
    if (isCompleted.value !== undefined) {
      query.completed = isCompleted.value;
    }
    router.replace({ ...router.currentRoute, query });
  }

  function toggleLoading(state: boolean) {
    loading.value = state;
  }

  function noScroll(state: boolean) {
    document.body.style.overflow = state ? 'hidden' : '';
  }

  /**
   * @implements popups
   */
  function showPopup({ type }: UPP) {
    popup.value.active = true;
    popup.value.type = type!;
    setTimeout(() => {
      popup.value.show = true;
      noScroll(true);
    }, mss);
  }

  function hidePopup() {
    popup.value.show = false;
    setTimeout(() => {
      popup.value.active = false;
      noScroll(false);
    }, mss);
  }

  function togglePopup(pay: UPP) {
    const { state, type } = pay;
    if (state && !!type) {
      showPopup(pay);
    } else {
      hidePopup();
    }
  }

  function preload() {
    try {
      const state = router.currentRoute.value.query['completed'];
      const bool = JSON.parse(state as string);
      if (state !== undefined) {
        isCompleted.value = bool;
      }
    } catch (e) {
      void e;
    }
  }

  return {
    isCompleted,
    loading,
    popup,
    toggleFilter,
    toggleLoading,
    togglePopup,
    updateRouter,
    preload,
  };
});
