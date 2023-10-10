import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { api } from '../../services/api';

import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { Tag } from '../../components/Tag';
import { ButtonText } from '../../components/ButtonText';
import { Button } from '../../components/Button';

import {
  ButtonDeleteNote,
  Container,
  Content,
  Links,
  Title,
  TextContent,
} from './style';

export function Details() {
  const [data, setData] = useState({});
  const params = useParams();
  const navigate = useNavigate();

  async function handleDeleteNote() {
    const confirm = window.confirm(
      'Tem certeza que deseja excluir essa nota? Essa ação não poderá ser desfeita.'
    );

    if (confirm) {
      const response = await api.delete(`/notes/${params.id}`);
      navigate(-1);
    }
  }

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`);
      if (response.data) {
        setData(response.data);
      }
    }

    fetchNote();
  }, []);

  return (
    <Container>
      <Header />
      {data && (
        <main>
          <Content>
            <ButtonDeleteNote>
              <ButtonText title="Excluir nota" onClick={handleDeleteNote} />
            </ButtonDeleteNote>

            <Title>{data.title}</Title>

            <TextContent>{data.description}</TextContent>
            {data.links && (
              <Section title="Links úteis">
                <Links>
                  {data.links.map((link) => (
                    <li key={String(link.id)}>
                      <a href={`${link.url}`} target="_blank">
                        {link.url}
                      </a>
                    </li>
                  ))}
                </Links>
              </Section>
            )}

            {data.tags && (
              <Section title="Marcadores">
                <div className="tag-list">
                  {data.tags.map((tag) => (
                    <Tag key={String(tag.id)} title={`${tag.name}`} />
                  ))}
                </div>
              </Section>
            )}
            <Button label="Voltar" onClick={() => navigate(-1)} />
          </Content>
        </main>
      )}
    </Container>
  );
}
