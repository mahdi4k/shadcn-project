// i18n/navigation.ts
import { createNavigation } from 'next-intl/navigation';
import { routing } from './routing';

export const {
  getPathname,  // ✅ This version accepts `params`
  useRouter,
  usePathname,
  Link,
  redirect
} = createNavigation(routing);
