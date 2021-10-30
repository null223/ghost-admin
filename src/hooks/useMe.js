import useSWRImmutable from 'swr/immutable';

import { client } from '@/middleware/api';

const useMe = () => {
  const result = useSWRImmutable(
    'me',
    async () =>
      await client.get({
        endpoint: 'members',
        contentId: process.env.REACT_APP_API_NAME,
      })
  );
  return result;
};

export default useMe;

const division = (t, i) => [Math.floor(t / i), t % i];
