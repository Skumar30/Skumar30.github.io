import React from 'react';
import Home from './components/Home'
import Sidebar from './components/Sidebar'
class App extends React.Component{

  render() {
    return (
      <div>

      <div id="colorlib-page">
      <link rel="stylesheet" href="css/animate.css"/>
<link rel="stylesheet" href="css/icomoon.css"/>
<link rel="stylesheet" href="css/bootstrap.css"/>
<link rel="stylesheet" href="css/flexslider.css"/>
<link rel="stylesheet" href="fonts/flaticon/font/flaticon.css"/>
<link rel="stylesheet" href="css/owl.carousel.min.css"/>
<link rel="stylesheet" href="css/owl.theme.default.min.css"/>
<link rel="stylesheet" href="css/style.css"/>
        <div id="container-wrap">
        <Sidebar> </Sidebar>
        <div id="colorlib-main">
        <Home> </Home>
        </div>
        </div>
    </div>
  </div>
    );
  }
}

export default App;
