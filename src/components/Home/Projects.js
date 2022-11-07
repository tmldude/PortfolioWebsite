import React from 'react'

const Projects = () => {
  return (
    <section class="section-home-projects">
        <h1 className='section-home-projects__text'>Projects</h1>
        <div class="card-wrapper">
          <div class="card margin-right-small margin-bot-small">
            <div class="card__side card__side--front">
              <div class="card__picture card__picture-1">&nbsp;</div>
              <h4 class="card__heading">
                <span class="card__heading-span card__heading-span-1">
                  Foom
                </span>
              </h4>
              <div class="card__details">
                <ul>
                  <li>Chess Game created in React</li>
                  <li>Custom CSS Elements</li>
                  <li>Working on improving the AI using bitmasking and a minmax algorithm with alpha-beta pruning</li>
                </ul>
              </div>
            </div>
            <div class="card__side card__side--back card__side--back-1">
              <div class="card__cta">
                <div class="card__price-box">
                  <p class="card__price-only">try</p>
                  <p class="card__price-value">Foom</p>
                </div>
                <a href="/foom" class="btn-card">
                  Here
                </a>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card__side card__side--front">
              <div class="card__picture card__picture-2">&nbsp;</div>
              <h4 class="card__heading">
                <span class="card__heading-span card__heading-span-2">
                  Chess
                </span>
              </h4>
              <div class="card__details">
                <ul>
                  <li>Simple expandable search engine</li>
                  <li>Django API backend</li>
                  <li>Working on writing a more complicated webscraper with visualizations</li>
                </ul>
              </div>
            </div>
            <div class="card__side card__side--back card__side--back-2">
              <div class="card__cta">
                <div class="card__price-box">
                  <p class="card__price-only">Play Against</p>
                  <p class="card__price-value">My Chess Bot</p>
                </div>
                <a href="/chess" class="btn-card">
                  Here
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Projects