const form = document.getElementById("configForm");

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    
    try {
        const formData = new FormData(form);
        
        // Convert FormData to a regular object
        let data = {};
        for (let [key, value] of formData.entries()) {
            data[key] = value;
        }
        
        console.log('Sending data:', data);  // Debug log

        const response = await fetch('http://localhost:3000/api/endpoint', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'  // Important!
            },
            body: JSON.stringify(data)  // Convert to JSON string
        });
        
        if (!response.ok) throw new Error('Network response was not ok');
        
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'config.json';
        document.body.appendChild(a);
        a.click();
        
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
    } catch (error) {
        console.error('Error:', error);
    }
});