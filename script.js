async function removeBackground() {
    const fileInput = document.getElementById('upload');
    const resultImage = document.getElementById('result');
    const container = document.querySelector('.container'); // Get container to toggle loading class
  
    if (!fileInput.files[0]) {
      alert('Please upload an image.');
      return;
    }
  
    const apiKey = 'VjQYtnNLg7jy5v1hEy84kBsT'; // Replace with your remove.bg API key
    const formData = new FormData();
    formData.append('image_file', fileInput.files[0]);
  
    // Show loading spinner
    container.classList.add('loading');
  
    try {
      const response = await fetch('https://api.remove.bg/v1.0/removebg', {
        method: 'POST',
        headers: { 'X-Api-Key': apiKey },
        body: formData
      });
  
      if (response.ok) {
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        resultImage.src = url; // Display the result image
      } else {
        console.error('Failed to remove background:', response.statusText);
        alert('Failed to remove background. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please check your network and API key.');
    } finally {
      // Hide loading spinner
      container.classList.remove('loading');
    }
  }
  










// async function removeBackground() {
//     const fileInput = document.getElementById('upload');
//     const resultImage = document.getElementById('result');
  
//     if (!fileInput.files[0]) {
//       alert('Please upload an image.');
//       return;
//     }
  
//     const apiKey = 'VjQYtnNLg7jy5v1hEy84kBsT';  // Replace with your remove.bg API key
  
//     const formData = new FormData();
//     formData.append('image_file', fileInput.files[0]);
  
//     try {
//       const response = await fetch('https://api.remove.bg/v1.0/removebg', {
//         method: 'POST',
//         headers: { 'X-Api-Key': apiKey },
//         body: formData
//       });
  
//       if (response.ok) {
//         const blob = await response.blob();
//         const url = URL.createObjectURL(blob);
//         resultImage.src = url; // Display the result image
//       } else {
//         console.error('Failed to remove background:', response.statusText);
//         alert('Failed to remove background. Please try again.');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       alert('An error occurred. Please check your network and API key.');
//     }
//   }
  