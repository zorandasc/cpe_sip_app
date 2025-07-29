import styles from "./paginator.module.css";

export default function Paginatior({
  loading,
  page,
  totalPages,
  hasMore,
  handleLeftClick,
  handleRightClick,
}) {
  return (
    <div className={styles.paginationControls}>
      <button
        className={styles.paginationButton}
        onClick={handleLeftClick}
        disabled={page === 0 || loading}
      >
        {`<<`}
      </button>
      <span>
        Stranica {page + 1} / {totalPages}
      </span>
      <button
        className={styles.paginationButton}
        onClick={handleRightClick}
        disabled={!hasMore || loading || page + 1 >= totalPages}
      >
         {`>>`}
      </button>
    </div>
  );
}
