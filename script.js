<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>POPRyoo</title>
    <link rel="stylesheet" href="style.css">
    <script src="script.js" defer></script>
</head>
<body onload="startCount()">
    <div class="container">
        <h1>RyooSiheon</h1>
        <p id="score">0</p>
        <p></p>
        <p></p>
        <img src="image1.png" alt="Invalid" id="ryoo1" height="600px">
        <div class="tabs">
            <div class="tab">
               <input type="checkbox" id="chck1">
               <label class="tab-label" for="chck1">
                <i class="fas fa-trophy" style="color: gold; margin: 0px 10px 0px 10px; margin-left: -25px;
                margin-right: 30px;"></i>
                #1 <span class="flag-icon flag-icon-hk" style="margin: 0px 10px 0px 10px;"></span>120.3B &nbsp;
                LeaderBoard &nbsp; <span class="flag-icon flag-icon-my" style="margin: 0px 10px 0px 10px;"></span>
                <span id="my_score">10000</span>
                </label>

               <div class="tab-content">
                    <table id="table">
                        <tr class="bordered" id="somerow">
                            <td></td>
                            <td><i class="fa fa-globe" style="color: blue;"></i></td>
                            <td>WorldWide</td>
                            <td id="wide_score">455,615,518,558</td>
                        </tr>
                        <tr class="bordered">
                            <td><i class='fas fa-medal' style="color: gold;"></i></td>
                            <td><span class="flag-icon flag-icon-hk"></span></td>
                            <td>Hong Kong</td>
                            <td id="wide_score">19</td>
                        </tr>
                        <tr class="bordered"> 
                            <td><i class='fas fa-medal' style="color: silver;"></i></td>
                            <td><span class="flag-icon flag-icon-tw"></span></td>
                            <td>Taiwan</td>
                            <td id="wide_score">14</td>
                        </tr>
                        <tr class="bordered">
                            <td><i class='fas fa-medal' style="color: brown;"></i></td>
                            <td><span class="flag-icon flag-icon-th"></span></td>
                            <td>Thailand</td>
                            <td id="wide_score">13</td>
                        </tr>
                        <tr class="bordered">
                            <td>4</td>
                            <td><span class="flag-icon flag-icon-jp"></span></td>
                            <td>Japan</td>
                            <td id="wide_score">11</td>
                        </tr>
                        <tr class="bordered">
                            <td>5</td>
                            <td><span class="flag-icon flag-icon-my"></span></td>
                            <td><b>Malaysia</b></td>
                            <td id="wide_score">10000</td>
                        </tr>
                        <tr class="bordered">
                            <td>6</td>
                     
               </div>

            </div>
         </div>
    </div>
</body>
</html>
