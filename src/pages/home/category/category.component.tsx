import styles from "./category.module.scss";

function Category() {
  return (
    <section className={styles.category}>
        {/* className="bbdStyle section flexContainer" */}
      <h2 className={styles.title}>Browse by dress style</h2>
      <div className={styles.grid}>

        <div className={`${styles.item} ${styles.casual}`}>
          <p className={styles.titleCard}>Casual</p>
          <img src="assets\images\bbdStyle\casual.png" alt="casual clothes" />
        </div>
        <div className={`${styles.item} ${styles.formal}`}>
          <p className={styles.titleCard}>Formal</p>
          <img src="assets\images\bbdStyle\formal.png" alt="formal clothes" />
        </div>
        <div className={`${styles.item} ${styles.party}`}>
          <p className={styles.titleCard}>Party</p>
          <img src="assets\images\bbdStyle\party.png" alt="party clothes" />
        </div>
        <div className={`${styles.item} ${styles.gym}`}>
          <p className={styles.titleCard}>Gym</p>
          <img src="assets\images\bbdStyle\gym.png" alt="gym clothes" />
        </div>

      </div>
    </section>
  );
}
export default Category;
