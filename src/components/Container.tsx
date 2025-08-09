import type { ReactNode } from 'react';
import styles from './Container.module.css';

type ContainerProps = {
  children?: ReactNode;
};

export function Container({ children }: ContainerProps) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <section>{children}</section>
        </div>
      </div>
    </>
  );
}
