import './App.css';
function App() {
  let products = [
    {
      id: 1,
      name: "POCO F7 5G",
      price: "33,999",
      rating: 4.9,
      img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS-pAhicdAl-z2BqB5Yrka9ohhV0__HMm9ZsRIGM7320ih3ebYot0MpQcneds9wCwDei-ZC4E5iAV8Ac0aYSZWhEPWASJGEAyIDNBuKSIW6"
    },
    {
      id: 2,
      name: "Nova 2 5G",
      price: "12,999",
      rating: 4.6,
      img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTAQ-eLv7G4bbh7aqzw8CE-Bzdbllp5aQCPoG9bYEjZZp5G4th_2Wdr5gxPO364HH7ioJUCS5eJC9H4HmYJTVK5KpCMFuBIqwWzKAwbRsM"
    },
    {
      id: 3,
      name: "Google Pixel 10a",
      price: "47,000",
      rating: 4.7,
      img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTGs7xHkSOYa-JTknQsgmiAocuQ1BTRCSvBMCmdEKoP16d-aUQzUTWsFZBrQ2tHO3zDIueOi119-Ks_6Uk6jhR8PmEKHLObsxqWdqCx7SuPQC2G-fFetnOrsKMJ7-qvq6C8XmZC_ktLwg&usqp=CAc"
    },
    {
      id: 4,
      name: "vivo X200T",
      price: "43,500",
      rating: 4.4,
      img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSxJc1svI96kSDV8Wtk-fL2sa6eqzNXg2HobCl6R22RzHW9PQkApq8Eb5VOmFAuWyZjNZwC5ZNhqwCjB2Jta9_8JVhGCsMIP4lLQqcwcFehapmrfvAc-FcE"
    },
    {
      id: 5,
      name: "OPPO K14X 5G",
      price: "34,200",
      rating: 4.2,
      img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTj-zCYH2iMxHMXouHahPvtRylHPeDyrjIEUY5wrgK33G4Yf_HQA_BpplXMmXmwMtC-lx6PmRU5utzgBNlahtsDVwN5UbG1dxhe1XfhiF7p_6BIRbz6X9sVlqoC_Ic2p9uVqP62PI8&usqp=CAc"
    },
    {
      id: 6,
      name: "realme P4 Power",
      price: "25,890",
      rating: 4.1,
      img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS3G7hhDJCjujrFT5Mbu0OY0mKV3ka1RfZypqD7jgNY0_-bl0QF99FAobV3KknKJPZqgFP4vXch6ksdJ0ZPz4lhfx3wg8fQJxhbnUmN73KIERwjGcT62x6lIgJe9u0mxtcVNQLQMLODDw&usqp=CAc"
    },
    {
      id: 7,
      name: "Galaxy S25",
      price: "1,20,000",
      rating: 4.6,
      img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQP8B0PEgZkEpI0F351mYAK72IUn4uFav312llEOkxYWL2lO5VgjE-hlj24A8YImP9PVxjcZwwLvIHStp2fM27mI-0fviaXdf6QxBHHNINyp7VDAlpbIRwBmkCLxaTLSAJsNw47xKzIWg&usqp=CAc"
    },
    {
      id: 8,
      name: "edge 70 fusion",
      price: "35,900",
      rating: 4.8,
      img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQwdsh63QmKmE60tpB8KQUKxwT81-FD6TOnC0gAVS5cI6EKiixr3mNrbURfm2rA94pXvRfMRtm2yoM8NsxtXNvhY3bR1fLLEnMjOJ9C_Z4&usqp=CAc"
    },
    {
      id: 9,
      name: "moto g35",
      price: "70,900",
      rating: 4.0,
      img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT0O5TI83Z5qLOD98lDx_XUWKMMeqWckQP5UODgrS9q50xPp4XliBNFtpTuSa5Vaocr_WzCHQ5bZGx2MMo5DaE2-yVPu3X3wMBwb9dyEFNmPsIm8AaMsVTmCA"
    },
    {
      id: 10,
      name: "edge 70 pro",
      price: "20,900",
      rating: 3.6,
      img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR55tf3nPQ1Ss_0Uvy-MhUaedl7rOaPJvH4sZABZQLuUmU4S_wdme_nTygUznaPSasTQkfAOZTnoOyqgiR2dGyBOdGsMG6hsFYFKKud3ur_F3tHaFKHg10HjGz6i77r&usqp=CAc"
    },
    {
      id: 11,
      name: "iPhone Air",
      price: "95,900",
      rating: 3.9,
      img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR9q_olQjlDfIgpFIpIH5oNV_jooywYh0IfFF-GBDwcuc3EKVEmWygH9847-3BJCkEFTKZ0wJnnQ_ZxqLUzpNorjbzFyJNcWw72HjwdOCy8&usqp=CAc"
    },
    {
      id: 12,
      name: "iPhone 17e",
      price: "64,900",
      rating: 4.8,
      img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQySb8_mo364Z8USHSwZEB_FHKNqIN17dN9Zls4l95840GGu_lWXW7XZjKX3Ogb99PA-0GlLUnBBm3cNOEeWePw4c-WgxLEKhcCxqcDYPefRUsX8PO1KkooOT2KM0TaLQ&usqp=CAc"
    },
    {
      id: 13,
      name: "iPhone 16",
      price: "67,790",
      rating: 4.7,
      img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRfywCgxRtzfWMIPNLQWqVWT-q99suD8tm4pgkTJeLzsMyen8N6cBPbFKSss1Gc66axAITUs5VukoY0CnYhTeuLhVREbt2R"
    },
    {
      id: 14,
      name: "Pixel 10 Pro Fold",
      price: "75,900",
      rating: 4.3,
      img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR4yv-DSNIBwNkipDT8WEridOXejKj1pfeUhTFdoXm4ODpeCBzqp-bhUc_v2RdL2J704Dbd7nCOgIWIkW4WChQssDitECQXXXq-sIHilLTKyceihypYkyKWOQ"
    },
    {
      id: 15,
      name: "iPhone 15",
      price: "56,900",
      rating: 4.9,
      img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRgDVLegDd3sEzXpp-VAUpugHDya4A9FK5GlFmQLSFMkAOUjbM8vTFrLejCceQWbVmplfEpkIe6LH-kW2skg3jiXUMC1OV_VQ"
    },
    {
      id: 16,
      name: "iPhone 17",
      price: "77,990",
      rating: 4.6,
      img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQS4DG459UmN0UGvachq0onGJ-5Je11HYRSvvNtYh9Rk6lKwAUK-LYn6j7eGZRW8W50SF1PaBqRCTohbfTA1S1iB6ZG-3p_7aZmOdtacyeu&usqp=CAc"
    },
    {
      id: 17,
      name: "Samsung S24",
      price: "1,19,999",
      rating: 4.7,
      img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSQysb0DQr9d5HbxFrZNzdTlFy_xuIJn96GLtBdN5eaK-uUP29pzzoOfBP3ix75bRwDDg9sBNjsX2k5u87TMkXzeq3KJJG5q6JSu2XIfspQlJHZZjHOKFa6--b-LLgy6-pv90C9cVo&usqp=CAc"
    },
    {
      id: 18,
      name: "OnePlus 12",
      price: "59,999",
      rating: 4.6,
      img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS6HYHGXgV-WxOTAxcOCgwpQdBQD1tq99gV94hpiNSpD35IaUUUCP44Re_Nl3qat82LWoJ18qSa5KpSD8HtXJjU4P2BHaht2UDFxRa0jCecmD8ycZgzuqrUk-5n44OIvrUeuNVzaH3YDQ&usqp=CAc"
    },
    {
      id: 19,
      name: "Realme GT pro",
      price: "78,999",
      rating: 4.4,
      img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRuQhwclKpg4wBEnmIyGNUjaqffZV7NaowObkWxfy6Mghr64C2-xQ-4ZBITi3vDe-FeA8HrfSHDFQZiVhwb7a3b1HoV58seS6uARnCsFWMr&usqp=CAc"
    },
    {
      id: 20,
      name: "Redmi Note 13",
      price: "21,999",
      rating: 4.3,
      img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQuMkrffaaK2uv5MvZZVp8uv8ah4AKKgdEfsWzX3xJymrUHsbXGVPWF927_VryCYQ4uxCXO5TIh_XOW8Xt-kiyF_FlHC7WH"
    }
  ];
   
      let result=products.map((item,ind)=>{
          return(
            <div className="card" key={item.id}>
              <img src={item.img} alt="" className='image'/>
              <h1>{item.name}</h1>
              <h3>{item.price}</h3>
              <h5>{item.rating}</h5>
              <button className='btn'>Buy Now</button>
            </div>
          )
      });


  return (
    <div>
          <div className='container'>
              {result}
          </div>
    </div>
  )
}


export default App
