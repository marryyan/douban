import React, { Component } from "react";
import Hot from "../assets/js/Hot-info-json";
import "../assets/style/hot.css";

class EachWrap extends Component {
  render() {
    let isNew = [];
    let data = this.props.data;
    if(data.isnew){
      isNew.push(<span className="isnew">新</span>)
    }
    return (
      <a className="each-wrap" href={data.href}>
        <img className="hot-img" src={data.img} alt={data.name}/>
        <div>
          {isNew}
          <span className="hot-name">{data.name}</span>
          <span className="hot-valuation">{data.valuation}</span>
        </div>
      </a>
    )
  }
}



export default class Bpage extends Component { 
  render() { 
    let jsxArr = [];
    Hot.map((item,i)=>{
      console.log(item);
      jsxArr.push(<EachWrap key={i} data={item}/>)
    })
    return (
      <div className="teleplay">
        { jsxArr }
      </div>
    );
  }
}
