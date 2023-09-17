import { FiX, FiPlus } from 'react-icons/fi';
import { Container } from './style';

export function NoteItem({ value, isNew, onClick, ...rest }) {
  return (
    <Container $isnew={isNew}>
      <input type="text" value={value} readOnly={!isNew} {...rest} />
      <button
        type="button"
        onClick={onClick}
        className={isNew ? 'btn-add' : 'btn-delete'}
      >
        {isNew ? <FiPlus /> : <FiX />}
      </button>
    </Container>
  );
}
