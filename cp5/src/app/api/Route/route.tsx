export const GET = async (date: string) => {
    const nasaApiKey = 'iDD3riezf8PIZaI5IuUYtT6b2OCVac6tiGb1jIIw';
    const weatherApiKey = 'SUA_CHAVE_DE_API_DO_CLIMA';
    const anotherApiKey = 'SUA_CHAVE_DE_API_ADICIONAL';
  
    
    const nasaUrl = "https://images-assets.nasa.gov/image/PIA23780/PIA23780~medium.jpg";
    const weatherUrl = "https://images-assets.nasa.gov/image/PIA00342/PIA00342~medium.jpg";
    const anotherApiUrl = "https://images-assets.nasa.gov/image/PIA00003/PIA00003~medium.jpg";
  
    try {
      
      const [nasaResponse, weatherResponse, anotherApiResponse] = await Promise.all([
        fetch(nasaUrl),
        fetch(weatherUrl),
        fetch(anotherApiUrl)
      ]);
  
      
      if (!nasaResponse.ok || !weatherResponse.ok || !anotherApiResponse.ok) {
        throw new Error('Erro ao buscar os dados de uma ou mais APIs');
      }
  
      
      const nasaData = await nasaResponse.json();
      const weatherData = await weatherResponse.json();
      const anotherApiData = await anotherApiResponse.json();
  
      
      return {
        nasa: nasaData,
        weather: weatherData,
        anotherApi: anotherApiData
      };
  
    } catch (error) {
      console.error("Erro ao consumir as APIs:", error);
      return null;
    }
  };
  