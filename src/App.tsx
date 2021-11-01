import useSWRImmutable from 'swr/immutable';

import { useLocation } from 'react-router-dom';

import ErrorView from '@/components/ErrorView';
import Layout from '@/components/Layout';
import Main from '@/components/Main';

const App = () => {
  const location = useLocation();
  // page
  const { data, error, isValidating } = useSWRImmutable(
    [location.pathname],
    () => 'hoge'
  );
  const { data: layout } = useSWRImmutable('layout', null);
  //
  if (error) return <ErrorView error={error} />;

  return (
    <Layout data={layout}>
      <Main data={data} />
    </Layout>
  );
};

export default App;
