import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Высота контейнера на весь экран */
`;

const Custom404 = () => {
  return (
    <Container>
      <img src="/icons/images/404.gif" alt="error" />
    </Container>
  );
};

export default Custom404;
