import axios from 'axios';

const baseUrl = 'http://sf-legacy-api.now.sh';

export const getItems = ( pageNum ) => {
  const response = axios.get(`${baseUrl}/items?page=${pageNum}`, {
    headers: {
      Accept: `*/*`,
    },
    maxRedirects: 0
  });

  return response;
};
