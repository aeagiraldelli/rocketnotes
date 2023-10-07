import { useNavigate } from 'react-router-dom';

import { Tag } from '../Tag';

import { Container } from './style';

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
