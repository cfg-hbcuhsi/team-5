import React from 'react';
import { Button, Icon, Image, Item, Label } from 'semantic-ui-react'
import "./Incentives.css"

const paragraph = <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />

export default function Incentives() {
	return(
		<Item.Group divided>
    <Item>
      <Item.Image src='https://upload.wikimedia.org/wikipedia/en/0/01/Golden_State_Warriors_logo.svg' />

      <Item.Content>
        <Item.Header as='a'> 2 Tickets to a Warriors Game</Item.Header>
        <Item.Meta>
          <span className='cinema'>40,000 Points</span>
        </Item.Meta>
        <Item.Description>{paragraph}</Item.Description>
        <Item.Extra>
          <Button primary floated='right' >
            Buy Tickets!
            <Icon name='right chevron' />
          </Button>
          <Label>Sports Events</Label>
          <Label icon='heartbeat' content='Play!' />
        </Item.Extra>
      </Item.Content>
    </Item>

    <Item>
      <Item.Image src='https://1000logos.net/wp-content/uploads/2018/01/chick-fil-a-logo.png' />

      <Item.Content>
        <Item.Header as='a'>Free Chick-Fil-A Sandwich</Item.Header>
        <Item.Meta>
          <span className='cinema'>300 Points</span>
        </Item.Meta>
        <Item.Description>{paragraph}</Item.Description>
        <Item.Extra>
          <Button primary floated='right'>
            Purchase
            <Icon name='right chevron' />
          </Button>
          <Label icon='food' content="Eat!" />
        </Item.Extra>
      </Item.Content>
    </Item>

    <Item>
      <Item.Image src='https://www.nba.com/warriors/sites/warriors/files/ng2_0157.jpg' />
      
      <Item.Content>
        <Item.Header as='a'>Eat Learn Play Shirt</Item.Header>
        <Item.Meta>
          <span className='cinema'>3,000 Points</span>
        </Item.Meta>
        <Item.Description>{paragraph}</Item.Description>
        <Item.Extra>
          <Button primary floated='right'>
            Purchase
            <Icon name='right chevron' />
          </Button>
          <Label>Merch</Label>
        </Item.Extra>
      </Item.Content>
    </Item>
  </Item.Group>
	);
}