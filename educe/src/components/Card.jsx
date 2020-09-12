import React from 'react';
// import { StaticQuery, graphql } from "gatsby";
import { Button, Card, Image } from 'semantic-ui-react';
import "../data/CardContent.json"

// const CardContent = () => (
//   <StaticQuery query={graphql`
//     query CardContentQuery {
//       allCardContentJson {
//         edges {
//           node {
//             title
//             subtitle
//             description
//           }
//         }
//       }
//     }
//   `}
//   render = {
//     data => (
//       <Card>
//         <Card.Content>
//           <Image
//             floated='right'
//             size='mini'
//             src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
//           />
//           <Card.Header>{data.allCardContentJson.edges.title}</Card.Header>
//           <Card.Meta>{data.allCardContentJson.edges.subtitle}</Card.Meta>
//           <Card.Description>{data.allCardContentJson.edges.nodedescription}</Card.Description>
//         </Card.Content>
//       </Card>
//     )
//   }
//   />
// );

// export default CardContent;



const CardExampleGroups = () => (
  <Card.Group>
    <Card>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
        />
        <Card.Header>Software Developer</Card.Header>
        <Card.Meta>Average Salary: $92,080</Card.Meta>
        <Card.Description>
        Software developers combine their expertise in computer science, 
            engineering, and math to design, develop, and test software for home, school, and business use.
            To become a software developer, you'll need at least a bachelor's degree.
          
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Approve
          </Button>
          <Button basic color='red'>
            Decline
          </Button>
        </div>
      </Card.Content>
    </Card>
    <Card>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src='https://react.semantic-ui.com/images/avatar/large/molly.png'
        />
        <Card.Header>Special Education Teacher</Card.Header>
        <Card.Meta>Average Salary: $59,080 </Card.Meta>
        <Card.Description>
        Special education teachers teach children who have special learning needs or problems such as 
            trouble speaking. Most teach students in elementary, middle, and high schools, though some work with 
            infants and toddlers.You'll need at least a bachelor's degree to become a special education teacher.
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Approve
          </Button>
          <Button basic color='red'>
            Decline
          </Button>
        </div>
      </Card.Content>
    </Card>
    <Card>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src='https://react.semantic-ui.com/images/avatar/large/jenny.jpg'
        />
        <Card.Header>Physical Therapist</Card.Header>
        <Card.Meta>Average Salary: $79,830</Card.Meta>
        <Card.Description>
        Physical Therapists prevent and treat conditions that limit a person's ability to move and function.
            You'll need at least a master's degree to become a physical therapist.
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Approve
          </Button>
          <Button basic color='red'>
            Decline
          </Button>
        </div>
      </Card.Content>
    </Card>
  </Card.Group>
)

export default CardExampleGroups
