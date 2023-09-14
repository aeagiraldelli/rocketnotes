import { FiPlus, FiSearch } from 'react-icons/fi';
import { Container, Brand, Menu, Search, Content, NewNote } from './style';
import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';

export function Home() {
  return (
    <Container>
      <Brand>
        <h1>Rocketnotes</h1>
      </Brand>
      <Header />
      <Menu>
        <ButtonText title="Filtro 1" isActive />
        <ButtonText title="Filtro 2" />
        <ButtonText title="Filtro 3" />
        <ButtonText title="Filtro 4" />
        <ButtonText title="Filtro 5" />
      </Menu>
      <Search>
        <Input icon={FiSearch} placeholder="Pesquisar pelo título" />
      </Search>
      <Content></Content>
      <NewNote type="button">
        <FiPlus />
        Criar nota
      </NewNote>
    </Container>
  );
}
