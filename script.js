
	//Решение заданий № 1 и 2
           var container = document.querySelector(".container");
			container.style.background = "black";
			container.style.width = "680px";
			container.style.height = "680px";
			container.style.paddingLeft = "60px";
			container.style.paddingBottom = "60px";
            container.style.paddingRight = "60px";
            container.style.paddingTop = "60px";
			container.style.margin = "20px";
			container.style.display = "flex";
			container.style.flexWrap = "wrap";
				
			function my_initiation () {
				var position = document.createElement ("div");
				position.className="position"; // cell
				cont.append(position);
				position.style.width = "60px";
				position.style.height = "60px";
				position.style.margin = "0px";
				position.style.padding = "0px";
				position.style.fontSize = "40px";
				position.style.fontWeight = "bold";
				position.style.textAlign = "center";
				
			}
			window.onload = my_initiation;
			
			for (var n=0; (n!=121); n++) {
				window.onload = my_initiation ();
			};
			
			var masPosition = document.querySelectorAll (".position");
			for (var i=0; (i<masPosition.length); i++) {
				var c;
				if (i%2==0)	{
					c="gray";
				} else {
					c="darkgreen";
					}
				masPosition[i].style.background=c;
				if ((i>33) && (i<42)) {
					masPosition[i].innerText = "P";
				};
				if ((i>88) && (i<97)) {
					masPosition[i].innerText = "P";
				};
				
				masPosition[23].innerText = "R";
				masPosition[24].innerText = "H";
				masPosition[25].innerText = "Е";
				masPosition[26].innerText = "Q";
				masPosition[27].innerText = "К";
				masPosition[28].innerText = "E";
				masPosition[29].innerText = "H";
				masPosition[30].innerText = "R";	
				
				masPosition[100].innerText = "R";
				masPosition[101].innerText = "H";
				masPosition[102].innerText = "E";
				masPosition[103].innerText = "Q";
				masPosition[104].innerText = "K";
				masPosition[105].innerText = "E";
				masPosition[106].innerText = "H";
				masPosition[107].innerText = "R";
				
				for (var f=89; (f<108); f++) {
					masPosition[f].style.color = "black";
				}
				for (var f=0; (f<22); f++) {
					masPosition[f].style.background = "#C9DC87";
				}
				for (var f=110; (f<121); f++) {
					masPosition[f].style.background = "#C9DC87";
				}
				
				masPosition[22].style.background = "#C9DC87";
				masPosition[33].style.background = "#C9DC87";
				masPosition[44].style.background = "#C9DC87";
				masPosition[55].style.background = "#C9DC87";
				masPosition[66].style.background = "#C9DC87";
				masPosition[77].style.background = "#C9DC87";
				masPosition[88].style.background = "#C9DC87";
				masPosition[99].style.background = "#C9DC87";
				masPosition[31].style.background = "#C9DC87";
				masPosition[32].style.background = "#C9DC87";
				masPosition[42].style.background = "#C9DC87";
				masPosition[43].style.background = "#C9DC87";
				masPosition[53].style.background = "#C9DC87";
				masPosition[54].style.background = "#C9DC87";
				masPosition[64].style.background = "#C9DC87";
				masPosition[65].style.background = "#C9DC87";
				masPosition[75].style.background = "#C9DC87";
				masPosition[76].style.background = "#C9DC87";
				masPosition[86].style.background = "#C9DC87";
				masPosition[87].style.background = "#C9DC87";
				masPosition[97].style.background = "#C9DC87";
				masPosition[98].style.background = "#C9DC87";
				masPosition[108].style.background = "#C9DC87";
				masPosition[109].style.background = "#C9DC87";
				
                masPosition[12].innerText = "A";
				masPosition[13].innerText = "B";
				masPosition[14].innerText = "C";
				masPosition[15].innerText = "D";
				masPosition[16].innerText = "E";
				masPosition[17].innerText = "F";
				masPosition[18].innerText = "G";
				masPosition[19].innerText = "H";
				masPosition[111].innerText = "A";
				masPosition[112].innerText = "B";
				masPosition[113].innerText = "C";
				masPosition[114].innerText = "D";
				masPosition[115].innerText = "E";
				masPosition[116].innerText = "F";
				masPosition[117].innerText = "G";
				masPosition[118].innerText = "H";
				
				masPosition[97].style.color = "lightblack";
				masPosition[99].style.color = "lightblack";
				
				masPosition[22].innerText = "1";
				masPosition[33].innerText = "2";
				masPosition[44].innerText = "3";
				masPosition[55].innerText = "4";
				masPosition[66].innerText = "5";
				masPosition[77].innerText = "6";
				masPosition[88].innerText = "7";
				masPosition[99].innerText = "8";
				masPosition[31].innerText = "1";
				masPosition[42].innerText = "2";
				masPosition[53].innerText = "3";
				masPosition[64].innerText = "4";
				masPosition[75].innerText = "5";
				masPosition[86].innerText = "6";
				masPosition[97].innerText = "7";
				masPosition[108].innerText = "8";
			}


