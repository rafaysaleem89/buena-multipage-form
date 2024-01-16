import React from "react";
import styled from "styled-components";

interface StackProps {
  space: number;
  children: React.ReactNode;
  direction?: "horizontal" | "vertical";
}

const VerticalStack = styled.div`
  all: inherit;
  display: flex;
  flex-direction: column;
`;

const VerticalStackItem = styled.div<{ space: number }>`
  margin-bottom: ${(props) => props.space}px;
`;

const HorizontalStack = styled.div`
  all: inherit;
  display: flex;
  flex-direction: row;
`;

const HorizontalStackItem = styled.div<{ space: number }>`
  margin-right: ${(props) => props.space}px;
`;


//Used to evenly space out components in a vertical or horizontal direction
const Stack: React.FC<StackProps> = ({
  space,
  children,
  direction = "vertical",
}) => {
  if (direction === "vertical") {
    return (
      <VerticalStack>
        {React.Children.map(children, (child, index) => (
          <VerticalStackItem key={index} space={space}>
            {child}
          </VerticalStackItem>
        ))}
      </VerticalStack>
    );
  } else {
    return (
      <HorizontalStack>
        {React.Children.map(children, (child, index) => (
          <HorizontalStackItem key={index} space={space}>
            {child}
          </HorizontalStackItem>
        ))}
      </HorizontalStack>
    );
  }
};

export default Stack;
