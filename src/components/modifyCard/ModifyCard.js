import React, { useEffect, useRef, useState } from 'react';
import './modifyCard.css';


function ModifyCard({ addVideo, editableVideo, editVideo, handleReset }) {
    const initialVideoTemplate = {
        title: '',
        channelName: '',
        verified: false,
        views: '',
        viewsParam: ''
    }

    let [video, setVideo] = useState(initialVideoTemplate);

    useEffect(() => {
        if (editableVideo){
            setVideo(editableVideo);
        }

    }, [editableVideo])

    function handleChange(e) {
        let newVideo = { ...video, [e.target.id]: e.target.id === 'verified' ? e.target.checked : e.target.value };
        setVideo(newVideo);
    }

    function handleSubmit(e) {
        e.preventDefault();
        if(editableVideo)
            editVideo(video)
        else
            addVideo(video);
        setVideo(initialVideoTemplate);
        
    }

    function reset(e){
        e.preventDefault();
        setVideo(initialVideoTemplate);
        handleReset();
    }


    return (
        <div>
            <form>
                <div className='form-group'>
                    <h3>{editableVideo ? 'Update Video' : 'Add New Video'}</h3>
                    <hr />
                </div>
                <div className='form-group'>
                    <label htmlFor='title'>Video Name</label>
                    <input className='form-control' type='text' id='title' value={video.title} onChange={handleChange} />
                </div>
                <div className='form-group'>
                    <div className='row'>
                        <div className='col'>
                            <label htmlFor='channelName'>Channel Name</label>
                            <input className='form-control' type='text' value={video.channelName} id='channelName' onChange={handleChange} />
                        </div>
                        <div className='col checkbox'>
                            <div className='form-check '>
                                <label className='form-check-label' htmlFor='verified'>Verified</label>
                                <input className='form-check-input' checked={video.verified} type='checkbox' id='verified' onChange={handleChange} />
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <div className='form-group'>
                    <div className='row'>
                        <div className='col'>
                            <label className='form-check-label' htmlFor='views'>Views&nbsp;</label>
                            <input className='form-check-number' value={video.views} type='number' min={0} max={999} id='views' onChange={handleChange} />
                        </div>
                        <div className='col viewsParam'>
                            <label className='form-check-label' htmlFor='viewsParam'>Number&nbsp;</label>
                            <select className='form-check-select' id='viewsParam' value={video.viewsParam} onChange={handleChange}>
                                <option value=''></option>
                                <option value='K'>K</option>
                                <option value='M'>M</option>
                                <option value='B'>B</option>
                            </select>
                        </div>
                    </div>
                </div>
                <br />
                <div className='form-group save'>
                    <button type='submit' className='btn btn-secondary' onClick={reset}>Reset</button>
                    <button type='submit' className='btn btn-success' onClick={handleSubmit}>{editableVideo ? 'Save changes' : 'Add'}</button>
                </div>
            </form>
        </div>
    )
}

export default ModifyCard
