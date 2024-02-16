import ExcersiSet from "./Components/Excercise/ExcersiSet"
import Fotter from "./Components/Footer/Fotter"

import Hero from "./Components/Hero/Hero"
import LetsTalk from "./Components/LetsTalk/LetsTalk"
import Misson from "./Components/Mission/Misson"
import Navigation from "./Components/NavBar/Navigation"
import Story from "./Components/StorySection/Story"




function App() {
  
  return (
    <>
     <Navigation></Navigation>
     <Hero></Hero>
     <Story></Story>
     <Misson></Misson>
     <ExcersiSet></ExcersiSet>
     <LetsTalk></LetsTalk>
     <Fotter></Fotter>
    </>
  )
}

export default App
