import { useRouter } from 'next/router';
import { useAuth } from '@clerk/nextjs';
import Box from '@mui/material/Box';
import LoadingBall from '../../components/elements/loaders/LoadingBall';
import Head from 'next/head';
import useWindowDimensions from '../../helper/utils/useWindowDimentions';

export default function index() {
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
        {/* <Box sx={{ width: '100%', minHeight: '100dvh' }}> */}
        <iframe
          src="https://sleepy-einstein-dg9urq1wb.liara.run/chat-gpt"
          style={{
            border: 'none',
            width: '100%',
            height: height ? `${height}px` : '100%',
            minHeight: '100dvh',
            position: 'relative',
            zIndex: 10,
          }}
          seamless="seamless"
        >
          chat gpt
        </iframe>
        {/* </Box> */}
      </>
    );
  }
}
