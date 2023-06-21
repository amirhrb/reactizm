import { getPostBySlug } from '@/helper/Contentful/queries';
import Image from 'next/image';
import { ImageResponse } from 'next/server';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

// Image generation
export default async function Icon({ params }: { params: { slug: string } }) {
  const res: any = await getPostBySlug(params.slug);
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          alignContent: 'center',
          justifyContent: 'space-evenly',
        }}
      >
        <h1
          style={{
            fontWeight: '700',
            fontSize: '1.5rem',
            lineHeight: '2rem',
            marginTop: '0.5rem',
          }}
        >
          {res.items[0].fields.title}
        </h1>
        <Image
          src={'https:' + res.items[0].fields.ogImage.fields.file.url}
          alt=""
          style={{
            borderRadius: 28,
            objectFit: 'cover',
            width: '440px',
            height: '440px',
          }}
        />
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported icons size metadata
      // config to also set the ImageResponse's width and height.
      ...size,
    }
  );
}
