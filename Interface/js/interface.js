
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

//-------------------------------- Useful Functions ---------------------------------

function reStart(url, elementId){
    var pwd = prompt("Password:");
    //console.log(url+"?password="+ pwd);
    var url2 = url +"?password="+ pwd;
    statusElement = document.getElementById(elementId);

    alert('If your password is correct, this service will be restarted now!');
    statusElement.innerHTML = 'Checking...';
    fetch(url2);   
  }
/*
function reStart_pwd(url, elementId){
    var pwd = prompt("Password:");
    //console.log(url+"?password="+ pwd);
    var url2 = url +"?password="+ pwd;
    statusElement = document.getElementById(elementId);
    
    fetch(url2 )
    .then((response) => response.json())
    .then((info) => {
    alert('The password is incorrect! ');
		console.log(info);
    })
    .catch((error) => {
       // console.warn(url);
		//console.warn(error);
    document.getElementById(elementId).innerHTML = 'Restarting...';
	});
}
*/

function checkStatus(){
	timestampElement = document.getElementById("lastTimestamp");
	timestampElement.innerHTML = new Date();
    
	console.log(fetchINFO('https://cogcomp.seas.upenn.edu/dc4007/info','status_zeroshot'));
	console.log(fetchINFO('https://cogcomp.seas.upenn.edu/dc4031/info','status_multilang_edl_frontend'));
    console.log(fetchINFO('http://macniece.seas.upenn.edu:4032/info','status_multilang_edl_backend'));
	console.log(fetchINFO('https://cogcomp.seas.upenn.edu/dc4032/info','status_multilang_ner_frontend'));
    console.log(fetchINFO('https://cogcomp.seas.upenn.edu/dc4033/info','status_multilang_ner_backend'));
    console.log(fetchINFO('https://cogcomp.seas.upenn.edu/dc4037/info','status_srl_english_frontend'));
    console.log(fetchINFO('https://cogcomp.seas.upenn.edu/dc4039/info','status_srl_english_backend'));
    console.log(fetchINFO('https://cogcomp.seas.upenn.edu/dc4038/info','status_srl_spanish_backend'));
    
    console.log(fetchINFO('https://cogcomp.seas.upenn.edu/lg4021/info','status_kairos_events_frontend'));
    console.log(fetchINFO('https://cogcomp.seas.upenn.edu/lg4023/info','status_kairos_events_backend'));
    console.log(fetchINFO('https://cogcomp.seas.upenn.edu/lg4024/info','status_kairos_temporal_backend'));
    console.log(fetchINFO('https://cogcomp.seas.upenn.edu/lg4025/info','status_kairos_storyline_backend'));
    console.log(fetchINFO('https://cogcomp.seas.upenn.edu/lg4029/info','status_multipackage')); 
    console.log(fetchINFO('https://cogcomp.seas.upenn.edu/lg4039/info','status_srl_backend_leguin'));

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

