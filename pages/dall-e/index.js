import { useRouter } from 'next/router';
import { useAuth } from '@clerk/nextjs';
import Box from '@mui/material/Box';
import LoadingBall from '../../components/elements/loaders/LoadingBall';
import Head from 'next/head';

export default function index() {
  const { isLoaded, userId } = useAuth();
  const router = useRouter();
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
            height: '100dvh',
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
          <title>خلق تصاویر با استفاده از هوش مصنوعی DALL.E | OpenAI</title>
          <meta
            name="description"
            content="پلتفرم جدید برای خلق تصاویر و اشیاء با استفاده از هوش مصنوعی - نوآوری به دنیای خلق تصاویر آمده است. این فناوری قدرتمند، قادر است تصاویر و اشیاء متنوعی را خلق نماید، از جمله جانوران، رویدادها، مناظر طبیعی و مواد غذایی. با استفاده از رابط کاربری ساده دالی، می‌توانید اشیاء و تصاویر دلخواه خود را ایجاد کنید و نتیجه‌ی خلق شده از طریق ایمیل شما در اختیار شما قرار می‌گیرد."
          />
        </Head>
        <Box sx={{ width: '100%', minHeight: '100dvh' }}>
          <iframe
            src="https://sleepy-einstein-dg9urq1wb.iran.liara.run/dall-e"
            style={{
              border: 'none',
              width: '100%',
              height: '100%',
              minHeight: '100dvh',
            }}
            seamless="seamless"
          >
            dall e
          </iframe>
        </Box>
      </>
    );
  }
}
