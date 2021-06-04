
async function postInfo_old(demoUrl, elementId) {
    statusElement = document.getElementById(elementId)
    try {
        //alert(demoUrl);
        fetch(demoUrl, {
            method: 'POST',
            cache: 'no-cache',
            headers: {
                'Accept': "application/json, text/plain, */*",
                'Content-Type': "application/json;charset=utf-8"
            },
            mode: 'no-cors',
            body: JSON.stringify({})
        }).then(resp => resp.json())
            .then(json_output => {
                try {
                    statusElement.innerText = json_output.status;
                    alert(json_output.status);
                } catch(err) {
                    statusElement.innerText = 'offline';
                    alert(err.message);
                }
            }
        );
       // .catch(function() {
       //     statusElement.innerText = 'offline';
       // }
        
    
    } catch(err) {
        statusElement.innerText = 'offline';
        alert(err.message);
    }
}

async function postInfo(demoUrl, elementId) {
    statusElement = document.getElementById(elementId);
    try {
        fetch(demoUrl, {
            method: 'POST',
            cache: 'no-cache',
            headers: {
                'Accept': "application/json, text/plain, */*",
                'Content-Type': "application/json;charset=utf-8"
            },
            mode: 'no-cors',
            body: JSON.stringify({})
        }).then(resp => resp.json())
            .then(json_output => {
                try {
                    statusElement.innerText = json_output.status;
                } catch(err) {
                    statusElement.innerText = 'offline';
                }
            });
        //.catch(function() {
         //   statusElement.innerText = 'offline';
         //alert('!!!!');
        //});

    } catch(err) {
        statusElement.innerText = 'offline';
    }
}

async function postHalt() {
    fetch('http://localhost:8081/halt', {
        method: 'POST',
        cache: 'no-cache',
        headers: {
            'Accept': "application/json, text/plain, */*",
            'Content-Type': "application/json;charset=utf-8"
        },
        // mode: 'no-cors',
        body: JSON.stringify({})
    }).then(resp => resp.json())
        .then(json_output => {
            // noting
        }
    )
    .catch(function() {
        // nothing;
    });
}

function checkServer2(url, elementId) {
	statusElement = document.getElementById(elementId);
	let xhr = new XMLHttpRequest();
	xhr.open('GET', url);
	xhr.send();

	xhr.onerror = function() {
		statusElement.innerHTML = 'Offline';
	};	

	xhr.onload  = function() {
		if (this.readyState == 4 && this.status == 200) {
			console.log(xhttp.responseText)
			//Do some stuff
			alert(elementId);
		}
	};
}

function reStart(url, elementId){
    statusElement = document.getElementById(elementId);
    alert('The service is going to be restarted now! ');
    statusElement.innerHTML = 'Restarting...';
    fetch(url);
    
  }

function checkStatus(){
	timestampElement = document.getElementById("lastTimestamp");
	timestampElement.innerHTML = new Date();
	console.log(fetchINFO('https://cogcomp.seas.upenn.edu/dc4007/info','status_zeroshot'));
	console.log(fetchINFO('https://cogcomp.seas.upenn.edu/dc4031/info','status_multilang_edl'));
	console.log(fetchINFO('https://cogcomp.seas.upenn.edu/dc4032/info','status_multilang_ner'));
}

function fetchINFO(url,elementId) {
	fetch(url /*, options */)
    .then((response) => response.json())
    .then((info) => {
        console.log(url);
		console.log(info);
		document.getElementById(elementId).innerHTML = 'Online';
    })
    .catch((error) => {
        console.warn(url);
		console.warn(error);
		document.getElementById(elementId).innerHTML = 'Offline';
	});
}

