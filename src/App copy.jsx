import { useState } from 'react'
import './App.css'

export function Nav({topics, onChangeMode}) {
  const list = []
  for (let i = 0; i < topics.length; i++) {
    let t = topics[i]
    list.push(<li key={t.id}>
      <a id={t.id} href="" onClick={e => {
      e.preventDefault()
      onChangeMode(Number(e.target.id))
    }}>{t.title}</a></li>)
  }

  return (
    <>
      <nav>
        {list}
      </nav>
    </>
  )
}

export function Article({title, body}) {
  return( 
     <article> 
      <h2>{title}</h2>
      {body} 
     </article>
     )
}

export function Create({onCreate}) {
  return (
    <article>
      <h2> Create page </h2>
      <form 
      onSubmit={e => {
        e.preventDefault()
        let title = e.target.title.value
        let body = e.target.body.value
        onCreate(title, body)
      }}
      style={{ display: 'flex', flexDirection: 'column'}}
      >
        <input type="text" name='title' placeholder='title'/>
        <textarea name='body' placeholder='body' />
        <input type="submit" value="Create" />
      </form>
    </article>
  )
}

export function Update(props) {
  const [title, setTitle] = useState(props.title)
  const [body, setBody] = useState(props.body)
  return (
    <article>
        <h2> Update page </h2>
        <form 
        onSubmit={e => {
        e.preventDefault()
        let title = e.target.title.value
        let body = e.target.body.value
        props.onUpate(title, body)
      }}
      style={{ display: 'flex', flexDirection: 'column'}}
      >
        <input 
        onChange={e => {
          setTitle(e.target.value)
        }}       
        type="text" name='title' placeholder='title' value={title}/>
        <textarea 
        name='body' 
        placeholder='body' 
        value={body} 
        onChange={e => {
          setBody(e.target.value)
        }}
        />
        <input type="submit" value="Update" />
      </form>
    </article>
  )
}

function App() {
  const [mode, setMode] = useState()
  const [id, setId] = useState(null)
  const [topics, setTopic] = useState([
    {id: 1, title: 'html', body: 'html ...'},
    {id: 2, title: 'css', body: 'css ...'},
    {id: 3, title: 'javascript', body: 'js ...'},
  ])
  const [nextId, setNextId] = useState(4)

  let content = null
  let contextControl = null

  if (mode === 'WELCOME') {
    content = <Article title="Welcome" body="Hello, Web" />
  } 
  if (mode === 'READ') {
    let title, body = null
    for(let i=0; i < topics.length; i++) {
      if (topics[i].id === id) {
        title = topics[i].title
        body = topics[i].body
      }
    }
    content = <Article title={title} body={body} />
    contextControl = <li>
    <a 
    href={"/update/"+id}
    onClick={e => {
      e.preventDefault()
      setMode('UPDATE')
    }}>update </a></li>
  }
   if (mode === 'CREATE') {
    content = <Create onCreate={(_title, _body) => {
      const updatedTopic = {id: nextId, title: _title, body: _body}
      const newTopics = [...topics]
      newTopics.push(updatedTopic)
      setTopic(newTopics)
      setMode('READ')
      setId('nextId')
      setNextId(nextId+1)
    }}/>
   }
   if (mode === 'UPDATE') {
    let title, body = null
    for(let i=0; i < topics.length; i++) {
      if (topics[i].id === id) {
        title = topics[i].title
        body = topics[i].body
      }
    }
    content = <Update title={title} body={body} onUpate={(title, body) => {
      console.log(title, body)
      const newTopics = [...topics]
      const updatedTopic = {id: id, title:title, body:body}
      for (let i =0; i < newTopics.length; i++) {
        if(newTopics[i].id === id) {
        newTopics[i] = updatedTopic
        break
       }
      }
      setTopic(newTopics)
    }}/>
   }

  return (
    <>
    <Nav topics={topics} onChangeMode={(_id) => {
       setMode('READ')
       setId(_id)
       if (mode === 'WELCOME') {
        setMode('READ')
       }
    }}/>
   {content}
   <ul>
    <li>
   <a href="/create" onClick={e => {
    e.preventDefault()
    setMode('CREATE')
    }}> Create</a>
    </li>
    {contextControl}
    </ul>
   </>
  )
}
 

export default App
