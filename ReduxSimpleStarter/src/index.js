import _ from 'lodash';
import React, { Component } from "react";
import ReactDOM from "react-dom";
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";

const API_KEY = 'AIzaSyBaftwERiZfLfgkiH5SIBp8jHSDPoqXcXs';


// Create a new component. This component should produce some HTML

/**
 * const : ES6 syntax, declare variable never change (constant)
    
 */
class App extends Component {
    //27. Detail Comp
    // Before write a component, ask your self whether component has to maintain any kind of state
    constructor(props){
        super(props);

        this.state = {  videos: [],
                        selectedVideo: null};

        this.videoSearch('surfboard');
    }

    //30. search callback
    videoSearch(term){
        YTSearch({ key: API_KEY, term: term }, (videos) => {
            this.setState({videos: videos,
                            selectedVideo: videos[0]
            }); // ES6: this.setState({videos: videos})

        });
    }
    //React wrapup
    //class base component vs functional component
    // 
    render() {
        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);
        return (
            <div>
                <SearchBar onSearchTermChange={term => this.videoSearch(term)} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos} />
            </div>);
    }
}


//Take this component's generated  
//HTML and put it on the page (in the DOM )
ReactDOM.render(<App />, document.querySelector('.container'));