// components/ExampleComponent.tsx
import { useQuery } from 'react-query';
import styled from 'styled-components';

const StyledDiv = styled.div`
  color: ${(props) => props.theme.primaryColor};
`;

const ExampleComponent: React.FC = () => {
  const { data, isLoading, isError } = useQuery('exampleQuery', async () => {
    // Lógica da requisição
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    return data;
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  return <StyledDiv>{data}</StyledDiv>;
};

export default ExampleComponent;
