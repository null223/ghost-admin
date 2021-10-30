import { Container, Card } from '@mui/material';

import Editor from '@/components/Editor';

function App() {
  return (
    <Container>
      <Card sx={{ p: 4, m: 3, bgcolor: '#fff' }}>
        <Editor />
      </Card>
    </Container>
  );
}

export default App;
