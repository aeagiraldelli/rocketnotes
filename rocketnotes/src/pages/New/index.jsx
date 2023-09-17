import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { TextArea } from '../../components/TextArea';
import { Section } from '../../components/Section';
import { Button } from '../../components/Button';
import { NoteItem } from '../../components/NoteItem';

import { Container, Form } from './style';

export function New() {
  return (
    <Container>
      <Header />
      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <a href="/">voltar</a>
          </header>
          <Input placeholder="Título" />
          <TextArea placeholder="Observações" />
          <Section title="Links úteis">
            <NoteItem value="insira novo link" />
            <NoteItem isNew placeholder="novo link" />
          </Section>
          <Section title="Marcadores">
            <div className="tag-list">
              <NoteItem className="tag__item" value="react" />
              <NoteItem className="tag__item" value="front end" />
              <NoteItem className="tag__item" value="front end" />
              <NoteItem className="tag__item" isNew placeholder="nova tag" />
            </div>
          </Section>
          <Button label="Salvar" />
        </Form>
      </main>
    </Container>
  );
}
