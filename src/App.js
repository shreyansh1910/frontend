
import './App.css';

import React, { useState } from 'react';

const App = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await fetch('https://backend-sigma-seven.vercel.app/api/upload', {
        method: 'POST',
        body: formData,
      });
      const blob = await response.blob();
      const imageUrl = URL.createObjectURL(blob);
      setSelectedImage(imageUrl);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleImageUpload} />
      {selectedImage && <img src={selectedImage} alt="Uploaded" />}
    </div>
  );
};

export default App;


