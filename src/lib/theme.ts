import { writable } from 'svelte/store'

type Theme = {
	textColor: 'dark' | 'light'
}

export const theme = writable<Theme>({
	textColor: 'dark',
})
