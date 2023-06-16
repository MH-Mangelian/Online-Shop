'use client';
/** @jsxRuntime classic */
/** @jsx jsx */
import { css ,jsx} from '@emotion/react';
import Link from 'next/link';
import Image from 'next/image';

//Global style body Html 
import '../app/globals.css';

//components
import NavTopGreen from '@/components/NavTopGreen';
import Header from '@/components/Header';

//News Api
import { useQuery, gql } from '@apollo/client';
import client from '@/Api/News/client';
import NewsApi from '@/Api/News/NewsAPI';

const GET_QUOTES = gql`
  query GetQuotes {
    quotes {
      __id
      __firstname
      __lastname
      __date1
      __date2
      __honorific
      __preposition
      title
      imageURL
      birthday
      deathday
      text
      linkText
      linkURL
    }
  }
`;

const news =()=>{

  const { loading, error, data } = useQuery(GET_QUOTES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <main>
      <NavTopGreen/>
      <Header/>
      <section css={css`
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          flex-wrap: nowrap;
          margin-top: 30px;
          margin-left : auto;
          margin-right: auto;
          width: 95vw;
          padding: 20px 5px;
          
        `}>

          <div css={css`
            display: flex;
            flex-wrap: nowrap;
            align-items: center;
            justify-content: center;
            flex-direction: row;
            background-color: hsl(0, 0%, 93%);
            border-radius: 20px;
            width: 100%;
            height: 500px;
            @media (max-width: 640px) {
              height: 100vh;
              flex-direction: column;
              flex-wrap: nowrap;
              justify-content: center;
              align-items: center;
            }
          `}>
              {
                data.quotes.map((quotes) => {
                  <div key={quotes.__id}>
                    <h2>{quotes.title}</h2>
                    <Image src={quotes.imageURL} alt={quote.title} />
                    <p>{quotes.text}</p>
                  </div>
                })
              }
          </div>
            {
              console.log(NewsApi)
            }
      </section>
    </main>
  )
}

export default news;
