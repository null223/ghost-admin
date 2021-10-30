import useSWRImmutable from 'swr/immutable';

import { useCallback } from 'react';

import { client, api } from '@/middleware/api';

const useProducts = () => {
  const result = useSWRImmutable(
    'products',
    async () =>
      await client
        .get({
          endpoint: 'products',
          queries: { limit: 200, fieids: 'id,name' },
        })
        .then((res) => res.contents)
  );

  const handleCreateProduct = useCallback(
    async (name) => {
      await api.post('products', { name });
      await result.mutate();
    },
    [result]
  );
  return { ...result, handleCreateProduct };
};

export default useProducts;
