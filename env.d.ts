/* eslint-disable */

/// <reference types="vite/client" />
/// <reference types="node" />

// ===== VITE ENVIRONMENT VARIABLES =====
// Define types for import.meta.env environment variables
interface ImportMetaEnv {
  // Vite built-in environment variables
  readonly VITE_APP_TITLE?: string
  readonly VITE_APP_DESCRIPTION?: string
  readonly VITE_APP_VERSION?: string

  // API Configuration
  readonly VITE_API_BASE_URL?: string
  readonly VITE_API_TIMEOUT?: string
  readonly VITE_API_RETRY_ATTEMPTS?: string

  // Authentication & Security
  readonly VITE_AUTH_PROVIDER?: string
  readonly VITE_JWT_SECRET?: string
  readonly VITE_ENCRYPTION_KEY?: string

  // Feature Flags
  readonly VITE_FEATURE_ANALYTICS?: string
  readonly VITE_FEATURE_DEBUG?: string
  readonly VITE_FEATURE_EXPERIMENTAL?: string

  // External Services
  readonly VITE_GOOGLE_ANALYTICS_ID?: string
  readonly VITE_SENTRY_DSN?: string
  readonly VITE_STRIPE_PUBLISHABLE_KEY?: string

  // Environment Configuration
  readonly VITE_BUILD_TIME?: string
  readonly VITE_GIT_COMMIT?: string
  readonly VITE_GIT_BRANCH?: string

  // Development Configuration
  readonly VITE_DEV_SERVER_PORT?: string
  readonly VITE_DEV_SERVER_HOST?: string
  readonly VITE_HMR_PORT?: string

  // Add more environment variables as needed
  [key: `VITE_${string}`]: string | undefined
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

// ===== VUE.JS MODULE DECLARATIONS =====
// Vue Single File Components
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<object, object, any>
  export default component
}

// Vue component with generic props support
declare module '*.vue' {
  import type { ComponentOptions } from 'vue'
  const component: ComponentOptions
  export default component
}

// ===== STYLE MODULE DECLARATIONS =====
// CSS Modules
declare module '*.module.css' {
  const classes: Record<string, string>
  export default classes
}

declare module '*.module.scss' {
  const classes: Record<string, string>
  export default classes
}

declare module '*.module.sass' {
  const classes: Record<string, string>
  export default classes
}

declare module '*.module.less' {
  const classes: Record<string, string>
  export default classes
}

declare module '*.module.styl' {
  const classes: Record<string, string>
  export default classes
}

// Regular CSS files
declare module '*.css' {
  const css: string
  export default css
}

declare module '*.scss' {
  const css: string
  export default css
}

declare module '*.sass' {
  const css: string
  export default css
}

declare module '*.less' {
  const css: string
  export default css
}

declare module '*.styl' {
  const css: string
  export default css
}

// PostCSS files
declare module '*.postcss' {
  const css: string
  export default css
}

// ===== ASSET MODULE DECLARATIONS =====
// Images
declare module '*.png' {
  const src: string
  export default src
}

declare module '*.jpg' {
  const src: string
  export default src
}

declare module '*.jpeg' {
  const src: string
  export default src
}

declare module '*.gif' {
  const src: string
  export default src
}

declare module '*.svg' {
  const src: string
  export default src
}

declare module '*.webp' {
  const src: string
  export default src
}

declare module '*.avif' {
  const src: string
  export default src
}

declare module '*.ico' {
  const src: string
  export default src
}

// Fonts
declare module '*.woff' {
  const src: string
  export default src
}

declare module '*.woff2' {
  const src: string
  export default src
}

declare module '*.eot' {
  const src: string
  export default src
}

declare module '*.ttf' {
  const src: string
  export default src
}

declare module '*.otf' {
  const src: string
  export default src
}

// Audio/Video
declare module '*.mp4' {
  const src: string
  export default src
}

declare module '*.webm' {
  const src: string
  export default src
}

declare module '*.ogg' {
  const src: string
  export default src
}

declare module '*.mp3' {
  const src: string
  export default src
}

declare module '*.wav' {
  const src: string
  export default src
}

declare module '*.flac' {
  const src: string
  export default src
}

declare module '*.aac' {
  const src: string
  export default src
}

// Documents
declare module '*.pdf' {
  const src: string
  export default src
}

// Text files
declare module '*.txt' {
  const src: string
  export default src
}

declare module '*.md' {
  const src: string
  export default src
}

// Data files
declare module '*.json' {
  const value: any
  export default value
}

declare module '*.json5' {
  const value: any
  export default value
}

declare module '*.yaml' {
  const value: any
  export default value
}

declare module '*.yml' {
  const value: any
  export default value
}

declare module '*.toml' {
  const value: any
  export default value
}

// ===== VUE.JS GLOBAL AUGMENTATIONS =====
import 'vue'

declare module 'vue' {
  // Global Properties (accessible via this.$property in components)
  interface ComponentCustomProperties {
    // Add global properties here
    $http?: any // Axios or fetch wrapper
    $router?: any // Vue Router instance
    $route?: any // Current route
    $store?: any // Pinia/Vuex store
    $i18n?: any // Internationalization
    $notify?: any // Notification system
    $modal?: any // Modal system
    $utils?: any // Utility functions
    $api?: any // API client
    $auth?: any // Authentication helper
    $logger?: any // Logging utility
    $config?: any // Application configuration
    $theme?: any // Theme configuration
    $device?: any // Device detection
    $analytics?: any // Analytics tracking
  }

  // Global Components (auto-imported components)
  interface GlobalComponents {
    // Add global component types here
    RouterLink: typeof import('vue-router')['RouterLink']
    RouterView: typeof import('vue-router')['RouterView']

    // Example global components
    // AppButton: typeof import('@/components/AppButton.vue')['default']
    // AppModal: typeof import('@/components/AppModal.vue')['default']
    // AppLoader: typeof import('@/components/AppLoader.vue')['default']
  }

  // Custom Directives
  interface ComponentCustomDirectives {
    // Add custom directive types here
    // vTooltip: typeof import('@/directives/tooltip')['default']
    // vClickOutside: typeof import('@/directives/clickOutside')['default']
    // vLazyLoad: typeof import('@/directives/lazyLoad')['default']
  }
}

// ===== PINIA STORE AUGMENTATION =====
import 'pinia'

declare module 'pinia' {
  export interface PiniaCustomProperties {
    // Add Pinia custom properties here
    $router?: any
    $route?: any
    $api?: any
    $notify?: any
  }
}

// ===== VUE ROUTER AUGMENTATION =====
import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    // Add custom route meta properties here
    title?: string
    description?: string
    requiresAuth?: boolean
    roles?: string[]
    layout?: string
    transition?: string
    keepAlive?: boolean
    showInSidebar?: boolean
    icon?: string
    order?: number
    breadcrumb?: string
    permissions?: string[]
  }
}

// ===== GLOBAL TYPE DEFINITIONS =====
// Application-specific global types
declare global {
  // Window object augmentation
  interface Window {
    // Add global window properties here
    __VUE_DEVTOOLS_GLOBAL_HOOK__?: any
    __INITIAL_STATE__?: any
    dataLayer?: any[]
    gtag?: (...args: any[]) => void
    fbq?: (...args: any[]) => void
    clarity?: (...args: any[]) => void

    // Custom application properties
    APP_CONFIG?: AppConfig
    API_BASE_URL?: string
    BUILD_INFO?: BuildInfo
  }

  // Node.js Process environment
  namespace NodeJS {
    interface ProcessEnv {
      // Server-side environment variables (not exposed to client)
      NODE_ENV: 'development' | 'production' | 'test'
      PORT?: string
      HOST?: string
      DATABASE_URL?: string
      REDIS_URL?: string
      JWT_SECRET?: string
      SMTP_HOST?: string
      SMTP_PORT?: string
      SMTP_USER?: string
      SMTP_PASS?: string
      AWS_ACCESS_KEY_ID?: string
      AWS_SECRET_ACCESS_KEY?: string
      AWS_REGION?: string
      STRIPE_SECRET_KEY?: string
      GOOGLE_CLIENT_ID?: string
      GOOGLE_CLIENT_SECRET?: string
    }
  }

  // Common application types
  interface AppConfig {
    name: string
    version: string
    environment: 'development' | 'staging' | 'production'
    apiBaseUrl: string
    features: Record<string, boolean>
  }

  interface BuildInfo {
    version: string
    buildTime: string
    gitCommit: string
    gitBranch: string
  }

  interface User {
    id: string
    name: string
    email: string
    roles: string[]
    avatar?: string
    preferences?: Record<string, any>
  }

  interface ApiResponse<T = any> {
    success: boolean
    data: T
    message?: string
    error?: string
    meta?: {
      page?: number
      limit?: number
      total?: number
    }
  }

  interface PaginatedResponse<T = any> {
    items: T[]
    total: number
    page: number
    limit: number
    hasNext: boolean
    hasPrev: boolean
  }
}

// ===== UTILITY TYPES =====
// Re-export commonly used utility types
export type {
  App,
  Component,
  ComponentPublicInstance,
  ComputedRef,
  DefineComponent,
  InjectionKey,
  Plugin,
  Ref,
  VNode,
  WatchStopHandle
} from 'vue'

export type {
  RouteLocationNormalized,
  RouteLocationRaw,
  Router,
  NavigationGuard
} from 'vue-router'

// Custom utility types
export type Nullable<T> = T | null
export type Optional<T> = T | undefined
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P]
}

export type ValueOf<T> = T[keyof T]
export type NonEmptyArray<T> = [T, ...T[]]
export type Brand<T, B> = T & { __brand: B }

// ===== CYPRESS SUPPORT =====
// Cypress global types (for E2E testing)
declare global {
  namespace Cypress {
    interface Chainable {
      // Add custom Cypress commands here
      // login(email: string, password: string): Chainable<Element>
      // getBySel(selector: string): Chainable<Element>
      // getBySelLike(selector: string): Chainable<Element>
    }
  }
}

// ===== VITEST SUPPORT =====
// Vitest global types (for unit testing)
import type { vi } from 'vitest'

declare global {
  const vi: typeof import('vitest')['vi']
}
