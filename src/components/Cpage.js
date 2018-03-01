import React, { Component } from "react";
import '../assets/style/Cpage.css'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
const Dou = [
  {
    img:'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2509508062.jpg',
    title:'妖精森林的小不点',
    grade:'9.2'
  },
  {
    img:'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2508746540.jpg',
    title:'紫罗兰永恒花园',
    grade:'8.8'
  },
  {
    img:'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2509829027.jpg',
    title:'恋如雨止',
    grade:'9.0'
  },
  {
    img:'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2506713014.jpg',
    title:'齐木楠雄的灾难 第二季',
    grade:'9.4'
  },
  {
    img:'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2447081903.jpg',
    title:'恶魔人 Crybaby',
    grade:'8.6'
  },
  {
    img:'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2510628384.jpg',
    title:'魔卡少女樱 透明牌篇',
    grade:'9.1'
  },
  {
    img:'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2507423381.jpg',
    title:'博多豚骨拉面团',
    grade:'8.2'
  },
  {
    img:'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2505004205.jpg',
    title:'DARLING in the FRANXX',
    grade:'7.4'
  },
  {
    img:'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2478998997.jpg',
    title:'比宇宙更遥远的地方',
    grade:'4.4'
  },
  {
    img:'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2356774246.jpg',
    title:'齐木楠雄的灾难',
    grade:'9.0'
  },
  {
    img:'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2502221780.jpg',
    title:'刻刻',
    grade:'5.5'
  },
  {
    img:'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2197828404.jpg',
    title:'海贼王',
    grade:'9.3'
  },
  {
    img:'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2509941564.jpg',
    title:'pop子和pipi美的日常',
    grade:'9.7'
  },
  {
    img:'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2511012754.jpg',
    title:'小木乃伊到我家',
    grade:'9.2'
  },
  {
    img:'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2245601763.jpg',
    title:'名侦探柯南',
    grade:'4.9'
  }
]
export default class Apage extends Component { 
  render() { 
    return (
      <Router>
        <div>
          <div className='db'>
            <Dsort/>
            <div className="dcheck">
                <label htmlFor="">
                  <input type="radio" checked=''/>
                  我没看过的
                </label>
                <label htmlFor="">
                  <input type="radio" checked=''/>
                  可在线播放的
                </label>
            </div>
          </div>
          <div className='dlist'>
            {
              Dou.map((itme)=>{
                return(
                  <a href="" className='item'>
                    <div className='dcover-wp'>
                        <img src={itme.img} alt=""/>
                    </div>
                    <p>
                      {itme.title}
                      <strong>{itme.grade}</strong>
                    </p>
                  </a>
                )
              })
            }
          </div>
        </div>
      </Router>
    )
  }
}

const Dsort = () =>(
  <div className='dsort'>
      <label htmlFor="">
          <input type="radio" checked='checked'/>
              按热度排序
      </label>
      <label htmlFor="">
          <input type="radio" checked=''/>
              按时间排序
      </label>
      <label htmlFor="">
          <input type="radio" checked=''/>
              按评价排序
      </label>
  </div>
)