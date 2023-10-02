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

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState('');

  function handleAddTag() {
    setTags((prevState) => [...prevState, newTag]);
    setNewTag('');
  }

  function handleRemoveTag(tagToRemove) {
    setTags((prevState) => prevState.filter((tag) => tag !== tagToRemove));
  }

  function handleAddLink() {
    setLinks((prevState) => [...prevState, newLink]);
    setNewLink('');
  }

  function handleRemoveLink(linkToRemove) {
    setLinks((prevState) => prevState.filter((link) => link !== linkToRemove));
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
                  onClick={() => handleRemoveLink(link)}
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
              {
                tags.map((tag, index) => {
                  return <NoteItem
                    key={`${index}-${tag}`}
                    className="tag__item"
                    value={tag}
                    onClick={() => handleRemoveTag(tag)}
                  />
                })
              }
              <NoteItem className="tag__item" isNew placeholder="nova tag" value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
                onClick={handleAddTag}
              />
            </div>
          </Section>
          <Button label="Salvar" />
        </Form>
      </main>
    </Container>
  );
}
