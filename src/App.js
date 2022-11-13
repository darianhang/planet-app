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
import SurfaceOverlay from "./components/surface-overlay"
import useWindowSize from "./hooks/useWindowSize"

const AppWrapper = styled.div`
  background-image: url("../assets/background-stars.svg");
  height: 100vh;
`

function App() {

  const windowSize = useWindowSize()
  const mobile = windowSize.width > 460 ? true : false
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

  const InfoWrapper = styled.div`
  @media only screen and (min-width: 460px) {
    display: flex;
    justify-content: space-around;
    align-items: center;
    align-content: center;
    margin: 0 auto auto auto;
    width: 75%;
}       
  `

  return (
    <AppWrapper className="App">
      <NavBar toggleOpen={ToggleMenu} hamStatus={openMenu}/>
      <NavMenu toggleOpen={openMenu} setOpen={ToggleMenu} resetSelected={resetSelect}/>
      {windowSize.width < 460 ? <SectionNavBar selected={selected} setSelected={setSelected}/> : ""}
      <Routes>
        {SpaceData.map((data) => {
          return (
            <Route path={data.name} element={
            <BodyWrapper>
              <InfoWrapper>
                <Planet selected={selected} data={data} img={selected == 2 ? data.images.internal : data.images.planet }/>
                <InfoBody mobile={mobile} selected={selected} setSelected={setSelected} source={data.overview.source} name={data.name} body={selected == 1 ? data.overview.content : selected == 2 ? data.structure.content : selected == 3 ? data.geology.content : ""}/>
              </InfoWrapper>
              <Stats mobile={mobile} rotation={data.rotation} revolution={data.revolution} radius={data.radius} average={data.temperature}/>
            </BodyWrapper>} />
          )
        })}
        <Route path="/" element={<Navigate to="/Mercury"/>}></Route>
      </Routes>
    </AppWrapper>
  )
}

export default App