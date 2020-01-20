import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import ReactGA from 'react-ga';
import { YMInitializer } from 'react-yandex-metrika';
import { 
  Header, 
  Footer } from './сomponents';
import routes from './routes'
import { Helmet } from 'react-helmet'
import './Global.scss';


function initializeReactGA() {
  ReactGA.initialize('UA-149369441-1');
  for(let i = 0; i < routes.length; i++){
    ReactGA.pageview(routes[i].path);
  }
}

class App extends Component {
  
  componentDidMount(){
    initializeReactGA()
  }

  componentDidUpdate(){
    initializeReactGA()
  }

  render() {
    const location = window.location.pathname;
    return (
      <Fragment>
          {
            routes.map((item,index)=>
              location === item.path ?
              <Helmet key={index}>
                <link rel="canonical" href={`https://rednavis.com${item.path}`}/>
                <title>{item.title}</title>
                <meta name="description" content={item.description} />
                {item.keywords && <meta name="Keywords" content={item.keywords}/>}
              </Helmet> : ''
            )
          }
        <YMInitializer accounts={[55606483]} options={{webvisor: true}}/>
        <Header />
        <Switch>
          {
            routes.map((item, index)=>
              <Route exact key={index} path={item.path} component={item.component}/>
            )
          }
        </Switch>
        <Footer />
      </Fragment>
    );
  }
}


export default App;
