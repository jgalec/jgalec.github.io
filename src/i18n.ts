export const paths = {
	es: {
		home: '/',
		projects: '/proyectos',
		experience: '/experiencia',
		contact: '/contacto',
	},
	en: {
		home: '/en/',
		projects: '/en/projects',
		experience: '/en/experience',
		contact: '/en/contact',
	},
} as const;

export type Locale = keyof typeof paths;
export type Page = keyof (typeof paths)['es'];

export function getLocale(locale: string | undefined): Locale {
	return locale === 'en' ? 'en' : 'es';
}
