import { Helmet } from "react-helmet-async";

type SeoProps = {
  title: string;
  description: string;
  og_title?: string;
  og_desc?: string;
  keywords?: string;
  canonical?: string;
  image?: string;

};

export default function Seo({
  title,
  description,
  og_title,
  og_desc,
  keywords,
  canonical,
  image,
}: SeoProps) {
  const url =
    canonical ||
    (typeof window !== "undefined"
      ? window.location.origin + window.location.pathname
      : "");

  const ogImage =
    image || "https://exhibitionstandsuae.ae/images/og-default.jpg"; // fallback image

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {url && <link rel="canonical" href={url} />}

      {/* Open Graph / Facebook / LinkedIn */}
      <meta property="og:title" content={og_title || title} />
      <meta property="og:description" content={og_desc || description} />
      <meta property="og:type" content="website" />
      {url && <meta property="og:url" content={url} />}
      <meta property="og:image" content={ogImage} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />


    </Helmet>
  );
}
