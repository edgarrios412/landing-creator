import { useEffect, useState } from 'react';
import style from './Landing.module.css'
import {useParams, useNavigate} from "react-router-dom"
import db from "../db"

const Landing = () => {
  const {url} = useParams()
  const [data, setData] = useState()
  const navigate = useNavigate()

  useEffect(() => {
    const data = db.find(el => el.url === url)
    if(data){
        setData(data)
    }else{
        navigate("/")
    }
  },[])
  return(
    <>
      <div>
        <h1 className={style.title}>{data?.title}</h1>
        <h3 className={style.desc}>{data?.desc}</h3>
        <a target="_blank" href={data?.cta}><button className={style.button}>Call to action</button></a>
      </div>
    </>
  )
};

export default Landing