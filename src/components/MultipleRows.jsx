import React from 'react';
import Slider from 'react-slick';

const MultipleRows = () => {
    const settings = {
        className: "center",
       dots:true,
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
        rows: 2,
        slidesPerRow: 2
      };
    return (
        <div className="multiRows_slider">
      <div className="container">
        <h1 className="text-center mb-5">Multiple Rows Slider</h1>
        <Slider {...settings}>
        <div>
            <img
            
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhA2KE6qS9Y99iWluRa1v6nSK-s_DsC0K7BHYlM7Voy2HxNAJkOCw4m1eSXK2703YIVe0&usqp=CAU"
              alt=""
            />
          </div>
          <div>
            <img
         
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS9NukLm-cNqH5x3U2iS2wMOIgK5XPLIZcnIENesYVGWAPpPsCiD_6RjftwG5gQp5sM4w&usqp=CAU"
              alt=""
            />
          </div>
          <div>
            <img
            
              src="https://imgv3.fotor.com/images/cover-photo-image/a-beautiful-girl-with-gray-hair-and-lucxy-neckless-generated-by-Fotor-AI.jpg"
              alt=""
            />
          </div>
          <div>
            <img
             
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpnHw7ICbtigLKFmeh17bPpZr-cFIMWfpE2YIqeUzQnByxNvmqO34Gdi4U-kv5QEhtYRA&usqp=CAU"
              alt=""
            />
          </div>
          <div>
            <img
         
              src="https://assets.website-files.com/619e8d2e8bd4838a9340a810/647cacb5754581b4b3558593_background-remover-hero-image-comp.webp"
              alt=""
            />
          </div>
          <div>
            <img
        
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTije25_4V3n8BBQhSsXZZo3YNEV3xe7Ymwe0J4RPXlQ979dYa3-0DMCdWjb4GaFWZLVGE&usqp=CAU"
              alt=""
            />
          </div>
          <div>
            <img
             
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpnHw7ICbtigLKFmeh17bPpZr-cFIMWfpE2YIqeUzQnByxNvmqO34Gdi4U-kv5QEhtYRA&usqp=CAU"
              alt=""
            />
          </div>
          <div>
            <img
         
              src="https://assets.website-files.com/619e8d2e8bd4838a9340a810/647cacb5754581b4b3558593_background-remover-hero-image-comp.webp"
              alt=""
            />
          </div>
          <div>
            <img
        
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTije25_4V3n8BBQhSsXZZo3YNEV3xe7Ymwe0J4RPXlQ979dYa3-0DMCdWjb4GaFWZLVGE&usqp=CAU"
              alt=""
            />
          </div>
          <div>
            <img
             
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpnHw7ICbtigLKFmeh17bPpZr-cFIMWfpE2YIqeUzQnByxNvmqO34Gdi4U-kv5QEhtYRA&usqp=CAU"
              alt=""
            />
          </div>
          <div>
            <img
         
              src="https://assets.website-files.com/619e8d2e8bd4838a9340a810/647cacb5754581b4b3558593_background-remover-hero-image-comp.webp"
              alt=""
            />
          </div>
          <div>
            <img
        
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTije25_4V3n8BBQhSsXZZo3YNEV3xe7Ymwe0J4RPXlQ979dYa3-0DMCdWjb4GaFWZLVGE&usqp=CAU"
              alt=""
            />
          </div>
          <div>
            <img
         
              src="https://assets.website-files.com/619e8d2e8bd4838a9340a810/647cacb5754581b4b3558593_background-remover-hero-image-comp.webp"
              alt=""
            />
          </div>
          <div>
            <img
        
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTije25_4V3n8BBQhSsXZZo3YNEV3xe7Ymwe0J4RPXlQ979dYa3-0DMCdWjb4GaFWZLVGE&usqp=CAU"
              alt=""
            />
          </div>
          <div>
            <img
         
              src="https://assets.website-files.com/619e8d2e8bd4838a9340a810/647cacb5754581b4b3558593_background-remover-hero-image-comp.webp"
              alt=""
            />
          </div>
          <div>
            <img
        
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTije25_4V3n8BBQhSsXZZo3YNEV3xe7Ymwe0J4RPXlQ979dYa3-0DMCdWjb4GaFWZLVGE&usqp=CAU"
              alt=""
            />
          </div>
        </Slider>
      </div>
    </div>
    );
};

export default MultipleRows;