import React from 'react'
import '../components-css/TrendingSection.css';
import foodpic from '../assets/Falafel.jpg'

function TrendingSection() {
    return (
        <>
            <div className='trending-section'>
                <p style={{textAlign: 'center', fontSize: '40px',marginBottom: '30px', fontWeight: 'bolder'}}> Trending Menu Items</p>
                <div className='grids'>
                  <div className='cards'>
                    <div style={{height: '55%', borderBottom: '1px solid black'}}>
                      <img src={foodpic} alt="" />
                    </div>
                    <div style={{height: '40%',}}>
                      <div className='card-description'>
                        <p className='price-title'>
                          <span style={{fontWeight: 'bolder',fontSize: '20px'}}>Falafel</span>
                          <span style={{fontWeight: 'bolder',fontSize: '20px', color: 'black'}}>$3.00</span>
                        </p>
                        <p className='food-description'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid dolore a labore ipsam velit minima non id odio? Quo, quod?
                        </p>
                        <button className='food-card-btn'>
                          Order Now
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className='cards'>
                    <div style={{height: '55%', borderBottom: '1px solid black'}}>
                      <img src={foodpic} alt="" />
                    </div>
                    <div style={{height: '40%',}}>
                      <div className='card-description'>
                        <p className='price-title'>
                          <span style={{fontWeight: 'bolder',fontSize: '20px'}}>Falafel</span>
                          <span style={{fontWeight: 'bolder',fontSize: '20px', color: 'black'}}>$3.00</span>
                        </p>
                        <p className='food-description'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid dolore a labore ipsam velit minima non id odio? Quo, quod?
                        </p>
                        <button className='food-card-btn'>
                          Order Now
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className='cards'>
                    <div style={{height: '55%', borderBottom: '1px solid black'}}>
                      <img src={foodpic} alt="" />
                    </div>
                    <div style={{height: '40%',}}>
                      <div className='card-description'>
                        <p className='price-title'>
                          <span style={{fontWeight: 'bolder',fontSize: '20px'}}>Falafel</span>
                          <span style={{fontWeight: 'bolder',fontSize: '20px', color: 'black'}}>$3.00</span>
                        </p>
                        <p className='food-description'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid dolore a labore ipsam velit minima non id odio? Quo, quod?
                        </p>
                        <button className='food-card-btn'>
                          Order Now
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className='cards'>
                    <div style={{height: '55%', borderBottom: '1px solid black'}}>
                      <img src={foodpic} alt="" />
                    </div>
                    <div style={{height: '40%',}}>
                      <div className='card-description'>
                        <p className='price-title'>
                          <span style={{fontWeight: 'bolder',fontSize: '20px'}}>Falafel</span>
                          <span style={{fontWeight: 'bolder',fontSize: '20px', color: 'black'}}>$3.00</span>
                        </p>
                        <p className='food-description'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid dolore a labore ipsam velit minima non id odio? Quo, quod?
                        </p>
                        <button className='food-card-btn'>
                          Order Now
                        </button>
                      </div>
                    </div>
                  </div>

                </div>
            </div>
        </>
    )
}

export default TrendingSection
