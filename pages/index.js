import React from 'react';
import Card from '../src/Card';
import Footer from '../src/Footer';

const Home = () => (
  <div className="container">
    <main>
      <h1 className="title">Open Health AI</h1>

      <p className="description">
        We are an international collaborative effort focused on bringing open-source AI models to
        solving global and public health challenges. Our work includes curating, building, training,
        fine-tuning, deploying, validating, and testing models.
      </p>

      <div className="grid">
        <Card
          heading="Pneumonia detector for chest x-rays"
          repo="https://github.com/openhealthai/cxr-pneumonia-detector"
          image="https://pubs.rsna.org/na101/home/literatum/publisher/rsna/journals/content/cardiothoracic/2020/cardiothoracic.2020.2.issue-1/ryct.2020200034/20200212/images/large/ryct.2020200034.fig5.jpeg"
          imageSource="https://pubs.rsna.org/doi/10.1148/ryct.2020200028"
        >
          <p>
            Chest x-ray pneumonia detector model based on the 1st-place winning entry in the{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.kaggle.com/c/rsna-pneumonia-detection-challenge"
            >
              Kaggle RSNA pneumonia detection challenge
            </a>
            .
          </p>
        </Card>

        <Card
          heading="Pneumonia detector for CT"
          repo="https://github.com/openhealthai/ct-pneumonia-detector"
          image="https://pubs.rsna.org/pb-assets/Radiology/slider/2-4-img8-1580824073370.gif"
          imageSource="https://pubs.rsna.org/doi/10.1148/radiol.2020200257"
        >
          <p>
            Chest CT pneumonia detector model. Includes a version fine-tuned on a dataset of
            COVID-19 patients.
          </p>
        </Card>
      </div>
    </main>

    <Footer />

    <style jsx>{`
      .container {
        min-height: 100vh;
        padding: 0 0.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      main {
        padding: 5rem 0;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      .title {
        margin: 0;
        line-height: 1.25;
        font-size: 4rem;
        color: #fde3a7;
      }

      .title,
      .description {
        text-align: center;
      }

      .description {
        color: #777777;
        line-height: 1.5;
        font-size: 1.2rem;
        max-width: 800px;
      }

      .grid {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;

        max-width: 1200px;
        margin-top: 4rem;
      }

      @media (max-width: 600px) {
        .grid {
          width: 100%;
          flex-direction: column;
        }
      }
    `}</style>
  </div>
);

export default Home;
