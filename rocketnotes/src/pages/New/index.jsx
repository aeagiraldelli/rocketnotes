import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { TextArea } from '../../components/TextArea';
import { Section } from '../../components/Section';
import { Button } from '../../components/Button';
import { NoteItem } from '../../components/NoteItem';

import { Container, Form } from './style';

export function New() {
  const [links, setLinks] = useState([]);
  const [newLink, setNewLink] = useState('');

  function handleAddLink() {
    setLinks((prevState) => [...prevState, newLink]);
    setNewLink('');
  }

  return (
    <Container>
      <Header />
      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <Link to="/">voltar</Link>
          </header>
          <Input placeholder="Título" />
          <TextArea placeholder="Observações" />
          <Section title="Links úteis">
            {
              links.map((link, index) => {
                return <NoteItem
                  key={`${index}-${link}`}
                  value={link}
                  onClick={() => { }}
                />
              })
            }
            <NoteItem isNew placeholder="novo link" value={newLink}
              onChange={(e) => setNewLink(e.target.value)}
              onClick={handleAddLink}
            />
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
