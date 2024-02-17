import React from "react";

const Tracks = () => {
    return (
        <>
        <h1 className="mt-20 font-bold">Tracks</h1>
        <div className="flex flex-col items-start sm:items-center mt-10 ">
            <div className="sm:w-2/4 bg-blue-200 p-10 rounded-md hover:bg-blue-100 cursor-pointer">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi excepturi natus 
                    illum facere eius. Tenetur ipsam consequuntur libero culpa quibusdam, sapiente 
                    possimus deserunt. Unde repudiandae ut laboriosam recusandae, dolorem officiis!</p>
                <br></br>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid illum dolorum, ipsa sit 
                    qui nostrum non, atque perspiciatis quod accusantium laboriosam optio. Tempora, molestiae
                    deserunt? Nam minus laboriosam et porro. Lorem ipsum dolor sit, amet consectetur adipisicing 
                    elit. Sequi necessitatibus commodi ex accusantium, tenetur nostrum nulla consectetur sunt. 
                    Ratione nulla saepe reprehenderit doloribus et corporis, incidunt delectus aliquid consequatur 
                    veritatis.</p>
            </div>
            <img src="https://devcation-23.netlify.app/assets/img/Tracks.png" className="sm:w-2/4 mt-2" alt="Tracks" />
        </div>
        </>
    );
}

export default Tracks;
