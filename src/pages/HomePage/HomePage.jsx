import Images from '../../images/book.png';
import { Container, TextArea, Title, Text, Photo, Img } from './HomePage.styled';

export default function Home() {
  return (
    <Container>
      <Photo>
        <Img src={Images} width="250" height="auto" />
      </Photo>
      <TextArea>
        <Title>Heloo! This is app PhoneBook for contacts.</Title>
        <Text>
          The app is user friendly and intuitive so you can easily create your
          own phonebook without any hassle.
        </Text>
        <Text>
          So don't wait anymore, get your own phonebook now and make organizing
          and managing your contacts easy and hassle-free!
        </Text>
      </TextArea>
    </Container>
  );
}
