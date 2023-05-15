'use client';
/** @jsxRuntime classic */
/** @jsx jsx */
import { css ,jsx} from '@emotion/react';
import Link from 'next/link';
import Image from 'next/image';

import Img1 from '../../public/01.jpg'
import Img2 from '../../public/02.jpg'
import Img3 from '../../public/03.jpg'
import Img4 from '../../public/04.jpg'

export const dataImg = [
  {
    id: "1",
    price: "19.89$",
    text: "Classic Head Phone",
    img: Img1,
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
  },
  {
    id: "2",
    price: "49.36$",
    text: "Nice Head Phone",
    img: Img2,
    description: "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat. ",
  },
  {
    id: "3",
    price: "59.96$",
    text: "Good Head Phone",
    img: Img3,
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam",
  },
  {
    id: "4",
    price: "159.96$",
    text: "Gaming Head Phone",
    img: Img4,
    description: "Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. ",
  },
]

const Product = () => {

  return (
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
      border-radius: 20px;
      border: solid 1px orange;
  `}>

    <h3 css={css`
    color: black;
    font-size:30px;
    font-weight:bold;

    `}>
       Product Some
    </h3>

    <div css={css`
    display: inline-flex;
    flex-wrap: wrap;
    padding: 10px;
    margin:5px;
    `}>
      {

        dataImg.map((e)=>(
          <Link key={e.id} css={css`
          background-color: hsl(0, 0%, 93%);
          padding: 10px;
          margin:5px;
          border-radius: 20px;
          border: solid 2px hsl(120, 58%, 29%);
          `} 
          href={`/something-else?uri=${e.id}`}
          as={`/products/${e.id}`}
          >
            
            <Image key={e.id} src={e.img} alt="Product Img"
              width={300}
              height={300}
              />
            <div>
              
            <p key={e.id} css={css`
                    color: black;
                    font-size: 18px;
                    padding: 10px;
                    justify-content: center;
                    font-weight: bold;
                  `}>
                {e.text}
            </p>
                
                
                  
                  
            <button css={css`
                background:hsl(120, 58%, 29%);
                color:white;
                border-radius: 30px;
                padding: 13px;
                width: 300px;
                border: none;
                margin: 8px;
                cursor: pointer;
                transition: all 0.3s;
                &:hover{
                  background: darkred;
                }
                
            `}>Add to Cart</button>
              <p key={e.id} css={css`
                    color: black;
                    font-size: 18px;
                    padding: 10px;
                    justify-content: center;
                    font-weight: bold;
                  `}>
                {e.price}
            </p>
              
            </div>      
          </Link>
        ))
      }

    </div>
      
    </section>
  )
}

export default Product
