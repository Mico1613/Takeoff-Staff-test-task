interface IStyles {
  readonly [key: string]: string;
}
export default function buttonClassesSetter(
  isLoading: boolean,
  styles: IStyles
) {
  if (isLoading) {
    return `${styles.btn} ${styles.nonActiveBtn}`;
  }
  return styles.btn;
}
