import logo from './logo.svg';
import './App.css';
import AddCustomer from './Customer/AddCustomer';
import CardList from './shared/ui/CardChip';
import {customersData} from '../src/shared/DummyData/CustomersData';



function App() {
  console.log("customersData" ,customersData);
   const customers = customersData; 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <AddCustomer/>
        


        {
          customers.map((customer) =>(
            <CardList key={customer.CustomerID} 
                      sideCardOverFlow={customer.City}
                      headingMain = {customer.ShopName}
                      headingSec = {customer.Name}
                      roundLink = {customer.Mobile}
            />    
           ) )
        }
        
        
        
      </header>
    </div>
  );
}

export default App;
