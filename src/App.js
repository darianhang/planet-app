import React from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import styled from "styled-components"
import InfoBody from "./components/info-body"
import NavBar from "./components/nav-bar"
import { SpaceData } from "./data/data"
import SectionNavBar from "./components/section-nav"
import Planet from "./components/planet"
import NavMenu from "./components/nav-menu"
import Stats from "./components/planet-stats"

const AppWrapper = styled.div`
  background-image: url("../assets/background-stars.svg");
`

function App() {

  const [selected, setSelected] = React.useState(1)
  const [openMenu, setOpenMenu] = React.useState(false)

  function ToggleMenu() {
    setOpenMenu(prev => !prev)
  }

  function resetSelect() {
    setSelected(1)
  }

  const BodyWrapper = styled.div`
  padding-top: 115px;
  -webkit-filter: ${ openMenu ? "blur(5px)" : ""};
  -moz-filter: ${ openMenu ? "blur(5px)" : ""};
  -o-filter: ${ openMenu ? "blur(5px)" : ""};
  -ms-filter: ${ openMenu ? "blur(5px)" : ""};
  filter: ${ openMenu ? "blur(5px)" : ""};
`

  return (
    <AppWrapper className="App">
      <NavBar toggleOpen={ToggleMenu} hamStatus={openMenu}/>
      <NavMenu toggleOpen={openMenu} setOpen={ToggleMenu} resetSelected={resetSelect}/>
      <SectionNavBar selected={selected} setSelected={setSelected}/>
      <Routes>
        {SpaceData.map((data) => {
          return (
            <Route path={data.name} element={
            <BodyWrapper>
              <Planet img={data.images.planet}/>
              <InfoBody source={data.overview.source} name={data.name} body={selected == 1 ? data.overview.content : selected == 2 ? data.structure.content : selected == 3 ? data.geology.content : ""}/>
              <Stats/>
            </BodyWrapper>} />
          )
        })}
        <Route path="/" element={<Navigate to="/Mercury"/>}></Route>
      </Routes>
    </AppWrapper>
  )
}

export default App