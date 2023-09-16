'use client'

import Header from '@component/header'
import Spacing from '@component/spacing'
import Center from '@component/center'
import Magnetic from '@component/magnetic'
import ArrowIcon from '@icon/arrow'

import { fadeUp, fadeUpTitle } from '@animation/fade'
import { slideUpLanding } from '@animation/slide'

import { motion } from 'framer-motion'
import WorkTogetherButton from '@component/button/together'
import React, { Fragment } from 'react'

const description = `I'm a passionate front end developer and ux designer dedicated to bring more business sales with stunning web design and result driving marketing systems.`

const title = 'Crafting Your 💡 Dream Ideas Into Masterpiece'

const Content = () => {
  return (
    <motion.section
      variants={slideUpLanding}
      animate="visible"
      initial="hidden"
      className="m-auto h-full w-full pt-2"
    >
      <Header />

      <Center className="h-[80%] flex-col">
        <Spacing className="flex h-max w-[80%] flex-wrap items-center justify-center gap-4 overflow-hidden">
          {title.split(' ').map((word, idx) => (
            <Fragment key={idx}>
              <motion.h3
                className={`h-max overflow-hidden pt-2 text-8xl text-white`}
                variants={fadeUpTitle}
                custom={idx}
              >
                {word}
              </motion.h3>
            </Fragment>
          ))}
        </Spacing>

        <motion.section
          transition={{ delay: 1 }}
          className="mt-3 flex h-[60px] w-[60%] flex-wrap items-center justify-center gap-1 overflow-hidden"
        >
          {description.split(' ').map((word, idx) => (
            <motion.p
              variants={fadeUp}
              transition={{ delay: 2 }}
              custom={idx}
              key={idx}
              className="h-max w-max text-center font-workSans text-stone-100 "
            >
              {word}
            </motion.p>
          ))}
        </motion.section>

        <a href="https://linkedin.com/in/peter-sahanaya" target="_blank">
          <WorkTogetherButton
            className="mt-4 w-[300px]  "
          >
            <Magnetic custom={0.3}>
              <motion.div
                variants={fadeUp}
                className="flex h-full w-full items-center justify-center gap-6"
              >
                <ArrowIcon size={40} color="#ffffff" />
                <p>Let&apos;s work together</p>
              </motion.div>
            </Magnetic>
          </WorkTogetherButton>
        </a>
      </Center>
    </motion.section>
  )
}

export default Content
