import useSWRImmutable from 'swr/immutable';

import { useState, useEffect } from 'react';

import usePage from '@/components/hooks/usePage';
import client from '@/middleware/client';

// eslint-disable-next-line react/display-name
const Empty = ({ children }) => <>{children}</>;

const fetcher = (__, type) => {
  if (!type) return Empty;
  return client.get('/api/layouts/' + location.pathname);
};

const options = { fallbackData: Empty };

const useLayout = () => {
  const [type, setType] = useState();
  const { data: page } = usePage();
  const result = useSWRImmutable(type ?? ['layout', type], fetcher, options);

  useEffect(() => {
    if (!page?.type) return;
    if (page.layout !== type) setType(page.layout);
  }, [page, type]);

  return result;
};

export default useLayout;
