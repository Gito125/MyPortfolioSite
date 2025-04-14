import { Helmet } from 'react-helmet';

function PortfolioMeta() {
  return (
    <Helmet>
      {/* Standard SEO */}
      <title>Gideon Prime | Portfolio</title>
      <meta name="description" content="Gideon is a passionate computer science student and future engineer, crafting powerful web apps and tech solutions. Explore his journey, skills, and projects." />
      <meta name="keywords" content="Gideon, Portfolio, Software Developer, Computer Science, React, Django, Web Developer, Robotics, Engineering" />
      <meta name="author" content="Gideon Prime" />
      <meta name="robots" content="index, follow" />

      {/* Mobile-friendly */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#0F172A" />

      {/* Open Graph */}
      <meta property="og:title" content="Gideon Prime | Full-Stack Developer & Future Engineer" />
      <meta property="og:description" content="Explore the projects, skills, and tech stack of Gideon — a rising star in computer science and engineering." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://iamgideon.vercel.app/" />
      <meta property="og:image" content="https://iamgideon.vercel.app/preview_image.jpeg" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Gideon Prime | Software Engineer & Builder" />
      <meta name="twitter:description" content="Gideon is a bold, driven developer pushing boundaries in tech. Check out his latest work." />
      <meta name="twitter:image" content="https://iamgideon.vercel.app/preview_image.jpeg" />
    </Helmet>
  );
}

export default PortfolioMeta;
