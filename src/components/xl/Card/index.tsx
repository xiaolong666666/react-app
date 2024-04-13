import styles from "./index.module.less";

interface CardProps {
  title: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, children }) => {
  return (
    <div className={styles.card}>
      <header className={styles.header}>{title}</header>
      <section className={styles.main}>{children}</section>
    </div>
  );
};

export default Card;
