'use client'

import Card from '@component/card'
import Center from '@component/center'
import Description from './description'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const dummyWorks = [
  {
    title: 'P3DAS',
    image: '/Shop.png',
    categories: ['Next Js', 'Node Js', 'Restful Api', 'Prisma ORM'],
    description:
      'Bringing aesthetic, easily-editable, no-code websites to life at lightning speed with your favored designs.',
  },
  {
    title: 'P3TR',
    image: '/Personal.png',
    categories: ['Next Js', 'Typescript', 'Three Js', 'Tailwind Css'],
    description:
      'Creating web and app designs from scratch and molding them into research led, user-friendly products.',
  },
]

const WorkContent = () => {


  return (
    <section ref={containerRef} className="h-full w-full">
      <Center className="flex-col items-start justify-start gap-12 px-14">
        <Description inView={inView} />

        <section className="mt-8 flex h-full w-full flex-col gap-3">
          {dummyWorks.map((work, idx) => (
            <Card key={idx} {...work} />
          ))}
        </section>
      </Center>
    </section>
  )
}

export default WorkContent
