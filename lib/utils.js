const baseUrl = "https://acm-bilkent.herokuapp.com";

const fetchQuery = async (path, params = null) => {
  let url;

  if (!params) {
    url = `${baseUrl}/${path}`;
  } else {
    url = `${baseUrl}/${path}/${params}`;
  }

  try {
    const response = await fetch(url);
    const data = await response.json();

    return data;
  } catch (err) {}
};

export { baseUrl, fetchQuery };
