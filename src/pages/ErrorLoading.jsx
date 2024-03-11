import '../assets/styles/error.css'

export default function ErrorLoading() {

    function refreshPage(){ 
        window.location.reload(); 
    }

  return (
    
    <div className="error-page">
        <div className="Header">
            <h1>This page failed to load.</h1>      
            <button type="button" onClick={ refreshPage }>Refresh</button>
        </div>
   </div>
  
  )
}
