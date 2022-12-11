
import { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Modal, { ModalDialog} from '../components/modal'
import useSWR from 'swr'
import axios from "axios"
import useSWRMutation from 'swr/mutation'

export default function Tableaupage(props) {
    const [profile, setProfile] = useState({userId:"", displayName:"", pictureUrl:""})
    const { liff, liffError } = props;
  
    useEffect(() => {
      handleProfile()
    }, [])
  
    const handleProfile = async () => {
      try {
        liff?.ready && await liff.ready.then( async () => {
          const profile = await liff.getProfile()
          console.log('liff', liff);
          console.log('isLoggedIn', liff.isLoggedIn());
          if (liff.isLoggedIn()) {
              // console.log('profile', profile);
              // setProfile(profile)
              // 取得使用者公開資料
              // 後台的「Scopes」要設定開啟 profile, openid
              liff.getProfile()
                  .then((profile) => {
                    console.log("取得使用者公開資料");
                    console.log(profile);
                    setProfile(profile);
              });
  
            }
        });
      } catch (err) {
        // 發生錯誤
        console.log(err.code, err.message)
        // alert(err.message)
      }
    };

  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false)
  const [keyValue, setKeyValue] = useState(0);
  const [value, setValue] = useState("b");
  const [qty, setQty] = useState(0);
  const [item, setItem] = useState("");
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
    // {value: "狼尾草", text: "狼尾草"},
    {value: "紅豆", text: "紅豆"},
    {value: "蓮霧", text: "蓮霧"},
    {value: "田菁", text: "田菁"},
    {value: "毛豆", text: "毛豆"},
    // {value: "太陽麻", text: "太陽麻"},
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
    // setOption(options[2].value);
    // const [qty, setQty] = useState(0);
    // const [item, setItem] = useState("");
    console.log(event.target.value);
    setItem(event.target.value);
  };
  const handleChange2 = event => {
    console.log(event.target.value);
    setQty(event.target.value);
  };


  // console.log(option.width);
  // console.log(option.height);



  function logValue() {
    console.log(value);
  }

  const address = `https://api.puff.tw/member_money/${profile.userId}`
  // const address = `https://api.puff.tw/member_money/Ue563aff03e86cdf9fd457d38671edfe4`;
  const fetcher = async (url) => await axios.get(url).then((res) => res.data);
  const { data, error } = useSWR(address, fetcher);
  console.log('data', data)
  console.log('data', data?.money)

  const order = {
    item: item,
    qty: qty,
    price: 100,
    total: qty*100,
    money_before: data ? data.money : 0,
    money_after: data? data.money - (qty*100) : 0
  }


  const headers = new Headers({
    "Content-Type": "application/x-www-form-urlencoded"
  });
  
  const urlencoded = new URLSearchParams({
    "grant_type": "password",
    "username": "test",
    "password": "xyz1234",
    "scope": "write",
    "client_id": "test",
    "client_secret": "test12",
  });
  
  const opts = {
    method: 'POST',
    headers: headers,
    body: urlencoded,
  };

  async function updateMoney(url, { arg }) {
    await fetch(url, {
      method: 'POST',
      // headers: headers,
      headers: {
        'Accept': 'application/json'
        // 'Content-Type': 'application/json'
      },
      body: arg,
      // body: JSON.stringify(arg),
    })
    // await fetch(url, {
    //   method: 'POST',
    //   body: JSON.stringify(arg)
    // })
  }
  

  const address2 = `https://api.puff.tw/money/set`;
  const { trigger, isMutating } = useSWRMutation(address2, updateMoney, /* options */)
  const handleSubmit = async event => {
    if (data === undefined) {
      alert("請先登入");
      setOpen(false);
      return;
    }
    if (data?.money === undefined) {
      alert("錢不夠");
      setOpen(false);
      return;
    }
    if (order.money_after <= 0 ) {
      alert("錢不夠");
      setOpen(false);
      return;
    }
    if (item === "") {
      alert("請選擇產品");
      setOpen(false);
      return;
    }
    if (qty === 0) {
      alert("請選擇數量");
      setOpen(false);
      return;
    }
    // alert("感謝您的訂單。");
    const uid = profile.userId;
    const post = {
      user_id: uid,
      amount: order.money_after
    };

    const urlencoded = new URLSearchParams(post);
    // const result = await trigger(urlencoded, /* options */)
    // const result = await trigger(urlencoded, /* options */)
    
    const result = update_money(uid, order.money_after)
    console.log('result', result);
    // if (result.money === order.money_after){

    // }


    // const postData = async (post) => {
    //   await axios.post(address2, post);
    //   await mutate();
    //   // //clear the form
    //   // setForm({ ...form, comment: "" });
    // };


    // const { data2, error } = useSWR(address2, fetcher2, {
    //   revalidateOnFocus: false,
    // });

    setOpen(false);
    // console.log(event.target.value);
  };


  const update_money = async (user_id, amount) => {
    const body = new FormData();
    // const url = `https://api.puff.tw/money/set`;
    const url = `https://api.puff.tw/money/set?user_id=${user_id}&amount=${amount}`;
    // const field_name1 = "user_id";
      // body.append(field_name1, "Ue563aff03e86cdf9fd457d38671edfe4");
      // const field_name2 = "amount";
      // body.append(field_name2, 100);
    const response = await fetch(url, {
      method: "POST",
      // mode: 'no-cors',
      // headers: {
      //   'Accept': 'application/json',
      //   'Content-Type': 'application/json'
      // },
      body: body
    });
    const json = await response.json();
    return json;
    // {
    //   "class": "sweetpotato"
    // }
  };


  return (
    // <Layout onButtonClick={() => setKeyValue(keyValue + 1)} >
    //   <div className="flex">
    //     <Sidebar onButtonClick={() => setKeyValue(keyValue + 1)}  />
    //   {/* </div>
    // </Layout> */}
    // key={keyValue}
    <section style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
      {/* <div className="" style={{ height: '50px', fontSize: "20pt" }}>
        <span> 你還有 - </span>
        <span> 600 NT$ </span>
      </div> */}
      <div className="" style={{
        height: '200px', fontSize: "20pt",
        display: "flex", flexDirection: "column",
        justifyContent: "space-evenly", maxWidth: "300px" }}>
        <span> 你有 { data ? data.money : 0 } 金額</span>
        <select onChange={handleChange} name="item" id="fruit-select"
          style={{ fontSize: "20pt" }}
        >
          {arr.map(option => (
            <option key={option.value} value={option.value}>
              {option.text}
            </option>
          ))}
        </select>
        {/* &nbsp;&nbsp;&nbsp;&nbsp; */}
        <select onChange={handleChange2} name="qty" id="count-select"
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

        {/* &nbsp;&nbsp;&nbsp;&nbsp; */}
        {/* <button
          onClick={ handleSubmit }
          style={{ fontSize: "20pt" }}
        >下單</button> */}
        <ModalDialog modal={open} setModal={setOpen} order={order} handleSubmit={handleSubmit}/>
      </div>


      {/* <div
        // className="w-full px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <h3 className="md:text-lg text-gray-500">
        Whats on your mind, Harsh ?
        </h3>
      </div> */}

      {/* <Modal open={isOpen} /> */}

      {/* <div className="flex flex-col h-screen justify-center items-center">
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
        <ModalDialog isOpen={isOpen} setIsOpen={setIsOpen} />
        <button onClick={() => setIsOpen(true)}>下單</button>
      </div> */}

      <div className="" style={{ width: '100%'}}>
          <iframe style={{ width: '100%', height: '1150px' }} src="/tableau/index.html#elements" ></iframe>
      </div>
    </section>
  );
}
