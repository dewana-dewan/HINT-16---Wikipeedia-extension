
	var comp_extract ="";
	var title = 'China';
	var almost ="";
	var url = 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&titles=' + title;

	function getFile(filename) { 
	        			oxmlhttp = null; 
	        	
	        			try { 
	        				oxmlhttp = new XMLHttpRequest(); 
	        				oxmlhttp.overrideMimeType("text/html"); 
	        			} 
	        			catch(e) { 
	        				try { 
	        					oxmlhttp = new ActiveXObject("Msxml2.XMLHTTP"); 
	        				} 
	        				catch(e) { 
	        					return null; 
	        				} 
	        			} 

	        			if(!oxmlhttp) return null; 

	        			try { 
	        				oxmlhttp.open("GET",filename,false); 
	        				oxmlhttp.send(null); 
	        			} 
	        			catch(e) { 
	        				return null; 
	        			} 

	        			return oxmlhttp.responseText;
	        		}


	ew = document.createElement('div')
	ew.id = 'demo'
	document.body.appendChild(ew)

	comp_extract = getFile(url);

	setTimeout(function(){
	almost = comp_extract.slice(comp_extract.indexOf('"extract":'), comp_extract.indexOf('.', comp_extract.indexOf('"extract":')));
	almost = almost.replace('"extract":"', '');
	document.getElementById('demo') = almost;
	console.log(almost);
	}, 1000);
