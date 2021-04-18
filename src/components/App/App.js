import React, {useEffect, useState} from "react";
import { CssBaseline, CircularProgress, Backdrop} from "@material-ui/core";
import {MuiThemeProvider, createMuiTheme} from "@material-ui/core";
import useStyles from "./style";
import Books from "../Books";
import Navbar from "../Navbar";
function App() {

    const [books, setBooks] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [darkMode, setDarMode] = useState(false)
    const [search, setSearch] = useState("")

    const theme = createMuiTheme({
        palette:{
            type: darkMode?"dark":"light"
        }
    })
    const classes = useStyles()
    const fetchBooks = () =>{
        const uri = 'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=wqGmw9yTknqkxHP5Nx1DicPF11K2hgPT'
        fetch(uri).then(res=>res.json())
            .then(data=>{
                const {books} = data.results
                setBooks(books)
                setIsLoading(false)
            })
            .catch(e=>{
                console.log(e)
            })
    }

    useEffect(()=>{
        fetchBooks()
    },[])

  return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline/>
        <Navbar search={search} setSearch={setSearch} mode={darkMode} setMode={setDarMode}/>
          {isLoading?
              <Backdrop className={classes.backdrop} open={isLoading}>
                  <CircularProgress color="secondary" />
              </Backdrop>
              :<Books data={
                  books.filter(book => {
                      if (search===""){
                          return book;
                      }else if(book.title.toLowerCase().includes(search.toLowerCase())){
                          return book;
                      }else if(book.author.toLowerCase().includes(search.toLowerCase())){
                          return book
                      }
                      return false
                  })
              }/>}
      </MuiThemeProvider>
  );
}

export default App;
