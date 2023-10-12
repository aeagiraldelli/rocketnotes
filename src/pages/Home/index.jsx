import { useState, useEffect } from 'react';
import { FiPlus, FiSearch } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

import { api } from '../../services/api';

import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';
import { Section } from '../../components/Section';
import { Note } from '../../components/Note';

import { Container, Brand, Menu, Search, Content, NewNote } from './style';

export function Home() {
  const [tags, setTags] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [notes, setNotes] = useState([]);
  const [searchFilter, setSearchFilter] = useState([]);
  const navigate = useNavigate();

  function handleSelectedTag(tagName) {
    if (selectedTags.includes(tagName)) {
      const filteredTags = selectedTags.filter((tag) => tag !== tagName);
      setSelectedTags(filteredTags);
    } else {
      setSelectedTags((prevState) => [...prevState, tagName]);
    }
  }

  function handleNoteDetails(noteId) {
    if (noteId) {
      navigate(`/details/${noteId}`);
    }
  }

  useEffect(() => {
    async function fetchTags() {
      const response = await api.get('/tags');
      if (response.data) {
        setTags(response.data);
      }
    }

    fetchTags();
  }, []);

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/notes?title=${searchFilter}&tags=${selectedTags}`);
      if (response.data) {
        setNotes(response.data);
      }
    }

    fetchNotes();
  }, [selectedTags, searchFilter]);

  return (
    <Container>
      <Brand>
        <h1>Rocketnotes</h1>
      </Brand>
      <Header />
      <Menu>
        <ButtonText
          key={`0000-all-values`}
          title="Todos" onClick={() => setSelectedTags([])}
          isActive={selectedTags.length === 0} />
        {tags &&
          tags.map((tag) => (
            <ButtonText
              key={String(tag.id)}
              title={tag.name}
              onClick={() => handleSelectedTag(tag.name)}
              isActive={selectedTags.includes(tag.name)} />)
          )
        }
      </Menu>
      <Search>
        <Input icon={FiSearch} placeholder="Pesquisar pelo título" onChange={(e) => setSearchFilter(e.target.value)} />
      </Search>
      <Content>
        <Section title="Minhas notas">
          {notes &&
            notes.map((note) => <Note key={String(note.id)} data={note} onClick={() => handleNoteDetails(note.id)} />)
          }
        </Section>
      </Content>
      <NewNote to="/new">
        <FiPlus />
        Criar nota
      </NewNote>
    </Container>
  );
}
