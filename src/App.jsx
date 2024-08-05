import './App.css'

export function Nav({topics}) {
  console.log(topics)
  const list = []
  for (let i = 0; i < topics.length; i++) {
    let t = topics[i]
    list.push(<li key={t.id}>{t.title}</li>)
  }

  return (
    <>
      <nav>
        {list}
      </nav>
    </>
  )
}

function App() {
  const topics = [
    {id: 1, title: 'html', body: 'html ...'},
    {id: 2, title: 'css', body: 'css ...'},
    {id: 3, title: 'javascript', body: 'js ...'},
  ]

  return (
    <Nav topics={topics} />

  )
}
 

export default App
