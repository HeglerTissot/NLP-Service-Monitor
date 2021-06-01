
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

function checkServer(url, elementId) {
    statusElement = document.getElementById(elementId);
    const controller = new AbortController();
    const signal = controller.signal;
    const options = { mode: 'no-cors', signal };
    return fetch(url, options)
      //.then(setTimeout(() => { statusElement.innerText = 'Offline'; controller.abort(); }, 2000))
      .then(response => statusElement.innerHTML = 'Online')
      .catch(error => statusElement.innerHTML = 'Offline');

      //then(setTimeout(() => { controller.abort() }, 2000))
      //.then(response => console.log('Check server response:', 'Online'))
      //.catch(error => console.error('Check server error:', 'Offline'));
  }

function reStart(url, elementId){
    statusElement = document.getElementById(elementId);
    alert('The service is going to be restarted now! ');
    statusElement.innerHTML = 'Restarting...';
    fetch(url);
    
  }

function checkStatus(){
    //alert('Checking...');
    checkServer('http://localhost:8081/info', 'status_multipackage');
}