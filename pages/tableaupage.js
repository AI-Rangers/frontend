
import { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'

export default function Tableaupage() {
  const [keyValue, setKeyValue] = useState(0);
  const [value, setValue] = useState("b");
  const [value2, setValue2] = useState(0);
  const [option, setOption] = useState({ width: 0, height: 0 });
  const options = [
    {
      label: 'first',
      value: 'ffffff',
    },
    {
      label: 'second',
      value: { width: 20, height: 20 },
    },
    {
      label: 'third',
      value: { width: 30, height: 30 },
    },
  ];

  const selectHandler = (e) => {
    console.log(e.target.value);
    switch (e.target.value) {
      case 'first':
        setOption(options[0].value);
        break;
      case 'second':
        setOption(options[1].value);
        break;
      case 'third':
        setOption(options[2].value);
        break;
    }
  };

  const arr = [
    {value: '', text: '請選擇農產品'},
    {value: "蘆筍", text: "蘆筍"},
    {value: "竹筍", text: "竹筍"},
    {value: "檳榔", text: "檳榔"},
    {value: "青花菜", text: "青花菜"},
    {value: "花椰菜", text: "花椰菜"},
    {value: "結球白菜", text: "結球白菜"},
    {value: "韭菜", text: "韭菜"},
    {value: "釋迦", text: "釋迦"},
    {value: "葡萄", text: "葡萄"},
    // {value: "溫室", text: "溫室"},

    {value: "蔥", text: "蔥"},
    {value: "甘藍", text: "甘藍"},
    {value: "檸檬", text: "檸檬"},
    {value: "萵苣", text: "萵苣"},
    {value: "荔枝", text: "荔枝"},
    {value: "龍眼", text: "龍眼"},
    {value: "絲瓜", text: "絲瓜"},
    {value: "芒果", text: "芒果"},
    {value: "洋蔥", text: "洋蔥"},
    // {value: "非作物", text: "非作物"},

    {value: "木瓜", text: "木瓜"},
    {value: "百香果", text: "百香果"},
    {value: "梨", text: "梨"},
    {value: "狼尾草", text: "狼尾草"},
    {value: "紅豆", text: "紅豆"},
    {value: "蓮霧", text: "蓮霧"},
    {value: "田菁", text: "田菁"},
    {value: "毛豆", text: "毛豆"},
    {value: "太陽麻", text: "太陽麻"},
    {value: "甘藷", text: "甘藷"},

    {value: "芋", text: "芋"},
    {value: "茶樹", text: "茶樹"},
    {value: "茭白筍", text: "茭白筍"}
  ];

  const arr2 = [
    {value: '', text: '請選擇數量'},
    {value: "1", text: "1"},
    {value: "2", text: "2"},
    {value: "3", text: "3"},
    {value: "4", text: "4"},
    {value: "5", text: "5"},

    // {value: "蘆筍",     text: "100"},
    // {value: "竹筍",     text: "100"},
    // {value: "檳榔",     text: "100"},
    // {value: "青花菜",   text: "100"},
    // {value: "花椰菜",   text: "100"},
    // {value: "結球白菜", text: "100"},
    // {value: "韭菜",     text: "100"},
    // {value: "釋迦",     text: "100"},
    // {value: "葡萄",     text: "100"},
    // {value: "溫室", text: "溫室"},

    // {value: "蔥", text: "蔥"},
    // {value: "甘藍", text: "甘藍"},
    // {value: "檸檬", text: "檸檬"},
    // {value: "萵苣", text: "萵苣"},
    // {value: "荔枝", text: "荔枝"},
    // {value: "龍眼", text: "龍眼"},
    // {value: "絲瓜", text: "絲瓜"},
    // {value: "芒果", text: "芒果"},
    // {value: "洋蔥", text: "洋蔥"},
    // // {value: "非作物", text: "非作物"},

    // {value: "木瓜", text: "木瓜"},
    // {value: "百香果", text: "百香果"},
    // {value: "梨", text: "梨"},
    // {value: "狼尾草", text: "狼尾草"},
    // {value: "紅豆", text: "紅豆"},
    // {value: "蓮霧", text: "蓮霧"},
    // {value: "田菁", text: "田菁"},
    // {value: "毛豆", text: "毛豆"},
    // {value: "太陽麻", text: "太陽麻"},
    // {value: "甘藷", text: "甘藷"},

    // {value: "芋", text: "芋"},
    // {value: "茶樹", text: "茶樹"},
    // {value: "茭白筍", text: "茭白筍"}
  ];


  const handleChange = event => {
    console.log(event.target.value);
  };

  alert("感謝您的訂單。");
  // console.log(option.width);
  // console.log(option.height);

  function logValue() {
    alert("感謝您的訂單。");
    // console.log(value);
  }

  return (
    // <Layout onButtonClick={() => setKeyValue(keyValue + 1)} >
    //   <div className="flex">
    //     <Sidebar onButtonClick={() => setKeyValue(keyValue + 1)}  />
    //   {/* </div>
    // </Layout> */}
    // key={keyValue}
    <section style={{ textAlign: 'center' }}>
      {/* <div className="" style={{ height: '50px', fontSize: "20pt" }}>
        <span> 你還有 - </span>
        <span> 600 NT$ </span>
      </div> */}
      <div className="" style={{ height: '50px', fontSize: "20pt" }}>
        <span> 農產品 - </span>
        <select onChange={handleChange} name="fruits" id="fruit-select"
          style={{ fontSize: "20pt" }}
        >
          {arr.map(option => (
            <option key={option.value} value={option.value}>
              {option.text}
            </option>
          ))}
        </select>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <select onChange={handleChange} name="count" id="count-select"
          style={{ fontSize: "20pt" }} 
        >
          {arr2.map(option => (
            <option key={option.value} value={option.value}>
              {option.text}
            </option>
          ))}
        </select>
{/* 
        <select value={options.value} onChange={(e) => selectHandler(e)}>
          {options.map((option) => (
            <option key={option.label} value={option.value}>{option.label}</option>
          ))}
        </select>

        <select
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        >
          <option value="a">a</option>
          <option value="b">b</option>
          <option value="c">c</option>
          <option value="d">d</option>
        </select>

        <select
          value={value2}
          onChange={(e) => {
            setValue2(e.target.value);
          }}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select> */}

        &nbsp;&nbsp;&nbsp;&nbsp;
        <button
          onClick={logValue}
          style={{ fontSize: "20pt" }}
        >下單</button>

      </div>

      <div className="" style={{ width: '100%'}}>
          <iframe style={{ width: '100%', height: '1300px' }} src="/tableau/index.html#elements" ></iframe>
      </div>
    </section>
  );
}
