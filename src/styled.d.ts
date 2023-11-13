// styled.d.ts
import 'styled-components';

interface Theme {
  // Defina aqui os tipos para o seu tema, se aplicável
}

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
