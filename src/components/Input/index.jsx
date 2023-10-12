import { Container } from './style';

export function Input({ icon: Icon, invertReveal = false, ...rest }) {
  return (
    <Container $invertreveal={invertReveal.toString()}>
      {Icon && <Icon size={25} />}
      <input {...rest} />
    </Container>
  );
}
