import { React } from 'react'
import PageHeader from '../Header/PageHeader'


function Home(props) {

  const header = {
    title: `Hello , Welcome back`,
    update: "You have no new updates",
    description: "Have a great day!"
  }

  function greeting(name)
  {
    let welcome = `Hello ${name}, Welcome back`;
    return welcome;
  }

  return (
    <>
    <div className="home-wrapper">
      <PageHeader title={props.givenName ? greeting(props.givenName) : "Hello"} update={header.update} description={props.comment}/>
    </div>
    </>
  )
}

export default Home