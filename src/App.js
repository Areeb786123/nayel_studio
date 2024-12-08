import logo from './logo.svg';
import './App.css';
import { Cards } from './components/Cards';
import GridCards from './components/GridCards'
import {Middle} from './components/Middle'
import {RightMidle} from './components/RightMidle'
import { Intro, IntroLeft } from './components/IntroLeft';
import { IntoRight } from './components/IntoRight';
import {ImageWritter} from './components/ImageWritter.jsx'

// function App() {
//   return (

//     <div className="App">
//       <div class="grid grid-cols-2 divide-x">
//   <div><IntroLeft/></div>
//   <div><IntoRight/></div>
// </div>
//       <Cards/>
//       <div class='grid grid-cols-2 gap-4 '>
//       <Middle/>
//       <RightMidle/>
//       </div>
//       <GridCards/>
//     </div>
//   );
// }

function App() {
  return (
    <div className="App">
      {/* Responsive grid for Intro section */}
      <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x">
        <div className="p-4">
          <IntroLeft />
        </div>
        <div className="p-4">
          <IntoRight />
        </div>
      </div>

      {/* Cards component */}
      <Cards />

      {/* Responsive grid for middle section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="p-4">
          <Middle />
        </div>
        <div className="p-4">
          <RightMidle />
        </div>
      </div>

      {/* GridCards component */}
      <GridCards />
      <ImageWritter/>
    </div>
  );
}


export default App;
