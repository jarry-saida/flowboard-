async function generateCards(description, count, apiKey) {
  const options = {
    method: 'POST',
    url: 'https://flowboard-api-virid.vercel.app/ai/cards',
    headers: {
      'X-Workspace': 'public',
      'Content-Type': 'application/json'
    },
    params: {
      password: "1234"
    },
    data: {
      description: description,
      apiKey: apiKey,
      count: count
    }
  }

  try {
    const { data } = await axios.request(options);
    console.log("cards",data);
  } catch (error) {
    console.error(error);
  }
}
export default generateCards;