<script lang="ts">
	import { page } from '$app/stores';

	type Lang = 'en' | 'es' | 'fr' | 'pt';
	type Greeting = {
		en: string;
		es: string;
		fr: string;
		pt: string;
	};

	const greetings: Greeting = {
		en: 'Hello',
		es: 'Hola',
		fr: 'Bonjour',
		pt: 'Olá'
	};

	const { lang = 'en' } = $page.params;
	console.log(lang);

	const greeting = greetings[lang as Lang] ?? greetings['en'];
	console.log(greeting);
</script>

<h1>Lang Page</h1>
<h2>{greeting}</h2>
