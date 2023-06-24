import React from 'react'
import AnimatedCursor from 'react-animated-cursor'

const AnimCurs = () => {
  return (
    <AnimatedCursor
    innerSize={16}
    outerSize={24}
    color='90,75,218'
    outerAlpha={0.2}
    innerScale={0.7}
    outerScale={5}
    clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}
    />
  )
}
export default AnimCurs