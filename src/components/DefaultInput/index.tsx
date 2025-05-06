import styles from './styles.module.css'

type DefaultInputProps = {
  id: string;
  labelText: string;
} & React.ComponentProps<'input'>;

export default function DefaultInput({ type, id, labelText, ...props }: DefaultInputProps) {
  return (
    <>
      <label htmlFor={id}>{labelText}</label>
      <input className={styles.input} id={id} type={type} {...props}/>
    </>
  );
}