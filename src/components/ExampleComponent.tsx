// components/ExampleComponent.tsx
import { useQuery } from 'react-query';
import styled from 'styled-components';

const StyledDiv = styled.div`
  color: ${(props) => props.theme.primaryColor};
`;

const ExampleComponent: React.FC = () => {
  const { data, isLoading, isError } = useQuery('exampleQuery', async () => {
    // Lógica da requisição
    const response = await fetch('https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=5&sortBy=id&orderBy=DESC');
    const data = await response.json();
    //console.log("Dados : ", data);
    return data;
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  return <StyledDiv>{data}</StyledDiv>;
};

export default ExampleComponent;
