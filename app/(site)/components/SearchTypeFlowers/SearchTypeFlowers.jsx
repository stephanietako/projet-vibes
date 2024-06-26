"use client";

import { useState } from "react";
// Styles
import styles from "./styles.module.scss";
import { useRouter } from "next/navigation";

export const dynamic = "force-dynamic";

const SearchTypeFlowers = () => {
  const [categoryTypeFilter, setCategoryTypeFilter] = useState("");
  const router = useRouter();

  const handleCategoryTypeChange = (event) => {
    const selectedCategory = event.target.value;
    setCategoryTypeFilter(selectedCategory);
    router.push(`/categories?categoryType=${selectedCategory}`);
  };

  return (
    <div className={styles.section_search_categories}>
      <div className={styles.search_container}>
        <h2>Variétés</h2>
        <label className={styles.__label_search}>
          {" "}
          <p>Selection...</p>
        </label>
        <br />
        <div
          className={styles.search_select_type_flowers}
          style={{
            textAlign: "center",
            margin: "auto",
            position: "relative",
          }}
        >
          <select
            value={categoryTypeFilter}
            onChange={handleCategoryTypeChange}
            className={styles.__label_search_select_content}
            style={{
              textAlign: "center",
              margin: "auto",
              background:
                "linear-gradient(135deg, #ff1e9c99, #ff1ea499, #ff1fbc99, #ff1fde99, #f620ff99, #c721ff99, #9723ff99, #6a24ff99, #4125ff99, #252aff99, #2641ff99, #2649ff99)",
              borderRadius: "30px",
              pointerEvents: "all",
              width: "10rem",
              height: "1.5rem",
              color: "#fff",
            }}
          >
            <option value="">Select...</option>
            <option value="sativa">Sativa</option>
            <option value="indica">Indica </option>
            <option value="indoor">Indoor </option>
            <option value="outdoor">Outdoor </option>
            <option value="hybride">Hybride</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SearchTypeFlowers;
