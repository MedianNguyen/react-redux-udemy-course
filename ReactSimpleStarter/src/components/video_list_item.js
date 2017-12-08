import React from 'react';
// ({video}) to get and set video = props.video
const VideoListItem = ({ video, onSelectedVideo }) => {
    // ({ video, onVideoSelect }) euqal to declare 2 const below
    // const video = props.video;
    // const onVideoSelect = props.onVideoSelect;
const imageUrl = video.snippet.thumbnails.default.url;
//const onVideoSelect = props.onVideoSelect

return (
        <li className="list-group-item"
            onClick={() => onSelectedVideo(video)}
            >
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object"
                        src={imageUrl} />
                </div>
                <div className="media-body">
                    <div className="media-heading">
                        {video.snippet.title}
                    </div>
                </div>
            </div>
        </li>
    );
};

export default VideoListItem;