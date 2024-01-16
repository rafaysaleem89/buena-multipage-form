import styled from "styled-components";

interface HeadingProps {
  children: React.ReactNode;
}

const HeadingContainer = styled.h1`
  text-align: center;
  font-size: 30px;
  @media (max-width: 768px) {
    font-size: 25px;
  }
`;

const Heading2: React.FC<HeadingProps> = ({ children }) => {
  return <HeadingContainer>{children}</HeadingContainer>;
};

export default Heading2;
