export const serialize = (useSWRNext) => {
  return (key, fetcher, config) => {
    // キーをシリアライズする
    const isArrayKey = Array.isArray(key);
    const serializedKey = isArrayKey ? JSON.stringify(key) : key;

    // シリアライズされたキーを渡し、フェッチャーでシリアライズを解除します。
    return useSWRNext(
      serializedKey,
      isArrayKey ? (k) => fetcher(...JSON.parse(k)) : fetcher,
      config
    );
  };
};

const options = {
  revalidateOnFocus: false,
  shouldRetryOnError: false,
  use: [serialize],
};

export default options;
