import React from 'react'

const VideoDection = () => {
    return ( 
        <section className='video_section d-flex align-items-center justify-content-center aw-vertical-align'>
            <div className="row container">
                <div className="col-md-6 d-flex flex-column align-items-start justify-content-center aw-vertical-align">
                    <h2 className="px-5 somosPlataformaTitle">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium, nemo.</h2>
                    <p className="my-3 somosPlataforma px-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci minus vitae ullam quos consectetur ut eveniet esse culpa reprehenderit vero?</p>
                    <span className='RectRegister mt-5'>Registrate!</span>
                </div>
                <div className="col-md-6 d-flex flex-column align-items-center justify-content-center video_iframe">
                    <p className='text-center'>Descubre como funciona</p>
                    <iframe width="559" height="307" src="https://www.youtube.com/embed/tgbNymZ7vqY?playlist=tgbNymZ7vqY&loop=1" title='Youtube Video'>
                    </iframe>
                </div>
            </div>
        </section>
     );
}
 
export default VideoDection;