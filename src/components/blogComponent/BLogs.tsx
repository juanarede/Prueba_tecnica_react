import  { useState, useEffect } from 'react';
// import axios from 'axios';

interface Article {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
}

export default function Blogs() {
  const [articles, setArticles] = useState<Article[]>([]);
  const NEWS_API_KEY = '97f81c421a594572b303d42764d6f3b9';

  const getResources = async () => {
    const res = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${NEWS_API_KEY}`)
    const data = await res.json();
    setArticles(data.articles);
  }
  
  useEffect(() => {
    getResources();
    
    // const endpoint = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${NEWS_API_KEY}`;
    // axios.get(endpoint)
    // .then(response => {
    //   console.log(response.data.articles);
    //   setArticles(response.data.articles);
    // })
    // .catch(error => {
    //   console.error('Error al obtener los datos:', error);
    // });
  }, []); 

  return (
    <div style={{ marginTop: "1rem" }} className="flex items-center justify-center mb-5">
      <div className="max-w-7xl mx-auto px-4">
        <div style={{ marginTop: "6rem" }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {articles?.map((article, index) => (
              <div key={index} className={`card relative bg-white overflow-hidden card${index + 1} md:col-span-2 lg:col-span-1`}>
                <div className="img-wrapper relative">
                  {article.urlToImage ? (
                    <img style={{ height: "20rem" }} className="w-full object-cover object-center rounded-2xl" src={article.urlToImage} alt={`Imagen ${index + 1}`} />
                  ) : (
                    <img style={{ height: "20rem" }} className="w-full object-cover object-center rounded-2xl" src="https://laverdadonline.com/wp-content/uploads/2023/09/no-image.png" alt={`Imagen alternativa ${index + 1}`} />
                  )}
                  <div className="text-overlay absolute top-3 left-3 bg-gray-700 bg-opacity-70 p-2 rounded">
                    <h4 className="text-sm font-semibold text-white">BLOG</h4>
                  </div>
                </div>
                <div className="text-wrapper p-4">
                  <h3 className="title mb-2" style={{ fontSize: "23px", color: '#333333', fontWeight: "900" }}>{article.title}</h3>
                  <p className="text" style={{ fontSize: "17px", color: '#333333' }}>{article.description}</p>
                  <a href={article.url} target="_blank" rel="noopener noreferrer" className="bg-pink-700 hover:bg-pink-800 text-white font-bold rounded-full py-2 px-4 mt-4 inline-block">LEER MÁS</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
