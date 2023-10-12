import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { api } from '../../services/api';

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { TextArea } from '../../components/TextArea';
import { Section } from '../../components/Section';
import { Button } from '../../components/Button';
import { NoteItem } from '../../components/NoteItem';

import { Container, Form } from './style';

export function New() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const [links, setLinks] = useState([]);
  const [newLink, setNewLink] = useState('');

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState('');

  const navigate = useNavigate();

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

  function linkInputFocusLost() {
    if (newLink) {
      handleAddLink();
    }
  }

  function tagInputLostFocus() {
    if (newTag) {
      handleAddTag();
    }
  }

  async function handleSaveNote() {
    if (!title || !description) {
      return alert('Por favor, preencha os campos Título e Observações.');
    }

    if (newTag) {
      handleAddTag();
    }

    if (newLink) {
      handleAddLink();
    }

    try {
      await api.post('/notes', {
        title,
        description,
        links,
        tags,
      });
      alert('Nota salva com sucesso!');
      navigate(-1);
    } catch (error) {
      if (error.response) {
        return alert(error.response.data.message);
      } else {
        return alert('Erro salvar nota. Tente novamente mais tarde.');
      }
    }
  }

  return (
    <Container>
      <Header />
      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <Link onClick={() => navigate(-1)}>voltar</Link>
          </header>
          <Input
            placeholder="Título"
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextArea
            placeholder="Observações"
            onChange={(e) => setDescription(e.target.value)}
          />
          <Section title="Links úteis">
            {links.map((link, index) => {
              return (
                <NoteItem
                  key={`${index}-${link}`}
                  value={link}
                  onClick={() => handleRemoveLink(link)}
                />
              );
            })}
            <NoteItem
              isNew
              placeholder="novo link"
              value={newLink}
              onBlur={() => linkInputFocusLost()}
              onChange={(e) => setNewLink(e.target.value)}
              onClick={handleAddLink}
            />
          </Section>
          <Section title="Marcadores">
            <div className="tag-list">
              {tags.map((tag, index) => {
                return (
                  <NoteItem
                    key={`${index}-${tag}`}
                    className="tag__item"
                    value={tag}
                    onClick={() => handleRemoveTag(tag)}
                  />
                );
              })}
              <NoteItem
                className="tag__item"
                isNew
                placeholder="nova tag"
                value={newTag}
                onBlur={() => tagInputLostFocus()}
                onChange={(e) => setNewTag(e.target.value)}
                onClick={handleAddTag}
              />
            </div>
          </Section>
          <Button label="Salvar" onClick={handleSaveNote} />
        </Form>
      </main>
    </Container>
  );
}
