function Cabecera(){
    return (
      <header>
        <div id= "titulos">
        <a href="http://greenhomenow.de/">
          <img src="https://i.ibb.co/GVQCRSW/Logo-big-roundbackground.png" alt="Logo-big-roundbackground" border="0" width="80"
                height="80"/>
          </a>
        </div>
        <nav className="navbar">
            <a href="http://greenhomenow.de/">Home</a>
                <div class="dropdown">
                   <button className="dropbtn">
                     <a href="http://greenhomenow.de/">Unsere Leistungen</a>
                   </button>
                   <div className="dropdown-content">
                     <a href="http://greenhomenow.de/">Für Photovoltaik Kunden</a>
                     <a href="http://greenhomenow.de/">Für Installationsfirmen</a>
                   </div>
                  </div>
              <a href="http://greenhomenow.de/" className="fusion-background-highlight"> </a>
              <a href="http://greenhomenow.de/blog/">Photovoltaik verstehen</a>
              <a href="http://greenhomenow.de/about-us/">Über uns</a>
              <a href="http://greenhomenow.de/contact-us/">Kontakt</a>
        </nav>
    </header>
);
}

export default Cabecera;