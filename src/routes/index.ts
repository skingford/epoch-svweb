import type { AsyncSvelteComponent } from 'svelte-spa-router'
import { wrap } from 'svelte-spa-router/wrap'


export const routes = {
  '/': wrap({
    asyncComponent: (() => import('@/pages/login/index.svelte')) as unknown as AsyncSvelteComponent,
    userData: { title: 'Login' }
  }),
  '/home': wrap({
    asyncComponent: (() => import('@/pages/home/index.svelte')) as unknown as AsyncSvelteComponent,
    userData: { title: 'Home' }
  }),
  '*': wrap({
    asyncComponent: (() => import('@/pages/exception/NotFound.svelte')) as unknown as AsyncSvelteComponent,
    userData: { title: '404' }
  }),
}

