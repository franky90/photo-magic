import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const features = [
  {
    name: 'Creative Transformations',
    description: 'Transform your children\'s photos into magical moments with AI-powered editing.',
    icon: '✨',
  },
  {
    name: 'Fantasy Characters',
    description: 'Turn your little ones into superheroes, princesses, or any character they dream of.',
    icon: '👑',
  },
  {
    name: 'Background Magic',
    description: 'Change any background to create the perfect setting for your photos.',
    icon: '🌅',
  },
];

const Home: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative isolate overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-primary-50" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        </div>
        
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-32 sm:pb-32 lg:flex lg:px-8 lg:py-40">
          <motion.div
            className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mt-24 sm:mt-32 lg:mt-16">
              <motion.div
                className="inline-flex space-x-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <span className="rounded-full bg-primary-500/10 px-3 py-1 text-sm font-semibold leading-6 text-primary-600 ring-1 ring-inset ring-primary-500/20">
                  AI-Powered Magic
                </span>
                <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-600">
                  <span>✨</span>
                  <span>Transform Your Photos</span>
                </span>
              </motion.div>
            </div>
            <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-400">
              Transform Your Children's Photos into Magic
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Create unforgettable memories with AI-powered photo editing. Turn your children's photos into magical moments, fantasy characters, and more.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Link to="/gallery" className="btn-primary">
                View Gallery
              </Link>
              <Link to="/contact" className="btn-secondary">
                Get Started
              </Link>
            </div>
          </motion.div>
          <motion.div
            className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="relative mx-auto w-full max-w-lg">
              <div className="relative rounded-2xl bg-white shadow-xl ring-1 ring-gray-900/10">
                <img
                  src="https://placehold.co/600x400/eee/666?text=Example+Photo"
                  alt="Example transformation"
                  className="rounded-2xl"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Feature section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl lg:text-center">
          <motion.h2
            className="text-base font-semibold leading-7 text-primary-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Magical Transformations
          </motion.h2>
          <motion.p
            className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Everything you need to create magical photos
          </motion.p>
          <motion.p
            className="mt-6 text-lg leading-8 text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Our AI-powered photo editing service brings your children's photos to life with creative transformations and magical effects.
          </motion.p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                className="card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <span className="text-3xl">{feature.icon}</span>
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Home; 