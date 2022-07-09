import RouteWrapper from 'components/RouteWrapper/RouteWrapper';
import UserChange from 'screens/UserChange/UserChange';
import UserInfor from 'screens/UserInfor/UseInfor';
import ProfileLayout from 'layouts/ProfileLayout/ProfileLayout';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import HomeScreen from 'screens/HomeScreen/HomeScreen';
import CreateGameScreen from 'screens/CreateGameScreen/CreateGameScreen';
import GameDetailScreen from 'screens/GameDetailScreen/GameDetailScreen';
import CartScreen from 'screens/CartScreen/CartScreen';
import BoughtGameScreen from 'screens/BoughtGameScreen/BoughtGameScreen';
import LoginScreen from 'screens/LoginScreen/LoginScreen';
import RegisterScreen from 'screens/RegisterScreen/RegisterScreen';
import PageNotFoundScreen from 'screens/PageNotFoundScreen/PageNotFoundScreen';
import GameUserCreateScreen from 'screens/GameUserCreateScreen/GameUserCreateScreen';
import FavoriteGameScreen from 'screens/FavoriteGameScreen/FavoriteGameScreen';
import EditGameUserCreateScreen from 'screens/EditGameUserCreateScreen/EditGameUserCreateScreen';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
         <RouteWrapper path="/" exact component={HomeScreen} />
         <RouteWrapper path="/creategame" component={CreateGameScreen} />
         <RouteWrapper path="/gamedetail/:idGame" component={GameDetailScreen} />
         <RouteWrapper path="/cart" component={CartScreen} />
         <RouteWrapper path="/boughtgame" component={BoughtGameScreen} />
         <RouteWrapper path="/gameusercreate" component={GameUserCreateScreen} />
         <RouteWrapper path="/editgame/:id" component={EditGameUserCreateScreen} />
         <RouteWrapper path="/favoritegame" component={FavoriteGameScreen} />
         <RouteWrapper path="/login" component={LoginScreen} />
         <RouteWrapper path="/register" component={RegisterScreen} />
         <RouteWrapper path="/user/:id" exact layout={ProfileLayout} component={UserInfor} />
         <RouteWrapper path="/user/:id/change" exact layout={ProfileLayout} component={UserChange} />
        <Route path="*" component={PageNotFoundScreen} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
