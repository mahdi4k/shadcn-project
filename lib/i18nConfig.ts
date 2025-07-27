export const locales = ['en', 'fa', 'ar'] as const;
export const defaultLocale = 'fa';

export type Locale = (typeof locales)[number];
