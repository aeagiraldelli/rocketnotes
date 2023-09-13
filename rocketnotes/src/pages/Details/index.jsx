import {
  ButtonDeleteNote,
  Container,
  Content,
  Links,
  Title,
  TextContent,
} from './style';
import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { Tag } from '../../components/Tag';
import { ButtonText } from '../../components/ButtonText';
import { Button } from '../../components/Button';

export function Details() {
  return (
    <Container>
      <Header />
      <main>
        <Content>
          <ButtonDeleteNote>
            <ButtonText title="Excluir nota" />
          </ButtonDeleteNote>

          <Title>Introdução ao React</Title>

          <TextContent>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias,
            illum non quod excepturi voluptatum atque cupiditate provident,
            ratione unde, quisquam sunt eveniet laboriosam quo est sapiente
            minus! Maiores, corporis non!
          </TextContent>

          <Section title="Links úteis">
            <Links>
              <li>
                <a href="#">Link 1</a>
              </li>
              <li>
                <a href="#">Link 2</a>
              </li>
              <li>
                <a href="#">Link 3</a>
              </li>
            </Links>
          </Section>
          <Section title="Marcadores">
            <Tag title="Nodejs" />
            <Tag title="ExpressJS" />
            <Tag title="Javascript" />
            <Tag title="ReactJS" />
          </Section>
          <Button label="Voltar" />
        </Content>
      </main>
    </Container>
  );
}
