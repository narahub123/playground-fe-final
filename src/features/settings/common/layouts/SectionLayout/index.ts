import Container from "./Container/Container";
import Header from "./Header/Header";
import HeaderContent from "./HeaderContent/HeaderContent";
import Main from "./Main/Main";

const SectionLayout = Object.assign(Container, {
  Header: Header,
  HeaderContent: HeaderContent,
  Main: Main,
});

export default SectionLayout;
