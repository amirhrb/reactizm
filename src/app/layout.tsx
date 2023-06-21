import Layout from '@/components/layouts';
import './globals.css';
import Providers from '@/components/providers/Providers';

//font
import { yekan } from '@/public/fonts/yekan';
import { Metadata } from 'next';
import ConsoleComponent from '@/helper/utils/ConsoleComponent';

export const metadata: Metadata = {
  title: 'آموزش نکات برنامه نویسی|Reactizm',
  description: 'سایت آموزش برنامه نویسی و طراحی سایت ری‌اکتیزم',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body className={yekan.className}>
        <Providers>
          <Layout>{children}</Layout>

          <ConsoleComponent />
        </Providers>
      </body>
    </html>
  );
}
