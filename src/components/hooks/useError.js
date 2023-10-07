import { useState, useEffect, useCallback, useRef } from 'react';

import useLayout from '@/components/hooks/useLayout';
import usePage from '@/components/hooks/usePage';

// const ERROR_SHOW_TIMEOUT = 10000

const useError = () => {
  const [errors, setErrors] = useState([]);
  const { error: page_error } = usePage();
  const { error: layout_error } = useLayout();
  const errorRef = useRef();

  const setError = useCallback((error) => {
    setErrors((_errors) => [..._errors, error]);
  }, []);

  useEffect(() => {
    if (errorRef.current.page !== page_error) {
      setError(page_error);
      errorRef.current.page = page_error;
    }
    if (errorRef.current.layout !== layout_error) {
      setError(layout_error);
      errorRef.current.layout = page_error;
    }
  }, [page_error, layout_error, setError]);

  return { errors, setError };
};

export default useError;
