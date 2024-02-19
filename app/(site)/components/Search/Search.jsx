"use client";
// Styles
import styles from "./styles.module.scss";
import { useRouter } from "next/navigation";
const Search = ({
  categoryFilter,
  searchQuery,
  setCategoryFilter,
  setSearchQuery,
}) => {
  const router = useRouter();

  const handleCategoryChange = (event) => {
    setCategoryFilter(event.target.value);
  };

  const handleSearchQuerychange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleFilterClick = () => {
    // Navigate to category page with the query
    //    router.push(`/categories?${categoryFilter} && ${searchQuery}`);
    router.push(
      `/categories?categoryFilter=${categoryFilter}&searchQuery=${searchQuery}`
    );
  };
  return (
    <section className={styles.section_search_categories}>
      <div className={styles.search_container}>
        <h2>SEARCH CATEGORIES</h2>
        <div className={styles.__search_content}>
          <div className={styles.__label_search_select}>
            <label className={styles.__label_search}>Category Type</label>
            <select
              value={categoryFilter}
              onChange={handleCategoryChange}
              className={styles.__label_search_select_content}
            >
              <option value="All">All</option>
              <option value="Unique">Unique</option>
              <option value="Basic 2 grammes">Basic 2 grammes</option>
              <option value="Medium 5 grammes">Medium 5 grammes</option>
              <option value="Large 10 grammes">Large 10 grammes</option>
            </select>
          </div>
        </div>
        <div className={styles.__searchbar}>
          <label className={styles.__search}> Search</label>
          <input
            type="search"
            id="search"
            placeholder="search..."
            className={styles.__search_input}
            value={searchQuery}
            onChange={handleSearchQuerychange}
          />
        </div>
        <button
          className={styles.__btn_search}
          type="button"
          onClick={handleFilterClick}
        >
          Search
        </button>
      </div>
    </section>
  );
};

export default Search;
