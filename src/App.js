import './App.css';
import Card from './components/Card';
import Heading from './components/Heading';

export default function App() {
      return (
          <div className='bg-gray-300 w-[100vw] h-[100vh] flex flex-col justify-center items-center'>
              <Heading/>   
                 <Card/>      
          </div>
      )
}
