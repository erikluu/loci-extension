document.addEventListener('DOMContentLoaded', function () {
  chrome.runtime.sendMessage({type: 'getData'}, (response) => {
    const data = response.data;
    
    // Assuming data is processed and ready for visualization
    createGraph(data);
  });
});

function createGraph(graph) {
  // Your existing D3.js code to create the graph
}

