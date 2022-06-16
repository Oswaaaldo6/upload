import React, { useState, useEffect } from 'react';
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
} from "firebase/storage";
import { storage } from '../firebase/config';
import { v4 } from "uuid";
import { Button, Row } from 'react-bootstrap';

function Home() {
  const [ imageUpload, setImageUpload ] = useState(null);
  const [ imageUrls, setImageUrls ] = useState([]);

  const imagesListRef = ref(storage, "imagenes/");
  
  const uploadFile = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `imagenes/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev) => [...prev, url]);
      });
    });
  };

  useEffect(() => {
    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrls((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  return (
    <>
      <div>
        <div>
          <Row>
            <input
              className='button button3'
              type="file"
              onChange={(event) => {
                setImageUpload(event.target.files[0]);
              }}
            />
          </Row>
          <Row>
            <Button className='button button2' onClick={uploadFile}>Cargar imagen</Button>
          </Row>  
        </div>          
          {imageUrls.map((url) => {
            return <img src={url} />;
          })}
      </div>
    </>    
  );
}

export default Home;