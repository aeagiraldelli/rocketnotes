import { Container } from './style';
import { Tag } from '../Tag';

export function Note({ data, ...rest }) {
  return (
    <Container type="button" {...rest}>
      <h1>{data.title}</h1>
      {data.tags && (
        <footer>
          {data.tags.map((tag) => {
            return <Tag title={tag.name} key={tag.id} />;
          })}
        </footer>
      )}
    </Container>
  );
}
