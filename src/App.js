import Count from './components/Count';
import './App.css';
import { FaTwitter, FaYoutube, FaFacebook } from 'react-icons/fa';


const counterData = [
  {
    id: 1,
    counts: 12000,
    text: 'Twitter Followers',
    iconTag: <FaTwitter className='icon' />,
  },
  {
    id: 2,
    counts: 5000,
    text: 'YouTube Subscribers',
    iconTag: <FaYoutube className='icon'/>,
  },
  {
    id: 3,
    counts: 7500,
    text: 'Facebook Fans',
    iconTag: <FaFacebook className='icon'/>,
  },
];


function App() {
  return (
    <div className="App">
      {counterData.length > 0 && counterData.map((data) => <Count key={data.id} data={data} />)}
    </div>
  );
}

export default App;