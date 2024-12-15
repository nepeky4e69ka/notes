/// <reference types="vite/client" />

/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

import { Route, Router } from 'vue-router'
declare module 'vue' {
  interface ComponentCustomOptions {
    beforeRouteEnter?(to: Route, from: Route, next: () => void): void
  }
}

import 'pinia'
import { Repository } from '@/utils'
declare module 'pinia' {
  export interface PiniaCustomProperties {
    api: Repository
    router: Router
  }
}

interface ImportMetaEnv extends Readonly<Record<string, string>> {
  readonly VITE_APP_TITLE: string
  readonly VITE_API_URL: string
}

export interface ImportMeta {
  readonly env: ImportMetaEnv
}