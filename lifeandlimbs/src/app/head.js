export default function Head() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://lifeandlimbs-website.vercel.app';
  const title = 'Shani- Prosthetic Limbs for Those in Need | India';
  const description = 'Life and Limb is a non-profit organization that provides free, high-quality prosthetic limbs to those in need across India. Empowering mobility, restoring lives since 2013.';
  const image = `${siteUrl}/images/our-mission-img_0Z5ajpX.webp`;

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="free prosthetic limbs, prosthetics charity, amputee support, mobility restoration" />
      <link rel="canonical" href={siteUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:site_name" content="Life and Limb" />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content="Life and Limb - Empowering mobility" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </>
  );
}
