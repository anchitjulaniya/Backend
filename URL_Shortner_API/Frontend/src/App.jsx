import { useEffect, useState } from 'react'

import './App.css'
import Short from './components/ShortUrlDisplay/Short'
import Longurl from './components/longUrl/Longurl'

function App() {
  const [longurl, setLongUrl] = useState('');
  const [shorturl, setShortUrl] = useState('');
  const [isShortURLComponent, setIsShortURLComponent] = useState(false);


useEffect(()=>{
  console.log("shortURL : ",shorturl);
},[shorturl])

  const handleClick = async ()=>{
    setIsShortURLComponent(true);
    console.log(longurl);

    if(longurl.trim() == ''){
      alert("Enter something")
    }
    else{
      const response = await fetch('http://localhost:1000/shortner', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({longurl}),
      });
      const data = await response.json();
      // console.log(data.message);
      setShortUrl(data.message);
      // console.log("shortURL : ",shorturl);
    }



  }
  const copyText = (text) => {
    if(text.trim() == ''){
      alert("No thing to copy")
    }
    navigator.clipboard.writeText(text);
  };

  return (
    <>  
      <div className='shadow-xl h-[80px] flex items-center justify-center mb-10'>
      <h1 className='text-4xl font-bold font-mono text-center '>Short Url</h1>
      </div>

      {isShortURLComponent && <Short shorturl={shorturl} longurl={longurl} copyText={copyText} setIsShortURLComponent={setIsShortURLComponent} />}
      {!isShortURLComponent && <Longurl shorturl={shorturl} longurl={longurl} setLongUrl={setLongUrl} copyText={copyText} handleClick={handleClick} />}
    </>
  )
}

export default App
