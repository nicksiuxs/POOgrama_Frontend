import React from 'react'
import Button from '../../components/Button/Button'
import { useNavigate } from 'react-router-dom';
import "./Video.css";

const Video = () => {
    const navigate = useNavigate();
    return (
        <main className="video-experience">
            <section className='video'>
                <iframe src="https://www.youtube.com/embed/YOlB2FKzf_o" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </section>
            <section className='button-skip'>
                <Button
                    title="Continuar"
                    onClick={() => navigate("/nivel/1")}
                />
            </section>
        </main>
    )
}

export default Video