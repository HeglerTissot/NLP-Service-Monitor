
// async function postInfo_old(demoUrl, elementId) {
//     statusElement = document.getElementById(elementId)
//     try {
//         //alert(demoUrl);
//         fetch(demoUrl, {
//             method: 'POST',
//             cache: 'no-cache',
//             headers: {
//                 'Accept': "application/json, text/plain, */*",
//                 'Content-Type': "application/json;charset=utf-8"
//             },
//             mode: 'no-cors',
//             body: JSON.stringify({})
//         }).then(resp => resp.json())
//             .then(json_output => {
//                 try {
//                     statusElement.innerText = json_output.status;
//                     alert(json_output.status);
//                 } catch(err) {
//                     statusElement.innerText = 'offline';
//                     alert(err.message);
//                 }
//             }
//         );
//        // .catch(function() {
//        //     statusElement.innerText = 'offline';
//        // }
        
    
//     } catch(err) {
//         statusElement.innerText = 'offline';
//         alert(err.message);
//     }
// }

// async function postInfo(demoUrl, elementId) {
//     statusElement = document.getElementById(elementId);
//     try {
//         fetch(demoUrl, {
//             method: 'POST',
//             cache: 'no-cache',
//             headers: {
//                 'Accept': "application/json, text/plain, */*",
//                 'Content-Type': "application/json;charset=utf-8"
//             },
//             mode: 'no-cors',
//             body: JSON.stringify({})
//         }).then(resp => resp.json())
//             .then(json_output => {
//                 try {
//                     statusElement.innerText = json_output.status;
//                 } catch(err) {
//                     statusElement.innerText = 'offline';
//                 }
//             });
//         //.catch(function() {
//          //   statusElement.innerText = 'offline';
//          //alert('!!!!');
//         //});

//     } catch(err) {
//         statusElement.innerText = 'offline';
//     }
// }

// async function postHalt() {
//     fetch('http://localhost:8081/halt', {
//         method: 'POST',
//         cache: 'no-cache',
//         headers: {
//             'Accept': "application/json, text/plain, */*",
//             'Content-Type': "application/json;charset=utf-8"
//         },
//         // mode: 'no-cors',
//         body: JSON.stringify({})
//     }).then(resp => resp.json())
//         .then(json_output => {
//             // noting
//         }
//     )
//     .catch(function() {
//         // nothing;
//     });
// }

//-------------------------------- Useful Functions ---------------------------------

function reStart(url, elementId){ 
    statusElement = document.getElementById(elementId);
    alert('The service is going to be restarted now! ');
    statusElement.innerHTML = 'Restarting...';
    fetch(url);
  }

// function reStart_pwd_2(url, elementId){
//   var url2 = url +"?password="+ pwd;
//   statusElement = document.getElementById(elementId);
//   alert('If your password is correct, this service will be restarted now!');
//   statusElement.innerHTML = 'Checking...';
//   fetch(url2);  
// }

// function login() {
//     var pwd = prompt("Password:");
//     var url = 'https://cogcomp.seas.upenn.edu/dc4050/loginCheck' +"?password="+ pwd;
//     fetch(url)
//     .then((response) => response.json())
//     .then((info) => { 
//     if(info == "Correct"){
//         alert('Sucessfully login!');
//         console.log(info);
//     }else{
//         alert("The password is incorrect!")
//         location.reload();
//     }
//     })
//     .catch((error) => {
//         console.warn(url);
//         console.warn(error);
//         alert("Something seems wrong... Please contact service administrator!")
// 		window.location.replace("https://cogcomp.seas.upenn.edu/page/demos/");
// 	});
// }
 

// function reStart_pwd(url, elementId){
//     var pwd = prompt("Password:");
//     //console.log(url+"?password="+ pwd);
//     var url2 = url +"?password="+ pwd;
//     statusElement = document.getElementById(elementId);
    
//     fetch(url2)
//     .then((response) => response.json())
//     .then((info) => { 
//     if(info == null){
//         alert('Correct password! The service is restarting!');
//         document.getElementById(elementId).innerHTML = 'Restarting...';
//         console.log(info);
//     }else{
//         alert('The password is incorrect! ');
//         console.log(info);
//     }
//     })
//     .catch((error) => {
//         console.warn(url);
//         console.log(url + ' is restarting! Please wait for a while!');
// 		//console.warn(error);
//     //document.getElementById(elementId).innerHTML = 'Restarting...';
// 	});
// }


function checkStatus(){
	timestampElement = document.getElementById("lastTimestamp");
	timestampElement.innerHTML = new Date();
    //--------------dickens--------------
    console.log(fetchINFO('https://cogcomp.seas.upenn.edu/dc4001/status/','status_bert'));
    console.log(fetchINFO('https://cogcomp.seas.upenn.edu/dc4006/status/','status_summarization'));
    console.log(fetchINFO('https://cogcomp.seas.upenn.edu/dc4022/info','status_karios_ner_english_backend'));
    console.log(fetchINFO('https://cogcomp.seas.upenn.edu/dc4030/status/','status_edl_english_fb'));
	console.log(fetchINFO('https://cogcomp.seas.upenn.edu/dc4031/info','status_edl_multilang_frontend'));
	console.log(fetchINFO('https://cogcomp.seas.upenn.edu/dc4032/info','status_ner_multilang_frontend'));
    console.log(fetchINFO('https://cogcomp.seas.upenn.edu/dc4033/info','status_ner_multilang_backend'));
    console.log(fetchINFO('https://cogcomp.seas.upenn.edu/dc4034/info','status_ner_english_frontend'));
    console.log(fetchINFO('https://cogcomp.seas.upenn.edu/dc4037/info','status_srl_english_frontend'));
    console.log(fetchINFO('https://cogcomp.seas.upenn.edu/dc4038/info','status_srl_spanish_backend'));
    console.log(fetchINFO('https://cogcomp.seas.upenn.edu/dc4039/info','status_srl_english_backend'));
    console.log(fetchINFO('https://cogcomp.seas.upenn.edu/dc4040/info','status_srl_spanish_frontend'));
    //--------------leguin--------------
    console.log(fetchINFO('https://cogcomp.seas.upenn.edu/lg4007/info','status_zeroshot'));
    console.log(fetchINFO('https://cogcomp.seas.upenn.edu/lg4021/info','status_kairos_events_frontend'));
    console.log(fetchINFO('https://cogcomp.seas.upenn.edu/lg4023/info','status_kairos_events_backend'));
    console.log(fetchINFO('https://cogcomp.seas.upenn.edu/lg4024/info','status_kairos_temporal_backend'));
    console.log(fetchINFO('https://cogcomp.seas.upenn.edu/lg4025/info','status_kairos_storyline_backend'));
    //console.log(fetchINFO('https://cogcomp.seas.upenn.edu/lg4029/info','status_multipackage_2')); 
    console.log(fetchINFO('https://cogcomp.seas.upenn.edu/lg4029/info','status_multipackage')); 
    console.log(fetchINFO('https://cogcomp.seas.upenn.edu/lg4039/info','status_srl_backend_leguin'));

    //--------------macniece--------------
    console.log(fetchINFO('https://cogcomp.seas.upenn.edu/mn4032/info','status_edl_multilang_backend'));

}

function fetchINFO(url,elementId) {
	fetch(url /*, options */)
    .then((response) => response.json())
    .then((info) => {
        console.log(url);
		console.log(info);
		document.getElementById(elementId).innerHTML = 'Online';
        document.getElementById(elementId).style.color = 'green';
        //document.getElementById(elementId).className = 'btn btn-success';
    })
    .catch((error) => {
        console.warn(url);
		console.warn(error);
		document.getElementById(elementId).innerHTML = 'Offline';
        document.getElementById(elementId).style.color = 'red';
        //document.getElementById(elementId).className = 'btn btn-danger';
	});
}

