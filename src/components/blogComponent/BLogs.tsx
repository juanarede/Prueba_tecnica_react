import { useState, useEffect } from 'react';

interface Article {
  title: string;
  description: string;
  url: string;
  image_url: string;
}

export default function Blogs() {
  const [articles, setArticles] = useState<Article[]>([]);

  const getResources = async () => {
    const res = await fetch(`https://newsdata.io/api/1/news?apikey=pub_414848babc4328aba1c010cf6a67483fc26c2&q=pizza`)
    const data = await res.json();
    console.log(data);
    setArticles(data.results);
  }
  
  useEffect(() => {
    getResources();
  }, []); 

  return (
    <div style={{ marginTop: "1rem" }} className="flex items-center justify-center mb-5">
      <div className="max-w-7xl mx-auto px-4">
        <div style={{ marginTop: "6rem" }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {articles?.map((article, index) => (
              <div key={index} className={`card relative bg-white overflow-hidden card${index + 1} md:col-span-2 lg:col-span-1`}>
                <div className="img-wrapper relative">
                  {article.image_url ? (
                    <img style={{ height: "20rem" }} className="w-full object-cover object-center rounded-2xl" src={article.image_url} alt={`Imagen ${index + 1}`} />
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
                  {/* <a href={article.url} target="_blank" rel="noopener noreferrer" className="bg-pink-700 hover:bg-pink-800 text-white font-bold rounded-full py-2 px-4 mt-4 inline-block">LEER MÁS</a> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
