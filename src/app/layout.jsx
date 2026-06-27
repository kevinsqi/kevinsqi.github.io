import '@fontsource/inter/300.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/work-sans/400.css';
import '@fontsource/work-sans/500.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/Layout/index.css';

import ServiceWorkerCleanup from '../components/ServiceWorkerCleanup';
import { SITE } from '../lib/site';

export const metadata = {
  metadataBase: new URL(SITE.siteUrl),
  title: {
    default: SITE.title,
    template: `%s | ${SITE.title}`,
  },
  description: SITE.description,
  authors: [{ name: SITE.author }],
  openGraph: {
    title: SITE.title,
    description: SITE.description,
    url: SITE.siteUrl,
    siteName: SITE.title,
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: SITE.title,
    description: SITE.description,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-cream min-height-100vh">
        <ServiceWorkerCleanup />
        {children}
      </body>
    </html>
  );
}
