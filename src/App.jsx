import { useState } from 'react'

const deals = [
  {
    phone: 'Galaxy Z Fold5',
    colors: [
      {
        name: 'Phantom Black',
        cssColor: '#211E16',
        image:
          'https://stg-images.samsung.com/is/image/samsung/assets/africa_en/offer/kenya-2023-foldables-promo/fold5_404x430.png',
      },
      {
        name: 'Icy Blue',
        cssColor: '#A6AFC2',
        image:
          'https://stg-images.samsung.com/is/image/samsung/assets/africa_en/offer/kenya-2023-foldables-promo/fold5_404x430.png',
      },
      {
        name: 'Cream',
        cssColor: '#F0EAE0',
        image:
          'https://stg-images.samsung.com/is/image/samsung/assets/africa_en/offer/kenya-2023-foldables-promo/fold5_404x430.png',
      },
    ],
    deal: [
      {
        imgUrl:
          'https://stg-images.samsung.com/is/image/samsung/assets/africa_en/offer/kenya-2023-foldables-promo/phones.png',
        text: 'Get FREE Slim Pen cover when you buy Galaxy Z Fold5',
      },
      {
        imgUrl:
          'https://stg-images.samsung.com/is/image/samsung/assets/africa_en/offer/kenya-2023-foldables-promo/samsung-care.png',
        text: '1 year FREE Screen replacement*',
      },
    ],
    activeColor: 0,
    ctaUrl: '/africa_en/smartphones/galaxy-z-fold5/',
    voucher: 'GHS 1,500 e-voucher',
    bgColor: '#eaeff7',
  },
  {
    phone: 'Galaxy Z Flip5',
    colors: [
      {
        name: 'Mint',
        cssColor: '#d2e3aa',
        image:
          'https://stg-images.samsung.com/is/image/samsung/assets/africa_en/offer/kenya-2023-foldables-promo/flip5_404x430.png',
      },
      {
        name: 'Graphite',
        cssColor: '#53565A',
        image:
          'https://stg-images.samsung.com/is/image/samsung/assets/africa_en/offer/kenya-2023-foldables-promo/flip5_404x430.png',
      },
      {
        name: 'Lavender',
        cssColor: '#D4C7D9',
        image:
          'https://stg-images.samsung.com/is/image/samsung/assets/africa_en/offer/kenya-2023-foldables-promo/flip5_404x430.png',
      },
      {
        name: 'Cream',
        cssColor: '#F0EAE0',
        image:
          'https://stg-images.samsung.com/is/image/samsung/assets/africa_en/offer/kenya-2023-foldables-promo/flip5_404x430.png',
      },
    ],
    deal: [
      {
        imgUrl:
          'https://stg-images.samsung.com/is/image/samsung/assets/africa_en/offer/kenya-2023-foldables-promo/watch.png',
        text: 'Get FREE Slim Pen cover when you buy Galaxy Z Fold5',
      },
      {
        imgUrl:
          'https://stg-images.samsung.com/is/image/samsung/assets/africa_en/offer/kenya-2023-foldables-promo/samsung-care.png',
        text: '1 year FREE Screen replacement*',
      },
    ],
    activeColor: 3,
    ctaUrl: '/africa_en/smartphones/galaxy-z-flip5/',
    voucher: 'GHS 2000 e-voucher',
    bgColor: '#edf6f1',
  },
]

function App() {
  const [activeColors, setActiveColors] = useState(
    deals.map((deal) => deal.activeColor),
  )

  const handleSetActiveColor = (index, colorIndex) => {
    const updatedActiveColors = [...activeColors]
    updatedActiveColors[index] = colorIndex
    setActiveColors(updatedActiveColors)
  }

  return (
    <main className="cards">
      {deals.map((deal, index) => (
        <Card
          key={deal.phone}
          {...deal}
          activeColor={activeColors[index]}
          setActiveColor={(colorIndex) =>
            handleSetActiveColor(index, colorIndex)
          }
        />
      ))}
    </main>
  )
}

function Card({
  phone,
  imgUrl,
  ctaUrl,
  voucher,
  colors,
  activeColor,
  setActiveColor,
  bgColor,
  deal,
}) {
  const activeColorData = colors[activeColor]

  return (
    <>
      <div className="card" style={{ backgroundColor: bgColor }}>
        <h3>Buy the {phone} and get:</h3>
        {/* <div className="voucher">{voucher}</div> */}
        <div className="deal-wrapper">
          <div className="phone-wrapper">
            <div className="active-photo">
              <img
                className="card__img"
                src={activeColorData.image}
                alt={`Active ${activeColorData.name}`}
              />
            </div>
            <h4 className="card__title">{phone}</h4>
            <p className="colors">
              Colour : <span>{activeColorData.name}</span>
            </p>
            <div className="colors__btns">
              {colors.map((color, index) => (
                <div
                  role="button"
                  key={`${phone}${color.cssColor}`}
                  className={`color__btn ${
                    activeColor === index ? 'active' : ''
                  }`}
                  style={{ backgroundColor: color.cssColor }}
                  onClick={() => setActiveColor(index)}></div>
              ))}
            </div>
            <a href={ctaUrl} className="card__cta">
              Learn more
            </a>
          </div>
          <div className="deals">
            <div className="deal">
              <div className="deal-item">
                <img src={deal[0].imgUrl} alt={`${phone} deal`} />
                <p className="deal__text">{deal[0].text}</p>
              </div>
            </div>
            <img
              className="deal__icon"
              src="https://stg-images.samsung.com/is/image/samsung/assets/africa_en/offer/kenya-2023-foldables-promo/plus_83x83.png"
              alt="icon"
            />
            <div className="deal">
              <div className="deal-item">
                <img src={deal[1].imgUrl} alt={`${phone} deal`} />
                <p className="deal__text">{deal[1].text}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
