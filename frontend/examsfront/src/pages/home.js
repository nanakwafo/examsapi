function home()
{
    const go_to_filmviewer =function(){
        window.location.href = '/filmviewer';
    } 
    const go_to_filmmaker =function(){
        window.location.href = '/filmmaker';
    }
    return (
    <div className="HomeContainer">
         <div className="HomeContainer_left">
                <div className="HomeContainer_left_Logo">
                    <img src="https://www.ifmacinema.com/assets/logo/logo.png" alt="logo.png"/>
                </div>
                <div className="HomeContainer_left_text">
                    <h2>Start Watching For Free</h2>
                    <p>Anytime.Anywhere.AnyDevice</p>
                </div>
                <div className="HomeContainer_left_button">
                    <input type="button" value="Watch Now" onClick={go_to_filmviewer}/>
                </div>
         </div>
         <div className="HomeContainer_right">
              <div className="HomeContainer_right_Logo">
                    <img src="https://www.ifmacinema.com/assets/logo/logo.png" alt="logo.png"/>
                </div>
                <div className="HomeContainer_right_text">
                    <h2>YourFilms & TV-Shows?</h2>
                    
                    <p>Earn up to 30x more</p>
                </div>
                <div className="HomeContainer_right_button">
                    <input type="button" value="Submit content Now " onClick={go_to_filmmaker}/>
                </div>
         </div>
    </div>
        
    )
}
export default home