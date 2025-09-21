const Card = ({ title }) => {
  return (
    <div>
      <h2>{title}</h2>   
  </div>
  )
}


const App = () => {
  return (
    <div>
     <h2>functional arrow component</h2>
     <Card title="Star wars" ratings={5} isCool={true} actors={[{ name: 
     'actors'}]}/>
     <Card title="avator"/>
     <Card title="the lion is king of chank"/>
    </div>
  )
}

export default App
