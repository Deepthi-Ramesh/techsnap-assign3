
function loadCard() {
    var gridContainer = document.querySelector('.grid-container');
    var gridContainerChildren = "";
        for (var index=0; index < 6 ; index++) {
            gridContainerChildren += `
            <div class="card">
            <div class="card-up">
                    <button id="pro">PRO</button>
                    <div class="px">1020xp</div>
            </div>
            <div class="card-down">
                    <p id="Unguided">Tutorial</p>
                    <p id="house-price">Introduction to Python</p>
                    <div class="icon">
                        <div id="icon"><img src="./images/time 1.png" alt=""/><p>16 hours</p></div>
                        <div id="icon"><img src="./images/bars-level (1) 1.png" alt=""/><p>Beginner</p></div>
                        <div id="icon"><img src="./images/coin (2) 2.png" alt=""/><p>699 coins</p></div>
                    </div>
                    <p id="master">Master the basics of data analysis in Python. Expand your skillset by learning scientific computing with numpy. Master the basics of data analysis in Python.  </p>
                    <p id="para-2">Last updated 21 days ago.</p>
             
                    <div class="view">
                    <button>View in Details</button>
                </div>
       </div>
    </div>
            `}
 gridContainer.innerHTML = gridContainerChildren;
            var gridContainer = document.querySelector('.grid-container-1');
            var gridContainerChildren1 = "";
            for (var index=0; index < 3; index++) {
                gridContainerChildren1 += `
                <div class="card">
                <div class="card-up">
                        <button id="pro">PRO</button>
                        <div class="px">1020xp</div>
                </div>
                <div class="card-down">
                        <p id="Unguided">Tutorial</p>
                        <p id="house-price">Introduction to Python</p>
                        <div class="icon">
                            <div id="icon"><img src="./images/time 1.png" alt=""/><p>16 hours</p></div>
                            <div id="icon"><img src="./images/bars-level (1) 1.png" alt=""/><p>Beginner</p></div>
                            <div id="icon"><img src="./images/coin (2) 2.png" alt=""/><p>699 coins</p></div>
                        </div>
                        <p id="master">Master the basics of data analysis in Python. Expand your skillset by learning scientific computing with numpy. Master the basics of data analysis in Python.  </p>
                        <p id="para-2">Last updated 21 days ago.</p>
                        <div class="view">
                            <button>View in Details</button>
                        </div>
           </div>
        </div>
                `
        }
        gridContainer.innerHTML = gridContainerChildren1;
    }

    loadCard();
function loadOnClick(value){
    if(value==12){
        document.querySelector("#more").style.display = "none";
        var btn=document.querySelectorAll("#hide-btn");
        for(var k=0;k<btn.length;k++){
            btn[k].style.display = "inline";                  
         }
    
        var widbtn=document.querySelectorAll(".page-buttons-1 button");
        for(var t=0;t<widbtn.length;t++){
           widbtn[t].style.width="6%"; 
           widbtn[t].style.padding="0.3rem"; 
         }
         var next=document.querySelector("#next,#pre");
         next.style.width="9%";
         document.querySelector("#pre").style.border="none";
               }
            }