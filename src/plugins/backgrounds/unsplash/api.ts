import { API } from '../../types';
import { officialCollection, UNSPLASH_API_KEY } from './constants';
import { Image, Data } from './types';

export const getImage = async function(
  settings: Pick<Data, 'by' | 'collections' | 'featured' | 'search'>,
  loader: API['loader'],
  id?: String,
  size?: number,
): Promise<Image> {
  // Setup
  const { by, collections, featured, search } = settings;
  const headers = new Headers();
  headers.append('Authorization', `Client-ID ${UNSPLASH_API_KEY}`);

  // Build search url
  let url = `https://api.unsplash.com/photos`;
  if (id) {
    url += `/${id}?`;
  } else {
    url += `/random?`;

    switch (by) {
      case 'collections':
        url += `collections=${collections}`;
        break;

      case 'search':
        url +=
          'orientation=landscape' +
          (featured ? '&featured=true' : '') +
          (search ? `&query=${search}` : '');
        break;

      default:
        url += `collections=${officialCollection}`;
    }
  }

  // Fetch from API
  loader.push();
  const res = await (await fetch(url, { headers })).json();
  const data = await (await fetch(
    res.urls.raw + `?q=85&w=${size ? size : 1920}`,
  )).blob();
  loader.pop();

  return {
    data,
    id: res.id,
    image_link: res.links.html,
    location_title: res.location ? res.location.title : null,
    user_name: res.user.name,
    user_link: res.user.links.html,
  };
};
