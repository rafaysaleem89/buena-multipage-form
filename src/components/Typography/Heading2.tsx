import styled from "styled-components";

interface HeadingProps {
  children: React.ReactNode;
}

const HeadingContainer = styled.h2`
  text-align: center;
  font-size: 26px;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const Heading2: React.FC<HeadingProps> = ({ children }) => {
  return <HeadingContainer>{children}</HeadingContainer>;
};

export default Heading2;
