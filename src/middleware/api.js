import axios from 'axios';
import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: process.env.REACT_APP_API_DOMAIN, // YOUR_DOMAIN is the XXXX part of XXXX.microcms.io
  apiKey: process.env.REACT_APP_API_KEY,
});

export const api_endpoint = `https://${process.env.REACT_APP_API_DOMAIN}.microcms.io/api/v1/`;

export const api = axios.create({
  baseURL: api_endpoint,
  headers: { 'X-MICROCMS-API-KEY': process.env.REACT_APP_API_KEY },
});
