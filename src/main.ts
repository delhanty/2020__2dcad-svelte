import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: '2D CAD implemented in Svelte'
	}
});

export default app;
