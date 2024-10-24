import './App.css'
import telIcon from './assets/tel_icon.png';
import mailIcon from './assets/mail_icon.png';


function App() {


  return (

      <div>
        <div>
          <h4>Je suis un étudiant en informatique</h4>
        </div>
        <div>
          <h2>Hobby</h2>
          <ul>
            <li></li>
          </ul>

        </div>
        <div>
          <h2>Contact</h2>
          <ul>
            <li><img className="small-icon" src={telIcon}/>0657454842</li>
            <li><img className="small-icon" src={mailIcon}/>hug.bien@gmail.com</li>
          </ul>

        </div>


      </div>
  )
}

export default App
