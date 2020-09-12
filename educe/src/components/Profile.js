import React from 'react'
import { Card, Icon } from 'semantic-ui-react'

const extra = (
  <a>
    <Icon name='user' />
    300 Points
  </a>
)

const CardExampleCardProps = () => (
  <Card
    image='https://image.isu.pub/171113213201-8763c1200f5928717c03edf6ea6b3c79/jpg/page_1.jpg'
    header='Hecuba Hale'
    meta='Graduating in 2024'
    description='Trojan High School'
    extra={extra}
  />
)

export default CardExampleCardProps
