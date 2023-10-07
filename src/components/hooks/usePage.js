import useSWRImmutable from 'swr/immutable';

import { useState, useEffect } from 'react';
import { useLocation, useRouteMatch } from 'react-router-dom';

import client from '@/middleware/client';

const fetcher = (location) => {
  if (!location?.pathname) return;
  return client.get('/api/pages/' + location.pathname);
};

const usePage = () => {
  const [pattern, setPattern] = useState('');
  const location = useLocation();
  const match = useRouteMatch({ path: pattern, exact: true });
  const { data, mutate, isValidating, error } = useSWRImmutable('page', () =>
    fetcher(location)
  );

  useEffect(() => {
    if (!match) mutate();
  }, [match, mutate]);

  useEffect(() => {
    if (!data) return;
    setPattern(data.pattern);
  }, [data]);

  return { data, mutate, isValidating, error };
};

export default usePage;
