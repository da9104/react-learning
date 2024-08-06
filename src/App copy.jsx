import { useState } from 'react'
import './App.css'

export function Welcome({title, body}) {
  return (
    <>
      {title}
      {body} 
    </>
  )
}

export function Nav({topics, onChangeMode}) {
  const list = []
  for (let i = 0; i < topics.length; i++) {
    let t = topics[i]
    list.push(
    <li key={t.id}>
      <a id={t.id} 
      href="" 
      className='uppercase border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6'
      onClick={e => {
      e.preventDefault()
      onChangeMode(Number(e.target.id))
    }}>{t.title}</a>
    </li>)
  }

  return (
    <>
      <nav className='class="bg-white shadow dark:bg-gray-800 "'>
      <div className="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300 list-none">
        {list}
      </div>
      </nav>
    </>
  )
}

export function Article({title, body}) {
  return( 
    <ul> 
        <li className='w-full px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-800'>
        <p className='text-sm font-light text-gray-800 dark:text-gray-400 px-3'>
        <span class="font-medium text-gray-900 dark:text-white"> {title} </span>
       
           {body}
        </p>
        </li>
        <span class="text-xs text-blue-600 dark:text-blue-500">a few moments ago</span>
     </ul>
     )
}

export function Create({onCreate}) {
  return (
    <>
      <form 
      className='max-w-sm mx-auto'
      onSubmit={e => {
        e.preventDefault()
        let title = e.target.title.value
        let body = e.target.body.value
        onCreate(title, body)
      }}
      >
        <div className="relative z-0 w-full mb-5 group">
          <input 
          className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
          type="text" name='title' placeholder='title'/>
          <label for="title" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Title</label>
        </div>
       
        <div class="relative z-0 w-full mb-5 group">
        <label for="body" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Content</label>
        <textarea 
        className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
        rows="4"
        name='body' placeholder='Leave a comment..' />
         </div>
        <input 
        className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
        type="submit" value="Create" />
      </form>
    </>
  )
}

export function Update({title: initialTitle, body: initialBody, onUpdate}) {
  const [title, setTitle] = useState(initialTitle)
  const [body, setBody] = useState(initialBody)
  return (
    <>
       <form
        className='max-w-sm mx-auto' 
        onSubmit={e => {
        e.preventDefault()
        let title = e.target.title.value
        let body = e.target.body.value
        onUpdate(title, body)
      }}>
       <div className="relative z-0 w-full mb-5 group">
        <input 
        className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
        onChange={e => {
          setTitle(e.target.value)
        }}       
        type="text" name='title' placeholder='title' value={title}/>
       <label for="title" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Title</label>
       </div>

       <div class="relative z-0 w-full mb-5 group">
        <label for="body" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Content</label>
        <textarea 
        className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
        name='body' 
        placeholder='body' 
        value={body} 
        onChange={e => {
          setBody(e.target.value)
        }}
        />
        </div>

        <input 
        
        className='text-white bg-orange-500 hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800'

        type="submit" value="Update" />
      </form>
    </>
  )
}

function App() {
  const [mode, setMode] = useState('WELCOME')
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
    content = <Welcome title="Welcome" body="Hello, Web" />
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
    contextControl = 
    <>
      <a
       href={"/update/"+id}
       onClick={e => {
         e.preventDefault()
         setMode('UPDATE')
       }}
       type="button" className="inline-flex flex-col items-center justify-center font-medium px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                {/* <svg className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 19">
                    <path d="M14.5 0A3.987 3.987 0 0 0 11 2.1a4.977 4.977 0 0 1 3.9 5.858A3.989 3.989 0 0 0 14.5 0ZM9 13h2a4 4 0 0 1 4 4v2H5v-2a4 4 0 0 1 4-4Z"/>
                    <path d="M5 19h10v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2ZM5 7a5.008 5.008 0 0 1 4-4.9 3.988 3.988 0 1 0-3.9 5.859A4.974 4.974 0 0 1 5 7Zm5 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm5-1h-.424a5.016 5.016 0 0 1-1.942 2.232A6.007 6.007 0 0 1 17 17h2a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5ZM5.424 9H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h2a6.007 6.007 0 0 1 4.366-5.768A5.016 5.016 0 0 1 5.424 9Z"/>
                </svg> */}
                <svg class="w-6 h-6 text-orange-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"/>
                </svg>

                <span className="text-sm text-orange-500 dark:text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-500">Update</span>
      </a>
      <button 
      name='delete'
      value='Delete'
      onClick={() => {
        const newTopics = []
        for (let i = 0; i < topics.length; i++) {
          if (topics[i].id !== id) {
            newTopics.push(topics[i])
          }
        }
        setTopic(newTopics)
        setMode('WELCOME')
      }}
      type="button" className="inline-flex flex-col items-center justify-center font-medium px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                <svg class="w-6 h-6 text-red-600 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                   <path d="M19 0H1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1ZM2 6v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6H2Zm11 3a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V8a1 1 0 0 1 2 0h2a1 1 0 0 1 2 0v1Z"></path>
                </svg>
                <span className="text-sm text-red-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">Delete</span>
      </button>
    </>
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
    content = <Update title={title} body={body} onUpdate={(title, body) => {
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
      setMode('READ')
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
   
   <div className='w-full flex items-center justify-center bg-white border border-gray-100 rounded-lg dark:bg-gray-700 dark:border-gray-600'> 
     {content}
 
   </div>


   <div className="sticky bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600">
        <div className="grid h-full max-w-lg grid-cols-3 mx-auto">
            <a 
             href="/create" 
             onClick={e => {
              e.preventDefault()
              setMode('CREATE')
              }}
            type="button" 
            className="inline-flex flex-col items-center justify-center font-medium px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                {/* <svg className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z"/>
                </svg> */}
                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7 7V5"/>
                  </svg>

                <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">Create</span>
            </a>
            {contextControl}

            {'WELCOME' &&

              <button type="button" class="inline-flex flex-col items-center justify-center font-medium px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
              <svg class="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
              </svg>
              <span class="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">Favorites</span>
              </button>
              }

        </div>
    </div>

 
   </>
  )
}
 

export default App
