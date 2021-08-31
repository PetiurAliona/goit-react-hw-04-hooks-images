import React, { useState } from "react"
import { ToastContainer } from "react-toastify"
import ImageGallery from "./components/ImageGallery/ImageGallery"
import Searchbar from "./components/Searchbar/Searchbar"

const App = () => {
  const [searchQuery, setSearchQuery] = useState("")

  const onNewQuery = ({ searchQuery }) => {
    setSearchQuery(searchQuery)
  }

  return (
    <>
      <Searchbar onSubmit={onNewQuery} />
      <ImageGallery searchQuery={searchQuery} />
      <ToastContainer autoClose={2000} />
    </>
  )
}

export default App

// class App extends Component {
//   state = { searchQuery: "" }

//   onNewQuery = ({ searchQuery }) => {
//     this.setState({ searchQuery })
//   }

//   render() {
//     const { searchQuery } = this.state
//     return (
//       <>
//         <Searchbar onSubmit={this.onNewQuery} />
//         <ImageGallery searchQuery={searchQuery} />
//         <ToastContainer autoClose={2000} />
//       </>
//     )
//   }
// }

// export default App
