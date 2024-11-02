import Cal from './Cal'
function App(){
  return (
  //   <h1 className="text-3xl font-bold underline">
  //        Hello world!
  // </h1>
           <>
            <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center gap-x-4">
                <div class="shrink-0">
                  <img class="size-12" src="https://tse4.mm.bing.net/th/id/OIP.Qvvxo6gZhHIT048GTWwzEwHaHa?rs=1&pid=ImgDetMain" alt="ChitChat Logo"/>
                </div>
                <div>
                  <div class="text-xl font-medium text-black">ChitChat</div>
                  <p class="text-slate-500">You have a new message!</p>
                </div>
               
              </div>
              <>
               <Cal/>
               </>
               </>
  )
}

export default App