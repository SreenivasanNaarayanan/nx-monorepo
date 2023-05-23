import styles from './my-react-lib.module.css';
import {reusableLib} from '@sreeni1312/reusable-lib';

/* eslint-disable-next-line */
export interface MyReactLibProps {}

export function MyReactLib(props: MyReactLibProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to MyReactLib2!</h1>
      <h2>{reusableLib()}</h2>
    </div>
  );
}

export default MyReactLib;
