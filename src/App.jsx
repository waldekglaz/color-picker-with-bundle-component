import { useState } from 'react'

const deals = [
  {
    phone: 'Galaxy Z Fold5',
    colors: [
      {
        name: 'Phantom Black',
        cssColor: '#211E16',
        image:
          'https://images.samsung.com/ae_ar/smartphones/galaxy-z-flip5/images/galaxy-z-flip5-common-introduction-banner-a.jpg',
      },
      {
        name: 'Icy Blue',
        cssColor: '#A6AFC2',
        image:
          'https://images.samsung.com/ae_ar/smartphones/galaxy-z-flip5/images/galaxy-z-flip5-common-introduction-banner-a.jpg',
      },
      {
        name: 'Cream',
        cssColor: '#F0EAE0',
        image:
          'https://images.samsung.com/ae_ar/smartphones/galaxy-z-flip5/images/galaxy-z-flip5-common-introduction-banner-a.jpg',
      },
    ],
    activeColor: 0,
    ctaUrl: '/africa_en/smartphones/galaxy-z-fold5/',
    voucher: 'GHS 1,500 e-voucher',
    bgColor: '#F4F5FE',
  },
  {
    phone: 'Galaxy Z Flip5',
    colors: [
      {
        name: 'Mint',
        cssColor: '#d2e3aa',
        image:
          'https://images.samsung.com/ae_ar/smartphones/galaxy-z-flip5/images/galaxy-z-flip5-common-buynow-banner-a.jpg',
      },
      {
        name: 'Graphite',
        cssColor: '#53565A',
        image:
          'https://images.samsung.com/ae_ar/smartphones/galaxy-z-flip5/images/galaxy-z-flip5-common-buynow-banner-a.jpg',
      },
      {
        name: 'Lavender',
        cssColor: '#D4C7D9',
        image:
          'https://images.samsung.com/ae_ar/smartphones/galaxy-z-flip5/images/galaxy-z-flip5-common-buynow-banner-a.jpg',
      },
      {
        name: 'Cream',
        cssColor: '#F0EAE0',
        image:
          'https://images.samsung.com/ae_ar/smartphones/galaxy-z-flip5/images/galaxy-z-flip5-common-buynow-banner-a.jpg',
      },
    ],
    activeColor: 3,
    ctaUrl: '/africa_en/smartphones/galaxy-z-flip5/',
    voucher: 'GHS 2000 e-voucher',
    bgColor: '#E2EEEA',
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
}) {
  const activeColorData = colors[activeColor]

  return (
    <div className="card" style={{ backgroundColor: bgColor }}>
      <div className="voucher">{voucher}</div>
      <div className="active-photo">
        <img
          src={activeColorData.image}
          alt={`Active ${activeColorData.name}`}
        />
      </div>
      <h3 className="card__title">{phone}</h3>
      <p className="colors">
        Colour : <span>{activeColorData.name}</span>
      </p>
      <div className="colors__btns">
        {colors.map((color, index) => (
          <div
            role="button"
            key={`${phone}${color.cssColor}`}
            className={`color__btn ${activeColor === index ? 'active' : ''}`}
            style={{ backgroundColor: color.cssColor }}
            onClick={() => setActiveColor(index)}></div>
        ))}
      </div>
      <a href={ctaUrl} className="card__cta">
        Learn more
      </a>
    </div>
  )
}

export default App
