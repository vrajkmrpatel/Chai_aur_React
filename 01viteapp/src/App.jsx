import Chai from "./Chai"


function App() {

  let age = 19;
  let ans;
  if(age >18){
    ans = "you can Vote!";
  }
  else{
    ans = "You cann't Vote!!!";
  }
  return (
        <>
          <h1>Hello Vite App ! {ans}</h1>
          <Chai />
        </>
  )
}

export default App
