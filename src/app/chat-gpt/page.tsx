'use client';

import { useRouter } from 'next/navigation';
import Head from 'next/head';

//clerk
import { useAuth } from '@clerk/nextjs';
//mui
import Box from '@mui/material/Box';
//hook
import useWindowDimensions from '../../helper/utils/useWindowDimentions';
//loading ui
import LoadingBall from '../../components/elements/loaders/LoadingBall';
import Header from '@/components/layouts/loaders/Header';
import FloatHeader from '@/components/layouts/FloatHeader';

export default function Index() {
  const { isLoaded, userId } = useAuth();
  const router = useRouter();
  const { height } = useWindowDimensions();
  // In case the user signs out while on the page.
  if (!isLoaded) {
    return (
      <>
        <Head>
          <title>درحال اعتبار سنجی...</title>
          <meta
            name="description"
            content="فناوری پیشرفته شبکه عصبی ما درک پردازش زبان طبیعی (NLP) و ورودی‌های پیش‌بینی‌ای را دارد که به شما امکان چت بی‌وقفه با ربات‌های چت جنی خودمان را می‌دهد و باعث می‌شود که آن‌ها مثل انسان‌های واقعی عمل کنند. این اینترفیس چت نوین می‌تواند در پاسخ به پرسش‌های روزمره شما کمک کرده و حتی شخصیت‌هایی مانند سیاستمداران، مشاهیر و بسیاری دیگر را شبیه‌سازی کند."
          />
        </Head>
        <Header />
        <Box
          sx={{
            height: height ? `${height}px` : '100dvh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <LoadingBall />
        </Box>
      </>
    );
  } else if (isLoaded && !userId) {
    router.push('/sign-in');
  } else {
    return (
      <>
        <Head>
          <title>تجربه چت نوین با استفاده از فناوری GPT | OpenAI</title>
          <meta
            name="description"
            content="فناوری پیشرفته شبکه عصبی ما درک پردازش زبان طبیعی (NLP) و ورودی‌های پیش‌بینی‌ای را دارد که به شما امکان چت بی‌وقفه با ربات‌های چت جنی خودمان را می‌دهد و باعث می‌شود که آن‌ها مثل انسان‌های واقعی عمل کنند. این اینترفیس چت نوین می‌تواند در پاسخ به پرسش‌های روزمره شما کمک کرده و حتی شخصیت‌هایی مانند سیاستمداران، مشاهیر و بسیاری دیگر را شبیه‌سازی کند."
          />
        </Head>
        <FloatHeader />
        <iframe
          src="https://sleepy-einstein-dg9urq1wb.iran.liara.run/chat-gpt"
          style={{
            border: 'none',
            width: '100%',
            height: height ? `${height}px` : '100%',
            minHeight: '100dvh',
            position: 'relative',
            zIndex: 10,
          }}
          allow="clipboard-read; clipboard-write"
          seamless={true}
        >
          chat gpt
        </iframe>
      </>
    );
  }
}
