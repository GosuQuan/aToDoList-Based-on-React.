import { useEffect, useState } from "react";


import Edit from "./Components/Edit";
import List from "./Components/List";
import "../../index.css";
const Home = () => {
  // const [a ,setA] = useState(0)
  // function plus(){
  //     console.log('test');
  //     // setA(a+200) 一般不这么写，因为这样不会准确拿到上一次的值，如果多值合并
  //     setA((prev)=>{
  //        return prev+200;
  //     })
  // }
const [data,setData] = useState([]);//开始，data为空数组
useEffect(()=>{
    //绑定的事情
    return ()=>{
        //取消绑定
    }
},[data])
  return (
    
    <div className="app">
    
      <Edit add={setData}/>
      <List listData={data} deleteData={setData} />
    </div>
  );
};

export default Home;
