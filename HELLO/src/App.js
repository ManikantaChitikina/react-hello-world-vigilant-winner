import './App.css';
import { React } from "react";
import Greet from './Components/Greet';
import Welcome from './Components/Welcome';
import Hello from './Components/Hello';
import Message from './Components/Message';
import Counter from './Components/Counter';
import FunctionClick from './Components/FunctionClick';
import ClassClick from './Components/ClassClick';
import EventBind from './Components/EventBind';
import ParentComponent from './Components/ParentComponent';
import UserGreeting from './Components/UserGreeting';
import NameList from './Components/NameList';
import StyleSheet from './Components/StyleSheet';
import Inline from './Components/Inline';
import './appStyles.css';
import styles from './appStyles.module.css'
import Forms from './Components/Forms';
import LifecycleA from './Components/LifecycleA';
import FragmentDemo from './Components/FragmentDemo';
import Table from './Components/Table';
import PureComp from './Components/PureComp';
import ParentComp from './Components/ParentComp';
import RefsDemo from './Components/RefsDemo';
import FocusInput from './Components/FocusInput';
import ForwardRefParentInput from './Components/ForwardRefParentInput';
import PortalDemo from './Components/PortalDemo';
import Hero from './Components/Hero';
import ErrorBoundry from './Components/ErrorBoundry';
import ClickCounter from './Components/ClickCounter';
import HoverCounter from './Components/HoverCounter';
import ClickCounterTwo from './Components/ClickCounterTwo';
import HoverCounterTwo from './Components/HoverCounterTwo';
import User from './Components/User';
import CounterRender from './Components/CounterRender';
import ComponentC from './Components/ComponentC';
import { UserProvider } from './Components/UserContext';
function App() {
  return (
    <div className="App">
     
 {/* <Greet name="Bruce" heroName="Batman">
 <p>This is children props</p>
 </Greet>
 <Greet name="Clark" heroName="Superman">
  <button>Action</button>
 </Greet>
 <Greet name="Daina" heroName="Woderwomen"/>
 
 <Welcome name="Bruce" heroName="Batman"/>
 <Welcome name="Clark" heroName="Superman"/>
 <Welcome name="Daina" heroName="Woderwomen"/>
 <Hello/> */}
 {/* <Message></Message> */}
 {/* <Counter></Counter> */}
 {/* <Greet name="Clark" heroName="Superman"></Greet>
 <Welcome name="Daina" heroName="Woderwomen"/> */}
 {/* <FunctionClick></FunctionClick> */}
 {/* <ClassClick></ClassClick> */}
 {/* <EventBind></EventBind> */}
 {/* <ParentComponent></ParentComponent> */}
 {/* <UserGreeting></UserGreeting> */}
 {/* <NameList></NameList> */}
 {/* <StyleSheet primary={true}></StyleSheet> */}
 {/* <Inline></Inline> */}
 {/* <h1 className='error'>Error</h1> */}
 {/* <h1 className={styles.success}>Success</h1> */}
{/* <Forms></Forms> */}
{/* <LifecycleA></LifecycleA> */}
{/* <FragmentDemo></FragmentDemo> */}
{/* <Table></Table> */}
{/* <PureComp></PureComp> */}
{/* <ParentComp></ParentComp> */}
{/* <RefsDemo></RefsDemo> */}
{/* <FocusInput></FocusInput> */}
{/* <ForwardRefParentInput></ForwardRefParentInput> */}
{/* <PortalDemo></PortalDemo> */}
{/* <ErrorBoundry> <Hero heroName="Batman"></Hero>   </ErrorBoundry> 
<ErrorBoundry> <Hero heroName="Superman"></Hero>   </ErrorBoundry> 
<ErrorBoundry> <Hero heroName="Jocker"></Hero>  </ErrorBoundry>  */}
{/* <ClickCounter name='Manikanta'></ClickCounter>
<HoverCounter></HoverCounter> */}

{/* <ClickCounterTwo></ClickCounterTwo>
<HoverCounterTwo></HoverCounterTwo>
<User render={ (isLoggedIn) =>isLoggedIn?"Manikanta": "Guest"}></User> */}

{/* <CounterRender render={(count,incrementCount)=>(<ClickCounterTwo count={count}incrementCount={incrementCount} ></ClickCounterTwo>)}>
</CounterRender>
<CounterRender render={(count,incrementCount)=>(<HoverCounterTwo count={count}incrementCount={incrementCount} ></HoverCounterTwo>)}>
</CounterRender> */}
<UserProvider value="Manikanta">
<ComponentC></ComponentC>
</UserProvider>

    </div>
  );
}

export default App;
