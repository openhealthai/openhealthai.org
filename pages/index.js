import React from 'react';
import Head from 'next/head';
import Card from '../src/Card';
import Footer from '../src/Footer';

const Home = () => (
  <div className="root flex flex-col items-center justify-center">
    <Head>
      <title>Open Health AI</title>
    </Head>

    <main className="w-full flex-auto flex flex-col items-center justify-center py-5 sm:py-10 md:py-20">
      <h1 className="text-title text-center text-4xl md:text-5xl lg:text-6xl font-bold">
        Open Health AI
      </h1>

      <p className="lg:max-w-4xl text-description text-center text-sm md:text-base lg:text-lg p-4">
        We are an international collaborative effort focused on bringing open-source AI models to
        solving global and public health challenges. Our work includes curating, building, training,
        fine-tuning, deploying, validating, and testing models.
      </p>

      <div className="flex flex-wrap items-center justify-center mt-4 sm:mt-8 md:mt-16">
        <Card
          heading="Pneumonia detector for chest x-rays"
          repo="https://github.com/openhealthai/cxr-pneumonia-detector"
          image="https://pubs.rsna.org/na101/home/literatum/publisher/rsna/journals/content/cardiothoracic/2020/cardiothoracic.2020.2.issue-1/ryct.2020200034/20200212/images/large/ryct.2020200034.fig5.jpeg"
          imageSource="https://pubs.rsna.org/doi/10.1148/ryct.2020200028"
        >
          <p className="text-xs sm:text-sm md:text-base">
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
          <p className="text-xs sm:text-sm md:text-base">
            Chest CT pneumonia detector model. Soon to include a version fine-tuned on a dataset of
            COVID-19 patients.
          </p>
        </Card>
      </div>

      <div className="text-contact border border-contact rounded-full select-none mt-8 sm:mt-16 p-4">
        Contact Us: hello@openhealthai.org
      </div>
    </main>

    <Footer />

    <style jsx>{`
      .root {
        min-height: 100vh;
      }
    `}</style>
  </div>
);

export default Home;
