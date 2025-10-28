import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";

import ProductCard from "./components/productCard.jsx";
import Filter from "./components/FilterSection/index.jsx";
import SortSection from "./components/sortSection.jsx";
import LoaderCard from "./components/LoaderCard/index.jsx";

const API_URL = "https://api.arshamelectronicm.com/products";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(API_URL);
        if (!res.ok) {
          throw new Error(
            `خطا در دریافت داده‌ها: ${res.status} ${res.statusText}`
          );
        }
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(12, 1fr)",
        gap: 2,
        margin: "30px 5px",
        direction: "rtl",
      }}
    >
      {/* بخش فیلتر */}
      <Filter />

      <Box sx={{ gridColumn: "span 9" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          {/* بخش مرتب‌سازی */}
          <SortSection />

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: 2,
              direction: "rtl",
            }}
          >
            {loading ? (
              Array.from({ length: 6 }).map((_, idx) => (
                <LoaderCard key={idx} />
              ))
            ) : error ? (
              <Typography color="error" variant="body1">
                {error}
              </Typography>
            ) : products.length > 0 ? (
              products.map((item, index) => (
                <ProductCard key={item.id || index} item={item} />
              ))
            ) : (
              <Typography variant="body1">محصولی یافت نشد.</Typography>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
