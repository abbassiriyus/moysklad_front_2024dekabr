/** @type {import('next-sitemap').IConfig} */
const axios = require("axios");

module.exports = {
  siteUrl: "https://rce.uz",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: "weekly",
  priority: 0.8,

  additionalPaths: async () => {
    // Statik sahifalar
    const staticPages = [
      {
        loc: "/bizhaqimizada",
        changefreq: "weekly",
        priority: 0.8,
        lastmod: new Date().toISOString(),
      },
      {
        loc: "/contact",
        changefreq: "weekly",
        priority: 0.8,
        lastmod: new Date().toISOString(),
      },
      {
        loc: "/storage",
        changefreq: "weekly",
        priority: 0.8,
        lastmod: new Date().toISOString(),
      },
    ];

    // Cataloglarni olish
    const catalogRes = await axios.get("https://api.rce.uz/api/category/all");
    const catalogs = catalogRes.data || [];

    const catalogPaths = catalogs.map((cat) => ({
      loc: `/catalog/${cat.id}`, // id orqali
      changefreq: "weekly",
      priority: 0.8,
      lastmod: new Date().toISOString(),
    }));

    // Productlarni olish (har bir catalog bo‘yicha)
    let productPaths = [];
    for (const cat of catalogs) {
      try {
        const prodRes = await axios.get(
          `https://api.rce.uz/api/category/product/${cat.id}?limit=100`
        );
        const products = prodRes.data || [];

        const oneCatProducts = products.map((prod) => ({
          loc: `/oneproduct/${prod.id}`, // id orqali
          changefreq: "weekly",
          priority: 0.7,
          lastmod: new Date().toISOString(),
        }));

        productPaths = [...productPaths, ...oneCatProducts];
      } catch (err) {
        console.error(`Productlarni olishda xatolik: ${cat.id}`, err.message);
      }
    }

    return [...staticPages, ...catalogPaths, ...productPaths];
  },

  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
};
